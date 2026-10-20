import React, { useState } from 'react';
import { Briefcase, Calendar, MapPin, ChevronDown, ChevronUp, Layers, CheckCircle2 } from 'lucide-react';
import { PROFILE_DATA, ExperienceItem } from '../data/profileData';
import { Language } from '../types';

interface ExperienceTimelineProps {
  language: Language;
}

export const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ language }) => {
  const isEn = language === 'en';
  const [expandedId, setExpandedId] = useState<string>('boa');

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? '' : id);
  };

  return (
    <section id="experience" className="relative py-20 sm:py-24 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-semibold tracking-wider uppercase text-cyan-400 dark:text-cyan-400 light:text-cyan-700">
            {isEn ? 'Career Trajectory' : '職涯歷程'}
          </div>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl dark:text-white light:text-slate-900">
            {isEn ? 'Professional Experience' : '工作經歷與領導實績'}
          </h2>
          <p className="mt-3 text-base text-slate-300 dark:text-slate-300 light:text-slate-700">
            {isEn
              ? 'Proven track record leading enterprise machine learning development, financial fraud analytics, explainable AI, and engineering architecture across Tier-1 institutions.'
              : '於頂尖金融機構與科技企業主導企業級機器學習模型研發、金融防偽分析、可解釋 AI 與系統架構的深厚實績。'}
          </p>
        </div>

        {/* Career Timeline */}
        <div className="mt-12 space-y-6">
          {PROFILE_DATA.experiences.map((exp: ExperienceItem) => {
            const isExpanded = expandedId === exp.id;

            return (
              <div
                key={exp.id}
                className={`glass-panel rounded-2xl transition-all duration-300 ${
                  isExpanded
                    ? 'border-cyan-500/50 shadow-xl shadow-cyan-950/20'
                    : 'hover:border-slate-700'
                }`}
              >
                {/* Header row (clickable) */}
                <button
                  onClick={() => toggleExpand(exp.id)}
                  className="w-full p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded-2xl"
                  aria-expanded={isExpanded}
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      {/* Role & Company */}
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-xl font-bold text-white dark:text-white light:text-slate-900">
                          {isEn ? exp.role : exp.roleZh}
                        </h3>
                        <span className="text-cyan-400 dark:text-cyan-400 light:text-cyan-700 font-semibold">
                          @ {isEn ? exp.company : exp.companyZh}
                        </span>
                      </div>

                      {/* Unboxed metadata: period and location */}
                      <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-slate-400">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3.5 w-3.5 text-cyan-400" />
                          <span>{exp.period}</span>
                        </span>
                        <span aria-hidden="true" className="text-slate-600">·</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3.5 w-3.5 text-slate-500" />
                          <span>{isEn ? exp.location : exp.locationZh}</span>
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      {exp.highlights && (
                        <span className="hidden lg:inline-block text-xs font-mono text-cyan-400/90 bg-cyan-950/40 px-3 py-1 rounded border border-cyan-800/40">
                          {isEn ? exp.highlights : exp.highlightsZh}
                        </span>
                      )}
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-700 text-slate-400">
                        {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                      </div>
                    </div>
                  </div>

                  {/* Summary preview */}
                  <p className="mt-3 text-sm leading-relaxed text-slate-300 dark:text-slate-300 light:text-slate-700">
                    {isEn ? exp.summary : exp.summaryZh}
                  </p>
                </button>

                {/* Expanded Detailed View */}
                {isExpanded && (
                  <div className="border-t border-slate-800/80 p-6 pt-4 dark:border-slate-800/80 light:border-slate-200">
                    
                    {/* Business Channels if applicable */}
                    {exp.businessChannels && exp.businessChannels.length > 0 && (
                      <div className="mb-5">
                        <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                          {isEn ? 'Protected Banking Channels & Scope' : '保護之業務管道與範圍'}
                        </div>
                        <div className="flex flex-wrap items-center gap-2">
                          {exp.businessChannels.map((channel, i) => (
                            <span
                              key={i}
                              className="font-mono text-xs bg-slate-800/70 text-cyan-300 border border-slate-700 px-2.5 py-1 rounded"
                            >
                              {channel}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Bullet Points */}
                    <div className="space-y-3">
                      <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        {isEn ? 'Key Engineering & Modeling Contributions' : '核心研發與建模成果'}
                      </div>
                      <ul className="space-y-2.5">
                        {(isEn ? exp.bulletPoints : exp.bulletPointsZh).map((point, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed">
                            <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech stack tags */}
                    <div className="mt-6 pt-4 border-t border-slate-800/60 dark:border-slate-800/60 light:border-slate-200">
                      <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                        {isEn ? 'Technology Stack' : '所用技術與工具'}
                      </div>
                      <div className="flex flex-wrap items-center gap-1.5">
                        {exp.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="text-xs font-mono text-slate-300 bg-slate-900/60 border border-slate-800 px-2 py-0.5 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
