'use client'
// https://twitter.com/lusionltd/status/1701534187545636964
// https://lusion.co

import * as THREE from 'three'
import { useRef, useReducer, useMemo, memo, useCallback } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, Lightformer } from '@react-three/drei'
import { CuboidCollider, BallCollider, Physics, RigidBody } from '@react-three/rapier'
import { EffectComposer, N8AO } from '@react-three/postprocessing'
import { easing } from 'maath'
import { useTheme } from 'next-themes'

const accents = ['#4060ff', '#20ffa0', '#ff4060', '#ffcc00']
const vecStatic = new THREE.Vector3() // Static vector for reuse

// Reduced number of connectors for better performance
const shuffle = (accent = 0) => [
  { color: '#444', roughness: 0.75 },
  { color: '#444', roughness: 0.75 },
  { color: 'white', roughness: 0.75 },
  { color: 'white', roughness: 0.75 },
  { color: accents[accent], roughness: 0.75, accent: true },
  { color: accents[accent], roughness: 0.1, accent: true },
]

// Memoize the component to prevent unnecessary re-renders
export const Ppp = memo(() => (
  <div className="w-full !h-full">
    <Scene />
  </div>
))
Ppp.displayName = 'Ppp'

// Make it the default export for dynamic import
export default Ppp

const Scene = memo(function Scene(props) {
  const [accent, click] = useReducer((state) => ++state % accents.length, 0)
  const connectors = useMemo(() => shuffle(accent), [accent])
  const { theme } = useTheme()
  
  const handleClick = useCallback(() => click(), [])

  return (
    <Canvas
      onClick={handleClick}
      shadows={false}
      dpr={1} // Fixed DPR for consistent performance
      gl={{ 
        antialias: false,
        powerPreference: 'high-performance',
        alpha: false,
        stencil: false,
        depth: true,
        failIfMajorPerformanceCaveat: true,
      }}
      camera={{ position: [0, 0, 15], fov: 17.5, near: 1, far: 20 }}
      frameloop="demand" // Only render when needed
      performance={{ min: 0.5 }} // Allow frame skipping
      {...props}
    >
      <color attach="background" args={[theme === 'dark' ? '#000000' : '#ffffff']} />
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 10]} intensity={0.5} />
      <Physics 
        gravity={[0, 0, 0]}
        timeStep={1/30} // Fixed lower timestep for better perf
        interpolate={false}
      >
        <Pointer />
        {connectors.map((props, i) => <Connector key={i} {...props} />)}
      </Physics>
      <EffectComposer disableNormalPass multisampling={0}>
        <N8AO distanceFalloff={1} aoRadius={0.5} intensity={2} halfRes />
      </EffectComposer>
      <Environment resolution={32} frames={1}>
        <group rotation={[-Math.PI / 3, 0, 1]}>
          <Lightformer form="circle" intensity={2} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={2} />
          <Lightformer form="circle" intensity={1} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={2} />
        </group>
      </Environment>
    </Canvas>
  )
})
Scene.displayName = 'Scene'

function Connector({ position, children, scale, r = THREE.MathUtils.randFloatSpread, accent, ...props }) {
  const api = useRef()
  const pos = useMemo(() => position || [r(10), r(10), r(10)], [position, r])

  useFrame((state, delta) => {
    delta = Math.min(0.1, delta)
    const translation = api.current?.translation()
    if (translation) {
      api.current.applyImpulse(vecStatic.copy(translation).negate().multiplyScalar(0.2))
    }
  })

  return (
    <RigidBody linearDamping={4} angularDamping={1} friction={0.1} position={pos} ref={api} colliders={false}>
      <CuboidCollider args={[0.38, 1.27, 0.38]} />
      <CuboidCollider args={[1.27, 0.38, 0.38]} />
      <CuboidCollider args={[0.38, 0.38, 1.27]} />
      {children ? children : <Model {...props} />}
      {accent && <pointLight intensity={4} distance={2.5} color={props.color} />}
    </RigidBody>
  )
}

function Pointer() {
  const ref = useRef()
  useFrame(({ mouse, viewport }) => {
    ref.current?.setNextKinematicTranslation(vecStatic.set((mouse.x * viewport.width) / 2, (mouse.y * viewport.height) / 2, 0))
  }, 10) // Reduce the frequency of updates

  return (
    <RigidBody position={[0, 0, 0]} type="kinematicPosition" colliders={false} ref={ref}>
      <BallCollider args={[0.5]} /> {/* Simplified collider */}
    </RigidBody>
  )
}

function Model({ children, color = 'white', roughness = 0.75, ...props }) {
  const ref = useRef()

  useFrame((state, delta) => {
    easing.dampC(ref.current.material.color, color, 0.2, delta)
  })

  return (
    <mesh ref={ref} scale={1}>
      <boxGeometry args={[1, 1, 1]} /> {/* Change to BoxGeometry */}
      <meshStandardMaterial metalness={0.2} roughness={roughness} />
      {children}
    </mesh>
  )
}