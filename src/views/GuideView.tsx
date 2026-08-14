import React from 'react';
import { BookOpen, HelpCircle, ShieldCheck, Wallet, ArrowRight, Globe, ExternalLink, Cpu } from 'lucide-react';

interface Props {
  lang: 'ko' | 'en';
}

const GuideView: React.FC<Props> = ({ lang }) => {
  const faqs = [
    { 
      q: 'WR 토큰은 어디서 사용할 수 있나요? / Where can I use WR tokens?', 
      a: 'WR 토큰은 WRISTORY 생태계 내에서 NFT 민팅, 거버넌스 투표, 그리고 전용 굿즈 구매 등에 사용됩니다. / WR tokens are used for NFT minting, governance voting, and purchasing exclusive goods within the WRISTORY ecosystem.' 
    },
    { 
      q: '지갑은 어떤 것을 사용해야 하나요? / Which wallet should I use?', 
      a: '테조스 생태계의 대표적인 지갑인 Temple Wallet 또는 Kukai Wallet을 권장합니다. / We recommend Temple Wallet or Kukai Wallet, the leading wallets in the Tezos ecosystem.' 
    },
    { 
      q: 'wristory.tez 및 wristory.tez.page 분산화 웹사이트는 어떻게 연결하나요?', 
      a: 'Tezos Domains (tezos.domains) 관리자 페이지의 [분산화된 웹] 메뉴에서 웹사이트 빌드 결과물(dist)을 IPFS(Pinata, Fleek 등)에 업로드 후 발급받은 CID(ipfs://bafy...)를 등록하면, https://wristory.tez.page 주소를 통해 서버 다운 없는 영구적인 Web3 포털이 즉시 연결됩니다.' 
    },
    { 
      q: '유동성 공급 보상은 어떻게 받나요? / How do I get liquidity rewards?', 
      a: 'QuipuSwap에 유동성을 공급하면 거래 수수료의 일부를 보상으로 받게 되며, 추후 스테이킹 프로그램도 운영될 예정입니다. / By providing liquidity to QuipuSwap, you receive a portion of transaction fees as rewards.' 
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 space-y-16 animate-in fade-in duration-700">
      <div className="space-y-4">
        <h2 className="text-4xl font-black italic uppercase text-white tracking-tighter">User Guide</h2>
        <p className="text-slate-400 text-lg font-medium">WRISTORY 포털 이용 방법과 자주 묻는 질문들을 확인하세요. / Learn how to use the WRISTORY portal and check FAQs.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-slate-900 border border-slate-800 p-8 rounded-[2.5rem] space-y-6 flex flex-col justify-between">
          <div className="space-y-6">
            <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-500">
              <Wallet size={28} />
            </div>
            <h3 className="text-xl font-black text-white italic uppercase">지갑 설정 / Wallet Setup</h3>
            <p className="text-slate-400 font-medium text-sm leading-relaxed">
              테조스 메인넷을 이용하기 위해서는 전용 지갑이 필요합니다. 
              Temple Wallet을 브라우저 확장 프로그램으로 설치하고 WR 토큰을 추가해보세요.
            </p>
          </div>
          <a href="https://templewallet.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-emerald-500 font-black uppercase text-xs tracking-widest hover:gap-3 transition-all pt-4">
            Temple Wallet 설치 <ExternalLink size={14} />
          </a>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-8 rounded-[2.5rem] space-y-6 flex flex-col justify-between">
          <div className="space-y-6">
            <div className="w-14 h-14 bg-purple-500/10 rounded-2xl flex items-center justify-center text-purple-400">
              <Globe size={28} />
            </div>
            <h3 className="text-xl font-black text-white italic uppercase">wristory.tez (IPFS Web3)</h3>
            <p className="text-slate-400 font-medium text-sm leading-relaxed">
              Tezos Domains의 <b className="text-purple-300">wristory.tez</b> 도메인을 IPFS 분산 네트워크에 연결하여 검열 불가능한 영구 포털 <b className="text-emerald-400">wristory.tez.page</b>를 구동합니다.
            </p>
          </div>
          <a href="https://wristory.tez.page" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-purple-400 font-black uppercase text-xs tracking-widest hover:gap-3 transition-all pt-4">
            Web3 게이트웨이 접속 <ExternalLink size={14} />
          </a>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-8 rounded-[2.5rem] space-y-6 flex flex-col justify-between">
          <div className="space-y-6">
            <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-400">
              <ShieldCheck size={28} />
            </div>
            <h3 className="text-xl font-black text-white italic uppercase">보안 수칙 / Security</h3>
            <p className="text-slate-400 font-medium text-sm leading-relaxed">
              개인키(Seed Phrase)는 절대 타인에게 공유하지 마세요. 
              WRISTORY 팀은 어떠한 경우에도 사용자의 개인키를 요구하지 않습니다.
            </p>
          </div>
          <span className="flex items-center gap-2 text-blue-400 font-black uppercase text-xs tracking-widest pt-4">
            검증된 스마트 컨트랙트
          </span>
        </div>
      </div>

      {/* Tezos Domain Integration Step Guide */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-purple-500/30 p-10 rounded-[3rem] space-y-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-purple-500/20 text-purple-400 rounded-2xl flex items-center justify-center border border-purple-500/30">
            <Cpu size={24} />
          </div>
          <div>
            <h3 className="text-2xl font-black text-white italic uppercase">wristory.tez 분산화 웹사이트(IPFS) 구축 가이드</h3>
            <p className="text-purple-300/80 text-xs font-bold uppercase tracking-widest">Tezos Domains + Fleek / Pinata IPFS Hosting Setup</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          <div className="bg-slate-950/60 p-6 rounded-2xl border border-white/5 space-y-3">
            <div className="w-8 h-8 rounded-full bg-purple-600/30 text-purple-300 text-xs font-black flex items-center justify-center border border-purple-500/40">1</div>
            <h4 className="text-white font-bold text-sm uppercase">IPFS 웹사이트 빌드 & 업로드</h4>
            <p className="text-slate-400 text-xs leading-relaxed">
              프로젝트 빌드 결과물(<code className="text-purple-300">dist</code>)을 Fleek.co 또는 Pinata를 통해 IPFS 네트워크에 업로드하고 CID 주소를 획득합니다.
            </p>
          </div>

          <div className="bg-slate-950/60 p-6 rounded-2xl border border-white/5 space-y-3">
            <div className="w-8 h-8 rounded-full bg-purple-600/30 text-purple-300 text-xs font-black flex items-center justify-center border border-purple-500/40">2</div>
            <h4 className="text-white font-bold text-sm uppercase">Tezos Domains 설정</h4>
            <p className="text-slate-400 text-xs leading-relaxed">
              <a href="https://tezos.domains" target="_blank" rel="noopener noreferrer" className="text-purple-400 underline">tezos.domains</a> 대시보드의 <b className="text-white">wristory.tez</b> 관리 메뉴에서 <b className="text-white">[분산화된 웹]</b> 레코드에 IPFS CID를 입력합니다.
            </p>
          </div>

          <div className="bg-slate-950/60 p-6 rounded-2xl border border-white/5 space-y-3">
            <div className="w-8 h-8 rounded-full bg-purple-600/30 text-purple-300 text-xs font-black flex items-center justify-center border border-purple-500/40">3</div>
            <h4 className="text-white font-bold text-sm uppercase">wristory.tez.page 즉시 연결</h4>
            <p className="text-slate-400 text-xs leading-relaxed">
              설정 완료 후 브라우저 주소창에 <b className="text-emerald-400">https://wristory.tez.page</b>를 입력하면 서버 다운 없이 전 세계 어디서나 접근 가능합니다.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        <h3 className="text-2xl font-black italic uppercase text-white flex items-center gap-3">
          <HelpCircle className="text-blue-500" /> FAQ
        </h3>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl space-y-2">
              <p className="text-white font-black text-lg">Q. {faq.q}</p>
              <p className="text-slate-500 font-medium text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GuideView;
