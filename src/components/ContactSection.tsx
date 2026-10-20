import React, { useState } from 'react';
import { Mail, MapPin, Linkedin, Github, Send, CheckCircle2, MessageSquare, Globe, AppWindow, Award, ExternalLink, Copy, Check } from 'lucide-react';
import { PROFILE_DATA } from '../data/profileData';
import { Language } from '../types';

interface ContactSectionProps {
  language: Language;
  onOpenAiChat: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  language,
  onOpenAiChat,
}) => {
  const isEn = language === 'en';
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'AI & Data Science Collaboration / Executive Role',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    // Create mailto link as fallback for direct sending
    const mailtoUrl = `mailto:WENTSONG.SHIUE@GMAIL.COM?subject=${encodeURIComponent(
      formData.subject + ' - ' + formData.name
    )}&body=${encodeURIComponent(
      `From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`
    )}`;

    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-20 sm:py-24 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-semibold tracking-wider uppercase text-cyan-400 dark:text-cyan-400 light:text-cyan-700">
            {isEn ? 'Get In Touch' : '聯絡與合作洽詢'}
          </div>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl dark:text-white light:text-slate-900">
            {isEn ? 'Connect with Dr. WenTsong Shiue' : '與 薛文聰 博士 取得聯繫'}
          </h2>
          <p className="mt-3 text-base text-slate-300 dark:text-slate-300 light:text-slate-700">
            {isEn
              ? 'Available for senior AI leadership, advisory roles, machine learning research collaborations, and expert model governance consulting.'
              : '歡迎洽詢資深 AI 技術管理職位、企業顧問諮詢、機器學習研究合作或模型治理專案。'}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-12">
          
          {/* Left Column: Direct Links & Location */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="glass-panel rounded-2xl p-6 space-y-6">
              
              {/* Location */}
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400">
                    {isEn ? 'Primary Location' : '主要所在地'}
                  </div>
                  <div className="mt-1 text-base font-bold text-white dark:text-white light:text-slate-900">
                    {isEn ? PROFILE_DATA.location : PROFILE_DATA.locationZh}
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    {isEn ? 'Open to on-site, hybrid, or remote executive roles' : '可配合實體、混合辦公或遠端高階職位'}
                  </div>
                </div>
              </div>

              {/* Core Official Embedded Links */}
              <div className="pt-4 border-t border-slate-800/80 space-y-3">
                <div className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                  {isEn ? 'Core Embedded Links & Portals' : '核心官方連結與展示門戶'}
                </div>

                {/* 1. LinkedIn */}
                <div className="flex items-center justify-between p-2.5 rounded-xl border border-blue-500/20 bg-blue-950/20">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-600/20 text-blue-400 border border-blue-500/30">
                      <Linkedin className="h-4 w-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-bold text-white">LinkedIn</div>
                      <a
                        href="https://www.linkedin.com/in/wentsong-shiue-69425852/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] font-mono text-cyan-400 hover:underline truncate block"
                      >
                        linkedin.com/in/wentsong-shiue-69425852/
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy('https://www.linkedin.com/in/wentsong-shiue-69425852/', 'c-linkedin')}
                    className="p-1.5 text-slate-400 hover:text-cyan-300"
                    title="Copy LinkedIn URL"
                  >
                    {copiedKey === 'c-linkedin' ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                  </button>
                </div>

                {/* 2. Chief Data Scientist */}
                <div className="flex items-center justify-between p-2.5 rounded-xl border border-emerald-500/20 bg-emerald-950/20">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-600/20 text-emerald-400 border border-emerald-500/30">
                      <Globe className="h-4 w-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-bold text-white">Chief Data Scientist</div>
                      <a
                        href="https://githubio-production-30a7.up.railway.app/en/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] font-mono text-emerald-400 hover:underline truncate block"
                      >
                        githubio-production-30a7.up.railway.app/en/
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy('https://githubio-production-30a7.up.railway.app/en/', 'c-chief')}
                    className="p-1.5 text-slate-400 hover:text-emerald-300"
                    title="Copy Chief Data Scientist URL"
                  >
                    {copiedKey === 'c-chief' ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                  </button>
                </div>

                {/* 3. This app */}
                <div className="flex items-center justify-between p-2.5 rounded-xl border border-cyan-500/20 bg-cyan-950/20">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-600/20 text-cyan-400 border border-cyan-500/30">
                      <AppWindow className="h-4 w-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-bold text-white">This app</div>
                      <a
                        href="https://wentsong-shiue-profile-production.up.railway.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] font-mono text-cyan-300 hover:underline truncate block"
                      >
                        wentsong-shiue-profile-production.up.railway.app/
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy('https://wentsong-shiue-profile-production.up.railway.app/', 'c-thisapp')}
                    className="p-1.5 text-slate-400 hover:text-cyan-300"
                    title="Copy This App URL"
                  >
                    {copiedKey === 'c-thisapp' ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                  </button>
                </div>

                {/* 4. Patent's link */}
                <div className="flex items-center justify-between p-2.5 rounded-xl border border-amber-500/20 bg-amber-950/20">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-600/20 text-amber-400 border border-amber-500/30">
                      <Award className="h-4 w-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-bold text-white">Patent's link</div>
                      <a
                        href="https://patents.google.com/patent/US11531734B2/en"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] font-mono text-amber-300 hover:underline truncate block"
                      >
                        patents.google.com/patent/US11531734B2/en
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy('https://patents.google.com/patent/US11531734B2/en', 'c-patent')}
                    className="p-1.5 text-slate-400 hover:text-amber-300"
                    title="Copy Patent URL"
                  >
                    {copiedKey === 'c-patent' ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                  </button>
                </div>
              </div>

              {/* Instant AI Chat Prompt */}
              <div className="pt-4 border-t border-slate-800/80">
                <button
                  onClick={onOpenAiChat}
                  className="w-full flex items-center justify-center gap-2 rounded-xl border border-cyan-500/40 bg-cyan-950/30 px-4 py-3 text-xs font-semibold text-cyan-300 hover:bg-cyan-900/40 transition-colors"
                >
                  <MessageSquare className="h-4 w-4" />
                  <span>{isEn ? 'Ask My AI Assistant Immediate Questions' : '即時向 AI 助理諮詢薛博士背景'}</span>
                </button>
              </div>

            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4 text-xs text-slate-400 leading-relaxed">
              {isEn
                ? 'Privacy Notice: In accordance with executive profile guidelines, direct telephone and personal contact numbers are provided during formal interview scheduling.'
                : '隱私保護說明：依據高階經理人規範，正式面試及合作安排將由專人或透過 LinkedIn 傳送專屬聯繫方式。'}
            </div>

          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-2xl p-6 sm:p-8">
              <h3 className="text-lg font-bold text-white dark:text-white light:text-slate-900 mb-2">
                {isEn ? 'Send an Inquiry or Proposal' : '發送洽詢或合作邀約'}
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                {isEn
                  ? 'Your message will be formatted and routed directly to Dr. Shiue.'
                  : '您的訊息將自動整理並直接傳送給薛文聰博士。'}
              </p>

              {submitted ? (
                <div className="rounded-xl border border-emerald-500/30 bg-emerald-950/20 p-6 text-center space-y-3">
                  <CheckCircle2 className="h-10 w-10 text-emerald-400 mx-auto" />
                  <h4 className="text-base font-bold text-white">
                    {isEn ? 'Inquiry Form Prepared' : '洽詢表單已備妥'}
                  </h4>
                  <p className="text-xs text-slate-300">
                    {isEn
                      ? 'Your mail client has been opened with your inquiry pre-filled. You can also connect directly via LinkedIn.'
                      : '已為您開啟電子郵件客戶端並填妥訊息內容，您亦可直接透過 LinkedIn 建立聯繫。'}
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-cyan-400 hover:underline"
                  >
                    {isEn ? 'Send Another Message' : '發送另一則訊息'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        {isEn ? 'Your Name / Organization' : '您的姓名 / 所屬機構'} *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={isEn ? 'e.g. Jane Doe, Hiring Director' : '例如：王經理 / 招募主管'}
                        className="w-full rounded-xl border border-slate-800 bg-slate-900 px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        {isEn ? 'Your Email Address' : '電子郵件地址'} *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.com"
                        className="w-full rounded-xl border border-slate-800 bg-slate-900 px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      {isEn ? 'Inquiry Type / Subject' : '主旨 / 洽談類型'}
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full rounded-xl border border-slate-800 bg-slate-900 px-3.5 py-2.5 text-xs text-white focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                    >
                      <option value="Executive AI / Data Science Role">
                        {isEn ? 'Executive AI / Data Science Role' : 'AI / 資料科學高階職位邀約'}
                      </option>
                      <option value="Model Governance / Explainable AI Consulting">
                        {isEn ? 'Model Governance & Explainable AI Advisory' : '模型治理與可解釋 AI 顧問諮詢'}
                      </option>
                      <option value="Machine Learning Research Collaboration">
                        {isEn ? 'Machine Learning Research Collaboration' : '機器學習學術與研發合作'}
                      </option>
                      <option value="Speaking / Panel Opportunity">
                        {isEn ? 'Conference / Speaking Engagement' : '技術演講與座談邀請'}
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      {isEn ? 'Message' : '詳細訊息內容'} *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={
                        isEn
                          ? 'Please describe the position, organization, or project goals...'
                          : '請簡述職缺內容、機構背景或合作目標...'
                      }
                      className="w-full rounded-xl border border-slate-800 bg-slate-900 px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 leading-relaxed"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 text-xs font-semibold text-white shadow-lg hover:from-cyan-400 hover:to-blue-500 transition-all active:scale-95"
                  >
                    <Send className="h-4 w-4" />
                    <span>{isEn ? 'Send Message to Dr. Shiue' : '送出洽詢訊息'}</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
