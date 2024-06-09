"use client"
// import * as React from "react";
// import { m, LazyMotion, domAnimation, useMotionValue, useTransform, useCycle, animate } from "framer-motion";
// import { star, heart, hand, lightning, game } from "./paths";
// import { getIndex, useFlubber } from "./use-flubber";

// const paths = [lightning, hand, heart, star, game, lightning];
// const colors = ["#00cc88", "#ff0055", "#ee4444", "#ffcc00", "#ffcc00", "#00cc88"];

// export default function App({className } : {className:string}) {
//   const [pathIndex, cyclePathIndex] = useCycle(...Array.from(Array(paths.length).keys()));
//   const progress = useMotionValue(0);
//   const fill = useTransform(progress, paths.map(getIndex), colors);
//   const path = useFlubber(progress, paths);

//   React.useEffect(() => {
//     const controls = animate(progress, pathIndex, {
//       type: "spring",
//       stiffness: 30,
//       damping: 40,
//       onComplete: cyclePathIndex,
//     });

//     return controls.stop;
//   }, [pathIndex]);

//   return (
//     <LazyMotion features={domAnimation}>
//       <div className={className} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//         <svg className="!mx-auto" width="400" height="400">
//           <g className="!mx-auto" transform=" scale(17 17)">
//             <m.path fill={fill}  d={path} />
//           </g>
//         </svg>
//       </div>
//     </LazyMotion>
//   );
// }



import { motion } from "framer-motion";
import "./styles3.css";

const transition = { duration: 4, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" };
import { useState } from "react";
// export default function App({className } : {className:string}) {
//   let [state, setState] = useState(0);
//   let colors = [
//      "pink" , "blue", "green", "yellow", , "purple", "orange", "cyan", "magenta",
//     "lightcoral", "dodgerblue", "limegreen", "gold", "hotpink", "indigo", "coral",
//     "darkcyan", "mediumvioletred", "lightseagreen", "darkorange", "orchid", "deepskyblue",
//     "olivedrab", "salmon", "royalblue", "springgreen", "khaki", "slateblue", "darkturquoise",
//     "tomato", "midnightblue", "mediumaquamarine", "peru", "plum", "darkslategray", "orangered",
//     "steelblue", "seagreen", "chocolate", "violet", "teal"
//   ];  
//     let x  =  setTimeout(() => {
//       if (state === colors.length - 1) {
//         setState(0);
//       } else {
//     setState(state+1);
//       }
//   }, 8000);
//   return (
//     <div className={className}>
//     <div className="containerish">
//       <svg xmlns="http://www.w3.org/2000/svg" width="451" height="437">
//         <motion.path
//           d="M 239 17 C 142 17 48.5 103 48.5 213.5 C 48.5 324 126 408 244 408 C 362 408 412 319 412 213.5 C 412 108 334 68.5 244 68.5 C 154 68.5 102.68 135.079 99 213.5 C 95.32 291.921 157 350 231 345.5 C 305 341 357.5 290 357.5 219.5 C 357.5 149 314 121 244 121 C 174 121 151.5 167 151.5 213.5 C 151.5 260 176 286.5 224.5 286.5 C 273 286.5 296.5 253 296.5 218.5 C 296.5 184 270 177 244 177 C 218 177 197 198 197 218.5 C 197 239 206 250.5 225.5 250.5 C 245 250.5 253 242 253 218.5"
//           fill="red"
//           strokeWidth="12"
//           stroke={colors[state] as string}
//           strokeLinecap="round"
//           initial={{ pathLength: 0 }}
//           animate={{ pathLength: 1 }}
//           //@ts-ignore
//           transition={transition}
//         />
//       </svg>
//       <motion.div
//         className="boxy"
//         initial={{ offsetDistance: "0%", scale: 2.5 }}
//         animate={{ offsetDistance: "100%", scale: 1 }}
//         //@ts-ignore
//         transition={transition}
//       />
//     </div>
//     </div>
//   );
// }







































// "use client"
// import * as React from "react";
// import { useState } from "react";
// import { star, heart, hand,  lightning  , game } from "./paths";
// import { motion, useMotionValue, useTransform, animate } from "framer-motion";
// import {
//    getIndex,
//    useFlubber
//    } from "./use-flubber";

// const paths = [
//   lightning,
//    hand,
//     // plane,
//      heart,
//       // note,
//        star,
//        game,
//         lightning
//       ];
// const colors = [
//   "#00cc88",
//   // "#0099ff",
//   // "#8855ff",
//   "#ff0055",
//   "#ee4444",
//   "#ffcc00",
//   "#ffcc00",
//   "#00cc88",
// ];

// export default function App({className } : {className:string}) {
//   const [pathIndex, setPathIndex] = useState(0);
//   const progress = useMotionValue(pathIndex);
//   const fill = useTransform(progress, paths.map(getIndex), colors);
//   const path = useFlubber(progress, paths);

//   React.useEffect(() => {
//     const animation = animate(progress, pathIndex, {
//       duration: 4
//       ,
//       // ease: "easeInOut",
//       onComplete: () => {
//         if (pathIndex === paths.length - 1) {
//           progress.set(0);
//           setPathIndex(1);
//         } else {
//           setPathIndex(pathIndex + 1);
//         }
//       },
//     });
//     return () => animation.stop();
//   }, [pathIndex]);

//   return (
//     <div className={className} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//     <svg className="!mx-auto" width="400" height="400">
//       <g className="!mx-auto" transform=" scale(17 17)">
//         <motion.path fill={fill}  d={path} />
//       </g>
//     </svg>
//     </div>
//   );
// }












































































// // import  { useMemo } from 'react';

// // export default function App({ className }: { className: string }) {
// //   const [pathIndex, setPathIndex] = React.useState(0);
// //   const progress = useMotionValue(pathIndex);

// //   // Construct the paths array inside the component
// //   const paths = useMemo(
// //     () => [lightning, hand, heart, star, game, lightning],
// //     []
// //   );

// //   // Use useTransform directly without memoization
// //   const fill = useTransform(progress, paths.map(getIndex), colors);

// //   // Use useFlubber directly without memoization
// //   const path = useFlubber(progress, paths);

// //   React.useEffect(() => {
// //     const animation = animate(progress, pathIndex, {
// //       duration: 10,
// //       onComplete: () => {
// //         if (pathIndex === paths.length - 1) {
// //           progress.set(0);
// //           setPathIndex(1);
// //         } else {
// //           setPathIndex(pathIndex + 1);
// //         }
// //       },
// //     });
// //     return () => animation.stop();
// //   }, [pathIndex, progress, paths]);

// //   return (
// //     <div className={className} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
// //       <svg className="!mx-auto" width="400" height="400">
// //         <g className="!mx-auto" transform=" scale(17 17)">
// //           <motion.path fill={fill} d={path} />
// //         </g>
// //       </svg>
// //     </div>
// //   );
// // }



// // const getIndex = (path: string, i: number): number => (i === paths.indexOf(path) ? 1 : 0);

// // import {  MotionValue,  AnimationPlaybackControls } from "framer-motion";

// // const getIndex = (path: string, i: number): number => (i === paths.indexOf(path) ? 1 : 0);

// // interface AppProps {
// //   className: string;
// // }

// // interface AppState {
// //   pathIndex: number;
// // }

// // export default class App extends React.Component<AppProps, AppState> {
// //   private progress: MotionValue<number>;
// //   private fill: MotionValue<string>;
// //   private path: MotionValue<string>;
// //   private animation: AnimationPlaybackControls | null = null;

// //   constructor(props: AppProps) {
// //     super(props);
// //     this.state = {
// //       pathIndex: 0,
// //     };
// //     this.progress = useMotionValue(this.state.pathIndex);
// //     this.fill = useTransform(this.progress, paths.map(getIndex), colors);
// //     this.path = useFlubber(this.progress, paths);
// //   }

// //   componentDidMount() {
// //     this.animate();
// //   }

// //   componentWillUnmount() {
// //     if (this.animation) {
// //       this.animation.stop();
// //     }
// //   }

// //   animate = () => {
// //     const { pathIndex } = this.state;
// //     this.animation = animate(this.progress, pathIndex, {
// //       duration: 0.8,
// //       ease: "easeInOut",
// //       onComplete: () => {
// //         if (pathIndex === paths.length - 1) {
// //           this.progress.set(0);
// //           this.setState({ pathIndex: 1 });
// //         } else {
// //           this.setState({ pathIndex: pathIndex + 1 });
// //         }
// //         this.animate();
// //       },
// //     });
// //   };

// //   render() {
// //     const { className } = this.props;
// //     return (
// //       <div className={className}>
// //         <svg width="400" height="400">
// //           <g transform="translate(10 10) scale(17 17)">
// //             <motion.path fill={this.fill} d={this.path} />
// //           </g>
// //         </svg>
// //       </div>
// //     );
// //   }
// // }

// import { useState } from "react";
// import { motion } from "framer-motion";

// const transition = { duration: 0.5, ease: "linear" };

// export default function App({ className }: { className: string }) {
//   let [state, setState] = useState(0);
//   let colors = [
//     "pink", "blue", "green", "yellow", "purple", "orange", "cyan", "magenta",
//     "lightcoral", "dodgerblue", "limegreen", "gold", "hotpink", "indigo", "coral",
//     "darkcyan", "mediumvioletred", "lightseagreen", "darkorange", "orchid", "deepskyblue",
//     "olivedrab", "salmon", "royalblue", "springgreen", "khaki", "slateblue", "darkturquoise",
//     "tomato", "midnightblue", "mediumaquamarine", "peru", "plum", "darkslategray", "orangered",
//     "steelblue", "seagreen", "chocolate", "violet", "teal"
//   ];

//   const changeColor = () => {
//     // if (state === colors.length - 1) {
//     //   setState(0);
//     // } else {
//       setState(state + 1);
//     // }
//   };

//   let x = setTimeout(changeColor, 8000);

//   return (
//     <div className={className}>
//       <div className="containerish">
//         <svg xmlns="http://www.w3.org/2000/svg" width="451" height="437">
//           <motion.path
//             d="M 239 17 C 142 17 48.5 103 48.5 213.5 C 48.5 324 126 408 244 408 C 362 408 412 319 412 213.5 C 412 108 334 68.5 244 68.5 C 154 68.5 102.68 135.079 99 213.5 C 95.32 291.921 157 350 231 345.5 C 305 341 357.5 290 357.5 219.5 C 357.5 149 314 121 244 121 C 174 121 151.5 167 151.5 213.5 C 151.5 260 176 286.5 224.5 286.5 C 273 286.5 296.5 253 296.5 218.5 C 296.5 184 270 177 244 177 C 218 177 197 198 197 218.5 C 197 239 206 250.5 225.5 250.5 C 245 250.5 253 242 253 218.5"
//             fill={colors[colors.length - state]}
//             strokeWidth="12"
//             stroke={colors[state]}
//             strokeLinecap="round"
//             initial={{ pathLength: 0 }}
//             animate={{ pathLength: 1, stroke: colors[state % colors.length] , fill }}
//             //@ts-ignore
//             transition={transition}
//             />
//         </svg>
//         <motion.div
//           className="boxy"
//           initial={{ offsetDistance: "0%", scale: 2.5 }}
//           animate={{ offsetDistance: "100%", scale: 1 }}
//           //@ts-ignore
//           transition={transition}
//         />
//       </div>
//     </div>
//   );
// }
// import { useState } from "react";
// import { motion } from "framer-motion";

// const transition = { duration: 0.5, ease: "linear" };

export default function App({ className }: { className: string }) {
  let [state, setState] = useState(0);
  let colors = [
    "pink", "blue", "green", "yellow", "purple", "orange", "cyan", "magenta",
    "lightcoral", "dodgerblue", "limegreen", "gold", "hotpink", "indigo", "coral",
    "darkcyan", "mediumvioletred", "lightseagreen", "darkorange", "orchid", "deepskyblue",
    "olivedrab", "salmon", "royalblue", "springgreen", "khaki", "slateblue", "darkturquoise",
    "tomato", "midnightblue", "mediumaquamarine", "peru", "plum", "darkslategray", "orangered",
    "steelblue", "seagreen", "chocolate", "violet", "teal"
  ];

  const changeColor = () => {
    setState(state + 1);
  };

  let x = setTimeout(changeColor, 8000);

  return (
    <div className={className}>
      <div className="containerish">
        <svg xmlns="http://www.w3.org/2000/svg" width="451" height="437">
          <motion.path
            d="M 239 17 C 142 17 48.5 103 48.5 213.5 C 48.5 324 126 408 244 408 C 362 408 412 319 412 213.5 C 412 108 334 68.5 244 68.5 C 154 68.5 102.68 135.079 99 213.5 C 95.32 291.921 157 350 231 345.5 C 305 341 357.5 290 357.5 219.5 C 357.5 149 314 121 244 121 C 174 121 151.5 167 151.5 213.5 C 151.5 260 176 286.5 224.5 286.5 C 273 286.5 296.5 253 296.5 218.5 C 296.5 184 270 177 244 177 C 218 177 197 198 197 218.5 C 197 239 206 250.5 225.5 250.5 C 245 250.5 253 242 253 218.5"
            fill={colors[state]}
            strokeWidth="12"
            stroke={colors[state]}
            strokeLinecap="round"
            initial={{ pathLength: 0, fill: colors[0] }}
            animate={{ pathLength: 1, stroke: colors[(state%colors.length)], fill: colors[(colors.length - ((state+1)%colors.length) )]  }}
            //@ts-ignore
            transition={transition}
          />
        </svg>
        <motion.div
          className="boxy"
          initial={{ offsetDistance: "0%", scale: 2.5 }}
          animate={{ offsetDistance: "100%", scale: 1 }}
          //@ts-ignore
          transition={transition}
        />
      </div>
      {/* </motion.div> */}

    </div>
  );
}

