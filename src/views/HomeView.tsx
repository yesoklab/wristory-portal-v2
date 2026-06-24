import React from 'react';
import { 
  Zap, 
  ShieldCheck, 
  History, 
  ArrowUpRight, 
  BarChart3, 
  Users, 
  Globe, 
  Github,
  CheckCircle2,
  RefreshCw,
  Search
} from 'lucide-react';

const HomeView: React.FC = () => {
  const stats = [
    { label: 'Total Supply', value: '51.04M', sub: 'WR Tokens', icon: <Zap size={20} /> },
    { label: 'Holders', value: '1,240+', sub: 'Active Wallets', icon: <Users size={20} /> },
    { label: 'Collections', value: '12', sub: 'Historical Archives', icon: <History size={20} /> },
    { label: 'Network', value: 'Tezos', sub: 'Mainnet Live', icon: <Globe size={20} /> },
  ];

  return (
    <div className="space-y-10 animate-in fade-in duration-500">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="bg-slate-900/50 border border-slate-800 p-8 rounded-[2.5rem] space-y-4 hover:border-blue-500/50 transition-all shadow-2xl">
            <div className="flex justify-between items-start">
              <div className="w-12 h-12 bg-blue-600/10 rounded-2xl flex items-center justify-center text-blue-400">
                {stat.icon}
              </div>
              <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest bg-emerald-500/10 px-2 py-1 rounded-md">Live</span>
            </div>
            <div>
              <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-1">{stat.label}</p>
              <h3 className="text-3xl font-black text-white italic tracking-tighter">{stat.value}</h3>
              <p className="text-slate-600 text-[10px] font-bold mt-1">{stat.sub}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Main Status Card */}
        <div className="lg:col-span-2 bg-gradient-to-br from-slate-900 to-indigo-950 border border-slate-800 rounded-[3.5rem] p-12 space-y-10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-20 text-white/5 pointer-events-none opacity-20"><ShieldCheck size={300}/></div>
          
          <div className="space-y-4 relative z-10">
            <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter text-white uppercase leading-none">Ecosystem <br/> Bridge Active</h2>
            <p className="text-slate-400 text-lg max-w-xl font-medium">
              WRISTORY FA2 컨트랙트가 테조스 메인넷에 성공적으로 배포되었습니다. 
              이제 모든 독립운동가 컬렉션이 블록체인 위에서 영구적으로 보존됩니다.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 relative z-10">
            <a href="https://tzkt.io/KT193FiCoUkthuDXcZ6Chr1J19TRoJqjWSYu" target="_blank" className="px-8 py-4 bg-white text-slate-950 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center gap-3 hover:scale-105 transition-transform">
              Contract Explorer <ArrowUpRight size={16} />
            </a>
            <a href="https://github.com/yesoklab/wristory-portal-v2" target="_blank" className="px-8 py-4 bg-slate-800 text-white rounded-2xl font-black text-xs uppercase tracking-widest flex items-center gap-3 hover:bg-slate-700 transition-all">
              <Github size={16} /> Source Code
            </a>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-slate-900 border border-slate-800 rounded-[3.5rem] p-10 space-y-8 shadow-2xl">
          <h3 className="text-xl font-black italic uppercase text-white tracking-tight">Quick Operations</h3>
          <div className="space-y-4">
            <button className="w-full flex items-center justify-between p-5 bg-slate-950/50 border border-white/5 rounded-2xl hover:border-blue-500/50 transition-all group">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-blue-600/10 rounded-xl flex items-center justify-center text-blue-400"><RefreshCw size={18} /></div>
                <span className="text-sm font-black text-slate-300 uppercase tracking-widest">Sync Collections</span>
              </div>
              <ChevronRight size={16} className="text-slate-600 group-hover:text-blue-400" />
            </button>
            <button className="w-full flex items-center justify-between p-5 bg-slate-950/50 border border-white/5 rounded-2xl hover:border-blue-500/50 transition-all group">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-emerald-600/10 rounded-xl flex items-center justify-center text-emerald-500"><CheckCircle2 size={18} /></div>
                <span className="text-sm font-black text-slate-300 uppercase tracking-widest">Verify Metadata</span>
              </div>
              <ChevronRight size={16} className="text-slate-600 group-hover:text-emerald-500" />
            </button>
            <button className="w-full flex items-center justify-between p-5 bg-slate-950/50 border border-white/5 rounded-2xl hover:border-blue-500/50 transition-all group">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-amber-600/10 rounded-xl flex items-center justify-center text-amber-500"><Search size={18} /></div>
                <span className="text-sm font-black text-slate-300 uppercase tracking-widest">Audit Logs</span>
              </div>
              <ChevronRight size={16} className="text-slate-600 group-hover:text-amber-500" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ChevronRight = ({ size, className }: { size: number, className: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m9 18 6-6-6-6"/>
  </svg>
);

export default HomeView;
