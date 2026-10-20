# WenTsong Shiue, PhD — AI-Powered Personal Portfolio Website

[![GitHub Pages Deployment](https://img.shields.io/badge/Deploy-GitHub_Pages-22c55e?logo=github)](https://shiue2000.github.io)
[![USPTO Patent 11,531,734](https://img.shields.io/badge/Patent-US_11%2C531%2C734-amber-500)](https://patents.google.com/patent/US11531734B2/en)
[![Gemini 3.8 Flash](https://img.shields.io/badge/AI_Engine-Gemini_3.8_Flash-06b6d4)](https://ai.google.dev)

A modern, production-grade personal profile website for **WenTsong Shiue, PhD** (AI & Machine Learning Researcher, Senior Data Scientist, former Vice President at Bank of America).

- **Live URL:** [https://shiue2000.github.io](https://shiue2000.github.io)
- **GitHub Repository:** [https://github.com/shiue2000/shiue2000.github.io](https://github.com/shiue2000/shiue2000.github.io)
- **LinkedIn:** [https://www.linkedin.com/in/wentsong-shiue-69425852](https://www.linkedin.com/in/wentsong-shiue-69425852)

---

## 🌟 Key Features

1. **20+ Years Enterprise Career Timeline & Track Record**
   - Detailed history spanning 20+ years of enterprise data modeling and machine learning leadership, including tenure as Vice President and Senior Data Scientist at **Bank of America** (2017–2026) governing machine learning models across 8 transaction channels: CAML, Debit, P2P (Zelle), Wire, ACH, Bill Pay, Credit, and Device.
   - Director of Data Science at Uniqlinc, Chief Data Scientist at Alvaview, and Senior Data Modeling Engineer at FreeScale Semiconductor.

2. **Intellectual Property & Academic Rigor**
   - **U.S. Patent 11,531,734**: *"Determining Optimal Machine Learning Models"* (Granted Dec 20, 2022).
   - Ph.D. in Electrical Engineering & Computer Science from Arizona State University (dissertation on cache memory power modeling incorporated into Penn State University's **SimplePower** tool).
   - Ranked 3rd out of 120,000 students in the Taiwan National College Entrance Examination.

3. **Interactive Model Governance & SHAP Lab**
   - Live interactive simulation allowing users and recruiters to adjust classification thresholds ($0.05 \le \tau \le 0.85$) and observe real-time tradeoffs between Precision, Recall, False Positive Rate (FPR), and F1 Score.
   - Interactive local **SHAP Feature Contribution Waterfall** decomposing individual feature attributions on sample Wire, Debit, and P2P transactions.

4. **"Ask Dr. Shiue" Intelligent Conversational AI**
   - Server-side integration with **Google Gemini 3.8 Flash** (`@google/genai`) with fallback to a verified profile knowledge base when running statically.
   - Zero hallucination guarantee: strictly grounded in Dr. Shiue's authentic resume and publications.
   - Bilingual support: English and Traditional Chinese (繁體中文).

5. **Design System & UX/UI**
   - Dark navy palette with electric blue and cyan accents.
   - Interactive HTML5 canvas neural background.
   - Responsive on mobile, tablet, and desktop with zero-pill typography discipline and dark/light mode toggles.

---

## 🛠️ Tech Stack

- **Frontend:** React 19, TypeScript, Vite, Tailwind CSS 4, Lucide Icons
- **Backend / AI Proxy:** Express, `@google/genai` (Gemini 3.8 Flash), Node.js / tsx
- **Deployment:** GitHub Pages (Static frontend) + Cloud Run / Firebase Functions (Secure backend)

---

## 🚀 Quickstart & Local Setup

### 1. Clone the repository
\`\`\`bash
git clone https://github.com/shiue2000/shiue2000.github.io.git
cd shiue2000.github.io
\`\`\`

### 2. Install dependencies
\`\`\`bash
npm install
\`\`\`

### 3. Configure Environment Variables (Optional for Gemini Assistant)
Copy `.env.example` to `.env`:
\`\`\`bash
cp .env.example .env
\`\`\`
Set your `GEMINI_API_KEY`:
\`\`\`env
GEMINI_API_KEY="your-google-gemini-api-key"
PORT=3000
\`\`\`
*(Note: If `GEMINI_API_KEY` is not provided, the assistant automatically uses the verified profile knowledge base fallback.)*

### 4. Run Development Server
\`\`\`bash
npm run dev
\`\`\`
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Build for Production
\`\`\`bash
npm run build
\`\`\`
Compiled static output will be generated in `dist/`.

---

## 🚢 GitHub Pages Deployment

This repository includes a turnkey GitHub Actions workflow template in `github-workflow-template.yml`.

### Deployment Steps:

1. Push this repository to your GitHub account:
   \`\`\`bash
   git add .
   git commit -m "Deploy modern AI profile website"
   git push origin main
   \`\`\`
2. In your repository on GitHub (`https://github.com/shiue2000/shiue2000.github.io`):
   - Click **Add file** > **Create new file**.
   - Filename: `.github/workflows/deploy.yml`
   - Paste the contents from `github-workflow-template.yml` and commit.
3. In repository **Settings** > **Pages**, under **Source**, select **GitHub Actions**.
4. GitHub will automatically build and publish the website to **[https://shiue2000.github.io](https://shiue2000.github.io)**!

---

## 🔒 Gemini AI Backend Architecture

For full server-side AI assistance on GitHub Pages:
- GitHub Pages hosts the static HTML/CSS/JS frontend bundle.
- Deploy `server.ts` to Google Cloud Run, Cloud Functions, or Vercel.
- The browser communicates with the `/api/chat` route, ensuring **no Gemini API keys are ever bundled or exposed in client-side code**.

---

## 📄 License & Attribution

Copyright © 2026 WenTsong Shiue, PhD. All rights reserved.
