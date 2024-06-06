"use client"
import * as React from "react";
import { useState } from "react";
import { star, heart, hand, plane, lightning, note , game } from "./paths";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import {
   getIndex,
   useFlubber
   } from "./use-flubber";

const paths = [
  lightning,
   hand,
    // plane,
     heart,
      // note,
       star,
       game,
        lightning
      ];
const colors = [
  "#00cc88",
  // "#0099ff",
  // "#8855ff",
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
      duration: 25,
      // ease: "easeInOut",
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





// const getIndex = (path: string, i: number): number => (i === paths.indexOf(path) ? 1 : 0);

// import {  MotionValue,  AnimationPlaybackControls } from "framer-motion";

// const getIndex = (path: string, i: number): number => (i === paths.indexOf(path) ? 1 : 0);

// interface AppProps {
//   className: string;
// }

// interface AppState {
//   pathIndex: number;
// }

// export default class App extends React.Component<AppProps, AppState> {
//   private progress: MotionValue<number>;
//   private fill: MotionValue<string>;
//   private path: MotionValue<string>;
//   private animation: AnimationPlaybackControls | null = null;

//   constructor(props: AppProps) {
//     super(props);
//     this.state = {
//       pathIndex: 0,
//     };
//     this.progress = useMotionValue(this.state.pathIndex);
//     this.fill = useTransform(this.progress, paths.map(getIndex), colors);
//     this.path = useFlubber(this.progress, paths);
//   }

//   componentDidMount() {
//     this.animate();
//   }

//   componentWillUnmount() {
//     if (this.animation) {
//       this.animation.stop();
//     }
//   }

//   animate = () => {
//     const { pathIndex } = this.state;
//     this.animation = animate(this.progress, pathIndex, {
//       duration: 0.8,
//       ease: "easeInOut",
//       onComplete: () => {
//         if (pathIndex === paths.length - 1) {
//           this.progress.set(0);
//           this.setState({ pathIndex: 1 });
//         } else {
//           this.setState({ pathIndex: pathIndex + 1 });
//         }
//         this.animate();
//       },
//     });
//   };

//   render() {
//     const { className } = this.props;
//     return (
//       <div className={className}>
//         <svg width="400" height="400">
//           <g transform="translate(10 10) scale(17 17)">
//             <motion.path fill={this.fill} d={this.path} />
//           </g>
//         </svg>
//       </div>
//     );
//   }
// }