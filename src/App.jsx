import React, { useState } from 'react';
import Hero from './components/Hero';
import MarqueeTopCoins from './components/MarqueeTopCoins';
import CryptoSelector from './components/CryptoSelector';
import WalletAnalyzer from './components/WalletAnalyzer';
import { Star } from 'lucide-react';

export default function App() {
  const [selected, setSelected] = useState('BTC');

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <Hero />
      <MarqueeTopCoins />

      <main className="container mx-auto px-6 py-10 space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <CryptoSelector value={selected} onChange={setSelected} />
            <div className="mt-6 rounded-xl bg-gradient-to-br from-indigo-500/15 via-fuchsia-500/10 to-cyan-500/15 border border-white/10 p-4">
              <div className="flex items-start gap-3">
                <Star className="h-5 w-5 text-white/80 mt-0.5" />
                <div>
                  <div className="font-semibold">Pro tip</div>
                  <p className="text-sm text-white/80">Switch coins to see how metrics adjust per network context.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <WalletAnalyzer selectedSymbol={selected} />
          </div>
        </div>

        <section className="mt-4 rounded-xl border border-white/10 bg-neutral-900/40 p-6">
          <h2 className="text-xl font-bold mb-2">Future enhancements</h2>
          <ul className="list-disc list-inside text-white/80 space-y-1">
            <li>Backend integration to fetch live transactions from block explorers per chain.</li>
            <li>Address risk scoring with anomaly detection and entity clustering.</li>
            <li>Historical charts for balance, inflows/outflows, and counterparties.</li>
            <li>CSV export and sharable analysis links.</li>
            <li>Wallet ENS/UNS resolution and multi-chain address mapping.</li>
          </ul>
        </section>
      </main>

      <footer className="border-t border-white/10 py-8 text-center text-white/60 text-sm">
        Built for crypto analytics — demo mode, no external API calls.
      </footer>
    </div>
  );
}
