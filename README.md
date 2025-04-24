# AI Analyst for Google Analytics (Powered by E2B)

This is an AI-powered data analysis tool that fetches and analyzes **Google Analytics data via BigQuery** using [E2B](https://e2b.dev).  
This project is hosted on **[Squadbase](https://squadbase.com)** and serves as a **sample application** to demonstrate how AI agents can be deployed and used in a production-ready environment.

![Preview](preview.png)

→ Try it on Squadbase: _[Your deployed URL here]_

## 🧠 Key Features
- 🔹 Analyze real-time or historical Google Analytics data using LLMs
- 🔹 Integrated with **BigQuery** for seamless GA data access
- 🔹 Powered by **Meta's Llama 3.1** via OpenAI-compatible API
- 🔹 Supports CSV uploads for additional datasets
- 🔹 Generate interactive charts with ECharts
- 🔹 Designed to run on Squadbase as a plug-and-play agent tool

**Built using:**
- 🔹 ✶ [E2B Sandbox](https://github.com/e2b-dev/code-interpreter)
- 🔹 [Squadbase](https://squadbase.com)
- 🔹 Vercel AI SDK
- 🔹 Next.js
- 🔹 echarts library

**Supported chart types:**
- See full list: [Interactive chart types](https://e2b.dev/docs/code-interpreting/create-charts-visualizations/interactive-charts#supported-intertactive-charts)

---

## 🚀 Getting Started

Try the hosted version on Squadbase, or run it locally:

### 1. Clone the repository

```bash
git clone https://github.com/e2b-dev/ai-analyst.git
```

### 2. Install dependencies

```bash
cd fragments && npm i
```

### 3. Set up your API keys

Copy `.example.env` to `.env.local` and fill in the required keys:

#### E2B

```env
E2B_API_KEY=your_e2b_api_key
```

→ Get your key: [https://e2b.dev/dashboard?tab=keys](https://e2b.dev/dashboard?tab=keys)

#### OpenAI (required for LLM)

```env
OPENAI_API_KEY=your_openai_api_key
```

#### BigQuery Credentials

```env
BIGQUERY_TYPE=service_account
BIGQUERY_PROJECT_ID=your_project_id
BIGQUERY_DATASET=your_dataset_name
BIGQUERY_PRIVATE_KEY_ID=your_private_key_id
BIGQUERY_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\\n...\\n-----END PRIVATE KEY-----\\n"
BIGQUERY_CLIENT_EMAIL=your_client_email
BIGQUERY_CLIENT_ID=your_client_id
BIGQUERY_AUTH_URI=https://accounts.google.com/o/oauth2/auth
BIGQUERY_TOKEN_URI=https://oauth2.googleapis.com/token
BIGQUERY_AUTH_PROVIDER_X509_CERT_URL=https://www.googleapis.com/oauth2/v1/certs
BIGQUERY_AUTH_PROVIDER_CERT_URL=https://www.googleapis.com/oauth2/v1/certs
BIGQUERY_CERT_URL=https://www.googleapis.com/robot/v1/metadata/x509/your_service_account_email
BIGQUERY_CLIENT_X509_CERT_URL=your_cert_url
BIGQUERY_UNIVERSE_DOMAIN=googleapis.com
```

> 🔐 **Note:** Be careful with multi-line private keys. Enclose them in quotes and escape newlines with `\\n`.

---

## 📊 Example Use Case

Analyze traffic trends, identify drop-offs in funnels, or segment user cohorts directly from your GA data — all through natural language prompts.

**Make sure to give us a ⭐ on GitHub if you find this helpful!**
