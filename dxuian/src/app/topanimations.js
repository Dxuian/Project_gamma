'use client'
import { Suspense } from 'react';
import { Ppp } from '@/app/Ppp.js';
import { TypewriterEffectSmooth } from '@/app/clienta';

export default function Topanimations() {
  return (
    <div className="grid h-screen w-full">
      <div className="relative w-full flex items-center justify-center">
        {/* 3D Canvas - loads immediately */}
        <div className="relative !w-full !h-full flex items-center justify-center" aria-hidden="true">
          <Suspense fallback={null}>
            <Ppp />
          </Suspense>
        </div>
        
        {/* LCP Element - H1 */}
        <div className="absolute flex text-7xl text-center">
          <div>
            <h1>
              Hi, I&apos;m dxu&nbsp;
              <span id="changingWord" className="inline-block min-w-[200px]">
                <TypewriterEffectSmooth />
              </span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
