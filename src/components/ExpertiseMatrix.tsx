import React, { useState } from 'react';
import { Layers, Terminal, Sparkles, Brain, Check, Shield } from 'lucide-react';
import { PROFILE_DATA } from '../data/profileData';
import { Language } from '../types';

interface ExpertiseMatrixProps {
  language: Language;
}

export const ExpertiseMatrix: React.FC<ExpertiseMatrixProps> = ({ language }) => {
  const isEn = language === 'en';
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredCategories =
    selectedCategory === 'all'
      ? PROFILE_DATA.skillCategories
      : PROFILE_DATA.skillCategories.filter((c) => c.id === selectedCategory);

  return (
    <section id="expertise" className="relative py-20 sm:py-24 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-semibold tracking-wider uppercase text-cyan-400 dark:text-cyan-400 light:text-cyan-700">
            {isEn ? 'Technical Architecture' : '核心技術架構'}
          </div>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl dark:text-white light:text-slate-900">
            {isEn ? 'AI & Technical Expertise' : '人工智慧與技術專長'}
          </h2>
          <p className="mt-3 text-base text-slate-300 dark:text-slate-300 light:text-slate-700">
            {isEn
              ? 'Comprehensive mastery spanning machine learning algorithms, model interpretability, distributed big data engineering, and active emerging AI research.'
              : '全面涵蓋機器學習演算法、模型可解釋性架構、巨量資料工程以及現代生成式 AI 前沿研究之技術矩陣。'}
          </p>
        </div>

        {/* Interactive Filter Tabs (functional segmented controls per Design Constitution) */}
        <div className="mt-8 flex flex-wrap items-center gap-2">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`rounded-lg px-3.5 py-1.5 text-xs font-medium transition-colors ${
              selectedCategory === 'all'
                ? 'bg-cyan-500 text-white shadow-sm'
                : 'bg-slate-900/60 text-slate-300 border border-slate-800 hover:border-slate-700 dark:bg-slate-900/60 dark:text-slate-300 light:bg-slate-100 light:text-slate-700'
            }`}
          >
            {isEn ? 'All Categories' : '全部領域'}
          </button>
          {PROFILE_DATA.skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`rounded-lg px-3.5 py-1.5 text-xs font-medium transition-colors ${
                selectedCategory === cat.id
                  ? 'bg-cyan-500 text-white shadow-sm'
                  : 'bg-slate-900/60 text-slate-300 border border-slate-800 hover:border-slate-700 dark:bg-slate-900/60 dark:text-slate-300 light:bg-slate-100 light:text-slate-700'
              }`}
            >
              {isEn ? cat.name : cat.nameZh}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {filteredCategories.map((cat) => {
            const isEmerging = cat.id === 'emerging-ai';

            return (
              <div
                key={cat.id}
                className={`glass-panel rounded-2xl p-6 transition-all duration-300 ${
                  isEmerging
                    ? 'border-indigo-500/30 bg-indigo-950/10'
                    : 'hover:border-cyan-500/30'
                }`}
              >
                {/* Category Header */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-bold text-white dark:text-white light:text-slate-900">
                        {isEn ? cat.name : cat.nameZh}
                      </h3>
                    </div>
                    <p className="mt-1.5 text-xs leading-relaxed text-slate-400 dark:text-slate-400 light:text-slate-600">
                      {isEn ? cat.description : cat.descriptionZh}
                    </p>
                  </div>
                  {isEmerging && (
                    <span className="shrink-0 text-[11px] font-mono font-medium text-indigo-400 bg-indigo-950/60 border border-indigo-800/60 px-2 py-0.5 rounded">
                      {isEn ? 'Emerging Research' : '前沿研究探索'}
                    </span>
                  )}
                </div>

                {/* Skills list inside category */}
                <div className="mt-6 space-y-3">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5 rounded-lg border border-slate-800/70 bg-slate-900/40 px-3.5 py-2.5 text-xs transition-colors hover:border-slate-700 dark:border-slate-800/70 dark:bg-slate-900/40 light:border-slate-200 light:bg-slate-50"
                    >
                      <span className="font-semibold text-white dark:text-white light:text-slate-900">
                        {skill.name}
                      </span>
                      {skill.focus && (
                        <span className="text-[11px] text-slate-400 dark:text-slate-400 light:text-slate-600 font-mono">
                          {skill.focus}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Note on Enterprise vs Emerging distinction */}
        <div className="mt-8 rounded-xl border border-slate-800 bg-slate-900/40 p-4 text-xs text-slate-400 flex items-start gap-2.5">
          <Shield className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
          <p>
            {isEn
              ? 'Methodological Clarity: Core production experience (Bank of America, Uniqlinc, Alvaview, FreeScale) is strictly verified through enterprise delivery and granted patents. Generative AI (LLMs, AI Agents, Agent Security) reflects active research and forward applied frameworks.'
              : '方法論嚴謹聲明：核心企業級經歷（美國銀行、Uniqlinc、Alvaview、飛思卡爾）均經正式商業交付與美國專利認證；現代生成式 AI（LLMs、AI 智慧體、智慧體安全）代表持續進行的前沿應用研究與架構探索。'}
          </p>
        </div>

      </div>
    </section>
  );
};
