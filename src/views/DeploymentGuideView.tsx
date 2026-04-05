import React from 'react';
import { Globe, Terminal, ShieldCheck, CheckCircle2, ArrowRight, Github, Zap } from 'lucide-react';

const DeploymentGuideView: React.FC = () => {
  const steps = [
    { title: 'Environment Setup', desc: 'Vite & React 18 환경 구성 및 Tailwind CSS 설정', status: 'Completed' },
    { title: 'Smart Contract Link', address: 'KT193FiCoUkthuDXcZ6Chr1J19TRoJqjWSYu', status: 'Active' },
    { title: 'Vercel Deployment', desc: 'CI/CD 파이프라인 구축 및 메인넷 엔드포인트 연결', status: 'Live' },
  ];

  return (
    <div className="space-y-10 animate-in fade-in duration-500">
      <div className="space-y-4">
        <h2 className="text-4xl font-black italic tracking-tighter text-white uppercase">Deployment Guide</h2>
        <p className="text-slate-400 font-medium">WRISTORY 포털의 배포 프로세스 및 시스템 아키텍처입니다.</p>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-[3.5rem] p-12 space-y-10 shadow-2xl">
        <div className="flex items-center gap-6 border-b border-slate-800 pb-10">
          <div className="w-20 h-20 bg-blue-600/10 rounded-[2rem] flex items-center justify-center text-blue-400">
            <Globe size={40} />
          </div>
          <div>
            <h3 className="text-3xl font-black text-white italic uppercase tracking-tight">Production Status</h3>
            <p className="text-emerald-500 text-sm font-black uppercase tracking-widest flex items-center gap-2">
              <CheckCircle2 size={16} /> All Systems Operational
            </p>
          </div>
        </div>

        <div className="space-y-6">
          {steps.map((step, i) => (
            <div key={i} className="flex items-center justify-between p-8 bg-slate-950/50 border border-white/5 rounded-[2rem] group hover:border-blue-500/30 transition-all">
              <div className="space-y-2">
                <h4 className="text-xl font-black text-white italic uppercase">{step.title}</h4>
                {step.desc && <p className="text-slate-500 text-sm font-medium">{step.desc}</p>}
                {step.address && <p className="text-blue-400 font-mono text-xs">{step.address}</p>}
              </div>
              <div className="text-right">
                <span className="px-4 py-1.5 bg-blue-600/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase rounded-full tracking-widest">
                  {step.status}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-6 flex flex-col sm:flex-row gap-6">
          <a href="https://github.com/yesoklab/wristory-portal" target="_blank" className="flex-1 bg-white text-slate-950 py-6 rounded-3xl font-black text-lg flex items-center justify-center gap-4 hover:scale-105 transition-transform shadow-2xl">
            <Github size={24} /> GitHub Repository
          </a>
          <button className="flex-1 bg-blue-600 text-white py-6 rounded-3xl font-black text-lg flex items-center justify-center gap-4 hover:bg-blue-500 transition-all shadow-2xl">
            <Zap size={24} /> System Logs
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeploymentGuideView;
