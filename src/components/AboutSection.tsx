import React from 'react';
import { Cpu, ShieldCheck, Scale, Binary, ExternalLink } from 'lucide-react';
import { PROFILE_DATA } from '../data/profileData';
import { Language } from '../types';

interface AboutSectionProps {
  language: Language;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ language }) => {
  const isEn = language === 'en';

  const pillars = [
    {
      icon: ShieldCheck,
      title: isEn ? 'Financial Fraud Detection & Analytics' : '金融防偽偵測與分析',
      desc: isEn
        ? 'Deep domain mastery building high-throughput binary classifiers for 8 banking channels: CAML, Credit, Debit, P2P (Zelle), Wire, ACH, Bill Pay, and Device. Specialized in high class-imbalance, feature correlation pruning, and real-time inference.'
        : '深耕金融防偽領域，為 CAML、Credit、Debit、P2P（Zelle）、Wire、ACH、Bill Pay 及 Device 等 8 大銀行管道構建高吞吐量二元分類器，專精於極度不平衡資料、特徵共線性剪枝與即時推論。',
    },
    {
      icon: Scale,
      title: isEn ? 'Explainable AI & Model Governance' : '可解釋 AI 與模型風險治理',
      desc: isEn
        ? 'Translating opaque black-box algorithms into transparent, auditable decisions using SHAP (force, summary, and decision plots), LIME, and ELI5. Extensive experience conducting rigorous bias and fairness testing across protected demographics.'
        : '運用 SHAP（力圖、摘要圖、決策圖）、LIME 與 ELI5 將複雜的黑盒演算法轉化為透明且可稽核的決策依據；具備針對受保護族群執行嚴格偏誤與公平性統計檢定之實務經驗。',
    },
    {
      icon: Binary,
      title: isEn ? 'Automated ML & Algorithmic Optimization' : '自動化機器學習與演算法優化',
      desc: isEn
        ? 'Co-inventor of U.S. Patent 11,531,734 for optimal machine learning model determination. Proven capability in multi-objective hyperparameter optimization using Optuna, Bayesian search, and ensemble candidate pruning.'
        : '獲准美國專利 11,531,734 之共同發明人。精通運用 Optuna、貝氏搜尋與候選模型剪枝進行多目標超參數優化，極大化預測表現與推論效率。',
    },
    {
      icon: Cpu,
      title: isEn ? 'Semiconductor & System Architecture Roots' : '半導體與計算機系統架構底蘊',
      desc: isEn
        ? 'Rigorous foundation in computer systems and semiconductor modeling. Ph.D. dissertation on cache data power modeling at ASU was integrated into PSU\'s cycle-accurate SimplePower simulation tool, followed by data modeling at FreeScale Semiconductor.'
        : '具備扎實的計算機系統與半導體建模基礎。在亞利桑那州立大學的快取功耗建模博士研究獲賓州州立大學 SimplePower 週期精確工具採納，隨後在飛思卡爾半導體主導數據建模。',
    },
  ];

  return (
    <section id="about" className="relative py-20 sm:py-24 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-semibold tracking-wider uppercase text-cyan-400 dark:text-cyan-400 light:text-cyan-700">
            {isEn ? 'Executive Profile & Journey' : '專業背景與核心實力'}
          </div>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl dark:text-white light:text-slate-900">
            {isEn ? 'About Dr. WenTsong Shiue' : '關於 薛文聰 博士'}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-300 dark:text-slate-300 light:text-slate-700">
            {isEn
              ? 'A veteran machine learning scientist and former Vice President at Bank of America, bringing over two decades of technical depth bridging semiconductor physics, data engineering, statistical modeling, and mission-critical financial AI.'
              : '擁有超過二十年深厚技術底蘊的資深機器學習科學家與前美國銀行副總裁，成功橋接半導體物理、巨量數據工程、統計建模及核心金融級 AI。'}
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="glass-panel rounded-xl p-6 transition-all duration-300 hover:border-cyan-500/40"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400 dark:bg-cyan-500/10 dark:text-cyan-400 light:bg-sky-100 light:text-cyan-700">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white dark:text-white light:text-slate-900">
                    {pillar.title}
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-400 dark:text-slate-400 light:text-slate-600">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Deep Dive Narrative Box */}
        <div className="mt-12 glass-panel-subtle rounded-2xl p-6 sm:p-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <h3 className="text-xl font-bold text-white dark:text-white light:text-slate-900">
                {isEn ? 'Interdisciplinary Engineering & Mathematical Discipline' : '跨學科工程實踐與嚴謹數學訓練'}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300 dark:text-slate-300 light:text-slate-700">
                {isEn
                  ? 'Dr. Shiue\'s trajectory reflects a continuous pursuit of rigor spanning 20+ years of enterprise engineering: from ranking 3rd out of 120,000 students in Taiwan\'s National College Examination, to pioneering low-power cache memory modeling at Arizona State University, through semiconductor architectures at FreeScale, and culminating in eight years as a Vice President and Senior Data Scientist governing and explaining fraud detection models at Bank of America.'
                  : '薛博士的職涯軌跡展現了跨越 20+ 年企業級工程與科學探索的極致嚴謹：從在 120,000 名考生的台灣大專聯考中勇奪全國第 3 名、於亞利桑那州立大學開創低功耗快取記憶體建模研究、任職飛思卡爾主導晶片組系統建模，到在美國銀行擔任副總裁暨資深資料科學家治理並解釋橫跨 8 大業務管道的關鍵防偽機器學習模型。'}
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
                <span className="text-cyan-400 font-semibold">20+ Years Enterprise ML</span>
                <span aria-hidden="true">·</span>
                <span>ASU Ph.D. 2000</span>
                <span aria-hidden="true">·</span>
                <span>SimplePower Tool (PSU)</span>
                <span aria-hidden="true">·</span>
                <span>Bank of America VP (2017–2026)</span>
                <span aria-hidden="true">·</span>
                <span>US Patent 11,531,734</span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-start lg:items-end gap-3">
              <a
                href={PROFILE_DATA.googleScholarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800/60 px-4 py-2 text-xs font-medium text-slate-200 transition-colors hover:border-cyan-400 hover:text-cyan-300"
              >
                <span>{isEn ? 'View Google Scholar Publications' : '瀏覽 Google Scholar 學術著作'}</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
              <a
                href={PROFILE_DATA.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800/60 px-4 py-2 text-xs font-medium text-slate-200 transition-colors hover:border-cyan-400 hover:text-cyan-300"
              >
                <span>{isEn ? 'Connect on LinkedIn' : '在 LinkedIn 上建立聯繫'}</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
