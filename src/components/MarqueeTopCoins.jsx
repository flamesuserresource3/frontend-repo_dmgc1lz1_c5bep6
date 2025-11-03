import React from 'react';

const coins = [
  { name: 'Bitcoin', symbol: 'BTC', logo: 'https://cryptologos.cc/logos/bitcoin-btc-logo.svg?v=032' },
  { name: 'Ethereum', symbol: 'ETH', logo: 'https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=032' },
  { name: 'Tether', symbol: 'USDT', logo: 'https://cryptologos.cc/logos/tether-usdt-logo.svg?v=032' },
  { name: 'BNB', symbol: 'BNB', logo: 'https://cryptologos.cc/logos/bnb-bnb-logo.svg?v=032' },
  { name: 'XRP', symbol: 'XRP', logo: 'https://cryptologos.cc/logos/xrp-xrp-logo.svg?v=032' },
  { name: 'USDC', symbol: 'USDC', logo: 'https://cryptologos.cc/logos/usd-coin-usdc-logo.svg?v=032' },
  { name: 'Cardano', symbol: 'ADA', logo: 'https://cryptologos.cc/logos/cardano-ada-logo.svg?v=032' },
  { name: 'Dogecoin', symbol: 'DOGE', logo: 'https://cryptologos.cc/logos/dogecoin-doge-logo.svg?v=032' },
  { name: 'Solana', symbol: 'SOL', logo: 'https://cryptologos.cc/logos/solana-sol-logo.svg?v=032' },
  { name: 'TRON', symbol: 'TRX', logo: 'https://cryptologos.cc/logos/tron-trx-logo.svg?v=032' },
];

export default function MarqueeTopCoins() {
  return (
    <section className="w-full bg-neutral-950 border-y border-white/10">
      <div className="relative overflow-hidden">
        <div className="flex items-center gap-10 animate-[marquee_30s_linear_infinite] py-6 will-change-transform">
          {[...coins, ...coins].map((coin, idx) => (
            <div key={idx} className="flex items-center gap-3 opacity-90 hover:opacity-100 transition-opacity">
              <img src={coin.logo} alt={`${coin.name} logo`} className="h-8 w-8 object-contain" />
              <span className="text-white/80 text-sm font-medium">{coin.name} <span className="text-white/50">({coin.symbol})</span></span>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
