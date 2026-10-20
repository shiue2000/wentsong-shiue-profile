import React, { useState, useEffect, useRef } from 'react';
import { Award, ExternalLink, Sparkles, Activity, Layers, Cpu, Eye, Zap, RefreshCw, CheckCircle2 } from 'lucide-react';
import { Language } from '../types';
import aiNeuralGraphImg from '../assets/images/ai_neural_graph_1792465141807.jpg';

interface TopologyVisualizerProps {
  language: Language;
}

export const TopologyVisualizer: React.FC<TopologyVisualizerProps> = ({ language }) => {
  const isEn = language === 'en';
  const [activeTab, setActiveTab] = useState<'neural' | 'patent' | 'cinematic'>('neural');
  const [hoveredNode, setHoveredNode] = useState<{ name: string; type: string; value: string; desc: string } | null>(null);
  const [isSimulating, setIsSimulating] = useState(true);
  const [selectedPatentStage, setSelectedPatentStage] = useState<number>(2);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Interactive Neural Topology Canvas Animation
  useEffect(() => {
    if (activeTab !== 'neural') return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 480);
    let height = (canvas.height = 260);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = 260;
    };
    window.addEventListener('resize', handleResize);

    // Network layers: Input, Hidden 1, Hidden 2, Output
    const layers = [
      { name: 'Input', count: 4, labels: ['Amount ($)', 'Device ID', 'Geo Velocity', 'Time/Zip'], x: 0.15 },
      { name: 'Feature Extr.', count: 5, labels: ['Correl. Filter', 'Zero-Imp Filter', 'PCA Dim-Red', 'Embeddings', 'Scaling'], x: 0.40 },
      { name: 'Dense L2', count: 4, labels: ['Node h1', 'Node h2', 'Node h3', 'Node h4'], x: 0.65 },
      { name: 'Decision', count: 2, labels: ['Fraud (P_1)', 'Legit (P_0)'], x: 0.88 },
    ];

    interface Node {
      x: number;
      y: number;
      layerIdx: number;
      nodeIdx: number;
      label: string;
      color: string;
      pulse: number;
    }

    const nodes: Node[] = [];
    layers.forEach((layer, lIdx) => {
      const step = height / (layer.count + 1);
      for (let i = 0; i < layer.count; i++) {
        nodes.push({
          x: layer.x * width,
          y: step * (i + 1),
          layerIdx: lIdx,
          nodeIdx: i,
          label: layer.labels[i] || `Node ${i + 1}`,
          color: lIdx === 0 ? '#38bdf8' : lIdx === 1 ? '#818cf8' : lIdx === 2 ? '#c084fc' : '#22d3ee',
          pulse: Math.random() * Math.PI * 2,
        });
      }
    });

    // Synaptic pulses
    interface Signal {
      fromNode: Node;
      toNode: Node;
      progress: number;
      speed: number;
      color: string;
    }

    const signals: Signal[] = [];

    // Spawn pulses
    const maybeSpawnSignal = () => {
      if (!isSimulating) return;
      if (Math.random() < 0.25) {
        const sourceLayer = Math.floor(Math.random() * 3);
        const sourceNodes = nodes.filter((n) => n.layerIdx === sourceLayer);
        const targetNodes = nodes.filter((n) => n.layerIdx === sourceLayer + 1);
        if (sourceNodes.length && targetNodes.length) {
          const fromNode = sourceNodes[Math.floor(Math.random() * sourceNodes.length)];
          const toNode = targetNodes[Math.floor(Math.random() * targetNodes.length)];
          signals.push({
            fromNode,
            toNode,
            progress: 0,
            speed: 0.015 + Math.random() * 0.02,
            color: fromNode.color,
          });
        }
      }
    };

    let tick = 0;
    const render = () => {
      tick++;
      ctx.clearRect(0, 0, width, height);

      // Background grid dots
      ctx.fillStyle = 'rgba(56, 189, 248, 0.04)';
      for (let x = 10; x < width; x += 24) {
        for (let y = 10; y < height; y += 24) {
          ctx.beginPath();
          ctx.arc(x, y, 1, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Draw Synaptic Connections (lines between adjacent layers)
      for (let i = 0; i < nodes.length; i++) {
        for (let j = 0; j < nodes.length; j++) {
          if (nodes[j].layerIdx === nodes[i].layerIdx + 1) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = 'rgba(56, 189, 248, 0.12)';
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // Update and draw traveling signals
      maybeSpawnSignal();
      for (let s = signals.length - 1; s >= 0; s--) {
        const sig = signals[s];
        sig.progress += sig.speed;
        if (sig.progress >= 1) {
          signals.splice(s, 1);
          continue;
        }

        const curX = sig.fromNode.x + (sig.toNode.x - sig.fromNode.x) * sig.progress;
        const curY = sig.fromNode.y + (sig.toNode.y - sig.fromNode.y) * sig.progress;

        // Glowing particle
        const grad = ctx.createRadialGradient(curX, curY, 0, curX, curY, 6);
        grad.addColorStop(0, '#ffffff');
        grad.addColorStop(0.4, sig.color);
        grad.addColorStop(1, 'rgba(0,0,0,0)');

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(curX, curY, 5, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw Nodes
      nodes.forEach((node) => {
        node.pulse += 0.04;
        const pulseFactor = Math.sin(node.pulse) * 1.5;

        // Outer glow
        ctx.beginPath();
        ctx.arc(node.x, node.y, 8 + pulseFactor, 0, Math.PI * 2);
        ctx.fillStyle = `${node.color}22`;
        ctx.fill();

        // Node circle
        ctx.beginPath();
        ctx.arc(node.x, node.y, 5, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.shadowColor = node.color;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Node label
        ctx.fillStyle = '#94a3b8';
        ctx.font = '9px JetBrains Mono, monospace';
        ctx.textAlign = node.layerIdx === 3 ? 'left' : node.layerIdx === 0 ? 'right' : 'center';
        const labelX = node.layerIdx === 3 ? node.x + 10 : node.layerIdx === 0 ? node.x - 10 : node.x;
        const labelY = node.layerIdx === 0 || node.layerIdx === 3 ? node.y + 3 : node.y - 10;
        ctx.fillText(node.label, labelX, labelY);
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [activeTab, isSimulating]);

  // Patent 11,531,734 Workflow Steps
  const patentStages = [
    {
      num: 1,
      title: 'Multi-Channel Ingestion',
      titleZh: '多元交易管道數據攝取',
      detail: 'Real-time transaction streaming across CAML, Debit, P2P (Zelle), Wire, ACH, and Bill Pay with microsecond timestamps.',
      detailZh: '橫跨 CAML、Debit、P2P (Zelle)、Wire、ACH 與 Bill Pay 之即時微秒級高頻交易串流。',
      tech: 'Splunk / Kafka / PySpark',
    },
    {
      num: 2,
      title: 'Automated Feature Filtration',
      titleZh: '自動化特徵工程與共線性篩選',
      detail: 'Calculates correlation matrices, prunes single-value columns, eliminates collinear redundancy, and removes zero-importance parameters.',
      detailZh: '計算特徵相關性矩陣、剔除單一常量欄位、過濾高共線性特徵並動態清除零重要度屬性。',
      tech: 'Correlation Filtering / Scikit-Learn',
    },
    {
      num: 3,
      title: 'Multi-Objective Search (Patent Core)',
      titleZh: '多目標動態超參數調優 (專利核心)',
      detail: 'Explores multi-dimensional hyperparameter search spaces using Bayesian optimization and Pareto frontiers balancing precision, recall, and computational latency.',
      detailZh: '運用貝氏優化與柏拉圖前沿（Pareto Frontier）在超參數空間中平衡精確率、召回率與運算延遲。',
      tech: 'U.S. Patent 11,531,734 / Optuna',
    },
    {
      num: 4,
      title: 'Ensemble Tournament Selection',
      titleZh: '候選分類器動態錦標錦選',
      detail: 'Automated algorithmic benchmarking across XGBoost, LightGBM, and Random Forest ensembles with PR-AUC evaluation on imbalanced fraud distributions.',
      detailZh: '在極度不平衡樣本中對 XGBoost、LightGBM 及隨機森林進行自動化演算法錦標賽與 PR-AUC 評比。',
      tech: 'XGBoost / LightGBM / PR-AUC',
    },
    {
      num: 5,
      title: 'MRM Fairness & Disparate Impact Audit',
      titleZh: '模型風險管理 (MRM) 公平性與偏誤審核',
      detail: 'Disparate impact statistical testing across protected demographic dimensions (race, gender, age, marital status) for regulatory governance.',
      detailZh: '針對性別、種族、年齡及婚姻狀況等受保護維度執行嚴格偏誤統計檢驗，確保符合聯邦法規規範。',
      tech: 'Fairness Metrics / MRM Protocols',
    },
    {
      num: 6,
      title: 'Explainable AI Real-Time Scoring',
      titleZh: '可解釋 AI 即時決策與特徵歸因',
      detail: 'Sub-50ms inference accompanied by post-hoc SHAP force-plot mathematical feature attribution for every declined transaction.',
      detailZh: '低於 50 毫秒完成決策評分，並為每筆攔截交易同步生成 SHAP 力圖特徵貢獻數學分解。',
      tech: 'SHAP / LIME / Real-Time API',
    },
  ];

  return (
    <div className="glass-panel overflow-hidden rounded-2xl border border-cyan-500/30 p-1 shadow-2xl transition-all duration-300 hover:border-cyan-400/50 hover:shadow-cyan-950/40">
      
      {/* Top Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800/80 bg-slate-950/80 px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-300">
            {isEn ? 'Dr. WenTsong Shiue AI Topology' : '薛文聰博士 AI 拓撲視覺化'}
          </div>
        </div>

        {/* View Mode Switcher Pills */}
        <div className="flex items-center gap-1 rounded-lg bg-slate-900/90 p-1 border border-slate-800">
          <button
            onClick={() => setActiveTab('neural')}
            className={`flex items-center gap-1.5 rounded-md px-2.5 py-1 text-[11px] font-mono transition-all ${
              activeTab === 'neural'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Activity className="h-3 w-3" />
            <span>{isEn ? 'Live Topology' : '神經拓撲'}</span>
          </button>

          <button
            onClick={() => setActiveTab('patent')}
            className={`flex items-center gap-1.5 rounded-md px-2.5 py-1 text-[11px] font-mono transition-all ${
              activeTab === 'patent'
                ? 'bg-gradient-to-r from-amber-500 to-blue-600 text-white font-bold shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Award className="h-3 w-3 text-amber-300" />
            <span>{isEn ? 'Patent 11,531,734' : '專利架構'}</span>
          </button>

          <button
            onClick={() => setActiveTab('cinematic')}
            className={`flex items-center gap-1.5 rounded-md px-2.5 py-1 text-[11px] font-mono transition-all ${
              activeTab === 'cinematic'
                ? 'bg-gradient-to-r from-purple-500 to-cyan-600 text-white font-bold shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Sparkles className="h-3 w-3" />
            <span>{isEn ? '3D Render' : '3D 渲染圖'}</span>
          </button>
        </div>
      </div>

      {/* Main Visual Display Area */}
      <div className="relative aspect-[16/9] min-h-[260px] w-full overflow-hidden rounded-xl bg-[#060b18] flex items-center justify-center">
        
        {/* VIEW 1: Interactive Live Synaptic Topology */}
        {activeTab === 'neural' && (
          <div className="relative h-full w-full flex flex-col justify-between">
            <canvas ref={canvasRef} className="h-full w-full cursor-crosshair" />

            {/* Top HUD Overlay */}
            <div className="pointer-events-none absolute top-3 left-4 right-4 flex items-center justify-between text-[10px] font-mono text-cyan-400/90">
              <span className="flex items-center gap-1.5">
                <Zap className="h-3 w-3 text-cyan-300 animate-pulse" />
                <span>SYNAPSE FORWARD PROPAGATION // MULTI-LAYER MLP</span>
              </span>
              <span className="text-slate-400">ACTIVATION: RELU · LOSS: 0.082</span>
            </div>

            {/* Bottom Caption Overlay */}
            <div className="pointer-events-none absolute bottom-2.5 left-4 right-4 flex items-center justify-between text-[11px] text-slate-300 bg-slate-950/70 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-800/80">
              <span className="font-mono text-cyan-300 font-semibold">
                Multi-Layer Network Architecture
              </span>
              <span className="text-slate-400 text-[10px]">
                ASU Ph.D. & Industry R&D
              </span>
            </div>
          </div>
        )}

        {/* VIEW 2: Interactive USPTO Patent 11,531,734 Flowchart */}
        {activeTab === 'patent' && (
          <div className="relative h-full w-full p-4 overflow-y-auto bg-gradient-to-br from-slate-950 via-[#071329] to-slate-900 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-[10px] font-mono text-amber-400 mb-2">
                <span className="flex items-center gap-1.5 font-bold">
                  <Award className="h-3.5 w-3.5" />
                  <span>U.S. PATENT 11,531,734 ARCHITECTURE PIPELINE</span>
                </span>
                <span className="text-slate-400">GRANTED: DEC 20, 2022</span>
              </div>

              {/* Step Flow Ribbon */}
              <div className="grid grid-cols-6 gap-1.5 my-2">
                {patentStages.map((stage, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedPatentStage(idx)}
                    className={`rounded-lg p-2 text-center transition-all border ${
                      selectedPatentStage === idx
                        ? 'border-amber-400 bg-amber-950/40 text-amber-300 shadow-md shadow-amber-950/50'
                        : 'border-slate-800 bg-slate-900/60 text-slate-400 hover:border-slate-700 hover:text-white'
                    }`}
                  >
                    <div className="text-[10px] font-mono font-bold">0{stage.num}</div>
                    <div className="text-[9px] truncate font-medium mt-0.5">
                      {isEn ? stage.title.split(' ')[0] : stage.titleZh.slice(0, 4)}
                    </div>
                  </button>
                ))}
              </div>

              {/* Active Stage Detail Box */}
              <div className="mt-2 rounded-xl border border-amber-500/30 bg-slate-900/80 p-3">
                <div className="flex items-center justify-between gap-2">
                  <h5 className="text-xs font-bold text-white flex items-center gap-1.5">
                    <span className="rounded bg-amber-500/20 px-1.5 py-0.5 font-mono text-[10px] text-amber-300">
                      Step {patentStages[selectedPatentStage].num}
                    </span>
                    <span>
                      {isEn ? patentStages[selectedPatentStage].title : patentStages[selectedPatentStage].titleZh}
                    </span>
                  </h5>
                  <span className="text-[10px] font-mono text-cyan-400">
                    {patentStages[selectedPatentStage].tech}
                  </span>
                </div>
                <p className="mt-1.5 text-[11px] leading-relaxed text-slate-300">
                  {isEn ? patentStages[selectedPatentStage].detail : patentStages[selectedPatentStage].detailZh}
                </p>
              </div>
            </div>

            {/* Patent Link Button */}
            <div className="mt-2 flex items-center justify-between border-t border-slate-800/80 pt-2 text-[11px]">
              <span className="text-slate-400">Inventors: W. Shiue, T. Fu, X. Zhang</span>
              <a
                href="https://patents.google.com/patent/US11531734B2/en"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-mono font-bold text-amber-400 hover:text-amber-300 hover:underline"
              >
                <span>Google Patents US11531734B2</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
        )}

        {/* VIEW 3: Cinematic 3D Neural Flow Graphic Asset */}
        {activeTab === 'cinematic' && (
          <div className="relative h-full w-full">
            <img
              src="/assets/images/ai_neural_graph_1792465141807.jpg"
              alt="Dr. WenTsong Shiue AI Neural Network and Machine Learning Topology"
              onError={(e) => {
                // Fallback to imported asset if relative public path fails
                const target = e.currentTarget;
                if (target.src !== aiNeuralGraphImg) {
                  target.src = aiNeuralGraphImg;
                }
              }}
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#080d1a] via-transparent to-transparent" />
            
            <div className="absolute bottom-2.5 left-4 right-4 flex items-center justify-between text-xs text-slate-300 bg-slate-950/70 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-800/80">
              <span className="font-mono text-cyan-300">Multi-Layer Network Architecture</span>
              <span className="text-slate-400 text-[11px]">ASU Ph.D. & Industry R&D</span>
            </div>
          </div>
        )}
      </div>

      {/* Sub-panel: Granted Patent Spotlight with Direct Google Patent Link */}
      <div className="p-4 sm:p-5 bg-slate-950/40">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="rounded-lg bg-amber-500/10 p-2 border border-amber-500/30">
              <Award className="h-5 w-5 text-amber-400 shrink-0" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400 font-mono">
                  {isEn ? 'U.S. Patent 11,531,734 Granted' : '獲准美國專利 11,531,734'}
                </span>
                <span className="rounded bg-emerald-950/80 border border-emerald-500/40 px-1.5 py-0.2 text-[9px] font-mono text-emerald-300">
                  USPTO Verified
                </span>
              </div>
              <h4 className="mt-0.5 text-sm font-bold text-white dark:text-white light:text-slate-900">
                {isEn ? 'Determining Optimal Machine Learning Models' : '決定最佳機器學習模型'}
              </h4>
            </div>
          </div>

          <a
            href="https://patents.google.com/patent/US11531734B2/en"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-1.5 rounded-lg border border-amber-500/50 bg-amber-950/30 px-2.5 py-1.5 text-xs font-mono font-semibold text-amber-300 hover:bg-amber-900/40 hover:text-white hover:border-amber-400 transition-all hover:scale-105 shadow-sm"
            title="Open U.S. Patent 11,531,734 on Google Patents"
          >
            <span>US11531734B2</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>

        <p className="mt-2.5 text-xs leading-relaxed text-slate-300 dark:text-slate-300 light:text-slate-600">
          {isEn
            ? 'Automated algorithmic framework for dynamic multi-objective hyperparameter optimization and classifier candidate selection.'
            : '針對多目標超參數優化與候選模型評估篩選的自動化機器學習架構。'}
        </p>

        {/* Bottom meta row with direct patent link & date */}
        <div className="mt-3 flex flex-wrap items-center justify-between border-t border-slate-800/80 pt-2.5 text-[11px] font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <span>USPTO · Dec 20, 2022</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-cyan-400">Bank of America</span>
          </div>
          <a
            href="https://patents.google.com/patent/US11531734B2/en"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 hover:underline"
          >
            <span>https://patents.google.com/patent/US11531734B2/en</span>
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </div>

    </div>
  );
};
