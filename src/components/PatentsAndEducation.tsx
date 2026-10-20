import React from 'react';
import { Award, GraduationCap, ExternalLink, BookOpen, Scroll, CheckCircle2 } from 'lucide-react';
import { PROFILE_DATA } from '../data/profileData';
import { Language } from '../types';

interface PatentsAndEducationProps {
  language: Language;
}

export const PatentsAndEducation: React.FC<PatentsAndEducationProps> = ({ language }) => {
  const isEn = language === 'en';

  return (
    <section id="patents" className="relative py-20 sm:py-24 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-semibold tracking-wider uppercase text-cyan-400 dark:text-cyan-400 light:text-cyan-700">
            {isEn ? 'Intellectual Property & Academic Pedigree' : '智財專利與學術資歷'}
          </div>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl dark:text-white light:text-slate-900">
            {isEn ? 'Patents, Education & Honors' : '專利發明、學歷與學術榮譽'}
          </h2>
          <p className="mt-3 text-base text-slate-300 dark:text-slate-300 light:text-slate-700">
            {isEn
              ? 'Verifiable intellectual property granted by the USPTO, peer-recognized doctoral research implemented in cycle-accurate engineering tools, and formal academic degrees.'
              : '獲美國專利商標局正式核准之機器學習專利、獲學界週期精確模擬器採納之博士研究成果，以及完整的電機工程學術訓練。'}
          </p>
        </div>

        {/* Patents Grid */}
        <div className="mt-12">
          <h3 className="text-lg font-bold text-white dark:text-white light:text-slate-900 flex items-center gap-2">
            <Award className="h-5 w-5 text-amber-400" />
            <span>{isEn ? 'Patents & Intellectual Property' : '專利發明 (Patents)'}</span>
          </h3>

          <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {PROFILE_DATA.patents.map((patent) => (
              <div
                key={patent.id}
                className="glass-panel relative rounded-2xl p-6 transition-all duration-300 hover:border-amber-400/40"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="font-mono text-xs font-bold text-amber-400 tracking-wide">
                      {patent.patentNumber}
                    </span>
                    <h4 className="mt-1 text-base font-bold text-white dark:text-white light:text-slate-900 leading-snug">
                      {isEn ? patent.title : patent.titleZh}
                    </h4>
                  </div>
                  {patent.officialUrl && (
                    <a
                      href={patent.officialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 rounded-lg border border-slate-700 p-2 text-slate-400 hover:border-cyan-400 hover:text-cyan-300 transition-colors"
                      title="View Official USPTO Patent Record"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>

                <p className="mt-3 text-xs leading-relaxed text-slate-400 dark:text-slate-400 light:text-slate-600">
                  {isEn ? patent.description : patent.descriptionZh}
                </p>

                {/* Metadata strip */}
                <div className="mt-4 pt-3 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400">
                  <div>
                    <span className="text-slate-500">{isEn ? 'Inventors: ' : '發明人：'}</span>
                    <span className="text-slate-300 font-medium">{patent.inventors.join(', ')}</span>
                  </div>
                  <div className="font-mono text-[11px] text-cyan-400">
                    {patent.grantedDate}
                  </div>
                </div>

                {/* Tags */}
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {patent.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-mono text-slate-300 bg-slate-900/60 border border-slate-800 px-2 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Featured LinkedIn Media Spotlight */}
          <div className="mt-8 rounded-2xl border border-blue-500/30 bg-gradient-to-r from-blue-950/30 via-slate-900/60 to-cyan-950/30 p-6 sm:p-7 shadow-xl">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div className="space-y-2 max-w-2xl">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-blue-400">
                    LinkedIn Featured Single-Media Publication
                  </span>
                  <span aria-hidden="true" className="text-slate-600">·</span>
                  <span className="text-xs text-slate-400">Verified Profile Media Asset</span>
                </div>
                <h4 className="text-lg font-bold text-white dark:text-white light:text-slate-900">
                  {isEn ? PROFILE_DATA.featuredLinkedInMedia.title : PROFILE_DATA.featuredLinkedInMedia.titleZh}
                </h4>
                <p className="text-xs sm:text-sm leading-relaxed text-slate-300 dark:text-slate-300 light:text-slate-600">
                  {isEn ? PROFILE_DATA.featuredLinkedInMedia.summary : PROFILE_DATA.featuredLinkedInMedia.summaryZh}
                </p>
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400 pt-1">
                  <span className="text-cyan-400">US Patent 11,531,734</span>
                  <span aria-hidden="true">·</span>
                  <span>Bank of America VP</span>
                  <span aria-hidden="true">·</span>
                  <span>Single-Media Viewer Overlay</span>
                </div>
              </div>

              <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col gap-2.5">
                <a
                  href={PROFILE_DATA.featuredLinkedInMedia.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 px-5 py-2.5 text-xs font-semibold text-white shadow-md hover:from-blue-500 hover:to-cyan-500 transition-all active:scale-95"
                >
                  <span>{isEn ? 'View on LinkedIn Media Viewer' : '於 LinkedIn 媒體檢視器開啟'}</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
                <a
                  href={PROFILE_DATA.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-800/60 px-4 py-2.5 text-xs font-medium text-slate-300 hover:border-blue-400 hover:text-white transition-colors"
                >
                  <span>{isEn ? 'Dr. Shiue LinkedIn Profile' : '薛博士 LinkedIn 個人檔案'}</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Education & Academic Honors */}
        <div className="mt-16">
          <h3 className="text-lg font-bold text-white dark:text-white light:text-slate-900 flex items-center gap-2">
            <GraduationCap className="h-5 w-5 text-cyan-400" />
            <span>{isEn ? 'Formal Education & Research Dissertations' : '學術學歷與論文研究'}</span>
          </h3>

          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
            {PROFILE_DATA.education.map((edu) => (
              <div
                key={edu.id}
                className="glass-panel flex flex-col justify-between rounded-2xl p-6 transition-all duration-300 hover:border-cyan-500/30"
              >
                <div>
                  <div className="font-mono text-xs text-cyan-400 font-semibold">
                    {edu.period}
                  </div>
                  <h4 className="mt-1.5 text-base font-bold text-white dark:text-white light:text-slate-900">
                    {isEn ? edu.degree : edu.degreeZh}
                  </h4>
                  <div className="mt-1 text-xs font-medium text-slate-300 dark:text-slate-300 light:text-slate-700">
                    {isEn ? edu.institution : edu.institutionZh}
                  </div>
                  <div className="mt-0.5 text-[11px] text-slate-500">
                    {isEn ? edu.location : edu.locationZh}
                  </div>

                  {/* Dissertation / Thesis */}
                  <div className="mt-4 rounded-lg bg-slate-900/60 border border-slate-800 p-3 text-xs">
                    <div className="text-[10px] font-semibold uppercase text-slate-400 mb-1">
                      {isEn ? 'Thesis / Dissertation' : '學位論文'}
                    </div>
                    <div className="italic text-slate-300">
                      "{isEn ? edu.thesis : edu.thesisZh}"
                    </div>
                  </div>
                </div>

                {edu.highlights && (
                  <div className="mt-4 pt-3 border-t border-slate-800/60 text-[11px] leading-relaxed text-cyan-300/90 font-mono">
                    {isEn ? edu.highlights : edu.highlightsZh}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* National Exam Honor & Publications Banner */}
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-12">
          
          {/* Rank #3 Honor */}
          <div className="lg:col-span-7 glass-panel-subtle rounded-2xl p-6 border border-amber-500/20 bg-amber-950/10">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/30">
                <Scroll className="h-5 w-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-amber-400 font-bold">1979 National Honor</span>
                  <span aria-hidden="true" className="text-slate-600">·</span>
                  <span className="text-xs text-slate-400">Taiwan</span>
                </div>
                <h4 className="mt-1 text-base font-bold text-white dark:text-white light:text-slate-900">
                  {isEn ? 'Taiwan National College Examination — Rank #3' : '台灣大專聯考全國第 3 名 (Rank #3)'}
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-slate-300 dark:text-slate-300 light:text-slate-700">
                  {isEn
                    ? 'Achieved 3rd place overall out of 120,000 students nationwide in the fiercely competitive joint national university entrance examination, demonstrating exceptional foundational problem-solving aptitude.'
                    : '在全台 120,000 名考生激烈競爭的大學聯合招生考試中脫穎而出，榮獲全國第 3 名之卓越殊榮，奠定扎實深厚的數理邏輯基礎。'}
                </p>
              </div>
            </div>
          </div>

          {/* Publications & Scholar Link */}
          <div className="lg:col-span-5 glass-panel-subtle rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase text-cyan-400">
                <BookOpen className="h-4 w-4" />
                <span>{isEn ? 'Research Publications' : '學術論文發表'}</span>
              </div>
              <h4 className="mt-2 text-sm font-bold text-white dark:text-white light:text-slate-900">
                {isEn ? 'Google Scholar & Microsoft Academic' : 'Google Scholar 與學術資料庫'}
              </h4>
              <p className="mt-2 text-xs leading-relaxed text-slate-400">
                {isEn
                  ? 'Access peer-reviewed conference proceedings and journal articles across low-power computer systems, embedded memory modeling, and image processing.'
                  : '查閱關於低功耗系統、嵌入式記憶體建模、影像訊號處理及演算法之同行評審論文與學術著作。'}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800">
              <a
                href={PROFILE_DATA.googleScholarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 px-4 py-2 text-xs font-semibold text-cyan-300 hover:bg-cyan-500/20 transition-colors"
              >
                <span>{isEn ? 'Open Google Scholar Profile' : '開啟 Google Scholar 著作清單'}</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
