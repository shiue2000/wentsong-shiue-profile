import React, { useState } from 'react';
import { Sliders, Activity, Eye, ShieldAlert, CheckCircle2, AlertTriangle, ArrowRight, RefreshCw } from 'lucide-react';
import { Language } from '../types';

interface InteractiveAiLabProps {
  language: Language;
}

interface SampleTransaction {
  id: string;
  name: string;
  nameZh: string;
  channel: string;
  amount: number;
  baseProbability: number;
  features: {
    name: string;
    value: string;
    shap: number; // positive = pushes risk higher, negative = pushes risk lower
  }[];
}

export const InteractiveAiLab: React.FC<InteractiveAiLabProps> = ({ language }) => {
  const isEn = language === 'en';

  // Classification Threshold (0.01 - 0.99)
  const [threshold, setThreshold] = useState<number>(0.35);
  const [selectedTxId, setSelectedTxId] = useState<string>('tx-wire');

  const sampleTransactions: SampleTransaction[] = [
    {
      id: 'tx-wire',
      name: 'High-Value Wire Transfer',
      nameZh: '大額電匯交易 (Wire Transfer)',
      channel: 'Wire / CAML',
      amount: 48500,
      baseProbability: 0.82,
      features: [
        { name: 'Transfer Amount ($48,500)', value: 'High Outlier', shap: +0.34 },
        { name: 'Device Fingerprint', value: 'New Untrusted Device', shap: +0.22 },
        { name: 'Geo Velocity', value: '3,000 miles in 20 min', shap: +0.28 },
        { name: 'Account Age', value: '12 Years (Prime Tier)', shap: -0.14 },
        { name: 'Recipient Account History', value: 'Unverified Mule Pattern', shap: +0.12 },
      ],
    },
    {
      id: 'tx-debit',
      name: 'Retail Point-of-Sale Purchase',
      nameZh: '一般零售扣款消費 (Debit POS)',
      channel: 'Debit',
      amount: 64.2,
      baseProbability: 0.08,
      features: [
        { name: 'Transfer Amount ($64.20)', value: 'Within Routine Mean', shap: -0.21 },
        { name: 'Physical Terminal', value: 'Chip & PIN Verified', shap: -0.28 },
        { name: 'Geo Proximity', value: 'Home Zip Code (1.2 mi)', shap: -0.32 },
        { name: 'Time of Day', value: '2:15 PM (Standard)', shap: -0.05 },
        { name: 'Merchant Category Code', value: 'Grocery Store (Low Risk)', shap: -0.06 },
      ],
    },
    {
      id: 'tx-p2p',
      name: 'Borderline P2P / Zelle Payment',
      nameZh: '臨界 P2P / Zelle 轉帳支付',
      channel: 'P2P (Zelle)',
      amount: 1450,
      baseProbability: 0.44,
      features: [
        { name: 'Transfer Amount ($1,450)', value: 'Near Channel Limit', shap: +0.24 },
        { name: 'Device Fingerprint', value: 'Known Mobile Device', shap: -0.22 },
        { name: 'Recipient Relationship', value: 'First-time Contact', shap: +0.18 },
        { name: 'Hour of Transaction', value: '3:45 AM (Anomalous)', shap: +0.21 },
        { name: 'Biometric Login', value: 'FaceID Confirmed', shap: -0.15 },
      ],
    },
  ];

  const currentTx = sampleTransactions.find((t) => t.id === selectedTxId) || sampleTransactions[0];
  const modelProbability = currentTx.baseProbability;
  const isDeclined = modelProbability >= threshold;

  // Dynamic simulated metrics based on threshold curve
  // Lower threshold => higher recall (catches more fraud), but lower precision (more false positives)
  const simulatedRecall = Math.min(99.2, Math.max(50.0, 99.2 - Math.pow(threshold, 1.4) * 52)).toFixed(1);
  const simulatedPrecision = Math.min(96.5, Math.max(35.0, 42.0 + Math.pow(threshold, 0.7) * 54)).toFixed(1);
  const simulatedFPR = Math.max(0.08, 1.85 * (1 - threshold) * (1 - threshold)).toFixed(2);
  const simulatedF1 = (
    (2 * (parseFloat(simulatedPrecision) * parseFloat(simulatedRecall))) /
    (parseFloat(simulatedPrecision) + parseFloat(simulatedRecall))
  ).toFixed(1);

  return (
    <section id="lab" className="relative py-20 sm:py-24 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-semibold tracking-wider uppercase text-cyan-400 dark:text-cyan-400 light:text-cyan-700">
            {isEn ? 'Interactive Demonstration' : '動態技術展示'}
          </div>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl dark:text-white light:text-slate-900">
            {isEn ? 'Interactive Model Governance & SHAP Lab' : '互動式模型治理與 SHAP 可解釋性實驗室'}
          </h2>
          <p className="mt-3 text-base text-slate-300 dark:text-slate-300 light:text-slate-700">
            {isEn
              ? 'Experience the exact statistical trade-offs and explainable AI techniques Dr. Shiue governed at Bank of America: dynamically adjust the classification threshold to observe Precision-Recall impacts and inspect local SHAP feature attributions.'
              : '體驗薛博士在美國銀行實際治理的核心統計權衡與可解釋 AI 技術：動態調整決策門檻值以觀察 Precision-Recall 權衡消長，並即時檢視局部 SHAP 特徵歸因分解。'}
          </p>
        </div>

        {/* Interactive Workspace Grid */}
        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12">
          
          {/* Left Column: Transaction Selection & SHAP Waterfall */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Transaction selector tabs */}
            <div className="glass-panel rounded-2xl p-6">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                {isEn ? '1. Select Test Transaction Profile' : '1. 選擇測試交易案例'}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {sampleTransactions.map((tx) => (
                  <button
                    key={tx.id}
                    onClick={() => setSelectedTxId(tx.id)}
                    className={`rounded-xl p-3 text-left transition-all border ${
                      selectedTxId === tx.id
                        ? 'border-cyan-400 bg-cyan-950/30 shadow-md shadow-cyan-950/20'
                        : 'border-slate-800 bg-slate-900/50 hover:border-slate-700 text-slate-400'
                    }`}
                  >
                    <div className="text-xs font-bold text-white dark:text-white light:text-slate-900">
                      {isEn ? tx.name : tx.nameZh}
                    </div>
                    <div className="mt-1 flex items-center justify-between text-[11px] font-mono text-cyan-400">
                      <span>{tx.channel}</span>
                      <span>${tx.amount.toLocaleString()}</span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Current Decision Output Banner */}
              <div className="mt-6 rounded-xl border border-slate-800 bg-slate-900/60 p-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <div className="text-[11px] font-mono uppercase text-slate-400">
                      {isEn ? 'Model Prediction Risk Score' : '模型預測風險分數'}
                    </div>
                    <div className="mt-1 flex items-baseline gap-2">
                      <span className="font-mono text-3xl font-extrabold text-white tabular-nums">
                        {(modelProbability * 100).toFixed(1)}%
                      </span>
                      <span className="text-xs text-slate-400">
                        {isEn ? `vs. Threshold: ${(threshold * 100).toFixed(0)}%` : `vs. 決策門檻值: ${(threshold * 100).toFixed(0)}%`}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {isDeclined ? (
                      <div className="flex items-center gap-2 rounded-lg bg-red-950/50 border border-red-500/50 px-3.5 py-2 text-xs font-bold text-red-300">
                        <ShieldAlert className="h-4 w-4 text-red-400" />
                        <span>{isEn ? 'DECLINE / TRIGGER 2FA' : '攔截阻斷 / 啟動二次身分驗證'}</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2 rounded-lg bg-emerald-950/50 border border-emerald-500/50 px-3.5 py-2 text-xs font-bold text-emerald-300">
                        <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                        <span>{isEn ? 'APPROVE TRANSACTION' : '自動核准通過交易'}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Explainable AI SHAP Attribution Breakdown */}
              <div className="mt-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                    <Eye className="h-4 w-4 text-cyan-400" />
                    <span>{isEn ? 'SHAP Feature Contribution Waterfall' : 'SHAP 特徵歸因瀑布分解'}</span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-500">
                    {isEn ? 'Shapley Values (φ)' : 'Shapley 貢獻值 (φ)'}
                  </span>
                </div>

                <div className="space-y-3">
                  {currentTx.features.map((feat, fIdx) => {
                    const isRiskPositive = feat.shap > 0;
                    const barWidth = Math.min(100, Math.abs(feat.shap) * 220);

                    return (
                      <div key={fIdx} className="rounded-lg border border-slate-800/80 bg-slate-900/40 p-3">
                        <div className="flex items-center justify-between text-xs mb-1.5">
                          <span className="font-medium text-slate-200">{feat.name}</span>
                          <span className="font-mono text-[11px] text-slate-400">{feat.value}</span>
                        </div>

                        {/* Bar representation */}
                        <div className="flex items-center gap-3">
                          <div className="h-2 w-full rounded-full bg-slate-800 overflow-hidden flex">
                            {isRiskPositive ? (
                              <div
                                className="h-full bg-gradient-to-r from-amber-500 to-red-500 rounded-full transition-all duration-500"
                                style={{ width: `${barWidth}%` }}
                              />
                            ) : (
                              <div
                                className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-500 ml-auto"
                                style={{ width: `${barWidth}%` }}
                              />
                            )}
                          </div>
                          <span
                            className={`font-mono text-xs font-bold shrink-0 ${
                              isRiskPositive ? 'text-red-400' : 'text-cyan-400'
                            }`}
                          >
                            {feat.shap > 0 ? `+${feat.shap.toFixed(2)}` : feat.shap.toFixed(2)}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-4 flex items-center justify-between text-[11px] font-mono text-slate-400 border-t border-slate-800/80 pt-3">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-cyan-400" />
                    <span>{isEn ? 'Negative SHAP: Lowers Risk' : '負向 SHAP：降低詐欺機率'}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-red-400" />
                    <span>{isEn ? 'Positive SHAP: Increases Risk' : '正向 SHAP：推高詐欺風險'}</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Threshold Slider & Performance Tradeoff Curves */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="glass-panel rounded-2xl p-6">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                {isEn ? '2. Classification Threshold Tuning' : '2. 決策門檻調校與指標聯動'}
              </div>

              {/* 1-click Presets for fast interactive experimentation */}
              <div className="mb-4 flex flex-wrap gap-1.5">
                {[
                  { label: isEn ? '🛡️ Strict Security (0.20)' : '🛡️ 嚴格阻斷 (0.20)', val: 0.2 },
                  { label: isEn ? '⚖️ Balanced Banking (0.35)' : '⚖️ 最佳平衡 (0.35)', val: 0.35 },
                  { label: isEn ? '⚡ Frictionless (0.60)' : '⚡ 極低客戶摩擦 (0.60)', val: 0.6 },
                ].map((preset, pIdx) => (
                  <button
                    key={pIdx}
                    onClick={() => setThreshold(preset.val)}
                    className={`rounded-lg px-2.5 py-1 text-[11px] font-mono transition-all ${
                      Math.abs(threshold - preset.val) < 0.005
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold shadow-sm'
                        : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                    }`}
                  >
                    {preset.label}
                  </button>
                ))}
              </div>

              {/* Threshold Slider */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-300 font-medium">
                    {isEn ? 'Operating Cutoff (τ)' : '操作截止門檻 (τ)'}
                  </span>
                  <span className="font-mono text-base font-bold text-cyan-400">
                    {threshold.toFixed(2)}
                  </span>
                </div>
                <input
                  type="range"
                  min="0.05"
                  max="0.85"
                  step="0.01"
                  value={threshold}
                  onChange={(e) => setThreshold(parseFloat(e.target.value))}
                  className="w-full accent-cyan-400 cursor-pointer h-2 bg-slate-800 rounded-lg"
                  aria-label="Transaction Risk Threshold"
                />
                <div className="flex justify-between text-[10px] font-mono text-slate-500">
                  <span>0.05 (High Sensitivity)</span>
                  <span>0.85 (High Specificity)</span>
                </div>
              </div>

              {/* Live Metric Cards Grid */}
              <div className="mt-6 grid grid-cols-2 gap-3">
                
                <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-3.5">
                  <div className="text-[11px] font-mono text-slate-400">
                    {isEn ? 'Recall (Detection Rate)' : 'Recall (詐欺攔截率)'}
                  </div>
                  <div className="mt-1 font-mono text-xl font-bold text-cyan-300 tabular-nums">
                    {simulatedRecall}%
                  </div>
                  <div className="text-[10px] text-slate-500 mt-0.5">
                    {isEn ? 'True Positive Rate' : '真陽性率 (TPR)'}
                  </div>
                </div>

                <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-3.5">
                  <div className="text-[11px] font-mono text-slate-400">
                    {isEn ? 'Precision (PPV)' : 'Precision (預測精確率)'}
                  </div>
                  <div className="mt-1 font-mono text-xl font-bold text-sky-300 tabular-nums">
                    {simulatedPrecision}%
                  </div>
                  <div className="text-[10px] text-slate-500 mt-0.5">
                    {isEn ? 'Flagged Accuracy' : '警示正確率'}
                  </div>
                </div>

                <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-3.5">
                  <div className="text-[11px] font-mono text-slate-400">
                    {isEn ? 'False Positive Rate (FPR)' : 'False Positive Rate (誤報率)'}
                  </div>
                  <div className="mt-1 font-mono text-xl font-bold text-amber-300 tabular-nums">
                    {simulatedFPR}%
                  </div>
                  <div className="text-[10px] text-slate-500 mt-0.5">
                    {isEn ? 'Customer Friction Rate' : '客戶干擾摩擦率'}
                  </div>
                </div>

                <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-3.5">
                  <div className="text-[11px] font-mono text-slate-400">
                    {isEn ? 'F1-Score' : 'F1 分數 (調和平均)'}
                  </div>
                  <div className="mt-1 font-mono text-xl font-bold text-purple-300 tabular-nums">
                    {simulatedF1}
                  </div>
                  <div className="text-[10px] text-slate-500 mt-0.5">
                    {isEn ? 'Harmonic Mean' : 'Precision & Recall 權衡'}
                  </div>
                </div>

              </div>

              {/* Model Risk Governance Explanation Box */}
              <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950/40 p-4 text-xs leading-relaxed text-slate-400 space-y-2">
                <div className="font-semibold text-slate-200">
                  {isEn ? 'Model Risk Management (MRM) Perspective' : '模型風險管理 (MRM) 視角'}
                </div>
                <p>
                  {isEn
                    ? 'In tier-1 financial institutions, minimizing False Positives (FPR) is just as critical as high recall to prevent legitimate customer friction. Dr. Shiue conducted multi-objective trade-off validation across sensitive subgroups to ensure parity compliance.'
                    : '在大型跨國金融機構中，壓低偽陽性誤報率（FPR）與維持高攔截率同等重要，以避免干擾正常消費用戶。薛博士主導跨敏感子群體的多目標權衡統計驗證，確保模型達到聯邦公平性標準。'}
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
