import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Sparkles, 
  ArrowRightLeft,
  ArrowUpRight,
  ExternalLink,
  ShieldCheck,
  Share2,
  Copy,
  Check,
  AlertCircle,
  Twitter,
  Send,
  Globe,
  Radio,
  Mail,
  RefreshCw,
  ShieldAlert,
  Github,
  Scale,
  BookOpen
} from 'lucide-react';
import LandingPageView from './views/LandingPageView';
import GuideView from './views/GuideView';
import PublicAiView from './views/PublicAiView';
import AdminDashboard from './views/AdminDashboard';
import WalletView from './views/WalletView';
import WhitepaperView from './views/WhitepaperView';
import MigrationPortalView from './views/MigrationPortalView';
import CollectionView from './views/CollectionView';
import RegulatoryResearchView from './views/RegulatoryResearchView';
import { getCuratorResponse } from './services/geminiService';
import { translations, Lang } from './lib/translations';

export type ViewMode = 'PUBLIC' | 'ADMIN';
export type PublicTab = 'HOME' | 'COLLECTIONS' | 'RESEARCH' | 'MIGRATION' | 'WHITEPAPER' | 'WALLET' | 'GUIDE' | 'AI';

declare global {
  interface Window {
    aistudio?: {
      openSelectKey?: () => Promise<void>;
      hasSelectedKey?: () => Promise<boolean>;
    };
  }
}

const App: React.FC = () => {
  const [mode, setMode] = useState<ViewMode>('PUBLIC');
  const [activeTab, setActiveTab] = useState<PublicTab>('HOME');
  const [lang, setLang] = useState<Lang>('ko');
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [hasApiKey, setHasApiKey] = useState<boolean>(true);
  const [showKeyWarning, setShowKeyWarning] = useState(false);
  const [isTestingKey, setIsTestingKey] = useState(false);
  
  // Migration Pop-up State (Closed by default to ensure clean gallery presentation)
  const [showMigrationModal, setShowMigrationModal] = useState<boolean>(false);
  const [copiedModalLink, setCopiedModalLink] = useState<boolean>(false);

  // Official Assets & URLs (Unified Token Logo across Base & Tezos)
  const OFFICIAL_LOGO_URL = 'https://amaranth-legal-sole-30.mypinata.cloud/ipfs/bafybeibiohfmkqcslplibgrn4giwrhuw4r4jqkhhdm7ozj4ufk7ch46fxe';
  const LOGO_FALLBACK = 'https://ipfs.io/ipfs/bafybeibiohfmkqcslplibgrn4giwrhuw4r4jqkhhdm7ozj4ufk7ch46fxe';
  
  // Footer WRISTORY Brand Logo
  const FOOTER_LOGO_URL = '/assets/tokens/wristory_footer_logo.png';
  const FOOTER_LOGO_FALLBACK = '/assets/tokens/wr_logo_256.png';
  
  const BASE_CONTRACT_ADDRESS = '0x9DE688b818d1755F4Daf82d25662Da1bBEdd17b7';
  const TEZOS_CONTRACT_ADDRESS = 'KT193FiCoUkthuDXcZ6Chr1J19TRoJqjWSYu';
  
  const HIGHLIGHT_BUCKWHEAT_URL = 'https://highlight.xyz/mint/01a09a4c-618c-77a8-9065-0604b9428efa';
  const OPENSEA_BUCKWHEAT_URL = 'https://opensea.io/collection/wristory-moonlit-heritage';
  const OBJKT_PIZZA_URL = 'https://objkt.com/collections/KT1JxExPQijKy3jQdE1pHJXxoeyjHtXB3uxq';
  const ZORA_URL = 'https://zora.co/@yesoklab';
  const GITHUB_URL = 'https://github.com/yesoklab/wristory-portal-v2';
  const NAVER_BLOG_URL = 'https://blog.naver.com/yesoklab';
  const RESEARCH_CLARITY_URL = 'https://github.com/yesoklab/Research-Clarity-Act';

  const t = translations[lang] || translations.ko;

  const [subTab, setSubTab] = useState<'OVERVIEW' | 'MATRIX' | 'DIAGRAM'>('OVERVIEW');

  useEffect(() => {
    checkApiKeyStatus();

    // Deep Linking: Auto-navigate to Research / Matrix from Naver Blog widget or Medium link
    try {
      const params = new URLSearchParams(window.location.search);
      const tabParam = params.get('tab')?.toUpperCase();
      const subParam = params.get('sub')?.toUpperCase();
      const langParam = params.get('lang')?.toLowerCase();
      const hash = window.location.hash.toLowerCase();

      if (langParam === 'en' || langParam === 'ko') {
        setLang(langParam as Lang);
      }

      if (tabParam === 'RESEARCH' || tabParam === 'MATRIX' || hash.includes('research') || hash.includes('matrix')) {
        setActiveTab('RESEARCH');
        if (subParam === 'MATRIX' || tabParam === 'MATRIX' || hash.includes('matrix')) {
          setSubTab('MATRIX');
        }
      } else if (tabParam === 'COLLECTIONS' || hash.includes('collection')) {
        setActiveTab('COLLECTIONS');
      } else if (tabParam === 'MIGRATION' || hash.includes('migration')) {
        setActiveTab('MIGRATION');
      } else if (tabParam === 'WHITEPAPER' || hash.includes('whitepaper')) {
        setActiveTab('WHITEPAPER');
      }
    } catch (e) {
      console.warn("URL Deep-link parse error:", e);
    }
  }, []);

  const checkApiKeyStatus = async () => {
    try {
      const isConfigured = 
        Boolean(import.meta.env.VITE_GEMINI_API_KEY) || 
        Boolean(import.meta.env.GEMINI_API_KEY) ||
        Boolean(import.meta.env.VITE_API_KEY) ||
        (window.aistudio && typeof window.aistudio.hasSelectedKey === 'function' && await window.aistudio.hasSelectedKey());
      
      setHasApiKey(Boolean(isConfigured));
      setShowKeyWarning(false);
    } catch {
      setHasApiKey(false);
      setShowKeyWarning(false);
    }
  };

  const testApiKeyConnection = async () => {
    setIsTestingKey(true);
    try {
      await getCuratorResponse("Connection test request. Respond shortly.", lang);
      alert(lang === 'ko' ? "✅ 성공! API 키가 정상 작동 중입니다." : "✅ Success! API Key is active.");
      setHasApiKey(true);
      setShowKeyWarning(false);
    } catch (e: any) {
      console.error("Connection Test Failed:", e);
      alert(lang === 'ko' ? "❌ 아직 연결되지 않았습니다." : "❌ Connection test failed.");
    } finally {
      setIsTestingKey(false);
    }
  };

  const handleCopyPortalLink = () => {
    const textToCopy = `🔄 WRISTORY ($WR) Official 1:1 Base Migration Portal\n\nFor 1,063 Tezos Holders & Generative Creators:\nBridge your Tezos WR to Base ERC-20 (1:1 Ratio Guaranteed)\n\nPortal: ${window.location.origin}\nBase Contract: ${BASE_CONTRACT_ADDRESS}`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedModalLink(true);
    setTimeout(() => setCopiedModalLink(false), 2000);
  };

  if (mode === 'ADMIN') {
    try {
      return <AdminDashboard onExit={() => setMode('PUBLIC')} />;
    } catch (e) {
      return <div className="p-20 text-center text-red-500 font-bold">Admin Dashboard Load Error.</div>;
    }
  }

  const renderPublicContent = () => {
    try {
      switch (activeTab) {
        case 'HOME': 
          return <LandingPageView lang={lang} onNavigate={(tab: any) => setActiveTab(tab)} hasApiKey={hasApiKey} />;
        case 'COLLECTIONS': 
          return <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6"><CollectionView lang={lang} /></div>;
        case 'RESEARCH': 
          return <RegulatoryResearchView lang={lang} initialSubTab={subTab} />;
        case 'MIGRATION': 
          return <MigrationPortalView lang={lang} />;
        case 'WHITEPAPER': 
          return <WhitepaperView />;
        case 'WALLET': 
          return <WalletView lang={lang} />;
        case 'GUIDE': 
          return <GuideView lang={lang} />;
        case 'AI': 
          return <PublicAiView lang={lang} />;
        default: 
          return <LandingPageView lang={lang} onNavigate={(tab: any) => setActiveTab(tab)} hasApiKey={hasApiKey} />;
      }
    } catch (e) {
      console.error("Render Error:", e);
      return <div className="p-20 text-center text-white font-bold">{lang === 'ko' ? '시스템 로딩 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.' : 'Loading error. Please refresh.'}</div>;
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0D14] text-slate-100 font-sans selection:bg-blue-500/30 overflow-x-hidden flex flex-col justify-between">
      <div>
        {/* Subtle Top Notification Bar */}
        <div className="bg-gradient-to-r from-blue-950/80 via-slate-900 to-indigo-950/80 border-b border-blue-500/20 text-slate-300 px-4 py-2 text-center text-[11px] font-bold flex flex-wrap items-center justify-center gap-2 sm:gap-3 z-50 relative">
          <span className="flex items-center gap-1.5 bg-blue-500/20 border border-blue-500/30 text-cyan-300 px-2 py-0.5 rounded-full text-[10px] uppercase tracking-wider">
            <Sparkles size={11} className="text-yellow-300" />
            {lang === 'ko' ? '공식 듀얼 메인넷' : 'Dual Mainnets'}
          </span>
          <span className="truncate">
            {lang === 'ko' 
              ? 'Base L2 (이효석 — 메밀꽃 필 무렵) × Tezos (비트코인 피자 10,000 BTC)'
              : 'Base L2 (When Buckwheat Flowers Bloom) × Tezos (Bitcoin Pizza Day)'}
          </span>
          <button 
            onClick={() => { setActiveTab('COLLECTIONS'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="text-[#00ffcc] hover:underline font-black text-[11px] flex items-center gap-0.5 ml-1"
          >
            {lang === 'ko' ? '대표작 감상' : 'View Works'} <ArrowUpRight size={12} />
          </button>
        </div>

        {showKeyWarning && (
          <div className="bg-gradient-to-r from-amber-500 to-orange-600 text-slate-950 px-4 py-2.5 text-center text-xs font-black flex flex-wrap items-center justify-center gap-4 z-[60] relative shadow-lg">
            <div className="flex items-center gap-2">
              <AlertCircle size={15} /> 
              <span>Vercel에 API_KEY 등록 후 반드시 [Redeploy]가 완료되어야 시스템이 활성화됩니다.</span>
            </div>
            <div className="flex items-center gap-2">
              <button 
                onClick={testApiKeyConnection}
                disabled={isTestingKey}
                className="px-2.5 py-1 bg-slate-950 text-white rounded text-xs font-bold flex items-center gap-1"
              >
                <RefreshCw size={11} className={isTestingKey ? "animate-spin" : ""} />
                {isTestingKey ? "테스트 중..." : "연결 테스트"}
              </button>
              <button onClick={() => setShowKeyWarning(false)} className="p-1 hover:bg-black/20 rounded">
                <X size={14} />
              </button>
            </div>
          </div>
        )}

        {/* Main Navigation Bar */}
        <nav className="border-b border-slate-800/80 bg-[#0B0D14]/95 backdrop-blur sticky top-0 z-40 px-4 sm:px-6 py-3.5">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            {/* WRISTORY Official Brand Logo */}
            <div 
              onClick={() => { setActiveTab('HOME'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl blur-xs opacity-60 group-hover:opacity-100 transition duration-300" />
                <img 
                  src={OFFICIAL_LOGO_URL} 
                  alt="WRISTORY" 
                  className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl object-cover border border-white/20 shadow-md bg-slate-950"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = LOGO_FALLBACK;
                  }}
                />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-lg sm:text-xl font-black italic tracking-tighter text-white uppercase leading-none group-hover:text-cyan-300 transition-colors">
                  WRISTORY
                </span>
                <span className="text-[8px] font-black text-[#00ffcc] tracking-[0.2em] uppercase mt-0.5">
                  Base & Tezos Dual
                </span>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-5 lg:gap-7">
              <button 
                onClick={() => setActiveTab('HOME')} 
                className={`text-xs font-bold transition-colors whitespace-nowrap ${activeTab === 'HOME' ? 'text-cyan-400 font-extrabold' : 'text-slate-300 hover:text-white'}`}
              >
                {t.nav.home}
              </button>
              <button 
                onClick={() => setActiveTab('COLLECTIONS')} 
                className={`text-xs font-bold transition-colors whitespace-nowrap flex items-center gap-1.5 ${activeTab === 'COLLECTIONS' ? 'text-amber-400 font-extrabold' : 'text-slate-300 hover:text-white'}`}
              >
                <Sparkles size={13} className="text-yellow-300" />
                {t.nav.gallery}
              </button>
              <button 
                onClick={() => setActiveTab('RESEARCH')} 
                className={`text-xs font-black transition-all flex items-center gap-1.5 px-3 py-1.5 rounded-xl whitespace-nowrap ${activeTab === 'RESEARCH' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30' : 'text-indigo-300 bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/30'}`}
              >
                <Scale size={13} className="text-indigo-300" />
                {t.nav.research}
              </button>
              <button 
                onClick={() => setActiveTab('MIGRATION')} 
                className={`text-xs font-bold transition-all flex items-center gap-1.5 px-3 py-1.5 rounded-xl whitespace-nowrap ${activeTab === 'MIGRATION' ? 'bg-blue-600 text-white shadow-lg' : 'text-cyan-300 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30'}`}
              >
                <ArrowRightLeft size={13} className="text-cyan-300" />
                {t.nav.migration}
              </button>
              <button 
                onClick={() => setActiveTab('WHITEPAPER')} 
                className={`text-xs font-bold transition-colors whitespace-nowrap ${activeTab === 'WHITEPAPER' ? 'text-blue-400 font-extrabold' : 'text-slate-300 hover:text-white'}`}
              >
                {t.nav.whitepaper}
              </button>
              <a 
                href={HIGHLIGHT_BUCKWHEAT_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs font-black text-emerald-300 hover:text-emerald-200 transition-colors flex items-center gap-1 whitespace-nowrap bg-emerald-500/10 px-3 py-1.5 rounded-xl border border-emerald-500/30 hover:bg-emerald-500/20 shadow-sm"
              >
                <Sparkles size={12} className="text-yellow-300" />
                <span>Highlight {lang === 'ko' ? '민팅' : 'Mint'}</span>
                <ExternalLink size={11} />
              </a>
            </div>

            {/* Right Controls: Language Switcher & Mobile Menu Toggle */}
            <div className="flex items-center gap-3">
              {/* Language Switcher (KO / EN) */}
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-0.5 flex">
                <button 
                  onClick={() => setLang('ko')} 
                  className={`px-2.5 py-1 text-[11px] font-black rounded-lg transition-all ${lang === 'ko' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'}`}
                  title="한국어로 전환"
                >
                  KO
                </button>
                <button 
                  onClick={() => setLang('en')} 
                  className={`px-2.5 py-1 text-[11px] font-black rounded-lg transition-all ${lang === 'en' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'}`}
                  title="Switch to English"
                >
                  EN
                </button>
              </div>

              {/* Admin Mode (Desktop Only) */}
              <button 
                onClick={() => setMode('ADMIN')}
                className="hidden xl:flex items-center gap-1.5 px-2.5 py-1.5 bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800 rounded-xl text-xs font-bold transition-all"
                title={t.nav.admin}
              >
                <ShieldAlert size={13} />
                <span>{t.nav.admin}</span>
              </button>

              {/* Mobile Menu Hamburger */}
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-slate-300 hover:text-white md:hidden rounded-lg bg-slate-900 border border-slate-800"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile Dropdown Navigation Menu */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-slate-800 mt-3 pt-3 pb-2 space-y-2.5 flex flex-col animate-in fade-in">
              <div className="grid grid-cols-2 gap-2">
                <button 
                  onClick={() => { setActiveTab('HOME'); setIsMenuOpen(false); }} 
                  className={`py-2.5 px-3 rounded-xl text-xs font-bold text-left transition-all ${activeTab === 'HOME' ? 'bg-blue-600/20 text-cyan-400 border border-blue-500/30' : 'bg-slate-900 text-slate-300'}`}
                >
                  {t.nav.home}
                </button>
                <button 
                  onClick={() => { setActiveTab('COLLECTIONS'); setIsMenuOpen(false); }} 
                  className={`py-2.5 px-3 rounded-xl text-xs font-bold text-left transition-all ${activeTab === 'COLLECTIONS' ? 'bg-amber-600/20 text-amber-400 border border-amber-500/30' : 'bg-slate-900 text-slate-300'}`}
                >
                  <Sparkles size={12} className="inline mr-1 text-yellow-300" />
                  {t.nav.gallery}
                </button>
                <button 
                  onClick={() => { setActiveTab('RESEARCH'); setIsMenuOpen(false); }} 
                  className={`py-2.5 px-3 rounded-xl text-xs font-bold text-left transition-all ${activeTab === 'RESEARCH' ? 'bg-indigo-600/20 text-indigo-400 border border-indigo-500/30' : 'bg-slate-900 text-indigo-300'}`}
                >
                  <Scale size={12} className="inline mr-1 text-indigo-400" />
                  {t.nav.research}
                </button>
                <button 
                  onClick={() => { setActiveTab('MIGRATION'); setIsMenuOpen(false); }} 
                  className={`py-2.5 px-3 rounded-xl text-xs font-bold text-left transition-all ${activeTab === 'MIGRATION' ? 'bg-blue-600/20 text-cyan-300 border border-blue-500/30' : 'bg-slate-900 text-blue-300'}`}
                >
                  <ArrowRightLeft size={12} className="inline mr-1 text-cyan-300" />
                  {t.nav.migration}
                </button>
              </div>

              {/* Secondary Navigation Row */}
              <div className="flex items-center justify-around text-xs font-medium text-slate-400 py-1 border-t border-slate-800/60">
                <button onClick={() => { setActiveTab('WHITEPAPER'); setIsMenuOpen(false); }} className="py-1 hover:text-white">
                  {t.nav.whitepaper}
                </button>
                <span>•</span>
                <button onClick={() => { setActiveTab('WALLET'); setIsMenuOpen(false); }} className="py-1 hover:text-white">
                  {t.nav.wallet}
                </button>
                <span>•</span>
                <button onClick={() => { setActiveTab('GUIDE'); setIsMenuOpen(false); }} className="py-1 hover:text-white">
                  {t.nav.guide}
                </button>
                <span>•</span>
                <button onClick={() => { setActiveTab('AI'); setIsMenuOpen(false); }} className="py-1 text-cyan-400 hover:text-cyan-300 flex items-center gap-1">
                  <Sparkles size={11} /> AI
                </button>
              </div>

              {/* Mobile Quick Action Link */}
              <a 
                href={HIGHLIGHT_BUCKWHEAT_URL}
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-emerald-950/40 to-teal-950/30 border border-emerald-500/40 text-emerald-300 text-xs font-black flex items-center justify-between"
              >
                <span className="flex items-center gap-1.5">
                  <Sparkles size={13} className="text-yellow-300" /> Highlight 메밀꽃 필 무렵 민팅
                </span>
                <ExternalLink size={12} />
              </a>
            </div>
          )}
        </nav>

        {/* Main Content Area */}
        <main className="min-h-[calc(100vh-280px)]">{renderPublicContent()}</main>
      </div>

      {/* Migration Notice Modal (When requested by user) */}
      {showMigrationModal && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#0F111A] border border-blue-500/40 rounded-3xl max-w-xl w-full p-6 sm:p-7 space-y-4 shadow-2xl relative animate-in zoom-in-95 duration-200 text-left">
            <button 
              onClick={() => setShowMigrationModal(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800"
            >
              <X size={18} />
            </button>

            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-blue-600/20 text-cyan-300 border border-blue-500/30 flex items-center justify-center">
                <ArrowRightLeft size={18} />
              </div>
              <div>
                <span className="text-[10px] text-cyan-400 font-black uppercase tracking-wider">
                  WRISTORY Official Migration
                </span>
                <h3 className="text-base sm:text-lg font-black text-white">
                  {lang === 'ko' ? 'Base 체인 1:1 토큰 교환 안내' : 'Base 1:1 Token Migration Notice'}
                </h3>
              </div>
            </div>

            <div className="text-xs text-slate-300 space-y-2.5 leading-relaxed bg-slate-950/70 p-4 rounded-2xl border border-slate-800">
              <p>
                {lang === 'ko' 
                  ? '테조스(Tezos) 1,063명의 홀더 및 OBJKT 창작자를 위해 1 Tezos WR = 1 Base WR (1:1 비율)로 수수료 없이 안전한 교환을 지원합니다.'
                  : 'Unconditional 1:1 migration (1 Tezos WR = 1 Base WR) for all 1,063 Tezos holders and OBJKT generative artists.'}
              </p>
              <ul className="list-disc pl-4 space-y-1 text-slate-400 text-[11px]">
                <li><strong>{lang === 'ko' ? '교환 비율:' : 'Swap Parity:'}</strong> 1:1 (0% Fee)</li>
                <li><strong>{lang === 'ko' ? 'Base 컨트랙트:' : 'Base Contract:'}</strong> <code className="text-cyan-300 font-mono">{BASE_CONTRACT_ADDRESS}</code></li>
              </ul>
            </div>

            <div className="flex gap-2 pt-1">
              <button
                onClick={() => {
                  setShowMigrationModal(false);
                  setActiveTab('MIGRATION');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="flex-1 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1.5"
              >
                <ArrowRightLeft size={13} /> 
                {lang === 'ko' ? '마이그레이션 포털 이동' : 'Enter Migration Portal'}
              </button>
              <button
                onClick={handleCopyPortalLink}
                className="px-3.5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 border border-slate-700"
              >
                {copiedModalLink ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
                <span>{copiedModalLink ? (lang === 'ko' ? '복사됨' : 'Copied') : (lang === 'ko' ? '링크 복사' : 'Copy Link')}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 5. Minimal, Ultra-Clean & Sophisticated Footer */}
      <footer className="border-t border-slate-800/80 bg-[#07090E] py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center space-y-6">
          {/* Logo & Project Identity */}
          <div className="flex items-center gap-2.5">
            <img 
              src={FOOTER_LOGO_URL} 
              alt="WRISTORY" 
              className="w-7 h-7 rounded-lg object-cover border border-white/20 shadow-sm"
              onError={(e) => {
                (e.target as HTMLImageElement).src = FOOTER_LOGO_FALLBACK;
              }}
            />
            <span className="text-base font-black italic tracking-tight text-white uppercase">
              WRISTORY
            </span>
          </div>

          {/* Curated Core Official Channels */}
          <div className="flex flex-wrap justify-center items-center gap-2.5 sm:gap-3 text-xs">
            <a 
              href={HIGHLIGHT_BUCKWHEAT_URL} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-3 py-1.5 bg-emerald-950/40 hover:bg-emerald-900/60 text-emerald-300 border border-emerald-500/30 rounded-xl font-bold transition-all flex items-center gap-1.5 active:scale-95"
            >
              <Sparkles size={12} className="text-yellow-300" />
              <span>Highlight (Base)</span>
              <ExternalLink size={11} />
            </a>
            <a 
              href={OPENSEA_BUCKWHEAT_URL} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-3 py-1.5 bg-blue-950/40 hover:bg-blue-900/60 text-blue-300 border border-blue-500/30 rounded-xl font-bold transition-all flex items-center gap-1.5 active:scale-95"
            >
              <span>OpenSea</span>
              <ExternalLink size={11} />
            </a>
            <a 
              href={OBJKT_PIZZA_URL} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-3 py-1.5 bg-amber-950/40 hover:bg-amber-900/60 text-amber-300 border border-amber-500/30 rounded-xl font-bold transition-all flex items-center gap-1.5 active:scale-95"
            >
              <span>OBJKT (Tezos)</span>
              <ExternalLink size={11} />
            </a>
            <a 
              href="https://x.com/wakk5252" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700/60 rounded-xl font-bold transition-all flex items-center gap-1.5 active:scale-95"
            >
              <Twitter size={12} className="text-sky-400" />
              <span>X (Twitter)</span>
              <ExternalLink size={11} />
            </a>
            <a 
              href="https://medium.com/@wakk5252" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700/60 rounded-xl font-bold transition-all flex items-center gap-1.5 active:scale-95"
            >
              <BookOpen size={12} className="text-amber-400" />
              <span>Medium</span>
              <ExternalLink size={11} />
            </a>
            <a 
              href={NAVER_BLOG_URL} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-emerald-400 border border-slate-700/60 rounded-xl font-bold transition-all flex items-center gap-1.5 active:scale-95"
            >
              <span>네이버 블로그</span>
              <ExternalLink size={11} />
            </a>
            <a 
              href={GITHUB_URL} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700/60 rounded-xl font-bold transition-all flex items-center gap-1.5 active:scale-95"
            >
              <Github size={12} />
              <span>GitHub</span>
              <ExternalLink size={11} />
            </a>
            <a 
              href="mailto:yesoklab@gmail.com" 
              className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-cyan-300 border border-slate-700/60 rounded-xl font-bold transition-all flex items-center gap-1.5 active:scale-95"
              title="Official Project Contact"
            >
              <Mail size={12} className="text-cyan-400" />
              <span className="font-mono">yesoklab@gmail.com</span>
            </a>
          </div>

          {/* Clean Contract Badges & Mission Statement */}
          <div className="space-y-2 text-slate-400 text-[11px] leading-relaxed max-w-2xl mx-auto">
            <p className="text-slate-300 font-medium">{t.footer.mission}</p>
            
            {/* Perfectly Aligned Dual-Chain Contract Badges */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 pt-1 font-mono text-[11px]">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800 shadow-sm w-full sm:w-auto justify-center">
                <span className="text-cyan-400 font-black">Base:</span>
                <span className="text-[#00ffcc] font-bold select-all tracking-tight">{BASE_CONTRACT_ADDRESS}</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800 shadow-sm w-full sm:w-auto justify-center">
                <span className="text-amber-400 font-black">Tezos:</span>
                <span className="text-slate-300 font-bold select-all tracking-tight">{TEZOS_CONTRACT_ADDRESS}</span>
              </div>
            </div>

            <p className="text-slate-500 pt-1 text-[10px]">{t.footer.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
