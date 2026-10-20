/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Bot, MessageSquare } from 'lucide-react';
import { Language, ThemeMode } from './types';
import { NeuralBackground } from './components/NeuralBackground';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { ExpertiseMatrix } from './components/ExpertiseMatrix';
import { IcedaSection } from './components/IcedaSection';
import { PatentsAndEducation } from './components/PatentsAndEducation';
import { ProjectsPortfolio } from './components/ProjectsPortfolio';
import { InteractiveAiLab } from './components/InteractiveAiLab';
import { AiAssistant } from './components/AiAssistant';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { GitHubDeploymentModal } from './components/GitHubDeploymentModal';

export default function App() {
  const [language, setLanguage] = useState<Language>('en');
  const [theme, setTheme] = useState<ThemeMode>('dark');
  const [isChatModalOpen, setIsChatModalOpen] = useState(false);
  const [isDeploymentGuideOpen, setIsDeploymentGuideOpen] = useState(false);

  // Sync theme class to document element
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
  }, [theme]);

  const handleOpenAiChat = () => {
    setIsChatModalOpen(true);
  };

  return (
    <div className={`relative min-h-screen ${theme === 'dark' ? 'bg-[#080d1a] text-slate-100' : 'bg-slate-50 text-slate-900'} font-sans`}>
      {/* Animated neural particles background */}
      <NeuralBackground isDark={theme === 'dark'} />

      {/* Main navigation */}
      <Navbar
        language={language}
        setLanguage={setLanguage}
        theme={theme}
        setTheme={setTheme}
        onOpenAiChat={handleOpenAiChat}
      />

      {/* Page Sections */}
      <main className="relative z-10">
        <HeroSection
          language={language}
          onOpenAiChat={handleOpenAiChat}
          onOpenDeploymentGuide={() => setIsDeploymentGuideOpen(true)}
        />

        <AboutSection language={language} />

        <ExperienceTimeline language={language} />

        <ExpertiseMatrix language={language} />

        <IcedaSection language={language} />

        <PatentsAndEducation language={language} />

        <ProjectsPortfolio language={language} />

        <InteractiveAiLab language={language} />

        {/* Dedicated in-page AI section */}
        <AiAssistant language={language} />

        <ContactSection
          language={language}
          onOpenAiChat={handleOpenAiChat}
        />
      </main>

      {/* Footer */}
      <Footer
        language={language}
        onOpenDeploymentGuide={() => setIsDeploymentGuideOpen(true)}
      />

      {/* Floating Ask My AI quick-launch action button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={handleOpenAiChat}
          className="group flex items-center gap-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-3 text-sm font-bold text-white shadow-xl shadow-cyan-500/25 transition-all hover:scale-105 hover:from-cyan-400 hover:to-blue-500 active:scale-95"
          aria-label="Open Ask Dr. Shiue AI Assistant"
        >
          <Bot className="h-5 w-5 text-white" />
          <span className="hidden sm:inline-block font-semibold">
            {language === 'en' ? 'Ask Dr. Shiue AI' : '向 AI 助理提問'}
          </span>
        </button>
      </div>

      {/* AI Assistant Modal */}
      {isChatModalOpen && (
        <AiAssistant
          language={language}
          isOpenModal={true}
          onCloseModal={() => setIsChatModalOpen(false)}
        />
      )}

      {/* GitHub Pages Deployment Guide Modal */}
      <GitHubDeploymentModal
        isOpen={isDeploymentGuideOpen}
        onClose={() => setIsDeploymentGuideOpen(false)}
        language={language}
      />
    </div>
  );
}
