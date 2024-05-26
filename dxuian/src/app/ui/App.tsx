"use client"
import * as React from "react";
import { useState } from "react";
import { star, heart, hand, plane, lightning, note , game } from "./paths";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { getIndex, useFlubber } from "./use-flubber";

const paths = [lightning, hand, plane, heart, note, star,game, lightning];
const colors = [
  "#00cc88",
  "#0099ff",
  "#8855ff",
  "#ff0055",
  "#ee4444",
  "#ffcc00",
  "#ffcc00",
  "#00cc88",
];

export default function App({className} : {className:string}) {
  const [pathIndex, setPathIndex] = useState(0);
  const progress = useMotionValue(pathIndex);
  const fill = useTransform(progress, paths.map(getIndex), colors);
  const path = useFlubber(progress, paths);

  React.useEffect(() => {
    const animation = animate(progress, pathIndex, {
      duration: 0.1,
      ease: "easeInOut",
      onComplete: () => {
        if (pathIndex === paths.length - 1) {
          progress.set(0);
          setPathIndex(1);
        } else {
          setPathIndex(pathIndex + 1);
        }
      },
    });
    return () => animation.stop();
  }, [pathIndex]);

  return (
    <div className={className}>
    <svg width="400" height="400">
      <g transform="translate(10 10) scale(17 17)">
        <motion.path fill={fill} d={path} />
      </g>
    </svg>
    </div>
  );
}
