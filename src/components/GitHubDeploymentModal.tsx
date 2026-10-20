import React, { useState } from 'react';
import { X, Copy, Check, GitBranch, Terminal, ExternalLink, ShieldCheck, Cloud } from 'lucide-react';
import { Language } from '../types';

interface GitHubDeploymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

export const GitHubDeploymentModal: React.FC<GitHubDeploymentModalProps> = ({
  isOpen,
  onClose,
  language,
}) => {
  const isEn = language === 'en';
  const [copiedSection, setCopiedSection] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopy = (key: string, code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedSection(key);
    setTimeout(() => setCopiedSection(null), 2000);
  };

  const gitCommands = `# 1. Clone or initialize your existing repository
git clone https://github.com/shiue2000/shiue2000.github.io.git
cd shiue2000.github.io

# 2. Install all dependencies
npm install

# 3. Test locally with dev server
npm run dev

# 4. Build production static bundle for GitHub Pages
npm run build

# 5. Commit and push to main branch
git add .
git commit -m "Deploy modern AI-powered portfolio with Gemini backend architecture"
git push origin main`;

  const githubActionYml = `name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build-and-deploy:
    environment:
      name: github-pages
      url: \${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build static site
        run: npm run build

      - name: Setup Pages
        uses: actions/configure-pages@v5

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm">
      <div className="flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-cyan-500/30 bg-[#080d1a] shadow-2xl text-slate-100">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
              <GitBranch className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">
                {isEn ? 'GitHub Pages Deployment Guide' : 'GitHub Pages 部署指引'}
              </h3>
              <div className="text-xs font-mono text-cyan-400">
                Target: https://github.com/shiue2000/shiue2000.github.io → https://shiue2000.github.io
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-800 hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 text-sm">
          
          {/* Overview note */}
          <div className="rounded-xl border border-cyan-500/20 bg-cyan-950/20 p-4 text-xs leading-relaxed text-cyan-200">
            <strong>{isEn ? 'Dual-Layer Architecture' : '雙層架構設計'}：</strong>{' '}
            {isEn
              ? 'GitHub Pages hosts the static high-performance React frontend bundle (dist/), while the Gemini AI Assistant operates securely on the backend (e.g. Cloud Run, Vercel Serverless, or Firebase Functions) with zero exposure of API keys.'
              : 'GitHub Pages 負責託管經過編譯的高效能靜態 React 前端（dist/），而 Gemini AI 助理則安全運行於後端伺服器（如 Cloud Run、Vercel 或 Firebase Functions），絕不將 API 金鑰暴露於前端客戶端代碼中。'}
          </div>

          {/* Step 1: Push & Deploy */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-bold text-white flex items-center gap-2">
                <Terminal className="h-4 w-4 text-cyan-400" />
                <span>{isEn ? 'Step 1: Local Setup & Push to GitHub' : '步驟一：本地啟動與推送至 GitHub'}</span>
              </h4>
              <button
                onClick={() => handleCopy('git', gitCommands)}
                className="flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 font-mono"
              >
                {copiedSection === 'git' ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                <span>{copiedSection === 'git' ? (isEn ? 'Copied' : '已複製') : (isEn ? 'Copy' : '複製代碼')}</span>
              </button>
            </div>
            <pre className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950 p-4 font-mono text-xs text-slate-300 leading-relaxed">
              {gitCommands}
            </pre>
          </div>

          {/* Step 2: GitHub Actions Workflow */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-bold text-white flex items-center gap-2">
                <Cloud className="h-4 w-4 text-cyan-400" />
                <span>{isEn ? 'Step 2: Automated Workflow (.github/workflows/deploy.yml)' : '步驟二：自動化 GitHub Actions 流程 (.github/workflows/deploy.yml)'}</span>
              </h4>
              <button
                onClick={() => handleCopy('action', githubActionYml)}
                className="flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 font-mono"
              >
                {copiedSection === 'action' ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                <span>{copiedSection === 'action' ? (isEn ? 'Copied' : '已複製') : (isEn ? 'Copy' : '複製代碼')}</span>
              </button>
            </div>
            <pre className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950 p-4 font-mono text-xs text-slate-300 leading-relaxed">
              {githubActionYml}
            </pre>
          </div>

          {/* Step 3: Enabling Pages in GitHub Settings */}
          <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-4 space-y-2 text-xs text-slate-300">
            <h4 className="font-bold text-white text-sm">
              {isEn ? 'Step 3: Activate GitHub Pages in Repository Settings' : '步驟三：於 GitHub 儲存庫設定中啟用 Pages'}
            </h4>
            <ol className="list-decimal list-inside space-y-1.5 text-slate-400 leading-relaxed">
              <li>{isEn ? 'Open your repository on GitHub: https://github.com/shiue2000/shiue2000.github.io' : '開啟您的 GitHub 儲存庫：https://github.com/shiue2000/shiue2000.github.io'}</li>
              <li>{isEn ? 'Navigate to Settings > Pages.' : '前往 Settings（設定）> Pages。'}</li>
              <li>{isEn ? 'Under "Build and deployment" > Source, select "GitHub Actions".' : '在「Build and deployment」來源中，選取「GitHub Actions」。'}</li>
              <li>{isEn ? 'On github.com, click "Add file" > "Create new file", name it .github/workflows/deploy.yml, paste the YAML above (or from github-workflow-template.yml) and commit. GitHub will build and publish to https://shiue2000.github.io!' : '在 GitHub 網頁上點擊「Add file」>「Create new file」，路徑輸入 .github/workflows/deploy.yml，貼上上述 YAML 內容（或取自 github-workflow-template.yml）並提交。GitHub 便會自動編譯並發布至 https://shiue2000.github.io！'}</li>
            </ol>
          </div>

        </div>

        {/* Footer */}
        <div className="border-t border-slate-800 px-6 py-4 flex items-center justify-between bg-slate-950/60">
          <a
            href="https://github.com/shiue2000/shiue2000.github.io"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:underline"
          >
            <span>shiue2000/shiue2000.github.io</span>
            <ExternalLink className="h-3 w-3" />
          </a>
          <button
            onClick={onClose}
            className="rounded-lg bg-slate-800 px-4 py-2 text-xs font-semibold text-white hover:bg-slate-700"
          >
            {isEn ? 'Close Guide' : '關閉說明'}
          </button>
        </div>

      </div>
    </div>
  );
};
