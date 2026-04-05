import React from 'react';
import { ShieldCheck, Code, Terminal, Globe, ExternalLink, ArrowUpRight, Zap, Database } from 'lucide-react';

const ContractLabView: React.FC = () => {
  const contracts = [
    { name: 'WR Token (FA2)', address: 'KT193FiCoUkthuDXcZ6Chr1J19TRoJqjWSYu', type: 'Token', status: 'Verified' },
    { name: 'Collection Registry', address: 'KT1JxExPQijKy3jQdE1pHJXxoeyjHtXB3uxq', type: 'NFT', status: 'Verified' },
  ];

  return (
    <div className="space-y-10 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row justify-between items-end gap-4">
        <div>
          <h2 className="text-4xl font-black italic tracking-tighter text-white uppercase">Contract Lab</h2>
          <p className="text-slate-400 font-medium">테조스 메인넷에 배포된 스마트 컨트랙트 기술 명세입니다.</p>
        </div>
        <div className="flex items-center gap-3 bg-emerald-500/10 px-6 py-3 rounded-2xl border border-emerald-500/20">
          <ShieldCheck size={20} className="text-emerald-500" />
          <span className="text-xs font-black text-emerald-500 uppercase tracking-widest">All Systems Secure</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {contracts.map((c, i) => (
          <div key={i} className="bg-slate-900/50 border border-slate-800 rounded-[3rem] p-10 space-y-8 shadow-2xl">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600/10 rounded-2xl flex items-center justify-center text-blue-400">
                  <Code size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white italic uppercase">{c.name}</h3>
                  <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{c.type} Contract</span>
                </div>
              </div>
              <span className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-[10px] font-black uppercase rounded-full">{c.status}</span>
            </div>

            <div className="space-y-4">
              <div className="p-5 bg-slate-950/50 rounded-2xl border border-white/5 space-y-2">
                <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Contract Address</p>
                <p className="text-sm font-mono text-blue-400 break-all">{c.address}</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <a href={`https://tzkt.io/${c.address}`} target="_blank" className="flex items-center justify-center gap-2 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-[10px] font-black uppercase tracking-widest transition-all">
                  TzKT Explorer <ExternalLink size={14} />
                </a>
                <a href={`https://better-call.dev/mainnet/${c.address}`} target="_blank" className="flex items-center justify-center gap-2 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-[10px] font-black uppercase tracking-widest transition-all">
                  BCD Inspector <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-[3.5rem] p-12 space-y-8">
        <h3 className="text-xl font-black italic uppercase text-white flex items-center gap-3">
          <Terminal className="text-blue-500" size={20} /> Technical Stack
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {['SmartPy', 'FA2 Standard', 'Tezos Mainnet', 'IPFS Storage'].map((tech, i) => (
            <div key={i} className="p-6 bg-slate-950/50 border border-white/5 rounded-2xl text-center">
              <p className="text-xs font-black text-slate-400 uppercase tracking-widest">{tech}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContractLabView;
