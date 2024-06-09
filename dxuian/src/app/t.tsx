"use client"
// import "@/app/ui/cir.css"
// import { useState } from "react";
// import { motion } from "framer-motion"

// import { useMediaQuery } from 'react-responsive'

// export default function App() {
//   const isSmallScreen = useMediaQuery({ query: '(max-width: 600px)' })
//   const scale = isSmallScreen ? 1.5 : 2;
//   return (
//     <motion.div
//       className="box"
//       layout // Keep the layout prop
//       animate={{
//         scale: [1, scale, scale, 1, 1],
//         rotate: [0, 0, 180, 180, 0],
//         borderRadius: ["0%", "0%", "50%", "50%", "0%"]
//       }}
//       transition={{
//         duration: 10,
//         ease: "easeInOut",
//         times: [0, 0.2, 0.5, 0.8, 1],
//         repeat: Infinity,
//         // Add the following properties for better performance
//         type: "tween", // Use the tween animation type
//         restingValue: 0, // Set the resting value to 0
//         restSpeedThreshold: 1, // Increase the resting speed threshold
//       }}
//     />
//   );
// }


import "@/app/ui/cir.css"

import { m, LazyMotion, domAnimation } from "framer-motion"

import { useMediaQuery } from 'react-responsive'

export default function App() {
  const isSmallScreen = useMediaQuery({ query: '(max-width: 600px)' })
  const scale = isSmallScreen ? 1.5 : 2;
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        className="box"
        layout // Keep the layout prop
        animate={{
          scale: [1, scale, scale, 1, 1],
          rotate: [0, 0, 180, 180, 0],
          borderRadius: ["0%", "0%", "50%", "50%", "0%"]
        }}
        transition={{
          duration: 20,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          // Add the following properties for better performance
          type: "tween", // Use the tween animation type
          restingValue: 0, // Set the resting value to 0
          restSpeedThreshold: 1, // Increase the resting speed threshold
        }}
      />
    </LazyMotion>
  );
}

import {Skeleton} from "@/components/ui/skeleton"
import { Suspense } from "react";
// import { motion } from "framer-motion"
export function AppWithUI() {
  // const [count, setCount] = useState(0);
  return (
    <Suspense fallback={   <Skeleton className="!h-full !w-full"></Skeleton> }>
                {/* <motion.div      className="box"      initial={{ opacity: 0, scale: 0.5 }}      animate={{ opacity: 1, scale: 1 }}      transition={{        duration: 0.8,        delay: 0.5,        ease: [0, 0.71, 0.2, 1.01],}}> */}

      <App  />
{/* </motion.div> */}
     </Suspense>

  );
}