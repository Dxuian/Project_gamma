'use client'
import { useState, useEffect, lazy, Suspense } from 'react';
import dynamic from 'next/dynamic';

// Lazy load the heavy 3D canvas component with no SSR
const Ppp = dynamic(() => import('@/app/Ppp.js').then(mod => ({ default: mod.Ppp })), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-background" aria-hidden="true" />
});

// Lightweight typewriter for client-side
const TypewriterClient = dynamic(
  () => import('@/app/clienta').then(mod => ({ default: mod.TypewriterEffectSmooth })),
  { ssr: false }
);

export default function Topanimations() {
  const [showCanvas, setShowCanvas] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    // Delay loading the 3D canvas until after LCP using requestIdleCallback
    const loadCanvas = () => setShowCanvas(true);
    
    if ('requestIdleCallback' in window) {
      const id = requestIdleCallback(loadCanvas, { timeout: 2000 });
      return () => cancelIdleCallback(id);
    } else {
      const timer = setTimeout(loadCanvas, 100);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className="grid h-screen w-full">
      <div className="relative w-full flex items-center justify-center">
        {/* 3D Canvas - loaded after LCP */}
        <div className="relative !w-full !h-full flex items-center justify-center" aria-hidden="true">
          {showCanvas && <Ppp />}
        </div>
        
        {/* LCP Element - H1 renders immediately with SSR fallback text */}
        <div className="absolute flex text-7xl text-center">
          <div>
            <h1>
              Hi, I&apos;m dxu&nbsp;
              <span id="changingWord" className="inline-block min-w-[200px]">
                {isClient ? <TypewriterClient /> : 'a developer'}
                {!isClient && <span className="animate-pulse">|</span>}
              </span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
