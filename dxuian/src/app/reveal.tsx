'use client';
import React, { useEffect, useRef } from 'react';
import { m, LazyMotion, domAnimation, useInView, useAnimation } from 'framer-motion';

interface RevealProps {
  children: React.ReactNode;
  width?: 'fit-content' | '100%';
  className?: string;
}

const Reveal = ({ children, width = '100%', className }: RevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    } else {
      mainControls.start('hidden');
    }
  }, [isInView]);

  return (
    <LazyMotion features={() => import('framer-motion').then(mod => mod.domAnimation)}>
      <div ref={ref} className={className} style={{ position: 'relative', width, overflow: 'hidden' }}>
        <m.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 }
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          {children}
        </m.div>
        {/* TODO: Add slide div thingy */}
      </div>
    </LazyMotion>
  );
};

export default Reveal;
