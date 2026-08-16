{/* 5. ROADMAP SECTION */}
          {activeSection === 'roadmap' && (
            <div className="space-y-8 animate-in fade-in duration-500 text-left">
              <div className="space-y-2 border-b border-slate-800 pb-6">
                <span className="text-blue-500 text-[10px] uppercase font-black tracking-widest">Section 05</span>
                <h2 className="text-3xl font-black italic uppercase text-white tracking-tight">
                  {lang === 'ko' ? '5. 로드맵 및 미래 도약' : '5. Ecosystem Roadmap'}
                </h2>
              </div>

              <div className="space-y-8 relative pl-6 border-l-2 border-slate-800 font-medium">
                {/* Milestone 1 */}
                <div className="relative space-y-2">
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 bg-emerald-500 rounded-full border-4 border-slate-950 shadow-lg" />
                  <div className="flex items-center gap-3">
                    <span className="px-2 py-0.5 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[9px] font-black uppercase rounded-lg">2025.Q3 - 2025.Q4</span>
                    <h4 className="text-white font-black uppercase text-sm">Deployment & Foundation (인프라 및 토큰 런칭 완료)</h4>
                  </div>
                  <p className="text-slate-400 text-xs font-sans leading-relaxed">
                    {lang === 'ko'
                      ? '✓ 테조스 메인넷 FA2 스마트 컨트랙트 정식 배포 완료. QuipuSwap wXTZ/WR 유동성 풀 조성 성공. 독립 위인전 및 역사 디지털 복원 NFT 1차 아카이브 컬렉션 구축.'
                      : '✓ Successfully deployed token FA2 smart contract. Deployed QuipuSwap wXTZ/WR liquidity pools. Hosted first historical commemorative archive collections.'
                    }
                  </p>
                </div>

                {/* Milestone 2 */}
                <div className="relative space-y-2">
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-950 shadow-lg animate-pulse" />
                  <div className="flex items-center gap-3">
                    <span className="px-2 py-0.5 bg-blue-500/10 border border-blue-500/30 text-blue-400 text-[9px] font-black uppercase rounded-lg">2026.Q1 - 2026.Q2 (현재 단계)</span>
                    <h4 className="text-white font-black uppercase text-sm">Generative Expansion & Listing (생태계 확장 및 상장 심사)</h4>
                  </div>
                  <p className="text-slate-400 text-xs font-sans leading-relaxed">
                    {lang === 'ko'
                      ? '✓ 제너레이티브 작품 "장군의 결의", "종로의 불꽃", "정의의 불꽃" 온체인 통합 서비스 개시. wristory.tez 탈중앙 Web3 게이트웨이 개통. 코인게코 및 글로벌 시세 인덱스 등록 심사 절차 수행.'
                      : '✓ Launched multi generative models ("The Flame of Jongno", "The Reckoning", "The Admiral\'s Resolve"). Opened wristory.tez IPFS decentralized portal. Undergoing CoinGecko and global index listings.'
                    }
                  </p>
                </div>

                {/* Milestone 3 */}
                <div className="relative space-y-2">
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 bg-purple-500 rounded-full border-4 border-slate-950" />
                  <div className="flex items-center gap-3">
                    <span className="px-2 py-0.5 bg-purple-500/10 border border-purple-500/30 text-purple-400 text-[9px] font-black uppercase rounded-lg">2026.Q3 - 2026.Q4</span>
                    <h4 className="text-white font-black uppercase text-sm">Wear OS Direct Play & Heritage Expansion</h4>
                  </div>
                  <p className="text-slate-400 text-xs font-sans leading-relaxed">
                    {lang === 'ko'
                      ? '오프라인 박물관 및 독립유공자 기념재단 연합 결성 및 동적 메타데이터 확장. 구글 플레이스토어를 통한 Wear OS 스마트워치 프리미엄 패키지 앱 정식 발매.'
                      : 'Establishing offline heritage partnerships. Releasing dedicated Wear OS Play Store applications for live wearable synchronization.'
                    }
                  </p>
                </div>
              </div>
            </div>
          )}
