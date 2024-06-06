"use client"
import "@/app/ui/cir.css"
import { useState } from "react";
import { motion } from "framer-motion"

export default function App() {
  return (
    <motion.div
      className="box"
      layout // Keep the layout prop
      animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 180, 180, 0],
        borderRadius: ["0%", "0%", "50%", "50%", "0%"]
      }}
      transition={{
        duration: 2,
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

export function AppWithUI() {
  const [count, setCount] = useState(0);
  return (
    <App key={count} />
  );
}