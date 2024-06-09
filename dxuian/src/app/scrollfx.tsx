"use client"
import "@/app/ui/styles2.css";
import React, { useRef, memo } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from "framer-motion";
import { wrap } from "@motionone/utils";

interface ParallaxProps {
  children: string;
  baseVelocity: number;
}

const ParallaxText = memo(({ children, baseVelocity = 100 }: ParallaxProps) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

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
    <div className="bg-gradient-to-t from-[#020817] my-8 -skew-y-6 via-[#f05252] 10% to-[#020817]">
      <section className="bg-red-500 mt-6 mb-6  !w-[100vw] -rotate-5 PY-2 ">
        <ParallaxText baseVelocity={-3}>Fueled by curiosity, powered by knowledge.</ParallaxText>
        <ParallaxText baseVelocity={3}>Im always open to learning new things</ParallaxText>
      </section>
    </div>
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