import React from 'react';
import { Award, BookOpen, Github, Linkedin, GitBranch, ArrowUp } from 'lucide-react';
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
              href={PROFILE_DATA.linkedinUrl}
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
              <span>US Patent 11,531,734</span>
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
