import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Sparkles, 
  ArrowRightLeft,
  ArrowUpRight,
  ExternalLink,
  ShieldCheck,
  Camera,
  Share2,
  Copy,
  Check,
  AlertCircle,
  FileText,
  HelpCircle,
  Wallet,
  Twitter,
  Send,
  Globe,
  Radio,
  Gamepad2,
  Mail,
  RefreshCw,
  ShieldAlert,
  Github
} from 'lucide-react';
import LandingPageView from './views/LandingPageView';
import GuideView from './views/GuideView';
import PublicAiView from './views/PublicAiView';
import AdminDashboard from './views/AdminDashboard';
import WalletView from './views/WalletView';
import WhitepaperView from './views/WhitepaperView';
import MigrationPortalView from './views/MigrationPortalView';
import { getCuratorResponse } from './services/geminiService';

export type ViewMode = 'PUBLIC' | 'ADMIN';
export type PublicTab = 'HOME' | 'MIGRATION' | 'WHITEPAPER' | 'WALLET' | 'GUIDE' | 'AI';

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
  const [lang, setLang] = useState<'ko' | 'en'>('ko');
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [hasApiKey, setHasApiKey] = useState<boolean>(true);
  const [showKeyWarning, setShowKeyWarning] = useState(false);
  const [isTestingKey, setIsTestingKey] = useState(false);
  
  // Migration Pop-up State with Korean & English Toggle
  const [showMigrationModal, setShowMigrationModal] = useState<boolean>(true);
  const [modalLang, setModalLang] = useState<'ko' | 'en'>('ko');
  const [copiedModalLink, setCopiedModalLink] = useState<boolean>(false);

  const BASE_CONTRACT_ADDRESS = '0x9DE688b818d1755F4Daf82d25662Da1bBEdd17b7';
  const TEZOS_CONTRACT_ADDRESS = 'KT193FiCoUkthuDXcZ6Chr1J19TRoJqjWSYu';
  const GITHUB_URL = 'https://github.com/yesoklab/wristory-portal-v2';

  useEffect(() => {
    checkApiKeyStatus();
  }, []);

  const checkApiKeyStatus = async () => {
    try {
      const isConfigured = 
        Boolean(import.meta.env.VITE_GEMINI_API_KEY) || 
        Boolean(import.meta.env.GEMINI_API_KEY) ||
        (window.aistudio && typeof window.aistudio.hasSelectedKey === 'function' && await window.aistudio.hasSelectedKey());
      
      setHasApiKey(Boolean(isConfigured));
      setShowKeyWarning(!isConfigured);
    } catch {
      setHasApiKey(false);
      setShowKeyWarning(true);
    }
  };

  const testApiKeyConnection = async () => {
    setIsTestingKey(true);
    try {
      await getCuratorResponse("Connection test request. Respond shortly.", "en");
      alert("✅ 성공! API 키가 정상적으로 작동하고 있습니다.");
      setHasApiKey(true);
      setShowKeyWarning(false);
    } catch (e: any) {
      console.error("Connection Test Failed:", e);
      alert(`❌ 아직 연결되지 않았습니다.\n\n원인: Vercel 배포 시점에 키가 포함되지 않았을 수 있습니다.\n해결: Vercel 대시보드 [Deployments]에서 'Redeploy'를 실행해 주세요.`);
    } finally {
      setIsTestingKey(false);
    }
  };

  const handleCopyPortalLink = () => {
    const textToCopy = `🔄 WRISTORY ($WR) Official 1:1 Base Migration Portal\n\nFor 1,063 Tezos Holders & FXHASH/OBJKT Creators:\nBridge your Tezos WR to Base ERC-20 (1:1 Ratio Guaranteed)\n\nPortal: ${window.location.origin}\nBase Contract: ${BASE_CONTRACT_ADDRESS}`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedModalLink(true);
    setTimeout(() => setCopiedModalLink(false), 2000);
  };

  if (mode === 'ADMIN') {
    try {
      return <AdminDashboard onExit={() => setMode('PUBLIC')} />;
    } catch (e) {
      return <div className="p-20 text-center text-red-500 font-bold">Admin Dashboard Load Error. Please refresh.</div>;
    }
  }

  const renderPublicContent = () => {
    try {
      switch (activeTab) {
        case 'HOME': return <LandingPageView lang={lang} onNavigate={(tab: any) => setActiveTab(tab)} hasApiKey={hasApiKey} />;
        case 'MIGRATION': return <MigrationPortalView lang={lang} />;
        case 'WHITEPAPER': return <WhitepaperView />;
        case 'WALLET': return <WalletView lang={lang} />;
        case 'GUIDE': return <GuideView lang={lang} />;
        case 'AI': return <PublicAiView lang={lang} />;
        default: return <LandingPageView lang={lang} onNavigate={(tab: any) => setActiveTab(tab)} hasApiKey={hasApiKey} />;
      }
    } catch (e) {
      console.error("Render Error:", e);
      return <div className="p-20 text-center text-white font-bold">시스템 로딩 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.</div>;
    }
  };

  return (
    <div className="min-h-screen bg-[#0F111A] text-slate-100 font-sans selection:bg-blue-500/30 overflow-x-hidden">
      {/* Top Migration Announcement Banner */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white px-4 py-2.5 text-center text-xs font-bold flex flex-wrap items-center justify-center gap-2 sm:gap-3 shadow-lg z-50 relative">
        <span className="flex items-center gap-1.5 bg-black/30 px-2 py-0.5 rounded-full text-[10px] uppercase tracking-wider">
          <ArrowRightLeft size={12} className="animate-spin text-[#00ffcc]" /> Notice
        </span>
        <span className="truncate">
          [Announcement] WRISTORY ($WR) Base L2 Migration & 1:1 Token Swap for 1,063 Tezos & FXHASH Holders
        </span>
        <button 
          onClick={() => { setActiveTab('MIGRATION'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="underline hover:text-cyan-300 font-black text-xs shrink-0 flex items-center gap-0.5 ml-1"
        >
          {lang === 'ko' ? '포털 바로가기' : 'Portal'} <ArrowUpRight size={13} />
        </button>
      </div>

      {showKeyWarning && (
        <div className="bg-gradient-to-r from-amber-500 to-orange-600 text-slate-950 px-4 py-3 text-center text-xs font-black flex flex-wrap items-center justify-center gap-4 z-[60] relative shadow-lg">
          <div className="flex items-center gap-2">
            <AlertCircle size={16} /> 
            <span>Vercel에 API_KEY 등록 후 반드시 <b>[재배포]</b>가 완료되어야 시스템이 활성화됩니다!</span>
          </div>
          <div className="flex items-center gap-2">
            <button 
              onClick={testApiKeyConnection}
              disabled={isTestingKey}
              className="px-3 py-1 bg-slate-950 text-white hover:bg-slate-900 rounded-lg text-xs font-bold flex items-center gap-1 transition-all"
            >
              <RefreshCw size={12} className={isTestingKey ? "animate-spin" : ""} />
              {isTestingKey ? "연결 테스트 중..." : "지금 연결 테스트"}
            </button>
            <button 
              onClick={() => setShowKeyWarning(false)}
              className="p-1 hover:bg-black/20 rounded-md"
            >
              <X size={14} />
            </button>
          </div>
        </div>
      )}

      {/* Main Navigation */}
      <nav className="border-b border-slate-800/80 bg-[#0F111A]/95 backdrop-blur sticky top-0 z-40 px-4 sm:px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div 
            onClick={() => setActiveTab('HOME')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-blue-600 rounded-xl flex items-center justify-center font-black italic text-base sm:text-lg shadow-lg group-hover:scale-105 transition-transform text-white">
              W
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-black italic tracking-tighter text-white uppercase leading-none">WRISTORY</span>
              <span className="text-[7px] sm:text-[8px] font-black text-[#00ffcc] tracking-[0.2em] uppercase">Base & Tezos Dual</span>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-6">
            <button 
              onClick={() => setActiveTab('HOME')} 
              className={`text-xs font-bold transition-colors whitespace-nowrap ${activeTab === 'HOME' ? 'text-blue-400 font-extrabold' : 'text-slate-400 hover:text-white'}`}
            >
              홈 / Home
            </button>
            <button 
              onClick={() => setActiveTab('MIGRATION')} 
              className={`text-xs font-bold transition-all flex items-center gap-1.5 px-3 py-1.5 rounded-xl whitespace-nowrap ${activeTab === 'MIGRATION' ? 'bg-blue-600 text-white shadow-lg' : 'text-cyan-300 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30'}`}
            >
              <ArrowRightLeft size={14} className="text-cyan-300 animate-pulse" /> 1:1 Base Migration Portal
            </button>
            <button 
              onClick={() => setActiveTab('WHITEPAPER')} 
              className={`text-xs font-bold transition-colors whitespace-nowrap ${activeTab === 'WHITEPAPER' ? 'text-blue-400 font-extrabold' : 'text-slate-400 hover:text-white'}`}
            >
              백서 / Whitepaper
            </button>
            <button 
              onClick={() => setActiveTab('WALLET')} 
              className={`text-xs font-bold transition-colors whitespace-nowrap ${activeTab === 'WALLET' ? 'text-blue-400 font-extrabold' : 'text-slate-400 hover:text-white'}`}
            >
              지갑 / Wallet
            </button>
            <button 
              onClick={() => setActiveTab('GUIDE')} 
              className={`text-xs font-bold transition-colors whitespace-nowrap ${activeTab === 'GUIDE' ? 'text-blue-400 font-extrabold' : 'text-slate-400 hover:text-white'}`}
            >
              가이드 / Guide
            </button>
            <button 
              onClick={() => setActiveTab('AI')} 
              className={`text-xs font-bold transition-colors flex items-center gap-1 whitespace-nowrap ${activeTab === 'AI' ? 'text-blue-400 font-extrabold' : 'text-slate-400 hover:text-white'}`}
            >
              <Sparkles size={14} className="text-blue-400" /> AI 큐레이터
            </button>
          </div>

          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-0.5 flex">
              <button 
                onClick={() => setLang('ko')} 
                className={`px-2.5 py-1 text-[11px] font-black rounded-lg transition-all ${lang === 'ko' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'}`}
              >
                KO
              </button>
              <button 
                onClick={() => setLang('en')} 
                className={`px-2.5 py-1 text-[11px] font-black rounded-lg transition-all ${lang === 'en' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'}`}
              >
                EN
              </button>
            </div>

            <button
              onClick={() => setShowMigrationModal(true)}
              className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-bold transition-all border border-slate-700"
              title="마이그레이션 공지 팝업 다시보기"
            >
              <Share2 size={13} className="text-blue-400" /> 공지 팝업
            </button>

            <button 
              onClick={() => setMode('ADMIN')}
              className="hidden xl:flex items-center gap-2 px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800 rounded-xl text-xs font-bold transition-all"
            >
              <ShieldAlert size={14} /> 관리자
            </button>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-slate-400 hover:text-white md:hidden"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-slate-800 mt-4 pt-4 pb-2 space-y-2 flex flex-col animate-in fade-in">
            <button 
              onClick={() => { setActiveTab('HOME'); setIsMenuOpen(false); }} 
              className={`text-base font-bold text-left py-2 ${activeTab === 'HOME' ? 'text-blue-400' : 'text-slate-300'}`}
            >
              홈 (Home)
            </button>
            <button 
              onClick={() => { setActiveTab('MIGRATION'); setIsMenuOpen(false); }} 
              className={`text-base font-bold text-left py-2 flex items-center gap-2 ${activeTab === 'MIGRATION' ? 'text-cyan-400' : 'text-blue-300'}`}
            >
              <ArrowRightLeft size={18} /> Base 마이그레이션 포털
            </button>
            <button 
              onClick={() => { setActiveTab('WHITEPAPER'); setIsMenuOpen(false); }} 
              className={`text-base font-bold text-left py-2 ${activeTab === 'WHITEPAPER' ? 'text-blue-400' : 'text-slate-300'}`}
            >
              백서 (Whitepaper)
            </button>
            <button 
              onClick={() => { setActiveTab('WALLET'); setIsMenuOpen(false); }} 
              className={`text-base font-bold text-left py-2 ${activeTab === 'WALLET' ? 'text-blue-400' : 'text-slate-300'}`}
            >
              지갑 (Wallet)
            </button>
            <button 
              onClick={() => { setActiveTab('GUIDE'); setIsMenuOpen(false); }} 
              className={`text-base font-bold text-left py-2 ${activeTab === 'GUIDE' ? 'text-blue-400' : 'text-slate-300'}`}
            >
              가이드 (Guide)
            </button>
            <button 
              onClick={() => { setActiveTab('AI'); setIsMenuOpen(false); }} 
              className="text-base font-bold text-blue-400 flex justify-between items-center py-2"
            >
              <span>AI 큐레이터</span>
              <Sparkles size={16} />
            </button>
            <div className="h-[1px] bg-slate-800 my-1" />
            <button 
              onClick={() => { setMode('ADMIN'); setIsMenuOpen(false); }} 
              className="w-full py-3 bg-blue-600 text-white rounded-xl font-bold flex items-center justify-center gap-2 text-sm shadow"
            >
              <ShieldAlert size={16} /> 관리자 모드
            </button>
          </div>
        )}
      </nav>

      {/* Main Content Area */}
      <main className="min-h-[calc(100vh-280px)]">{renderPublicContent()}</main>

      {/* Initial Migration Notice Popup Modal (Korean & English Support with Snapshot & Direct Link) */}
      {showMigrationModal && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#0F111A] border border-blue-500/40 rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-5 shadow-2xl relative animate-in zoom-in-95 duration-200 text-left">
            <button 
              onClick={() => setShowMigrationModal(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800"
            >
              <X size={20} />
            </button>

            {/* Header & Language Switch */}
            <div className="flex flex-wrap items-center justify-between gap-3 pr-8">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-2xl bg-blue-600/20 text-blue-400 border border-blue-500/30 flex items-center justify-center">
                  <ArrowRightLeft size={20} className="text-cyan-300" />
                </div>
                <div>
                  <span className="text-[10px] text-cyan-400 font-black uppercase tracking-widest">
                    {modalLang === 'ko' ? '공식 공지사항' : 'Official Migration Notice'}
                  </span>
                  <h3 className="text-lg sm:text-xl font-black text-white">
                    {modalLang === 'ko' ? 'WRISTORY($WR) Base 체인 확장 및 1:1 마이그레이션 안내' : 'WRISTORY ($WR) Base L2 Migration & 1:1 Swap'}
                  </h3>
                </div>
              </div>

              {/* Language Switch inside Modal */}
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-1 flex">
                <button
                  onClick={() => setModalLang('ko')}
                  className={`px-3 py-1 text-xs font-black rounded-lg transition-all ${modalLang === 'ko' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'}`}
                >
                  한국어 (KR)
                </button>
                <button
                  onClick={() => setModalLang('en')}
                  className={`px-3 py-1 text-xs font-black rounded-lg transition-all ${modalLang === 'en' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'}`}
                >
                  English (EN)
                </button>
              </div>
            </div>

            {/* Modal Body: Korean vs English */}
            {modalLang === 'ko' ? (
              <div className="text-xs text-slate-300 space-y-3.5 leading-relaxed max-h-[55vh] overflow-y-auto pr-1">
                <p>
                  안녕하세요, <strong>WRISTORY($WR) 1,063명의 홀더 및 FXHASH/OBJKT 창작자 여러분</strong>.<br />
                  테조스(Tezos) 메인넷 위에서 든든하게 지켜온 우리의 디지털 헤리티지가 이제 <strong>이더리움 레이어 2(Base) 체인</strong>으로의 위대한 확장을 시작합니다.
                </p>
                <p>
                  글로벌 유동성과 더 많은 컬렉터들에게 프로젝트를 선보이기 위해, $WR 토큰은 Base 메인넷에 안착하여 <strong>Uniswap v4 (ETH / WR, 0.25% 수수료 등급, 풀 #2953119)</strong> 공식 집중 유동성 풀이 가동되었습니다. (56,801 WR = 1 ETH)
                </p>
                
                {/* Core Box */}
                <div className="bg-slate-900/90 border border-slate-800 p-4 rounded-2xl space-y-2.5">
                  <div className="flex items-center justify-between">
                    <p className="font-black text-white text-xs flex items-center gap-1.5">
                      <ShieldCheck size={15} className="text-[#00ffcc]" />
                      🔄 1:1 토큰 교환 (마이그레이션) 핵심 정보
                    </p>
                    <span className="text-[10px] px-2 py-0.5 bg-blue-500/20 text-blue-300 rounded font-mono">1,063 Holders Snapshot</span>
                  </div>
                  <ul className="list-disc pl-4 space-y-1 text-slate-400 text-[11px]">
                    <li><strong>교환 비율:</strong> 1 Tezos WR = 1 Base WR (1:1 정확히 일치, 수수료 0%)</li>
                    <li><strong>총발행량:</strong> 51,169,148 WR 철저한 연동 관리 (추가 발행 절대 없음)</li>
                    <li><strong>DEX 거래:</strong> <a href="https://app.uniswap.org/positions/v4/base/2953119" target="_blank" rel="noopener noreferrer" className="text-emerald-400 font-bold hover:underline">Uniswap v4 Base (Position #2953119)</a></li>
                    <li><strong>Base 컨트랙트:</strong> <code className="text-cyan-300 font-mono font-bold select-all">0x9DE688b818d1755F4Daf82d25662Da1bBEdd17b7</code></li>
                  </ul>
                </div>

                {/* Creator Connection Box */}
                <div className="bg-purple-950/20 border border-purple-500/30 p-3 rounded-xl flex items-center justify-between text-[11px]">
                  <div className="flex items-center gap-2 text-purple-300">
                    <Camera size={14} />
                    <span><b>OBJKT & FXHASH 창작자 직통:</b> tz 지갑 주소로 간편 신청 가능</span>
                  </div>
                  <a href="https://objkt.com/profile/tz1eXLHqJXBnp4VFGwFDfMGWcLYVgBUYnA16/created" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline font-bold flex items-center gap-1">
                    OBJKT <ExternalLink size={10} />
                  </a>
                </div>
              </div>
            ) : (
              <div className="text-xs text-slate-300 space-y-3.5 leading-relaxed max-h-[55vh] overflow-y-auto pr-1">
                <p>
                  Dear <strong>1,063 Tezos WRISTORY Holders & FXHASH / OBJKT Generative Creators</strong>,<br />
                  Our heritage ecosystem on Tezos is officially expanding to <strong>Ethereum Layer-2 (Base Mainnet)</strong> to unlock global decentralized liquidity.
                </p>
                <p>
                  $WR has successfully deployed on Base with active <strong>Uniswap v4 concentrated liquidity (ETH / WR pair, 0.25% fee tier, Position #2953119)</strong> at 56,801 WR = 1 ETH. We are offering an unconditional <strong>1:1 Migration (1 Tezos WR = 1 Base WR)</strong> for all existing community members.
                </p>

                {/* Core Box (EN) */}
                <div className="bg-slate-900/90 border border-slate-800 p-4 rounded-2xl space-y-2.5">
                  <div className="flex items-center justify-between">
                    <p className="font-black text-white text-xs flex items-center gap-1.5">
                      <ShieldCheck size={15} className="text-[#00ffcc]" />
                      🔄 1:1 Token Migration & Snapshot Guarantee
                    </p>
                    <span className="text-[10px] px-2 py-0.5 bg-blue-500/20 text-blue-300 rounded font-mono">1,063 Wallets Synced</span>
                  </div>
                  <ul className="list-disc pl-4 space-y-1 text-slate-400 text-[11px]">
                    <li><strong>Swap Parity:</strong> 1 Tezos WR = 1 Base WR (Strict 1:1 Ratio, 0% Fee)</li>
                    <li><strong>Total Supply:</strong> 51,169,148 WR strictly capped across all chains (Zero Inflation)</li>
                    <li><strong>Uniswap v4:</strong> <a href="https://app.uniswap.org/positions/v4/base/2953119" target="_blank" rel="noopener noreferrer" className="text-emerald-400 font-bold hover:underline">Base Position #2953119 (0.25%)</a></li>
                    <li><strong>Base Contract:</strong> <code className="text-cyan-300 font-mono font-bold select-all">0x9DE688b818d1755F4Daf82d25662Da1bBEdd17b7</code></li>
                  </ul>
                </div>

                {/* Creator Connection Box (EN) */}
                <div className="bg-purple-950/20 border border-purple-500/30 p-3 rounded-xl flex items-center justify-between text-[11px]">
                  <div className="flex items-center gap-2 text-purple-300">
                    <Camera size={14} />
                    <span><b>FXHASH & OBJKT Artists:</b> Submit your Tezos address directly to bridge.</span>
                  </div>
                  <a href="https://objkt.com/profile/tz1eXLHqJXBnp4VFGwFDfMGWcLYVgBUYnA16/created" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline font-bold flex items-center gap-1">
                    OBJKT Profile <ExternalLink size={10} />
                  </a>
                </div>
              </div>
            )}

            {/* Bottom Actions: Go to Portal + Copy Share Link + Close */}
            <div className="flex flex-wrap gap-2.5 pt-2">
              <button
                onClick={() => {
                  setShowMigrationModal(false);
                  setActiveTab('MIGRATION');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="flex-1 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1.5 shadow-lg shadow-blue-600/30 active:scale-98"
              >
                <ArrowRightLeft size={14} /> 
                {modalLang === 'ko' ? '1:1 마이그레이션 포털 바로가기' : 'Enter 1:1 Migration Portal'}
              </button>

              <button
                onClick={handleCopyPortalLink}
                className="px-4 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 border border-slate-700 active:scale-95"
                title="공지 링크 복사하기"
              >
                {copiedModalLink ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                <span>{copiedModalLink ? (modalLang === 'ko' ? '복사됨' : 'Copied') : (modalLang === 'ko' ? '링크 복사' : 'Copy Link')}</span>
              </button>

              <button
                onClick={() => setShowMigrationModal(false)}
                className="px-4 py-3 bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white rounded-xl text-xs font-bold transition-all"
              >
                {modalLang === 'ko' ? '닫기' : 'Close'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-slate-800/80 bg-[#0B0D14] py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center space-y-6">
           <div className="flex flex-wrap justify-center items-center gap-4 text-slate-500">
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors p-2" title="GitHub"><Github size={20} /></a>
              <a href="https://x.com/wakk5252" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors p-2" title="Twitter"><Twitter size={20} /></a>
              <a href="https://t.me/Yes_OkLab" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors p-2" title="Telegram"><Send size={20} /></a>
              <a href="https://blog.naver.com/yesoklab/224380104130" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors p-2" title="Naver Blog"><Globe size={20} /></a>
              <a href="https://www.reddit.com/user/cocoon96/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors p-2" title="Reddit"><Share2 size={20} /></a>
              <a href="https://farcaster.xyz/cocoon9611" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors p-2" title="Farcaster"><Radio size={20} /></a>
              <a href="mailto:YesOkLab@gmail.com" className="hover:text-white transition-colors p-2" title="Gmail"><Mail size={20} /></a>
              <div className="hover:text-white transition-colors p-2 cursor-help" title="Discord: cocoon5547 (#WRISTORY_NFT)"><Gamepad2 size={20} /></div>
           </div>
           
           <p className="text-slate-500 text-xs max-w-lg leading-relaxed">
             © 2026 YesOkLab | WRISTORY Project. <br/>
             Base Contract: <span className="font-mono text-[#00ffcc]">{BASE_CONTRACT_ADDRESS}</span> <br/>
             Tezos Contract: <span className="font-mono text-slate-400">{TEZOS_CONTRACT_ADDRESS}</span> <br/>
             블록체인 기술을 통한 역사적 가치의 영구 보존
           </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
