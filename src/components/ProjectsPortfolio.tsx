import React, { useState } from 'react';
import { Layers, ShieldCheck, Cpu, Sparkles, ExternalLink, CheckCircle, ArrowUpRight } from 'lucide-react';
import { PROFILE_DATA, ProjectItem } from '../data/profileData';
import { Language } from '../types';
import fraudAnalyticsImg from '../assets/images/fraud_analytics_viz_1792465142844.jpg';

interface ProjectsPortfolioProps {
  language: Language;
}

export const ProjectsPortfolio: React.FC<ProjectsPortfolioProps> = ({ language }) => {
  const isEn = language === 'en';
  const [filter, setFilter] = useState<string>('all');
  const [imgFailed, setImgFailed] = useState(false);

  const allProjects = PROFILE_DATA.projects as ProjectItem[];
  const filteredProjects: ProjectItem[] =
    filter === 'all'
      ? allProjects
      : allProjects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="relative py-20 sm:py-24 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-semibold tracking-wider uppercase text-cyan-400 dark:text-cyan-400 light:text-cyan-700">
            {isEn ? 'Selected Initiatives & Research' : '重點專案與前沿研發'}
          </div>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl dark:text-white light:text-slate-900">
            {isEn ? 'AI Projects & Portfolio' : '人工智慧專案與研究資產'}
          </h2>
          <p className="mt-3 text-base text-slate-300 dark:text-slate-300 light:text-slate-700">
            {isEn
              ? 'An architectural breakdown of enterprise fraud detection pipelines, explainable AI suites, patented algorithmic auto-tuning, and modern agent security.'
              : '全面解析企業級金融防偽管線、可解釋 AI 套件、專利認證演算法自動調校系統與自主智慧體防護架構。'}
          </p>
        </div>

        {/* Feature Spotlight with Visual Asset */}
        <div className="mt-10 glass-panel rounded-2xl overflow-hidden border border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-5 aspect-[4/3] w-full overflow-hidden bg-slate-900 relative flex items-center justify-center">
              {!imgFailed ? (
                <img
                  src={fraudAnalyticsImg}
                  alt="Explainable AI SHAP and Financial Fraud Classification Decision Boundary"
                  onError={() => setImgFailed(true)}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              ) : (
                /* High-tech interactive fallback decision boundary & SHAP plot */
                <div className="relative h-full w-full bg-gradient-to-br from-[#060e22] via-[#091533] to-[#040817] p-5 flex flex-col justify-between">
                  <div className="flex items-center justify-between text-[11px] font-mono text-cyan-400">
                    <span>XGBOOST // HYPERPLANE DECISION BOUNDARY</span>
                    <span>AUC = 0.984</span>
                  </div>

                  <svg className="w-full h-36" viewBox="0 0 300 150" fill="none">
                    {/* Grid lines */}
                    <line x1="20" y1="20" x2="280" y2="20" stroke="rgba(56, 189, 248, 0.1)" />
                    <line x1="20" y1="60" x2="280" y2="60" stroke="rgba(56, 189, 248, 0.1)" />
                    <line x1="20" y1="100" x2="280" y2="100" stroke="rgba(56, 189, 248, 0.1)" />
                    <line x1="20" y1="130" x2="280" y2="130" stroke="rgba(56, 189, 248, 0.3)" />

                    {/* Decision Boundary Contour Path */}
                    <path
                      d="M 30,130 Q 100,120 150,70 T 270,30"
                      stroke="rgba(6, 182, 212, 0.9)"
                      strokeWidth="2.5"
                      fill="none"
                    />

                    {/* Safe Class Cluster (Blue circles) */}
                    <circle cx="50" cy="115" r="4" fill="#38bdf8" opacity="0.8" />
                    <circle cx="80" cy="110" r="4" fill="#38bdf8" opacity="0.8" />
                    <circle cx="70" cy="95" r="4" fill="#38bdf8" opacity="0.8" />
                    <circle cx="110" cy="105" r="4" fill="#38bdf8" opacity="0.8" />
                    <circle cx="130" cy="85" r="4" fill="#38bdf8" opacity="0.8" />
                    <circle cx="160" cy="90" r="4" fill="#38bdf8" opacity="0.8" />
                    <circle cx="200" cy="70" r="4" fill="#38bdf8" opacity="0.8" />

                    {/* Fraud Outlier Cluster (Red/Amber diamonds) */}
                    <circle cx="90" cy="40" r="5" fill="#f87171" />
                    <circle cx="130" cy="30" r="5" fill="#f87171" />
                    <circle cx="170" cy="35" r="5" fill="#f87171" />
                    <circle cx="210" cy="25" r="5" fill="#f87171" />
                    <circle cx="250" cy="20" r="5" fill="#f87171" />
                  </svg>

                  <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
                    <span className="flex items-center gap-1.5 text-cyan-300">
                      <span className="h-2 w-2 rounded-full bg-cyan-400" />
                      Legitimate Class
                    </span>
                    <span className="flex items-center gap-1.5 text-red-400">
                      <span className="h-2 w-2 rounded-full bg-red-400" />
                      Fraud Class (Declined)
                    </span>
                  </div>
                </div>
              )}
            </div>
            <div className="lg:col-span-7 p-6 sm:p-8">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                <span>Enterprise Production Architecture</span>
                <span aria-hidden="true">·</span>
                <span>Explainable AI (XAI)</span>
              </div>
              <h3 className="mt-2 text-xl sm:text-2xl font-bold text-white dark:text-white light:text-slate-900">
                {isEn ? 'Dual-Engine: High-Throughput Boosting + SHAP Interpretability' : '雙引擎架構：高吞吐量梯度提升與 SHAP 可解釋性'}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300 dark:text-slate-300 light:text-slate-700">
                {isEn
                  ? 'In mission-critical banking environments, predictive power is meaningless without transparency. Dr. Shiue pioneered the integration of high-throughput XGBoost/LightGBM binary classifiers with post-hoc Shapley Additive Explanations (SHAP) and LIME local surrogates. This architecture allows fraud analysts and regulatory auditors to deconstruct the exact mathematical contribution of every feature in milliseconds.'
                  : '在關鍵金融交易環境中，缺乏透明度的預測能力難以通過審驗。薛博士率先推動將高吞吐量 XGBoost/LightGBM 二元分類器與後驗 SHAP 歸因分析及 LIME 局部替代模型深度結合，使防偽調查員與合規稽核單位能在毫秒內精確解構每一項特徵對風險分數的正負貢獻。'}
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-2">
                {['SHAP Force Plots', 'LIME Surrogates', 'XGBoost', 'LightGBM', 'MRM Governance', 'Optuna'].map((t, i) => (
                  <span key={i} className="text-xs font-mono text-cyan-300 bg-slate-800/80 border border-slate-700 px-2.5 py-1 rounded">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Filter Controls */}
        <div className="mt-12 flex flex-wrap items-center gap-2">
          {[
            { id: 'all', label: isEn ? 'All Initiatives' : '全部專案' },
            { id: 'production', label: isEn ? 'Enterprise Production' : '企業生產部署' },
            { id: 'patent', label: isEn ? 'Granted Patents' : '獲准專利' },
            { id: 'research', label: isEn ? 'Applied Research' : '前沿應用研究' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setFilter(item.id)}
              className={`rounded-lg px-3.5 py-1.5 text-xs font-medium transition-colors ${
                filter === item.id
                  ? 'bg-cyan-500 text-white shadow-sm'
                  : 'bg-slate-900/60 text-slate-300 border border-slate-800 hover:border-slate-700 dark:bg-slate-900/60 dark:text-slate-300 light:bg-slate-100 light:text-slate-700'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project: ProjectItem) => (
            <div
              key={project.id}
              className="glass-panel flex flex-col justify-between rounded-2xl p-6 transition-all duration-300 hover:border-cyan-500/40"
            >
              <div>
                {/* Header tag and status */}
                <div className="flex items-center justify-between gap-2 text-xs">
                  <span className="font-mono text-cyan-400 font-medium">
                    {isEn ? project.categoryLabel : project.categoryLabelZh}
                  </span>
                  <span className="font-mono text-[11px] text-slate-400">
                    {isEn ? project.status : project.statusZh}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="mt-3 text-base font-bold text-white dark:text-white light:text-slate-900 leading-snug">
                  {isEn ? project.title : project.titleZh}
                </h3>

                {/* Overview */}
                <p className="mt-2.5 text-xs leading-relaxed text-slate-300 dark:text-slate-300 light:text-slate-700">
                  {isEn ? project.overview : project.overviewZh}
                </p>

                {/* Key Contributions */}
                <div className="mt-4 space-y-1.5">
                  <div className="text-[10px] font-semibold uppercase text-slate-400 tracking-wider">
                    {isEn ? 'Key Engineering Highlights' : '核心研發成果'}
                  </div>
                  {(isEn ? project.keyContributions : project.keyContributionsZh).slice(0, 3).map((kc, kIdx) => (
                    <div key={kIdx} className="flex items-start gap-1.5 text-xs text-slate-400 leading-snug">
                      <CheckCircle className="h-3.5 w-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{kc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom: Tech stack & external link */}
              <div className="mt-6 pt-4 border-t border-slate-800/80">
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.technologies.slice(0, 4).map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-mono text-slate-300 bg-slate-900/60 border border-slate-800 px-2 py-0.5 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.externalLink ? (
                  <a
                    href={project.externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300"
                  >
                    <span>{isEn ? 'View Official Record' : '檢視專利文獻'}</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                ) : (
                  <div className="text-[11px] font-mono text-slate-500">
                    {isEn ? 'Proprietary Enterprise Architecture' : '企業專屬架構'}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
