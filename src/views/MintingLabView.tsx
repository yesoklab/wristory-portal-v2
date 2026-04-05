import React from 'react';
import { PlusCircle, Zap, ShieldCheck, History, ArrowUpRight, Code, Database, Globe } from 'lucide-react';

const MintingLabView: React.FC = () => {
  const mintingSteps = [
    { title: 'Metadata Prep', desc: 'IPFS 해시 생성 및 JSON 메타데이터 구성', status: 'Ready' },
    { title: 'Contract Call', desc: 'FA2 민팅 함수 호출 및 트랜잭션 서명', status: 'Locked' },
    { title: 'Verification', desc: '블록체인 인덱싱 및 컬렉션 동기화 확인', status: 'Pending' },
  ];

  return (
    <div className="space-y-10 animate-in fade-in duration-500 pb-20">
      <div className="flex flex-col md:flex-row justify-between items-end gap-4">
        <div>
          <h2 className="text-4xl font-black italic tracking-tighter text-white uppercase">Minting Lab</h2>
          <p className="text-slate-400 font-medium">새로운 독립운동가 NFT 컬렉션을 생성하고 배포하는 연구실입니다.</p>
        </div>
        <div className="bg-blue-600/10 px-8 py-4 rounded-3xl border border-blue-500/30 shadow-xl">
          <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-1">Minting Status</p>
          <p className="text-2xl font-black text-blue-400 italic">Restricted Access</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {mintingSteps.map((step, i) => (
          <div key={i} className="bg-slate-900/50 border border-slate-800 rounded-[3rem] p-10 space-y-8 shadow-2xl relative overflow-hidden group hover:border-blue-500/50 transition-all">
            <div className="absolute top-0 right-0 p-10 text-white/5 pointer-events-none opacity-10 group-hover:opacity-20 transition-opacity"><PlusCircle size={150}/></div>
            
            <div className="space-y-4 relative z-10">
              <div className="w-12 h-12 bg-blue-600/10 rounded-2xl flex items-center justify-center text-blue-400">
                <Code size={24} />
              </div>
              <h3 className="text-2xl font-black text-white italic uppercase tracking-tight">{step.title}</h3>
              <p className="text-slate-500 text-sm font-medium leading-relaxed">{step.desc}</p>
            </div>

            <div className="pt-6 relative z-10">
              <span className="px-4 py-1.5 bg-slate-800 rounded-full text-[10px] font-black text-slate-400 uppercase tracking-widest">
                {step.status}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-br from-slate-900 to-indigo-950 border border-slate-800 rounded-[3.5rem] p-12 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="space-y-4">
          <h3 className="text-3xl font-black text-white italic uppercase tracking-tight">Ready to Expand?</h3>
          <p className="text-slate-400 text-lg max-w-xl font-medium">
            새로운 역사적 가치를 블록체인에 기록할 준비가 되셨나요? 
            민팅 권한은 관리자 승인 후 활성화됩니다.
          </p>
        </div>
        <button className="px-12 py-6 bg-white text-slate-950 rounded-3xl font-black text-xl hover:bg-blue-500 hover:text-white transition-all shadow-2xl flex items-center gap-4">
          <PlusCircle size={24} /> 민팅 권한 요청
        </button>
      </div>
    </div>
  );
};

export default MintingLabView;
