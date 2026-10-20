import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, User, Trash2, Copy, Check, Sparkles, AlertCircle, X, Maximize2, Minimize2 } from 'lucide-react';
import { ChatMessage, Language } from '../types';
import { PROFILE_DATA } from '../data/profileData';

interface AiAssistantProps {
  language: Language;
  isOpenModal?: boolean;
  onCloseModal?: () => void;
  isFloatingDrawer?: boolean;
}

export const AiAssistant: React.FC<AiAssistantProps> = ({
  language,
  isOpenModal = false,
  onCloseModal,
  isFloatingDrawer = false,
}) => {
  const isEn = language === 'en';

  const defaultGreeting: ChatMessage = {
    id: 'welcome',
    role: 'assistant',
    content: isEn
      ? "Hello! I am Dr. WenTsong Shiue's AI profile assistant. You can ask me about his 20+ years of enterprise data modeling & machine learning leadership (including Vice President & Senior Data Scientist at Bank of America 2017–2026), U.S. Patent 11,531,734, Explainable AI (SHAP/LIME), ASU Ph.D., or technical stack. How can I assist you today?"
      : '您好！我是薛文聰博士（WenTsong Shiue, PhD）的專屬 AI 助理。您可以詢問關於他 20+ 年跨領域企業資料建模與機器學習領導歷練（包括任職美國銀行副總裁暨資深資料科學家 2017–2026）、獲核准的美國專利 11,531,734、可解釋 AI（SHAP/LIME）、亞利桑那州立大學博士學位或技術專長。請問有什麼我可以為您說明的嗎？',
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
  };

  const [messages, setMessages] = useState<ChatMessage[]>([defaultGreeting]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const samplePrompts = isEn
    ? [
        "Tell me about Dr. Shiue's LinkedIn featured media & U.S. Patent 11,531,734.",
        "What is Dr. Shiue's experience with XGBoost and LightGBM?",
        "What experience does he have in financial fraud detection?",
        "What is his educational background?",
        "How does his experience relate to AI governance?",
      ]
    : [
        '介紹薛博士在 LinkedIn 上的精選專利成果 (US 11,531,734)。',
        '薛博士在 XGBoost 與 LightGBM 方面有哪些實務經驗？',
        '他在美國銀行的金融防偽經驗涵蓋哪些業務管道？',
        '薛博士的博士學位與學術論文背景為何？',
        '他在可解釋 AI（SHAP/LIME）與模型風險治理上的成就？',
      ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend || inputText).trim();
    if (!text || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInputText('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: newMessages.map((m) => ({ role: m.role, content: m.content })),
          language: language,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`);
      }

      const data = await response.json();
      const replyContent = data.reply || (isEn ? 'No response received.' : '未收到回應。');

      const botMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: replyContent,
        source: data.source,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (err: any) {
      console.warn('Backend request fallback invoked:', err);
      // Client-side fallback using verified profile FAQs
      const matchedFaq = PROFILE_DATA.faqs.find((f) => {
        const q = (f.question + ' ' + f.questionZh).toLowerCase();
        return text.toLowerCase().split(' ').some((word) => word.length > 3 && q.includes(word));
      });

      const fallbackReply = matchedFaq
        ? isEn
          ? matchedFaq.answer
          : matchedFaq.answerZh
        : isEn
        ? "Dr. WenTsong Shiue holds a Ph.D. from Arizona State University, is a former Vice President and Senior Data Scientist at Bank of America (2017–2026), and is a co-inventor of U.S. Patent 11,531,734 on optimal machine learning model determination. He specialized in fraud detection across 8 banking channels, XGBoost, LightGBM, SHAP, and model risk governance."
        : "薛文聰博士擁有亞利桑那州立大學博士學位，曾任美國銀行（Bank of America）副總裁暨資深資料科學家（2017–2026），並為美國專利 11,531,734《決定最佳機器學習模型》共同發明人。他專精於 8 大金融管道防偽偵測、XGBoost、LightGBM、SHAP 可解釋 AI 及模型風險治理。";

      const botMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: fallbackReply,
        source: 'curated-profile-knowledgebase',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, botMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = (id: string, content: string) => {
    navigator.clipboard.writeText(content);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleClearHistory = () => {
    setMessages([defaultGreeting]);
  };

  // Render content
  const content = (
    <div className="flex h-full flex-col bg-[#080d1a] text-slate-100">
      
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-800 px-4 py-3 sm:px-6">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
            <Bot className="h-4 w-4" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-white">
              {isEn ? 'Ask Dr. Shiue AI' : '向 薛文聰博士 AI 提問'}
            </h3>
            <div className="text-[11px] font-mono text-cyan-400">
              {isEn ? 'Grounded in Official Resume & U.S. Patent 11,531,734' : '基於官方履歷與美國專利 11,531,734 驗證'}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleClearHistory}
            className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-800 hover:text-slate-200"
            title="Reset Conversation"
          >
            <Trash2 className="h-4 w-4" />
          </button>
          {onCloseModal && (
            <button
              onClick={onCloseModal}
              className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-800 hover:text-slate-200"
              title="Close"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>

      {/* Suggested Prompts Strip */}
      <div className="border-b border-slate-800/80 bg-slate-950/60 px-4 py-2.5 sm:px-6 overflow-x-auto">
        <div className="flex items-center gap-1.5 whitespace-nowrap text-xs">
          <Sparkles className="h-3 w-3 text-cyan-400 shrink-0 mr-1" />
          <span className="text-slate-500 text-[11px] mr-1">{isEn ? 'Suggested:' : '推薦問題：'}</span>
          {samplePrompts.map((p, idx) => (
            <button
              key={idx}
              onClick={() => handleSendMessage(p)}
              disabled={isLoading}
              className="rounded-md border border-slate-800 bg-slate-900/80 px-2.5 py-1 text-[11px] text-slate-300 hover:border-cyan-500/50 hover:text-cyan-300 transition-colors disabled:opacity-50"
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      {/* Messages Scroll Area */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
        {messages.map((msg) => {
          const isUser = msg.role === 'user';

          return (
            <div
              key={msg.id}
              className={`flex gap-3 ${isUser ? 'justify-end' : 'justify-start'}`}
            >
              {!isUser && (
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 text-xs">
                  <Bot className="h-4 w-4" />
                </div>
              )}

              <div
                className={`max-w-[85%] rounded-2xl px-4 py-3 text-xs sm:text-sm leading-relaxed ${
                  isUser
                    ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white'
                    : 'glass-panel border border-slate-800 text-slate-200'
                }`}
              >
                <div className="whitespace-pre-wrap">{msg.content}</div>

                {/* Footer of message */}
                <div className="mt-2 flex items-center justify-between gap-3 text-[10px] text-slate-400 border-t border-white/10 pt-1.5">
                  <span className="font-mono">{msg.timestamp}</span>
                  {!isUser && (
                    <div className="flex items-center gap-2">
                      {msg.source && (
                        <span className="font-mono text-cyan-400">
                          {msg.source === 'gemini-3.8-flash' ? 'Gemini 3.8 Flash' : 'Grounded KB'}
                        </span>
                      )}
                      <button
                        onClick={() => handleCopy(msg.id, msg.content)}
                        className="hover:text-cyan-300"
                        title="Copy message"
                      >
                        {copiedId === msg.id ? (
                          <Check className="h-3 w-3 text-emerald-400" />
                        ) : (
                          <Copy className="h-3 w-3" />
                        )}
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {isUser && (
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-slate-700 text-slate-200 text-xs">
                  <User className="h-4 w-4" />
                </div>
              )}
            </div>
          );
        })}

        {isLoading && (
          <div className="flex gap-3 justify-start">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 text-xs">
              <Bot className="h-4 w-4" />
            </div>
            <div className="glass-panel rounded-2xl px-4 py-3 text-xs text-slate-400 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>{isEn ? 'Consulting Dr. Shiue profile knowledge base...' : '正在檢索薛博士官方資歷資料庫...'}</span>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Box */}
      <div className="border-t border-slate-800 p-4 sm:p-5 bg-slate-950/80">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
          className="flex items-center gap-2"
        >
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder={
              isEn
                ? 'Ask about XGBoost, fraud modeling, U.S. Patent 11,531,734...'
                : '詢問關於 XGBoost、防偽建模、美國專利 11,531,734、學歷...'
            }
            className="flex-1 rounded-xl border border-slate-800 bg-slate-900/90 px-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
          />
          <button
            type="submit"
            disabled={!inputText.trim() || isLoading}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md hover:from-cyan-400 hover:to-blue-500 disabled:opacity-40 transition-all active:scale-95 shrink-0"
            aria-label="Send Message"
          >
            <Send className="h-4 w-4" />
          </button>
        </form>
        <div className="mt-2 text-center text-[10px] text-slate-500">
          {isEn
            ? 'Strictly factual: does not hallucinate undocumented achievements or disclose employer proprietary data.'
            : '嚴格基於事實：絕不虛構未經核實成就，亦不透露任何企業機密商業機密。'}
        </div>
      </div>

    </div>
  );

  // If used as modal
  if (isOpenModal) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
        <div className="flex h-[88vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-cyan-500/30 shadow-2xl">
          {content}
        </div>
      </div>
    );
  }

  // If used inside dedicated in-page section
  return (
    <section id="ai-chat" className="relative py-20 sm:py-24 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-3 py-1 text-xs font-mono text-cyan-300 mb-3">
            <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
            <span>{isEn ? 'Conversational AI Intelligence' : '對話式 AI 智慧助理'}</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl dark:text-white light:text-slate-900">
            {isEn ? 'Ask Dr. Shiue AI' : '諮詢 薛文聰博士 AI 助理'}
          </h2>
          <p className="mt-3 text-sm text-slate-400">
            {isEn
              ? 'Interact with an intelligent assistant trained on Dr. Shiue\'s verified career accomplishments, Bank of America fraud governance, and patent methodologies.'
              : '與搭載真實官方資歷資料庫的智慧助理即時對談，深入了解薛博士的美國銀行金融防偽實務、可解釋 AI 技術與專利架構。'}
          </p>
        </div>

        {/* Embedded Container */}
        <div className="h-[620px] rounded-2xl border border-slate-800 shadow-2xl overflow-hidden">
          {content}
        </div>

      </div>
    </section>
  );
};
