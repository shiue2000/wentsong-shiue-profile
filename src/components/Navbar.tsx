import React, { useState, useRef, useEffect } from 'react';
import { Bot, Sun, Moon, Globe, Menu, X, ExternalLink, Award, AppWindow, Linkedin, ChevronDown } from 'lucide-react';
import { Language, ThemeMode } from '../types';

interface NavbarProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
  onOpenAiChat: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  language,
  setLanguage,
  theme,
  setTheme,
  onOpenAiChat,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [portalsOpen, setPortalsOpen] = useState(false);
  const portalsRef = useRef<HTMLDivElement>(null);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'zh' : 'en');
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (portalsRef.current && !portalsRef.current.contains(event.target as Node)) {
        setPortalsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { href: '#about', label: language === 'en' ? 'About' : '關於' },
    { href: '#experience', label: language === 'en' ? 'Experience' : '經歷' },
    { href: '#expertise', label: language === 'en' ? 'Expertise' : '專業技能' },
    { href: '#iceda', label: language === 'en' ? 'IC EDA & AI Chip' : 'IC EDA 與晶片' },
    { href: '#patents', label: language === 'en' ? 'Patents & Education' : '專利與學歷' },
    { href: '#projects', label: language === 'en' ? 'Projects' : '研究與專案' },
    { href: '#lab', label: language === 'en' ? 'AI Lab' : '互動實驗室' },
    { href: '#contact', label: language === 'en' ? 'Contact' : '聯絡' },
  ];

  const officialPortals = [
    {
      name: 'LinkedIn',
      desc: 'wentsong-shiue-69425852',
      url: 'https://www.linkedin.com/in/wentsong-shiue-69425852/',
      icon: Linkedin,
      color: 'text-blue-400 bg-blue-500/10 border-blue-500/30'
    },
    {
      name: 'Chief Data Scientist',
      desc: 'Executive Portfolio & Research Hub',
      url: 'https://githubio-production-30a7.up.railway.app/en/',
      icon: Globe,
      color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30'
    },
    {
      name: 'This app',
      desc: 'wentsong-shiue-profile-production',
      url: 'https://wentsong-shiue-profile-production.up.railway.app/',
      icon: AppWindow,
      color: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30'
    },
    {
      name: "Patent's link",
      desc: 'US Patent 11,531,734 (USPTO)',
      url: 'https://patents.google.com/patent/US11531734B2/en',
      icon: Award,
      color: 'text-amber-400 bg-amber-500/10 border-amber-500/30'
    }
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/80 bg-[#080d1a]/85 backdrop-blur-md transition-colors dark:border-slate-800/80 dark:bg-[#080d1a]/85 light:border-slate-200 light:bg-white/85">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Brand wordmark (single line, no subtitle chips) */}
        <a
          href="#hero"
          className="shrink-0 text-base font-bold tracking-tight text-white transition-colors hover:text-cyan-400 dark:text-white light:text-slate-900"
        >
          WenTsong Shiue, PhD
        </a>

        {/* Zone 2: Navigation Links (concise, single-line text links) */}
        <nav className="hidden items-center gap-5 text-sm font-medium text-slate-300 md:flex dark:text-slate-300 light:text-slate-600">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="shrink-0 whitespace-nowrap transition-colors hover:text-cyan-400 dark:hover:text-cyan-300 light:hover:text-cyan-600"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Controls & Primary Action */}
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          {/* Official Portals Dropdown */}
          <div className="relative hidden lg:block" ref={portalsRef}>
            <button
              onClick={() => setPortalsOpen(!portalsOpen)}
              className="flex items-center gap-1.5 rounded-lg border border-cyan-500/40 bg-cyan-950/30 px-2.5 py-1.5 text-xs font-semibold text-cyan-300 transition-all hover:bg-cyan-900/40 active:scale-95"
              title="Official Portals & Links"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-ping" />
              <span>{language === 'en' ? 'Official Links' : '官方連結'}</span>
              <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${portalsOpen ? 'rotate-180' : ''}`} />
            </button>

            {portalsOpen && (
              <div className="absolute right-0 mt-2 w-80 rounded-xl border border-slate-700 bg-slate-900/95 p-2 shadow-2xl backdrop-blur-xl z-50">
                <div className="px-2 py-1 text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider border-b border-slate-800 mb-1">
                  {language === 'en' ? 'Core Embedded Portals' : '核心官方連結門戶'}
                </div>
                <div className="space-y-1">
                  {officialPortals.map((portal) => {
                    const Icon = portal.icon;
                    return (
                      <a
                        key={portal.name}
                        href={portal.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setPortalsOpen(false)}
                        className="flex items-center gap-2.5 rounded-lg p-2 transition-all hover:bg-slate-800/80 group"
                      >
                        <div className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-md border ${portal.color}`}>
                          <Icon className="h-3.5 w-3.5" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors flex items-center justify-between">
                            <span>{portal.name}</span>
                            <ExternalLink className="h-3 w-3 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                          <div className="text-[10px] text-slate-400 truncate font-mono">
                            {portal.desc}
                          </div>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 rounded-lg border border-slate-700/80 px-2.5 py-1.5 text-xs font-medium text-slate-200 transition-colors hover:border-cyan-500/50 hover:text-cyan-300 dark:border-slate-700/80 dark:text-slate-200 light:border-slate-300 light:text-slate-700 light:hover:text-cyan-600"
            title="Toggle English / Traditional Chinese"
            aria-label="Toggle language"
          >
            <Globe className="h-3.5 w-3.5 text-cyan-400" />
            <span className="font-mono text-xs">{language === 'en' ? '繁中' : 'EN'}</span>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-700/80 text-slate-300 transition-colors hover:border-cyan-500/50 hover:text-cyan-300 dark:border-slate-700/80 dark:text-slate-300 light:border-slate-300 light:text-slate-700"
            title="Toggle Dark/Light Mode"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="h-4 w-4 text-amber-300" />
            ) : (
              <Moon className="h-4 w-4 text-slate-700" />
            )}
          </button>

          {/* Primary Action Button */}
          <button
            onClick={onOpenAiChat}
            className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-3.5 py-1.5 text-xs font-semibold text-white shadow-sm transition-all hover:from-cyan-400 hover:to-blue-500 hover:shadow-cyan-500/25 active:scale-95"
          >
            <Bot className="h-3.5 w-3.5" />
            <span className="whitespace-nowrap">{language === 'en' ? 'Ask My AI' : '諮詢 AI 助理'}</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-700 p-1 text-slate-300 md:hidden dark:border-slate-700 dark:text-slate-300 light:border-slate-300 light:text-slate-700"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="border-b border-slate-800 bg-[#080d1a]/95 px-4 py-4 md:hidden dark:border-slate-800 dark:bg-[#080d1a]/95 light:border-slate-200 light:bg-white/95">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-slate-300 transition-colors hover:text-cyan-400 dark:text-slate-300 light:text-slate-700"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile Portals Strip */}
          <div className="mt-4 pt-4 border-t border-slate-800 space-y-2">
            <div className="text-[11px] font-mono text-cyan-400 font-bold uppercase tracking-wider">
              {language === 'en' ? 'Core Embedded Portals' : '核心官方連結'}
            </div>
            <div className="grid grid-cols-2 gap-2">
              {officialPortals.map((p) => {
                const Icon = p.icon;
                return (
                  <a
                    key={p.name}
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-1.5 p-2 rounded-lg border border-slate-800 bg-slate-900/60 text-xs text-slate-300 hover:text-white"
                  >
                    <Icon className="h-3.5 w-3.5 text-cyan-400" />
                    <span className="truncate">{p.name}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
