import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full h-[70vh] min-h-[520px] overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline 
          scene="https://prod.spline.design/44zrIZf-iQZhbQNQ/scene.splinecode" 
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlay for readability (doesn't block interactions) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />

      <div className="relative z-10 h-full container mx-auto px-6 flex flex-col justify-center">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-3 py-1 text-xs text-white/90 ring-1 ring-white/15 mb-4">
            <Rocket className="h-3.5 w-3.5" />
            <span>Crypto insights powered by interactive 3D</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Track and analyze your crypto transactions
          </h1>
          <p className="mt-4 text-base sm:text-lg text-white/80 max-w-2xl">
            Explore wallet activity, gauge velocity, and visualize trends. Select a coin and enter a wallet to generate instant, on-device insights.
          </p>
        </div>
      </div>
    </section>
  );
}
