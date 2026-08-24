import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Database, 
  Settings, 
  LogOut, 
  History, 
  Zap, 
  ShieldCheck, 
  BarChart3, 
  Users, 
  PlusCircle,
  RefreshCw,
  Search,
  ChevronRight,
  Globe,
  Smartphone,
  CheckCircle2,
  AlertCircle,
  ArrowRightLeft
} from 'lucide-react';
import HomeView from './HomeView';
import TokenomicsView from './TokenomicsView';
import CollectionView from './CollectionView';
import StrategyHubView from './StrategyHubView';
import ContractLabView from './ContractLabView';
import DeploymentGuideView from './DeploymentGuideView';
import MintingLabView from './MintingLabView';
import MigrationAdminView from './MigrationAdminView';

interface Props {
  onExit: () => void;
}

const AdminDashboard: React.FC<Props> = ({ onExit }) => {
  const [activeTab, setActiveTab] = useState('MIGRATION_ADMIN');

  const menuItems = [
    { id: 'MIGRATION_ADMIN', label: '마이그레이션 신청 관리', icon: <ArrowRightLeft size={20} className="text-cyan-400" /> },
    { id: 'DASHBOARD', label: 'Dashboard', icon: <LayoutDashboard size={20} /> },
    { id: 'TOKENOMICS', label: 'Tokenomics', icon: <BarChart3 size={20} /> },
    { id: 'COLLECTIONS', label: 'Collections', icon: <Database size={20} /> },
    { id: 'STRATEGY', label: 'Strategy Hub', icon: <Zap size={20} /> },
    { id: 'CONTRACT', label: 'Contract Lab', icon: <ShieldCheck size={20} /> },
    { id: 'MINTING', label: 'Minting Lab', icon: <PlusCircle size={20} /> },
    { id: 'DEPLOYMENT', label: 'Deployment', icon: <Globe size={20} /> },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'MIGRATION_ADMIN': return <MigrationAdminView />;
      case 'DASHBOARD': return <HomeView />;
      case 'TOKENOMICS': return <TokenomicsView />;
      case 'COLLECTIONS': return <CollectionView />;
      case 'STRATEGY': return <StrategyHubView />;
      case 'CONTRACT': return <ContractLabView />;
      case 'MINTING': return <MintingLabView />;
      case 'DEPLOYMENT': return <DeploymentGuideView />;
      default: return <MigrationAdminView />;
    }
  };

  return (
    <div className="flex h-screen bg-[#0F111A] text-slate-100 overflow-hidden">
      {/* Sidebar */}
      <aside className="w-72 bg-[#0B0D14] border-r border-slate-800 flex flex-col">
        <div className="p-8 flex items-center gap-3 border-b border-slate-800">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-600/20">
            <History className="text-white" size={24} />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black italic tracking-tighter uppercase">WRISTORY</span>
            <span className="text-[8px] font-black text-blue-500 tracking-[0.2em] uppercase">Admin Console</span>
          </div>
        </div>

        <nav className="flex-1 p-6 space-y-2 overflow-y-auto">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl text-sm font-black uppercase tracking-widest transition-all ${
                activeTab === item.id 
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' 
                : 'text-slate-500 hover:bg-slate-900 hover:text-slate-300'
              }`}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </nav>

        <div className="p-6 border-t border-slate-800">
          <button 
            onClick={onExit}
            className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-slate-900 text-slate-400 hover:text-white hover:bg-red-600/10 hover:text-red-500 transition-all font-black text-xs uppercase tracking-widest"
          >
            <LogOut size={18} /> Exit Admin
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="h-20 bg-[#0F111A]/50 backdrop-blur-md border-b border-slate-800 px-10 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-4">
            <h2 className="text-xl font-black italic uppercase tracking-tight text-white">{activeTab}</h2>
            <div className="h-4 w-[1px] bg-slate-800" />
            <div className="flex items-center gap-2 text-[10px] font-black text-emerald-500 uppercase tracking-widest">
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
              Mainnet Connected
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="relative hidden lg:block">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
              <input 
                type="text" 
                placeholder="Search history..." 
                className="bg-slate-900 border border-slate-800 rounded-xl py-2.5 pl-12 pr-6 text-xs font-medium focus:outline-none focus:border-blue-500 transition-all w-64"
              />
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-slate-900 rounded-xl border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white cursor-pointer transition-all">
                <Settings size={20} />
              </div>
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center text-white font-black text-sm shadow-lg">
                CTO
              </div>
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-10 bg-[#0F111A]">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
