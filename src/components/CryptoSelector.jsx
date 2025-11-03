import React from 'react';

const COINS = [
  { symbol: 'BTC', name: 'Bitcoin' },
  { symbol: 'ETH', name: 'Ethereum' },
  { symbol: 'SOL', name: 'Solana' },
  { symbol: 'USDT', name: 'Tether' },
  { symbol: 'BNB', name: 'BNB' },
  { symbol: 'XRP', name: 'XRP' },
  { symbol: 'ADA', name: 'Cardano' },
  { symbol: 'DOGE', name: 'Dogecoin' },
  { symbol: 'TRX', name: 'TRON' },
  { symbol: 'MATIC', name: 'Polygon' },
];

export default function CryptoSelector({ value, onChange }) {
  return (
    <div className="bg-neutral-900/60 border border-white/10 rounded-xl p-4">
      <label className="block text-sm font-medium text-white/80 mb-2">Select cryptocurrency</label>
      <select 
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg bg-neutral-900 text-white border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-white/20"
      >
        {COINS.map((c) => (
          <option key={c.symbol} value={c.symbol}>{c.name} ({c.symbol})</option>
        ))}
      </select>
    </div>
  );
}
