import React from 'react';
import { Award, BookOpen, Github, Linkedin, GitBranch, ArrowUp, Globe, AppWindow, ExternalLink } from 'lucide-react';
import { PROFILE_DATA } from '../data/profileData';
import { Language } from '../types';

interface FooterProps {
  language: Language;
  onOpenDeploymentGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  language,
  onOpenDeploymentGuide,
}) => {
  const isEn = language === 'en';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-[#060913] py-12 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Core 4 Embedded Links Grid */}
        <div className="mb-10 rounded-2xl border border-cyan-500/30 bg-slate-900/60 p-5 sm:p-6 backdrop-blur-md">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-800/80">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-300">
                {isEn ? 'Core Embedded Portals & Official Links' : '核心官方連結與展示門戶'}
              </span>
            </div>
            <span className="text-[11px] font-mono text-slate-400">
              {isEn ? 'Embedded verified destinations' : '已嵌入之官方認證連結'}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {/* 1. LinkedIn */}
            <a
              href="https://www.linkedin.com/in/wentsong-shiue-69425852/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between rounded-xl border border-blue-500/25 bg-blue-950/20 p-3 hover:border-blue-400 hover:bg-blue-900/30 transition-all"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                  <Linkedin className="h-4 w-4 text-blue-400" />
                  <span>LinkedIn</span>
                </span>
                <ExternalLink className="h-3 w-3 text-slate-400 group-hover:text-cyan-300" />
              </div>
              <span className="text-[11px] font-mono text-slate-400 truncate">
                linkedin.com/in/wentsong-shiue-69425852/
              </span>
            </a>

            {/* 2. Chief Data Scientist */}
            <a
              href="https://githubio-production-30a7.up.railway.app/en/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between rounded-xl border border-emerald-500/25 bg-emerald-950/20 p-3 hover:border-emerald-400 hover:bg-emerald-900/30 transition-all"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold text-white group-hover:text-emerald-300 transition-colors flex items-center gap-1.5">
                  <Globe className="h-4 w-4 text-emerald-400" />
                  <span>Chief Data Scientist</span>
                </span>
                <ExternalLink className="h-3 w-3 text-slate-400 group-hover:text-emerald-300" />
              </div>
              <span className="text-[11px] font-mono text-slate-400 truncate">
                githubio-production-30a7.up.railway.app/en/
              </span>
            </a>

            {/* 3. This app */}
            <a
              href="https://wentsong-shiue-profile-production.up.railway.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between rounded-xl border border-cyan-500/25 bg-cyan-950/20 p-3 hover:border-cyan-400 hover:bg-cyan-900/30 transition-all"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                  <AppWindow className="h-4 w-4 text-cyan-400" />
                  <span>This app</span>
                </span>
                <ExternalLink className="h-3 w-3 text-slate-400 group-hover:text-cyan-300" />
              </div>
              <span className="text-[11px] font-mono text-slate-400 truncate">
                wentsong-shiue-profile-production.up.railway.app/
              </span>
            </a>

            {/* 4. Patent's link */}
            <a
              href="https://patents.google.com/patent/US11531734B2/en"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between rounded-xl border border-amber-500/25 bg-amber-950/20 p-3 hover:border-amber-400 hover:bg-amber-900/30 transition-all"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold text-white group-hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <Award className="h-4 w-4 text-amber-400" />
                  <span>Patent's link</span>
                </span>
                <ExternalLink className="h-3 w-3 text-slate-400 group-hover:text-amber-300" />
              </div>
              <span className="text-[11px] font-mono text-slate-400 truncate">
                patents.google.com/patent/US11531734B2/en
              </span>
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          
          {/* Brand info */}
          <div className="space-y-2">
            <div className="text-base font-bold text-white tracking-tight">
              WenTsong Shiue, PhD
            </div>
            <p className="text-xs text-slate-400 max-w-md">
              {isEn
                ? 'AI & Machine Learning Researcher · Senior Data Scientist · Financial Fraud Analytics, IC EDA Low-Power Design & Model Governance Specialist · Austin, Texas'
                : '人工智慧與機器學習研究員 · 資深資料科學家 · 金融防偽分析、IC EDA 低功耗晶片設計與模型治理專家 · 美國德州奧斯汀'}
            </p>
            <div className="text-[11px] font-mono text-cyan-400/90 pt-1 flex flex-wrap items-center gap-2">
              <span>Target:</span>
              <a href="https://githubio-production-30a7.up.railway.app/en/" target="_blank" rel="noopener noreferrer" className="hover:underline text-cyan-300 font-semibold">
                https://githubio-production-30a7.up.railway.app/en/
              </a>
              <span className="text-slate-600">·</span>
              <a href="https://shiue2000.github.io" target="_blank" rel="noopener noreferrer" className="hover:underline text-slate-400">
                shiue2000.github.io
              </a>
            </div>
          </div>

          {/* External Profile & IP Links */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-medium">
            <a
              href="https://www.linkedin.com/in/wentsong-shiue-69425852/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-slate-300 hover:text-cyan-400 transition-colors"
            >
              <Linkedin className="h-4 w-4" />
              <span>LinkedIn</span>
            </a>

            <a
              href={PROFILE_DATA.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-slate-300 hover:text-cyan-400 transition-colors"
            >
              <Github className="h-4 w-4" />
              <span>GitHub</span>
            </a>

            <a
              href="https://patents.google.com/patent/US11531734B2/en"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-slate-300 hover:text-amber-400 transition-colors"
            >
              <Award className="h-4 w-4 text-amber-400" />
              <span>Patent's link (US 11,531,734)</span>
            </a>

            <a
              href={PROFILE_DATA.googleScholarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-slate-300 hover:text-cyan-400 transition-colors"
            >
              <BookOpen className="h-4 w-4" />
              <span>Google Scholar</span>
            </a>

            <button
              onClick={onOpenDeploymentGuide}
              className="flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 transition-colors font-mono"
            >
              <GitBranch className="h-4 w-4" />
              <span>{isEn ? 'GitHub Pages Guide' : '部署指引'}</span>
            </button>
          </div>

        </div>

        {/* Bottom row */}
        <div className="mt-8 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} WenTsong Shiue, PhD. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-slate-300 transition-colors"
            >
              <span>{isEn ? 'Back to top' : '返回頂端'}</span>
              <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
