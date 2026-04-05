import React, { useState } from 'react';
import { Sparkles, Send, Loader2, Bot, User, History, Zap } from 'lucide-react';
import { getCuratorResponse } from '../services/geminiService';

interface Props {
  lang: 'ko' | 'en';
}

const PublicAiView: React.FC<Props> = ({ lang }) => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'ai', text: string }[]>([
    { role: 'ai', text: lang === 'ko' ? '안녕하세요! WRISTORY AI 큐레이터입니다. WR 토큰, 독립운동가 컬렉션, 또는 테조스 생태계에 대해 궁금한 점이 있으신가요?' : 'Hello! I am the WRISTORY AI Curator. Do you have any questions about WR tokens, independence fighter collections, or the Tezos ecosystem?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const response = await getCuratorResponse(userMsg, lang);
      setMessages(prev => [...prev, { role: 'ai', text: response }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'ai', text: lang === 'ko' ? '죄송합니다. 현재 AI 서버와 연결이 원활하지 않습니다. 잠시 후 다시 시도해 주세요.' : 'Sorry, the AI server is currently unavailable. Please try again later.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 space-y-10 animate-in fade-in duration-700">
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[11px] font-black uppercase tracking-widest">
          <Sparkles size={16} /> AI Curator Service
        </div>
        <h2 className="text-4xl md:text-6xl font-black italic uppercase text-white tracking-tighter leading-none">AI 큐레이터 상담</h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto font-medium">
          WRISTORY 프로젝트의 비전과 기술적 세부 사항을 AI 큐레이터와 함께 탐구하세요. 
          실시간으로 궁금한 점을 해결해 드립니다.
        </p>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-[3rem] overflow-hidden flex flex-col h-[600px] shadow-2xl">
        <div className="flex-1 overflow-y-auto p-8 space-y-6 scrollbar-hide">
          {messages.map((msg, i) => (
            <div key={i} className={`flex items-start gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${msg.role === 'ai' ? 'bg-blue-600/20 text-blue-400' : 'bg-slate-800 text-slate-400'}`}>
                {msg.role === 'ai' ? <Bot size={24} /> : <User size={24} />}
              </div>
              <div className={`max-w-[80%] p-5 rounded-2xl text-sm font-medium leading-relaxed ${msg.role === 'ai' ? 'bg-slate-800/50 text-slate-200' : 'bg-blue-600 text-white'}`}>
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center shrink-0">
                <Loader2 size={24} className="animate-spin" />
              </div>
              <div className="bg-slate-800/50 p-5 rounded-2xl text-sm font-medium text-slate-400 italic">
                큐레이터가 답변을 작성 중입니다...
              </div>
            </div>
          )}
        </div>

        <div className="p-6 bg-slate-950 border-t border-slate-800">
          <div className="relative flex items-center">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="질문을 입력하세요 (예: WR 토큰의 총 발행량은?)"
              className="w-full bg-slate-900 border border-slate-800 rounded-2xl py-5 px-8 pr-20 text-white focus:outline-none focus:border-blue-500 transition-all font-medium"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading}
              className="absolute right-3 p-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl transition-all disabled:opacity-50"
            >
              <Send size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicAiView;
