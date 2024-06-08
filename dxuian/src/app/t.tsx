"use client"
import "@/app/ui/cir.css"
import { useState } from "react";
import { motion } from "framer-motion"

import { useMediaQuery } from 'react-responsive'

export default function App() {
  const isSmallScreen = useMediaQuery({ query: '(max-width: 600px)' })
  const scale = isSmallScreen ? 1.5 : 2;

  return (
    <motion.div
      className="box"
      layout // Keep the layout prop
      animate={{
        scale: [1, scale, scale, 1, 1],
        rotate: [0, 0, 180, 180, 0],
        borderRadius: ["0%", "0%", "50%", "50%", "0%"]
      }}
      transition={{
        duration: 10,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat: Infinity,
        // Add the following properties for better performance
        type: "tween", // Use the tween animation type
        restingValue: 0, // Set the resting value to 0
        restSpeedThreshold: 1, // Increase the resting speed threshold
      }}
    />
  );
}

import { Suspense } from "react";
export function AppWithUI() {
  const [count, setCount] = useState(0);
  return (
    // <Suspense fallback={    <div className='skeleton wave w-full h-full success' ></div>    }>
      <App key={count} />
    // </Suspense>

  );
}