'use client';
import React, { ReactNode } from 'react';
import { m, LazyMotion, domAnimation } from 'framer-motion';
import { cn } from '@/lib/utils';

type MotionWrapProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

const MotionWrap: React.FC<MotionWrapProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <LazyMotion features={() => import('framer-motion').then(mod => mod.domAnimation)}>
      <m.section
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className={cn(className, 'app__flex')}
        {...props}
      >
        {children}
      </m.section>
    </LazyMotion>
  );
};

export default MotionWrap;
