import React from 'react';
import { Zap, Target, TrendingUp, ShieldCheck, Users, BarChart3 } from 'lucide-react';

const StrategyHubView: React.FC = () => {
  const strategies = [
    { title: 'Liquidity Mining', desc: 'QuipuSwap LP 토큰 스테이킹을 통한 추가 WR 보상 프로그램', status: 'Planning', icon: <TrendingUp size={24} /> },
    { title: 'Governance DAO', desc: 'WR 토큰 홀더들의 제안 및 투표 시스템 구축', status: 'In Progress', icon: <Users size={24} /> },
    { title: 'NFT Staking', desc: '독립운동가 NFT 보유 기간에 따른 WR 토큰 에어드랍', status: 'Upcoming', icon: <Zap size={24} /> },
  ];

  return (
    <div className="space-y-10 animate-in fade-in duration-500">
      <div className="space-y-4">
        <h2 className="text-4xl font-black italic tracking-tighter text-white uppercase">Strategy Hub</h2>
        <p className="text-slate-400 font-medium">WRISTORY 생태계 확장을 위한 중장기 전략 로드맵입니다.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {strategies.map((s, i) => (
          <div key={i} className="bg-slate-900/50 border border-slate-800 p-10 rounded-[3rem] space-y-6 hover:border-blue-500/50 transition-all shadow-2xl">
            <div className="flex justify-between items-start">
              <div className="w-14 h-14 bg-blue-600/10 rounded-2xl flex items-center justify-center text-blue-400">
                {s.icon}
              </div>
              <span className="px-3 py-1 bg-slate-800 rounded-full text-[9px] font-black text-slate-400 uppercase tracking-widest">{s.status}</span>
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl font-black text-white italic uppercase">{s.title}</h3>
              <p className="text-slate-500 text-sm font-medium leading-relaxed">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-[3.5rem] p-12 flex flex-col md:flex-row items-center gap-12">
        <div className="w-24 h-24 bg-emerald-500/10 rounded-[2rem] flex items-center justify-center text-emerald-500 shrink-0">
          <ShieldCheck size={48} />
        </div>
        <div className="space-y-4">
          <h3 className="text-3xl font-black text-white italic uppercase tracking-tight">Security First Governance</h3>
          <p className="text-slate-400 text-lg font-medium">
            모든 전략적 결정은 커뮤니티의 동의와 스마트 컨트랙트 보안 감사를 거쳐 실행됩니다. 
            우리는 지속 가능한 생태계를 위해 가장 안전한 길을 선택합니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StrategyHubView;
