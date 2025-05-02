import { CustomFiles } from "@/lib/types";
import Sandbox from "@e2b/code-interpreter";

const sandboxTimeout = 10 * 60 * 1000; // 10 minute in ms

export const maxDuration = 500;

export async function POST(req: Request) {
  const formData = await req.formData();
  const code = formData.get("code") as string;

  const files: CustomFiles[] = [];
  for (const [key, value] of formData.entries()) {
    if (key === "code") continue;

    if (value instanceof File) {
      const content = await value.text();
      files.push({
        name: value.name,
        content: content,
        contentType: value.type,
      });
    }
  }

  const sandbox = await Sandbox.create({
    apiKey: process.env.E2B_API_KEY,
    timeoutMs: sandboxTimeout,
    envs: {
      BIGQUERY_TYPE: process.env.BIGQUERY_TYPE ?? '',
      BIGQUERY_PROJECT_ID: process.env.BIGQUERY_PROJECT_ID ?? '',
      BIGQUERY_DATASET: process.env.BIGQUERY_DATASET ?? '',
      BIGQUERY_PRIVATE_KEY_ID: process.env.BIGQUERY_PRIVATE_KEY_ID ?? '',
      BIGQUERY_PRIVATE_KEY: process.env.BIGQUERY_PRIVATE_KEY ?? '',
      BIGQUERY_CLIENT_EMAIL: process.env.BIGQUERY_CLIENT_EMAIL ?? '',
      BIGQUERY_CLIENT_ID: process.env.BIGQUERY_CLIENT_ID ?? '',
      BIGQUERY_AUTH_URI: process.env.BIGQUERY_AUTH_URI ?? '',
      BIGQUERY_TOKEN_URI: process.env.BIGQUERY_TOKEN_URI ?? '',
      BIGQUERY_AUTH_PROVIDER_X509_CERT_URL: process.env.BIGQUERY_AUTH_PROVIDER_X509_CERT_URL ?? '',
      BIGQUERY_AUTH_PROVIDER_CERT_URL: process.env.BIGQUERY_AUTH_PROVIDER_CERT_URL ?? '',
      BIGQUERY_CERT_URL: process.env.BIGQUERY_CERT_URL ?? '',
      BIGQUERY_CLIENT_X509_CERT_URL: process.env.BIGQUERY_CLIENT_X509_CERT_URL ?? '',
      BIGQUERY_UNIVERSE_DOMAIN: process.env.BIGQUERY_UNIVERSE_DOMAIN ?? '',
    }
  });

  await sandbox.runCode('pip install --upgrade google-cloud-bigquery db-types==1.1.1', {
    language: 'python',
  })

  // await sandbox.commands.run('pip install --upgrade google-cloud-bigquery db-types==1.1.1', {
  //   timeoutMs: sandboxTimeout,
  //   onStdout: (data) => {
  //     console.log(data)
  //   },
  // })

  const { text, results, logs, error } = await sandbox.runCode(code);

  return new Response(
    JSON.stringify({
      text,
      results,
      logs,
      error,
    })
  );
}
