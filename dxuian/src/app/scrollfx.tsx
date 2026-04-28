"use client"
import "@/app/ui/styles2.css";
import React, { useRef, memo, createContext, useContext } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useAnimationFrame
} from "framer-motion";
import { wrap } from "@motionone/utils";

interface ParallaxProps {
  children: string;
  baseVelocity: number;
}

// Flyweight: Shared animation coordinator - runs ONE animation frame for all parallax elements
class AnimationCoordinator {
  private scrollY: any = null;
  private lastScroll: number = 0;
  private velocity: number = 0;
  private directionFactor: number = 1;
  private animators: Set<(velocity: number, directionFactor: number) => void> = new Set();

  setScrollY(scrollY: any) {
    this.scrollY = scrollY;
  }

  register(animator: (velocity: number, directionFactor: number) => void) {
    this.animators.add(animator);
    return () => this.animators.delete(animator);
  }

  update(delta: number) {
    if (!this.scrollY) return;

    const currentScroll = this.scrollY.get();
    this.velocity = currentScroll - this.lastScroll;
    this.lastScroll = currentScroll;

    // Calculate direction once for all animators
    if (this.velocity < -10) {
      this.directionFactor = -1;
    } else if (this.velocity > 10) {
      this.directionFactor = 1;
    }

    // Notify all registered animators with shared velocity data
    this.animators.forEach(animator => animator(this.velocity, this.directionFactor));
  }
}

// Global coordinator instance - shared across all ParallaxText components
const coordinatorRef = new AnimationCoordinator();
const CoordinatorContext = createContext(coordinatorRef);

const CoordinatorProvider = ({ children }: { children: React.ReactNode }) => {
  const { scrollY } = useScroll();
  coordinatorRef.setScrollY(scrollY);

  // Single animation frame for entire component tree
  useAnimationFrame((t, delta) => {
    coordinatorRef.update(delta);
  });

  return <CoordinatorContext.Provider value={coordinatorRef}>{children}</CoordinatorContext.Provider>;
};

const ParallaxText = memo(({ children, baseVelocity = 100 }: ParallaxProps) => {
  const coordinator = useContext(CoordinatorContext);
  const baseX = useMotionValue(0);
  const directionFactorRef = useRef<number>(1);
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  // Register this component's animator with the coordinator
  React.useEffect(() => {
    const unregister = coordinator.register((velocity, directionFactor) => {
      directionFactorRef.current = directionFactor;
      let moveBy = directionFactor * baseVelocity * 0.016; // ~16ms per frame
      moveBy += directionFactor * moveBy * (velocity / 100);
      baseX.set(baseX.get() + moveBy);
    });

    return unregister;
  }, [baseVelocity, baseX, coordinator]);

  return (
    <div className="parallax">
      <motion.div className="scroller" style={{ x }}>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
      </motion.div>
    </div>
  );
});
ParallaxText.displayName = 'ParallaxText';

export default function Scrollfx() {
  return (
    <CoordinatorProvider>
      <div className="bg-gradient-to-t from-[#020817] my-8 -skew-y-6 via-[#f05252] 10% to-[#020817]">
        <section className="bg-red-500 mt-6 mb-6  !w-[100vw] -rotate-5 PY-2 ">
          <ParallaxText baseVelocity={-3}>Fueled by curiosity, powered by knowledge.</ParallaxText>
          <ParallaxText baseVelocity={3}>Im always open to learning new things</ParallaxText>
        </section>
      </div>
    </CoordinatorProvider>
  );
}

export const LitIcon = memo(({className}: {className: string}) => {
  return (
    <div className={className}>
      <svg width="100%" height="100%" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill="red" d="M40 120l20-60l90 90l-30 50l-40-40h-20"></path>
        <path fill="#283198" d="M80 160 L80 80 L120 40 L 120 120 M0 160 L40 200 L40 120 L20 120"></path>
        <path fill="#324fff" d="M40 120v-80l40-40v80M120 200v-80l40-40v80M0 160v-80l40 40"></path>
        <path fill="#0ff" d="M40 200v-80l40 40"></path>
      </svg>
    </div>
  );
});
LitIcon.displayName = 'ParallaxText';