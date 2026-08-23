import React, { useState, useEffect } from 'react';
import { 
  History, 
  Sparkles, 
  Lock, 
  Menu, 
  X,
  ShieldAlert,
  Github, 
  AlertCircle,
  RefreshCw,
  Zap,
  Globe,
  Twitter,
  Send,
  Mail,
  Gamepad2,
  Share2,
  Radio,
  ArrowRightLeft,
  ArrowUpRight,
  ExternalLink
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
      hasSelectedApiKey: () => Promise<boolean>;
      openSelectKey: () => Promise<void>;
    };
  }
}

const App: React.FC = () => {
  const [mode, setMode] = useState<ViewMode>('PUBLIC');
  const [activeTab, setActiveTab] = useState<PublicTab>('HOME');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lang] = useState<'ko' | 'en'>('ko');
  const [hasApiKey, setHasApiKey] = useState<boolean>(true);
  const [showKeyWarning, setShowKeyWarning] = useState(false);
  const [isTestingKey, setIsTestingKey] = useState(false);
  const [showMigrationModal, setShowMigrationModal] = useState<boolean>(true);

  const BASE_CONTRACT_ADDRESS = '0x9DE688b818d1755F4Daf82d25662Da1bBEdd17b7';
  const TEZOS_CONTRACT_ADDRESS = 'KT193FiCoUkthuDXcZ6Chr1J19TRoJqjWSYu';
  const GITHUB_URL = 'https://github.com/yesoklab/wristory-portal-v2';

  useEffect(() => {
    checkApiKeyStatus();
  }, []);

  const checkApiKeyStatus = async () => {
    const key = (typeof process !== 'undefined' && process.env?.API_KEY) || (import.meta as any).env?.VITE_API_KEY;
    const keyExists = !!key && key !== 'undefined' && key.length > 10;
    
    let selected = false;
    if (window.aistudio && typeof window.aistudio.hasSelectedApiKey === 'function') {
      selected = await window.aistudio.hasSelectedApiKey();
    }

    const isAvailable = keyExists || selected;
    setHasApiKey(isAvailable);
    setShowKeyWarning(!isAvailable);
  };

  const handleTestConnection = async () => {
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
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white px-4 py-2.5 text-center text-xs font-bold flex items-center justify-center gap-3 shadow-lg z-50 relative">
        <span className="flex items-center gap-1.5 bg-black/30 px-2 py-0.5 rounded-full text-[10px] uppercase tracking-wider">
          <ArrowRightLeft size={12} className="animate-spin text-[#00ffcc]" /> Notice
        </span>
        <span className="truncate">
          [중요] WRISTORY($WR) Base 체인 확장 및 기존 1,063명 테조스 홀더 1:1 마이그레이션이 시작되었습니다.
        </span>
        <button 
          onClick={() => { setActiveTab('MIGRATION'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="underline hover:text-cyan-300 font-black text-xs shrink-0 flex items-center gap-0.5 ml-2"
        >
          포털 바로가기 <ArrowUpRight size={13} />
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
              onClick={handleTestConnection} 
              disabled={isTestingKey}
              className="px-3 py-1.5 bg-slate-950 text-white rounded-lg hover:bg-black transition-all flex items-center gap-1.5 shadow"
            >
              {isTestingKey ? <RefreshCw size={12} className="animate-spin" /> : <Zap size={12} className="text-amber-400" />} 
              연결 테스트
            </button>
            <button 
              onClick={() => setActiveTab('GUIDE')} 
              className="px-3 py-1.5 bg-white/20 rounded-lg hover:bg-white/30 transition-all text-xs"
            >
              가이드
            </button>
          </div>
        </div>
      )}
      
      {/* Top Navbar: Clean 3-zone layout */}
      <nav className="sticky top-0 z-50 bg-[#0F111A]/90 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex justify-between items-center">
          {/* Brand */}
          <div 
            className="flex items-center gap-2.5 cursor-pointer group" 
            onClick={() => setActiveTab('HOME')}
          >
            <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
               <History className="text-white" size={20} />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-black italic tracking-tighter text-white uppercase leading-none">WRISTORY</span>
              <span className="text-[7px] sm:text-[8px] font-black text-[#00ffcc] tracking-[0.2em] uppercase">Base & Tezos Dual</span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-6">
            <button 
              onClick={() => setActiveTab('HOME')} 
              className={`text-xs font-bold transition-colors whitespace-nowrap ${activeTab === 'HOME' ? 'text-blue-400' : 'text-slate-400 hover:text-white'}`}
            >
              홈 / Home
            </button>
            <button 
              onClick={() => setActiveTab('MIGRATION')} 
              className={`text-xs font-bold transition-all flex items-center gap-1.5 px-3 py-1.5 rounded-xl whitespace-nowrap ${activeTab === 'MIGRATION' ? 'bg-blue-600 text-white shadow-lg' : 'text-blue-400 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30'}`}
            >
              <ArrowRightLeft size={14} className="text-cyan-300 animate-pulse" /> Base 마이그레이션 포털
            </button>
            <button 
              onClick={() => setActiveTab('WHITEPAPER')} 
              className={`text-xs font-bold transition-colors whitespace-nowrap ${activeTab === 'WHITEPAPER' ? 'text-blue-400' : 'text-slate-400 hover:text-white'}`}
            >
              백서 / Whitepaper
            </button>
            <button 
              onClick={() => setActiveTab('WALLET')} 
              className={`text-xs font-bold transition-colors whitespace-nowrap ${activeTab === 'WALLET' ? 'text-blue-400' : 'text-slate-400 hover:text-white'}`}
            >
              내 지갑 / My Wallet
            </button>
            <button 
              onClick={() => setActiveTab('GUIDE')} 
              className={`text-xs font-bold transition-colors whitespace-nowrap ${activeTab === 'GUIDE' ? 'text-blue-400' : 'text-slate-400 hover:text-white'}`}
            >
              가이드 / Guide
            </button>
          </div>

          {/* Desktop Action Zone */}
          <div className="hidden lg:flex items-center gap-3">
            <button 
              onClick={() => setActiveTab('AI')} 
              className={`px-4 py-2 rounded-xl border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold flex items-center gap-1.5 hover:bg-blue-500/20 transition-all ${activeTab === 'AI' ? 'bg-blue-500/30 border-blue-400' : ''}`}
            >
              <Sparkles size={13} /> AI 큐레이터
            </button>
            <button 
              onClick={() => setMode('ADMIN')} 
              className="p-2 bg-slate-800/80 hover:bg-blue-600 rounded-xl text-slate-400 hover:text-white transition-all border border-slate-700" 
              title="관리자 모드"
            >
              <Lock size={15} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-white p-2" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="메뉴 열기"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-[#0F111A] border-b border-slate-800 px-6 py-6 flex flex-col gap-4 animate-in slide-in-from-top duration-200 shadow-2xl">
            <button 
              onClick={() => { setActiveTab('HOME'); setIsMenuOpen(false); }} 
              className={`text-base font-bold text-left py-2 ${activeTab === 'HOME' ? 'text-blue-400' : 'text-white'}`}
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
              className={`text-base font-bold text-left py-2 ${activeTab === 'WHITEPAPER' ? 'text-blue-400' : 'text-white'}`}
            >
              백서 (Whitepaper)
            </button>
            <button 
              onClick={() => { setActiveTab('WALLET'); setIsMenuOpen(false); }} 
              className={`text-base font-bold text-left py-2 ${activeTab === 'WALLET' ? 'text-blue-400' : 'text-white'}`}
            >
              내 지갑 (My Wallet)
            </button>
            <button 
              onClick={() => { setActiveTab('GUIDE'); setIsMenuOpen(false); }} 
              className={`text-base font-bold text-left py-2 ${activeTab === 'GUIDE' ? 'text-blue-400' : 'text-white'}`}
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

      {/* Initial Migration Notice Popup Modal */}
      {showMigrationModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#0F111A] border border-blue-500/30 rounded-3xl max-w-xl w-full p-6 sm:p-8 space-y-5 shadow-2xl relative animate-in zoom-in-95 duration-200 text-left">
            <button 
              onClick={() => setShowMigrationModal(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800"
            >
              <X size={20} />
            </button>

            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-2xl bg-blue-600/20 text-blue-400 border border-blue-500/30 flex items-center justify-center">
                <ArrowRightLeft size={20} />
              </div>
              <div>
                <span className="text-[10px] text-blue-400 font-black uppercase tracking-widest">Official Notice</span>
                <h3 className="text-lg font-black text-white">WRISTORY($WR) Base 체인 확장 및 마이그레이션 안내</h3>
              </div>
            </div>

            <div className="text-xs text-slate-300 space-y-3 leading-relaxed max-h-[60vh] overflow-y-auto pr-1">
              <p>
                안녕하세요, WRISTORY($WR) 홀더 여러분.<br />
                테조스(Tezos) 메인넷 위에서 <strong>1,063명의 든든한 홀더분들</strong>과 함께 지켜온 우리의 디지털 헤리티지가 이제 <strong>이더리움 레이어 2(Base) 체인</strong>으로의 위대한 확장을 시작합니다.
              </p>
              <p>
                글로벌 유동성과 더 많은 컬렉터들에게 프로젝트를 선보이기 위해, $WR 토큰은 Base 메인넷에 성공적으로 안착하였으며 <strong>Uniswap V3 초기 유동성 공급</strong>을 앞두고 있습니다.
              </p>
              <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl space-y-2">
                <p className="font-bold text-white">🔄 1:1 토큰 교환 (마이그레이션) 핵심 요약</p>
                <ul className="list-disc pl-4 space-y-1 text-slate-400 text-[11px]">
                  <li><strong>교환 비율:</strong> 1 Tezos WR = 1 Base WR (1:1 정확히 일치)</li>
                  <li><strong>총발행량:</strong> 51,169,148 WR 철저한 연동 관리 (추가 발행 없음)</li>
                  <li><strong>Base 컨트랙트:</strong> <code className="text-blue-300 font-mono">0x9DE688b818d1755F4Daf82d25662Da1bBEdd17b7</code></li>
                </ul>
              </div>
              <p className="text-slate-400 text-[11px]">
                공식 홈페이지 상단의 <strong>[Base 마이그레이션 포털]</strong>을 통해 간단히 신청서를 접수해 주시면 순차적으로 1:1 지급이 진행됩니다.
              </p>
            </div>

            <div className="flex gap-3 pt-2">
              <button
                onClick={() => {
                  setShowMigrationModal(false);
                  setActiveTab('MIGRATION');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="flex-1 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1.5 shadow-lg shadow-blue-600/30"
              >
                <ArrowRightLeft size={14} /> 마이그레이션 포털 바로가기
              </button>
              <button
                onClick={() => setShowMigrationModal(false)}
                className="px-5 py-3 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-xl text-xs font-bold transition-all"
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer (Optimized & Compact) */}
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

