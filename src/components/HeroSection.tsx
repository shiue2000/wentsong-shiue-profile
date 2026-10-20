import React, { useState } from 'react';
import { ArrowRight, Bot, Award, FileCode2, ExternalLink, Sparkles, Copy, Check, Terminal, Cpu } from 'lucide-react';
import { PROFILE_DATA } from '../data/profileData';
import { Language } from '../types';
import { TopologyVisualizer } from './TopologyVisualizer';

interface HeroSectionProps {
  language: Language;
  onOpenAiChat: () => void;
  onOpenDeploymentGuide: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  language,
  onOpenAiChat,
  onOpenDeploymentGuide,
}) => {
  const isEn = language === 'en';
  const [copiedPitch, setCopiedPitch] = useState(false);
  const [imgFailed, setImgFailed] = useState(false);

  const handleCopyPitch = () => {
    const pitchText = `WenTsong Shiue, PhD | Senior AI & ML Researcher | Former VP @ Bank of America
• 20+ years of enterprise data modeling, machine learning & semiconductor depth (Bank of America VP, Uniqlinc, Alvaview, FreeScale Semiconductor).
• Co-inventor of U.S. Patent 11,531,734 ("Determining Optimal Machine Learning Models") and Freescale DPTV semiconductor patent record.
• Deep expertise in financial fraud analytics (8 banking channels), Explainable AI (SHAP/LIME), Model Risk Governance (MRM), and IC EDA Low-Power AI Chip Automation.
• Ph.D. in EE & CS from Arizona State University (cache memory data power modeling incorporated into PSU SimplePower tool).
Portfolio: https://githubio-production-30a7.up.railway.app/en/ | LinkedIn: https://www.linkedin.com/in/wentsong-shiue-69425852`;

    navigator.clipboard.writeText(pitchText);
    setCopiedPitch(true);
    setTimeout(() => setCopiedPitch(false), 2200);
  };

  const techBadges = [
    { label: 'XGBoost & LightGBM', color: 'border-cyan-500/40 text-cyan-300 bg-cyan-950/30' },
    { label: 'SHAP & LIME (XAI)', color: 'border-emerald-500/40 text-emerald-300 bg-emerald-950/30' },
    { label: 'US Patent 11,531,734', color: 'border-amber-500/40 text-amber-300 bg-amber-950/30' },
    { label: 'IC EDA & AI Chip', color: 'border-violet-500/40 text-violet-300 bg-violet-950/30' },
    { label: 'Agentic EDA & RTL', color: 'border-fuchsia-500/40 text-fuchsia-300 bg-fuchsia-950/30' },
    { label: 'AI Governance & MRM', color: 'border-purple-500/40 text-purple-300 bg-purple-950/30' },
    { label: 'Low-Power Memory Modeling', color: 'border-blue-500/40 text-blue-300 bg-blue-950/30' },
  ];

  return (
    <section id="hero" className="relative overflow-hidden pt-12 pb-20 sm:pt-20 sm:pb-28">
      {/* High-tech radial ambient gradients */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[550px] w-[850px] rounded-full bg-gradient-to-tr from-cyan-500/15 via-blue-600/10 to-purple-600/10 blur-[140px]" />
      <div className="pointer-events-none absolute top-1/3 left-1/4 h-[350px] w-[450px] rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Main Hero Copy Column */}
          <div className="lg:col-span-7">
            
            {/* Live Interactive Status Pill */}
            <div className="mb-4 inline-flex items-center gap-2.5 rounded-full border border-emerald-500/30 bg-emerald-950/30 px-3.5 py-1.5 text-xs font-mono text-emerald-300 backdrop-blur-md shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>
                {isEn
                  ? '20+ Yrs Enterprise ML & Semiconductor Depth · Open for AI Leadership'
                  : '20+ 年企業級機器學習與半導體資歷 · 歡迎高階 AI 職位洽詢'}
              </span>
            </div>

            {/* Sub-kicker */}
            <div className="mb-3 flex flex-wrap items-center gap-2 text-xs font-medium tracking-wide text-cyan-400 dark:text-cyan-400 light:text-cyan-700 font-mono">
              <span>{isEn ? 'AI & Machine Learning Researcher' : '人工智慧與機器學習研究員'}</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>{isEn ? 'Former VP @ Bank of America' : '前美國銀行副總裁'}</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>{isEn ? 'IC EDA Low-Power Design' : 'IC EDA 低功耗晶片設計'}</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>{isEn ? 'U.S. Patent 11,531,734' : '獲准美國專利'}</span>
            </div>

            {/* Hero Main Headline */}
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl dark:text-white light:text-slate-900 leading-[1.1]">
              <span className="block">{PROFILE_DATA.name}</span>
              <span className="mt-2 block bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">
                {isEn ? 'Machine Learning & Fraud Analytics' : '機器學習與金融防偽分析'}
              </span>
            </h1>

            {/* Sub-headline Focus Areas */}
            <p className="mt-4 text-base font-medium text-slate-300 dark:text-slate-300 light:text-slate-700 sm:text-lg">
              {isEn ? PROFILE_DATA.subtitle : PROFILE_DATA.subtitleZh}
            </p>

            {/* Narrative Summary */}
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-400 dark:text-slate-400 light:text-slate-600 sm:text-base">
              {isEn ? PROFILE_DATA.bio : PROFILE_DATA.bioZh}
            </p>

            {/* Interactive Tech Badge Pills */}
            <div className="mt-5 flex flex-wrap items-center gap-2">
              {techBadges.map((badge, idx) => (
                <span
                  key={idx}
                  className={`rounded-lg border px-2.5 py-1 text-xs font-mono transition-transform hover:scale-105 ${badge.color}`}
                >
                  {badge.label}
                </span>
              ))}
            </div>

            {/* Primary Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href="#experience"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 transition-all hover:scale-105 hover:from-cyan-400 hover:to-blue-500 active:scale-95"
              >
                <span>{isEn ? 'Explore 20-Year Journey' : '瀏覽 20 年職涯與成果'}</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <button
                onClick={onOpenAiChat}
                className="inline-flex items-center gap-2 rounded-xl border border-cyan-500/40 bg-slate-900/70 px-5 py-2.5 text-sm font-semibold text-cyan-300 backdrop-blur-md transition-all hover:border-cyan-400 hover:bg-slate-800/90 hover:scale-105 active:scale-95 shadow-md shadow-cyan-950/20"
              >
                <Bot className="h-4 w-4 text-cyan-400" />
                <span>{isEn ? 'Ask My AI' : '向 AI 助理提問'}</span>
              </button>

              <button
                onClick={handleCopyPitch}
                className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/60 px-4 py-2.5 text-xs font-medium text-slate-300 transition-all hover:border-slate-500 hover:text-white active:scale-95"
                title="Copy structured candidate snapshot for Slack/Notion/Email"
              >
                {copiedPitch ? (
                  <>
                    <Check className="h-4 w-4 text-emerald-400" />
                    <span className="text-emerald-300">{isEn ? 'Snapshot Copied!' : '摘要已複製！'}</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4 text-slate-400" />
                    <span>{isEn ? '⚡ Recruiter TL;DR' : '⚡ 快速履歷摘要'}</span>
                  </>
                )}
              </button>

              <a
                href={PROFILE_DATA.linkedinFeaturedMediaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-xl border border-blue-500/40 bg-blue-950/40 px-3.5 py-2.5 text-xs font-semibold text-blue-300 hover:bg-blue-900/50 hover:text-white transition-all hover:scale-105"
                title="View Verified Media Publication on LinkedIn"
              >
                <ExternalLink className="h-3.5 w-3.5 text-blue-400" />
                <span>{isEn ? 'LinkedIn Media' : 'LinkedIn 精選成果'}</span>
              </a>

              <button
                onClick={onOpenDeploymentGuide}
                className="inline-flex items-center gap-1.5 rounded-xl border border-slate-800 px-3 py-2.5 text-xs font-mono text-slate-400 transition-colors hover:border-slate-700 hover:text-slate-200"
                title="View GitHub Pages Deployment Architecture"
              >
                <FileCode2 className="h-3.5 w-3.5 text-cyan-400" />
                <span>GitHub Pages</span>
              </button>
            </div>
          </div>

          {/* Right Column: Visual Showcase & Verified Patent Highlight */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <TopologyVisualizer language={language} />
            </div>
          </div>
        </div>

        {/* Claim-to-Proof Strip: Updated to 20+ Yrs */}
        <div className="mt-16 grid grid-cols-2 gap-4 border-y border-slate-800/80 py-6 sm:grid-cols-4 sm:gap-6 dark:border-slate-800/80 light:border-slate-200">
          {PROFILE_DATA.stats.map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <div className="text-xs font-medium text-slate-400 dark:text-slate-400 light:text-slate-500">
                {isEn ? stat.label : stat.labelZh}
              </div>
              <div className="font-mono text-2xl font-extrabold text-white sm:text-3xl dark:text-white light:text-slate-900 tabular-nums">
                {stat.value}
              </div>
              <div className="text-xs text-cyan-400/80 dark:text-cyan-400/80 light:text-cyan-700">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
