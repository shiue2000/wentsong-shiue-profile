import React, { useState } from 'react';
import { Bot, Sun, Moon, Globe, Menu, X } from 'lucide-react';
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

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'zh' : 'en');
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

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
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-300 md:flex dark:text-slate-300 light:text-slate-600">
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
        </div>
      )}
    </header>
  );
};
