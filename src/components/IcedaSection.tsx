import React, { useState } from 'react';
import { 
  Cpu, 
  Layers, 
  Zap, 
  ArrowRight, 
  Sparkles, 
  Database, 
  Activity, 
  ShieldCheck, 
  Binary, 
  FileCode, 
  Workflow, 
  GitBranch, 
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { Language } from '../types';
import { PROFILE_DATA } from '../data/profileData';

interface IcedaSectionProps {
  language: Language;
}

export const IcedaSection: React.FC<IcedaSectionProps> = ({ language }) => {
  const isEn = language === 'en';
  const [activeStep, setActiveStep] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<'evolution' | 'memory' | 'pillars' | 'vision'>('evolution');

  const evolutionSteps = [
    {
      id: 'model',
      stepNum: '01',
      title: isEn ? 'AI Model' : 'AI 模型層',
      subtitle: isEn ? 'Next-Gen LLMs, Multimodal & MoE' : '新世代 LLM、多模態與 MoE 架構',
      desc: isEn 
        ? 'Massive parameter frontiers requiring extreme parameter efficiency, dynamic sparsity, and specialized arithmetic execution.'
        : '數十億至兆級參數規模，要求極致的參數效率、動態稀疏性與客製化算術執行。',
      techPoints: isEn
        ? ['Quantization (FP8/FP4/INT4)', 'Dynamic Sparsity', 'Attention Kernel Optimization']
        : ['量化運算 (FP8/FP4/INT4)', '動態稀疏性計算', '注意力機制核心優化'],
      shiueInsight: isEn
        ? 'High-stakes algorithmic optimization matching hardware mathematical limits.'
        : '高階演算法優化精確匹配硬體底層數學極限。'
    },
    {
      id: 'accelerator',
      stepNum: '02',
      title: isEn ? 'AI Accelerator' : 'AI 加速器',
      subtitle: isEn ? 'Domain-Specific GPU / NPU / TPU' : '領域專用 GPU / NPU / TPU 處理單元',
      desc: isEn
        ? 'Systolic arrays, tensor cores, and matrix execution units designed for sustained high-throughput tensor operations under thermal limits.'
        : '脈動陣列（Systolic Arrays）、張量核心與矩陣運算單元，在晶片熱功耗限制下維持高吞吐量張量運算。',
      techPoints: isEn
        ? ['Systolic Array Compute', 'Energy-Aware Microarchitecture', 'Dynamic Voltage/Frequency Scaling']
        : ['脈動陣列微架構', '節能感知計算管線', '動態電壓頻率調整 (DVFS)'],
      shiueInsight: isEn
        ? 'Bridging microarchitectural power limits with enterprise ML workload profiles.'
        : '橋接微架構功耗極限與企業級 ML 負載特徵。'
    },
    {
      id: 'chiplet',
      stepNum: '03',
      title: isEn ? 'Chiplet Architecture' : 'Chiplet 小晶片架構',
      subtitle: isEn ? 'Modular Heterogeneous Silicon' : '模組化異質晶圓整合',
      desc: isEn
        ? 'Disaggregating monolithic dies into specialized silicon chiplets (compute, I/O, memory) interconnected via high-density UCIe standards.'
        : '將傳統單晶片解構為專用小晶片（計算、I/O、記憶體），透過高密度 UCIe 介面標準實現異質整合。',
      techPoints: isEn
        ? ['UCIe Die-to-Die Interconnect', 'Heterogeneous Node Mixing', 'Defect Tolerance & Yield Optimization']
        : ['UCIe 晶粒間互連介面', '跨製程節點異質混合', '容錯設計與良率最大化'],
      shiueInsight: isEn
        ? 'Enables optimal silicon cost and thermal distribution for hyperscale AI systems.'
        : '為超大規模 AI 系統實現最優晶圓成本與熱分佈控制。'
    },
    {
      id: 'memory',
      stepNum: '04',
      title: isEn ? 'HBM / Memory System' : 'HBM 與記憶體系統',
      subtitle: isEn ? 'High Bandwidth & Low Latency' : '超高頻寬與極低延遲架構',
      desc: isEn
        ? 'High-Bandwidth Memory (HBM3e/HBM4) stacked DRAM tightly coupled to accelerators, breaking the memory wall through wide data channels.'
        : '堆疊式高頻寬記憶體（HBM3e/HBM4）與加速晶片緊密耦接，透過超寬資料通道徹底打破記憶體牆（Memory Wall）。',
      techPoints: isEn
        ? ['HBM3e / HBM4 3D Stacks', 'Multi-Level Cache Optimization', 'Near-Memory Processing (PIM)']
        : ['HBM3e / HBM4 3D 堆疊', '多階快取層級優化', '近記憶體運算 (PIM)'],
      shiueInsight: isEn
        ? 'Direct lineage to Dr. Shiue\'s ASU Ph.D. research on memory data modeling & PSU SimplePower tool.'
        : '承襲薛博士亞利桑那州立大學快取記憶體資料建模博士論文與 PSU SimplePower 核心研究。'
    },
    {
      id: '3d-integration',
      stepNum: '05',
      title: isEn ? '3D Integration' : '3D 晶圓級整合',
      subtitle: isEn ? 'TSV & Hybrid Direct Bonding' : '矽穿孔 (TSV) 與混合鍵合技術',
      desc: isEn
        ? 'Vertical die stacking using sub-micron pitch hybrid bonding and Through-Silicon Vias, slashing interconnect length and transmission energy.'
        : '利用次微米節距混合鍵合與矽穿孔（TSV）進行立體堆疊，大幅縮減互連物理長度與資料傳輸能量。',
      techPoints: isEn
        ? ['Through-Silicon Vias (TSV)', 'Sub-micron Hybrid Bonding', 'Thermal-Aware 3D Power Routing']
        : ['矽穿孔 (TSV) 垂直導線', '次微米直接混合鍵合', '熱感知 3D 電源網路佈線'],
      shiueInsight: isEn
        ? 'Addresses physical thermal limits through advanced mathematical heat and power dissipation models.'
        : '以高階數學散熱與功耗分佈模型突破物理散熱瓶頸。'
    },
    {
      id: 'eda-agents',
      stepNum: '06',
      title: isEn ? 'AI-Driven EDA Agents' : 'AI 驅動 EDA 智慧體',
      subtitle: isEn ? 'Autonomous Multi-Agent Loop' : '自主多智慧體協同閉環',
      desc: isEn
        ? 'Autonomous LLM agents that read specifications, synthesize clean RTL, write testbenches, triage verification failures, and drive physical placement.'
        : '具備自主推理能力的 LLM 智慧體，能解析設計規格書、合成 RTL 代碼、撰寫驗證測試平台、自動修復 Bug 並驅動實體佈局。',
      techPoints: isEn
        ? ['LLMs for RTL Generation', 'Agentic Verification & Bug Triage', 'Multi-Agent Closed-Loop Optimization']
        : ['大模型 RTL 自動生成', '智慧體自動驗證與除錯', '多智慧體閉環自我優化'],
      shiueInsight: isEn
        ? 'Combines enterprise AI governance and multi-agent systems with formal hardware verification.'
        : '融合企業級 AI 治理架構、多智慧體協同與硬體形式化驗證。'
    },
    {
      id: 'autonomous-chip',
      stepNum: '07',
      title: isEn ? 'Autonomous Chip Design' : '全自主晶片設計',
      subtitle: isEn ? 'From Spec to GDSII Tape-Out' : '從規格輸入到 GDSII 晶圓下線',
      desc: isEn
        ? 'End-to-end AI-native semiconductor synthesis where intelligent agents orchestrate the entire workflow autonomously to tape-out.'
        : '端到端 AI 原生半導體合成系統：智慧體自主編排全流程，實現從高階需求到最終 GDSII Tape-out 的飛躍。',
      techPoints: isEn
        ? ['Autonomous Timing Closure', 'Constraint & Rule Self-Correction', 'AI-Native Silicon Engineering']
        : ['自主時序收斂 (Timing Closure)', '設計規範自動自我修正', 'AI 原生矽工程新紀元'],
      shiueInsight: isEn
        ? 'The ultimate frontier: AI designing the next generation of AI compute silicon.'
        : '終極前沿：AI 自主設計推動下一代 AI 算力晶片的誕生。'
    }
  ];

  const convergencePillars = [
    {
      icon: Sparkles,
      title: isEn ? 'AI for EDA' : 'AI for EDA 智慧輔助',
      desc: isEn
        ? 'Replacing heuristic algorithms with deep reinforcement learning and graph neural networks for placement, routing, and timing estimation.'
        : '以深度強化學習與圖神經網路取代傳統啟發式演算法，實現佈局、繞線及時序預估的指數級加速。'
    },
    {
      icon: FileCode,
      title: isEn ? 'LLMs for RTL Generation' : 'LLMs RTL 代碼生成',
      desc: isEn
        ? 'Fine-tuned hardware LLMs converting natural language engineering specs into synthesizable, clock-domain safe Verilog/VHDL and SystemVerilog.'
        : '微調之硬體大語言模型，將自然語言工程規格精確轉換為可合成、時鐘域安全之 Verilog/SystemVerilog 代碼。'
    },
    {
      icon: ShieldCheck,
      title: isEn ? 'AI-Based Verification' : 'AI 驅動硬體驗證',
      desc: isEn
        ? 'Intelligent agent testbench synthesis, constrained-random stimulus generation, automatic coverage closure, and root-cause bug isolation.'
        : '智慧體自動生成測試平台、約束隨機激勵、覆蓋率自動收斂及硬體錯誤根因快速隔離。'
    },
    {
      icon: Layers,
      title: isEn ? 'AI-Driven Physical Design' : 'AI 驅動實體設計',
      desc: isEn
        ? 'AI models predicting congestion, voltage drops (IR-drop), and DRC violations before routing, cutting physical design iterations from weeks to hours.'
        : '在詳細繞線前以 AI 預測擁塞、壓降 (IR-drop) 與 DRC 規則違規，將實體設計迭代週期從數週縮短至數小時。'
    },
    {
      icon: Workflow,
      title: isEn ? 'Agentic EDA' : 'Agentic EDA 智慧體編排',
      desc: isEn
        ? 'Orchestrated specialist agents (Architect, RTL Engineer, Verification Lead, Physical Designer) collaborating in an autonomous design loop.'
        : '由專業智慧體群（架構師、RTL 工程師、驗證負責人、實體設計專家）協同運作的自主研發迴圈。'
    },
    {
      icon: Cpu,
      title: isEn ? 'Low-Power AI Computing' : '低功耗 AI 計算架構',
      desc: isEn
        ? 'Energy-aware scheduling, memory hierarchy optimization, and dynamic power dissipation compensation for GPU/NPU/TPU accelerators.'
        : '專為 GPU/NPU/TPU 打造的節能感知排程、記憶體階層架構優化與動態功耗散逸補償技術。'
    }
  ];

  return (
    <section id="iceda" className="relative py-20 sm:py-28 border-t border-slate-800/80 bg-[#070b16] text-slate-100 overflow-hidden">
      {/* Background ambient glow */}
      <div className="pointer-events-none absolute -top-40 right-1/4 h-[500px] w-[500px] rounded-full bg-cyan-600/10 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 left-10 h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 border-b border-slate-800 pb-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/30 px-3.5 py-1 text-xs font-mono text-cyan-300">
              <Cpu className="h-3.5 w-3.5 text-cyan-400" />
              <span>{isEn ? 'Semiconductor & AI Convergence · 2026–2035 Horizon' : '半導體與人工智慧戰略融合 · 2026–2035 願景'}</span>
            </div>
            
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              <span className="block">{isEn ? 'AI Chip EDA & Low Power Design' : 'AI 晶片 EDA 與低功耗設計自動化'}</span>
              <span className="mt-2 block bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400 bg-clip-text text-transparent text-2xl sm:text-3xl font-bold">
                {isEn ? '🚀 The Future of EDA: From Traditional Chip Design to AI-Native, Agentic EDA' : '🚀 從傳統晶片設計邁向 AI 原生與 Agentic EDA'}
              </span>
            </h2>
            
            <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
              {isEn
                ? 'The semiconductor industry is entering a historic paradigm shift. In 2026 and beyond, the strategic value of EDA research converges at the intersection of AI software and semiconductor physics: combining Dr. Shiue\'s ASU Ph.D. cache energy modeling and FreeScale data modeling with 20+ years of enterprise machine learning leadership.'
                : '半導體產業正步入歷史性的範式轉移。2026 年起，EDA 研究的戰略價值正深刻交匯於 AI 軟體與半導體物理的跨界交集：薛博士將亞利桑那州立大學快取功耗建模博士研究與飛思卡爾半導體晶片數據建模底蘊，與 20+ 年企業級機器學習領導經驗融會貫通。'}
            </p>
          </div>

          {/* Quick Stats Pill */}
          <div className="shrink-0 flex flex-col gap-2 rounded-2xl border border-slate-800 bg-slate-900/60 p-4 font-mono text-xs text-slate-300 backdrop-blur-md">
            <div className="flex items-center gap-2 text-cyan-400 font-bold">
              <Activity className="h-4 w-4" />
              <span>ASU Ph.D. & Freescale IC Heritage</span>
            </div>
            <div className="text-slate-400">
              Cycle-Accurate SimplePower (PSU) + DPTV Patent
            </div>
            <div className="text-[11px] text-emerald-400">
              ✓ AI + EDA + Memory + Low Power + Chiplets
            </div>
          </div>
        </div>

        {/* Tab Controls */}
        <div className="mt-8 flex flex-wrap gap-2 border-b border-slate-800/80 pb-4">
          <button
            onClick={() => setActiveTab('evolution')}
            className={`flex items-center gap-2 rounded-lg px-4 py-2 text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'evolution'
                ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
            }`}
          >
            <Workflow className="h-4 w-4" />
            <span>{isEn ? '2026–2035 Tech Evolution Stack' : '2026–2035 晶片技術演進路徑'}</span>
          </button>

          <button
            onClick={() => setActiveTab('memory')}
            className={`flex items-center gap-2 rounded-lg px-4 py-2 text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'memory'
                ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
            }`}
          >
            <Database className="h-4 w-4" />
            <span>{isEn ? '🔑 Memory & Data Movement Insight' : '🔑 記憶體與資料搬移核心洞見'}</span>
          </button>

          <button
            onClick={() => setActiveTab('pillars')}
            className={`flex items-center gap-2 rounded-lg px-4 py-2 text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'pillars'
                ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
            }`}
          >
            <Layers className="h-4 w-4" />
            <span>{isEn ? 'The 6 Convergence Pillars' : '六大戰略融合支柱'}</span>
          </button>

          <button
            onClick={() => setActiveTab('vision')}
            className={`flex items-center gap-2 rounded-lg px-4 py-2 text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'vision'
                ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
            }`}
          >
            <Sparkles className="h-4 w-4" />
            <span>{isEn ? '💡 Dr. Shiue\'s Perspective & Vision' : '💡 薛博士前瞻觀點與 AI-Native 願景'}</span>
          </button>
        </div>

        {/* Tab 1: 2026-2035 Technology Evolution Stack */}
        {activeTab === 'evolution' && (
          <div className="mt-8 space-y-8">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 backdrop-blur-md">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <span className="text-cyan-400 font-mono">🔮</span>
                    {isEn ? 'The Next Generation of Chip Design (2026–2035)' : '下一代晶片設計技術演進 (2026–2035)'}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    {isEn 
                      ? 'Click on any architectural layer below to explore its challenges, AI integration, and Dr. Shiue\'s low-power modeling synergy.' 
                      : '點擊下方任一層架構，檢視其關鍵工程挑戰、AI 整合方案及薛博士之低功耗建模專業交集。'}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-mono text-cyan-300 bg-cyan-950/60 border border-cyan-800/60 px-3 py-1.5 rounded-lg">
                  <span>Selected: Stage {evolutionSteps[activeStep].stepNum}</span>
                  <span className="text-slate-400">/ 07</span>
                </div>
              </div>

              {/* Horizontal Stepper Flow */}
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
                {evolutionSteps.map((step, idx) => {
                  const isActive = activeStep === idx;
                  return (
                    <button
                      key={step.id}
                      onClick={() => setActiveStep(idx)}
                      className={`relative flex flex-col p-3 rounded-xl border text-left transition-all ${
                        isActive
                          ? 'border-cyan-400 bg-gradient-to-b from-cyan-950/80 to-slate-900 text-white shadow-md shadow-cyan-500/20 ring-1 ring-cyan-400/50 scale-[1.02]'
                          : 'border-slate-800 bg-slate-900/50 text-slate-400 hover:border-slate-700 hover:bg-slate-850'
                      }`}
                    >
                      <div className="flex items-center justify-between font-mono text-[11px] mb-1">
                        <span className={isActive ? 'text-cyan-400 font-bold' : 'text-slate-500'}>
                          {step.stepNum}
                        </span>
                        {idx < evolutionSteps.length - 1 && (
                          <ChevronRight className="h-3 w-3 text-slate-600 hidden lg:block" />
                        )}
                      </div>
                      <div className={`font-bold text-xs sm:text-sm line-clamp-1 ${isActive ? 'text-white' : 'text-slate-300'}`}>
                        {step.title}
                      </div>
                      <div className="text-[10px] text-slate-500 line-clamp-1 mt-0.5">
                        {step.subtitle}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Active Step Deep-Dive Card */}
              <div className="mt-6 rounded-xl border border-cyan-500/30 bg-gradient-to-br from-slate-900/90 via-[#0a1024] to-slate-950 p-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  
                  <div className="lg:col-span-8 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 font-mono font-extrabold text-sm">
                        {evolutionSteps[activeStep].stepNum}
                      </div>
                      <div>
                        <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                          {isEn ? 'Architectural Tier' : '系統架構層次'}
                        </div>
                        <h4 className="text-xl font-bold text-white">
                          {evolutionSteps[activeStep].title} — <span className="text-slate-300 font-normal text-base">{evolutionSteps[activeStep].subtitle}</span>
                        </h4>
                      </div>
                    </div>

                    <p className="text-sm text-slate-300 leading-relaxed">
                      {evolutionSteps[activeStep].desc}
                    </p>

                    {/* Key Technical Focus Areas */}
                    <div>
                      <div className="text-xs font-mono text-slate-400 mb-2">
                        {isEn ? 'Core Engineering & EDA Focus:' : '核心工程與 EDA 著眼點：'}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {evolutionSteps[activeStep].techPoints.map((pt, pIdx) => (
                          <span
                            key={pIdx}
                            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-800/80 px-2.5 py-1 text-xs text-slate-200 font-mono"
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                            {pt}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Dr. Shiue's Research Bridge */}
                  <div className="lg:col-span-4 rounded-xl border border-blue-500/30 bg-blue-950/20 p-4 space-y-3">
                    <div className="flex items-center gap-2 text-xs font-bold text-blue-300 uppercase tracking-wide">
                      <Zap className="h-4 w-4 text-cyan-400" />
                      <span>{isEn ? 'Dr. Shiue\'s Research Synergy' : '薛博士專業研究交集'}</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {evolutionSteps[activeStep].shiueInsight}
                    </p>
                    <div className="pt-2 border-t border-blue-900/50 text-[11px] font-mono text-cyan-300">
                      ASU Ph.D. Memory Modeling + Freescale DPTV System
                    </div>
                  </div>

                </div>
              </div>

              {/* Evolution Flowchart Diagram */}
              <div className="mt-6 rounded-xl border border-slate-800 bg-black/40 p-4">
                <div className="text-xs font-mono text-slate-400 mb-3 text-center">
                  {isEn ? 'TECHNOLOGY EVOLUTION FLOW (2026–2035)' : '半導體技術演進全景流程 (2026–2035)'}
                </div>
                <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs font-mono">
                  {evolutionSteps.map((s, i) => (
                    <React.Fragment key={s.id}>
                      <span className={`px-2.5 py-1 rounded-md border ${
                        activeStep === i 
                          ? 'border-cyan-400 bg-cyan-950/80 text-cyan-300 font-bold' 
                          : 'border-slate-800 bg-slate-900 text-slate-400'
                      }`}>
                        {s.title}
                      </span>
                      {i < evolutionSteps.length - 1 && (
                        <span className="text-cyan-500 font-bold">↓</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Tab 2: Memory & Data Movement Insight */}
        {activeTab === 'memory' && (
          <div className="mt-8 space-y-6">
            <div className="rounded-2xl border border-cyan-500/40 bg-gradient-to-br from-slate-900/90 via-[#081228] to-slate-950 p-6 sm:p-8 backdrop-blur-md">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 bg-cyan-950/50 border border-cyan-800 px-3 py-1 rounded-full mb-3">
                  <Database className="h-3.5 w-3.5" />
                  <span>{isEn ? 'KEY ARCHITECTURAL INSIGHT' : '關鍵架構洞見'}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  {isEn ? 'Memory and Data Movement: Beyond Raw Compute' : '記憶體與資料搬移：超越純算力的核心瓶頸'}
                </h3>
                <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                  {isEn
                    ? 'For AI accelerators (GPU / NPU / TPU), real-world performance is not only about raw compute TFLOPS. Memory hierarchy, cache optimization, data movement, memory bandwidth, and energy-aware scheduling have become the dominant governing factors for building sustainable, scalable AI systems.'
                    : '對於現代 AI 加速器（GPU / NPU / TPU）而言，實際生產效能絕非僅由標稱算力（TFLOPS）決定。快取記憶體階層架構、資料搬移能耗、記憶體頻寬以及節能感知調度，已成為構建高效、可擴展 AI 系統的決定性瓶頸。'}
                </p>
              </div>

              {/* The Powerful Intersection Formula Box */}
              <div className="mt-8 rounded-xl border border-cyan-500/50 bg-cyan-950/30 p-5">
                <div className="text-xs font-mono uppercase tracking-wider text-cyan-300 font-bold mb-2">
                  {isEn ? 'THE POWERFUL INTERSECTION' : '強大交集方程式'}
                </div>
                <div className="text-base sm:text-lg font-mono font-bold text-white flex flex-wrap items-center gap-2">
                  <span className="text-cyan-400">AI</span>
                  <span className="text-slate-500">+</span>
                  <span className="text-sky-400">EDA</span>
                  <span className="text-slate-500">+</span>
                  <span className="text-blue-400">Memory</span>
                  <span className="text-slate-500">+</span>
                  <span className="text-emerald-400">Low Power</span>
                  <span className="text-slate-500">+</span>
                  <span className="text-purple-400">Chiplets</span>
                  <span className="text-slate-500">+</span>
                  <span className="text-pink-400">Agentic Automation</span>
                </div>
              </div>

              {/* Comparison Grid: Compute vs Memory Bottleneck */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Traditional View */}
                <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 space-y-3">
                  <div className="flex items-center gap-2 text-sm font-bold text-slate-400">
                    <span className="h-2 w-2 rounded-full bg-slate-500" />
                    <span>{isEn ? 'Traditional Focus: Pure FLOPs' : '傳統著眼點：單純追求 FLOPs 算力'}</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {isEn
                      ? 'Historically, chip architects prioritized adding more MAC units and ALU cores. However, modern multi-billion parameter models suffer from arithmetic starvation due to DRAM latency and inter-die communication overhead.'
                      : '過去晶片架構多著重於堆疊更多乘加運算單元（MAC）與 ALU 核心。然而在兆級參數大模型時代，因 DRAM 延遲與晶片間通信瓶頸，運算單元往往陷入閒置等待（Arithmetic Starvation）。'}
                  </p>
                  <div className="p-3 rounded-lg bg-black/40 font-mono text-[11px] text-red-400/90 border border-red-950">
                    Memory Wall: Compute Idle Time &gt; 60% in Transformer Inference
                  </div>
                </div>

                {/* AI-Native & Dr. Shiue's Research View */}
                <div className="rounded-xl border border-cyan-500/40 bg-cyan-950/20 p-5 space-y-3">
                  <div className="flex items-center gap-2 text-sm font-bold text-cyan-300">
                    <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                    <span>{isEn ? 'AI-Native View: Data Movement & Energy Scheduling' : 'AI 原生視角：資料流動與能量感知調度'}</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {isEn
                      ? 'Optimizing spatial data locality, cache hierarchies, and memory bandwidth minimizes joules-per-token. Dr. Shiue\'s ASU Ph.D. dissertation on cache memory data power modeling (integrated into PSU\'s cycle-accurate SimplePower simulation tool) directly tackles this frontier.'
                      : '藉由空間資料局部性、多階快取層級與頻寬優化，大幅降低每 Token 能耗（Joules per Token）。薛博士於亞利桑那州立大學之快取記憶體功耗建模博士研究（獲 PSU SimplePower 週期精確工具整合），正是此領域之核心基石。'}
                  </p>
                  <div className="p-3 rounded-lg bg-cyan-950/60 font-mono text-[11px] text-cyan-300 border border-cyan-800/60">
                    Energy-Aware Scheduling + Dynamic DPTV Compensation = Optimal System Efficiency
                  </div>
                </div>

              </div>

              {/* Research Lineage Reference */}
              <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950/80 p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-slate-400">
                <div>
                  <span className="text-cyan-400 font-bold">ASU Ph.D. Dissertation:</span> "Memory Data Modeling and Exploration in Low Power Embedded Systems"
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400">Adopted by Penn State (PSU) SimplePower</span>
                  <a
                    href={PROFILE_DATA.googleScholarUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-cyan-400 hover:underline"
                  >
                    <span>Scholar Link</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Tab 3: The 6 Convergence Pillars */}
        {activeTab === 'pillars' && (
          <div className="mt-8 space-y-6">
            <div className="text-center max-w-2xl mx-auto mb-6">
              <h3 className="text-2xl font-bold text-white">
                {isEn ? 'The 6 Strategic Pillars of 2026 EDA Research' : '2026 年 EDA 研究六大戰略支柱'}
              </h3>
              <p className="mt-2 text-xs text-slate-400">
                {isEn
                  ? 'Key convergence areas driving the transition from manual, script-heavy chip design to autonomous, AI-native semiconductor engineering.'
                  : '推動從手動腳本晶片設計邁向全自主、AI 原生半導體工程的核心技術支柱。'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {convergencePillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="rounded-xl border border-slate-800 bg-slate-900/60 p-6 transition-all duration-300 hover:border-cyan-500/50 hover:bg-slate-900/90 hover:scale-[1.01] group"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 group-hover:bg-cyan-500/20">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {pillar.title}
                      </h4>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Tab 4: Dr. Shiue's Perspective & Vision */}
        {activeTab === 'vision' && (
          <div className="mt-8 space-y-6">
            <div className="rounded-2xl border border-cyan-500/40 bg-gradient-to-br from-slate-900 via-[#0a1226] to-slate-950 p-6 sm:p-8 backdrop-blur-md">
              
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 bg-cyan-950/60 border border-cyan-800 px-3 py-1 rounded-full w-fit mb-4">
                <Sparkles className="h-3.5 w-3.5" />
                <span>{isEn ? 'MY PERSPECTIVE · DR. WENTSONG SHIUE' : '薛文聰博士前瞻觀點'}</span>
              </div>

              <blockquote className="border-l-4 border-cyan-400 pl-4 sm:pl-6 my-4 text-base sm:text-xl font-medium text-slate-200 italic leading-relaxed">
                {isEn ? (
                  <>
                    "The most interesting opportunity may not simply be another traditional EDA tool. <br />
                    It is the convergence of: <br />
                    <span className="text-cyan-400 font-bold not-italic">
                      AI/ML + Knowledge Graphs + LLMs + AI Agents + EDA + Low-Power Chip Design
                    </span>."
                  </>
                ) : (
                  <>
                    「最具前瞻性的戰略機遇，絕不僅是開發另一套傳統的 EDA 工具。<br />
                    而是以下關鍵領域的深度大融合：<br />
                    <span className="text-cyan-400 font-bold not-italic">
                      AI/ML + 知識圖譜 + LLMs + AI 智慧體 + EDA + 低功耗晶片設計
                    </span>。」
                  </>
                )}
              </blockquote>

              <p className="mt-6 text-sm text-slate-300 leading-relaxed max-w-3xl">
                {isEn
                  ? 'Intelligent agents could potentially understand design requirements, engineering constraints, verification objectives, and power/performance trade-offs — while orchestrating increasingly complex chip-design workflows. AI Agent + EDA + Low-Power Chip Design Automation could become an important intersection between AI software and semiconductor engineering over the coming years.'
                  : '具備自主推理與領域知識的智慧體，能夠深刻理解晶片設計需求、工程約束、驗證目標與功耗／效能權衡——進而自動化編排日益複雜的晶片研發全流程。AI 智慧體 + EDA + 低功耗晶片設計自動化，將是未來數年間連結 AI 軟體與半導體工程的最關鍵交集。'}
              </p>

              {/* Concluding Punchline Box */}
              <div className="mt-8 rounded-xl border border-blue-500/50 bg-gradient-to-r from-cyan-950/60 via-blue-950/50 to-purple-950/40 p-6 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-cyan-300 font-semibold">
                    {isEn ? 'THE FINAL VERDICT' : '終極前瞻結論'}
                  </div>
                  <div className="text-lg sm:text-2xl font-extrabold text-white mt-1">
                    {isEn ? (
                      <>The future of chip design may not be simply EDA automation. <br className="hidden sm:inline" /> <span className="bg-gradient-to-r from-cyan-400 to-sky-300 bg-clip-text text-transparent">It may be AI-native chip design.</span></>
                    ) : (
                      <>晶片設計的未來，絕不僅僅是 EDA 自動化。<br className="hidden sm:inline" /> <span className="bg-gradient-to-r from-cyan-400 to-sky-300 bg-clip-text text-transparent">它將是真正的「AI 原生晶片設計（AI-Native Chip Design）」。</span></>
                    )}
                  </div>
                </div>

                <a
                  href="#contact"
                  className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 hover:from-cyan-400 hover:to-blue-500 transition-all hover:scale-105 active:scale-95"
                >
                  <span>{isEn ? 'Discuss Semiconductor AI' : '洽談半導體 AI 合作'}</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
