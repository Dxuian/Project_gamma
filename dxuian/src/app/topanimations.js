'use client'
import { useState, useEffect } from 'react';
import { Suspense } from 'react';
import {Ppp} from '@/app/Ppp.js';
import {   TypewriterComponent  } from "@/app/clienta"

export default function Topanimations() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading completion
    setTimeout(() => setIsLoaded(true), 2000); // Adjust time based on your loading time
  }, []);

  return (
    <div className="grid h-screen w-full">
      <div className="relative w-full flex items-center justify-center">
        <div className="relative !w-full !h-full flex items-center justify-center">
          <Suspense fallback={null}>
            <Ppp />
          </Suspense>
        </div>
        {isLoaded && (
          <div className="absolute flex text-7xl text-center fade-in">
          <TypewriterComponent />
          </div>
        )}
      </div>
    </div>
  );
}
