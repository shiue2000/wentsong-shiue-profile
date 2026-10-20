export type Language = 'en' | 'zh';
export type ThemeMode = 'dark' | 'light';

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  source?: string;
  timestamp: string;
}
