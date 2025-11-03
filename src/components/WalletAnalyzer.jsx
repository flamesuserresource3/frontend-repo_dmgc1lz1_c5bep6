import React, { useMemo, useState } from 'react';
import { Info, LineChart, Activity, Clock } from 'lucide-react';

function pseudoHashNumber(input) {
  let h = 0;
  for (let i = 0; i < input.length; i++) h = (h * 31 + input.charCodeAt(i)) >>> 0;
  return h;
}

function deriveMetrics(address, symbol) {
  const seed = pseudoHashNumber(`${address}-${symbol}`);
  const txCount = (seed % 200) + 12; // 12 - 211
  const activeDays = (seed % 90) + 1; // 1 - 90
  const totalVolume = ((seed % 5_000_000) / 1000).toFixed(2); // up to 5,000 units
  const avgTx = (totalVolume / txCount).toFixed(3);
  const risk = ['Low', 'Moderate', 'Elevated'][(seed % 3)];
  const velocity = ['Slow', 'Steady', 'Fast'][(Math.floor(seed / 7) % 3)];
  return { txCount, activeDays, totalVolume: Number(totalVolume), avgTx: Number(avgTx), risk, velocity };
}

export default function WalletAnalyzer({ selectedSymbol }) {
  const [address, setAddress] = useState('');
  const [submitted, setSubmitted] = useState('');

  const metrics = useMemo(() => {
    if (!submitted) return null;
    return deriveMetrics(submitted, selectedSymbol);
  }, [submitted, selectedSymbol]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!address.trim()) return;
    setSubmitted(address.trim());
  };

  return (
    <div className="bg-neutral-900/60 border border-white/10 rounded-xl p-5 space-y-5">
      <div className="flex items-start gap-3">
        <Info className="h-5 w-5 text-white/70 mt-0.5" />
        <p className="text-white/80 text-sm">
          Enter a wallet address to generate immediate, on-device insights. This demo uses deterministic calculations and does not call external APIs.
        </p>
      </div>

      <form onSubmit={onSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder={`Paste ${selectedSymbol} wallet address`}
          className="flex-1 rounded-lg bg-neutral-950 text-white placeholder-white/40 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-white/20"
        />
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-lg bg-white text-black font-semibold px-4 py-2 hover:bg-white/90 transition"
        >
          Analyze
        </button>
      </form>

      {metrics && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <StatCard icon={Activity} label="Transactions" value={metrics.txCount.toLocaleString()} subtitle={`${selectedSymbol} total`} />
          <StatCard icon={LineChart} label="Total Volume" value={`${metrics.totalVolume.toLocaleString()} ${selectedSymbol}`} subtitle={`Avg ${metrics.avgTx.toLocaleString()} ${selectedSymbol}`} />
          <StatCard icon={Clock} label="Active Days" value={metrics.activeDays} subtitle="Last 90 days" />
          <div className="rounded-lg border border-white/10 bg-neutral-950 p-4">
            <div className="text-white/60 text-xs mb-1">Profile</div>
            <div className="text-white text-lg font-semibold">{metrics.risk} risk</div>
            <div className="text-white/70 text-sm">Velocity: {metrics.velocity}</div>
          </div>
        </div>
      )}

      {submitted && (
        <div className="text-white/60 text-xs">
          Analyzed address: <span className="text-white break-all font-mono">{submitted}</span> on {selectedSymbol}
        </div>
      )}
    </div>
  );
}

function StatCard({ icon: Icon, label, value, subtitle }) {
  return (
    <div className="rounded-lg border border-white/10 bg-neutral-950 p-4">
      <div className="text-white/60 text-xs mb-1">{label}</div>
      <div className="text-white text-2xl font-bold tracking-tight flex items-center gap-2">
        {Icon ? <Icon className="h-5 w-5 text-white/70" /> : null}
        {value}
      </div>
      {subtitle && <div className="text-white/50 text-xs mt-1">{subtitle}</div>}
    </div>
  );
}
