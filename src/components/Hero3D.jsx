import { Float, MeshDistortMaterial } from '@react-three/drei'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'

function CoreShape() {
  const group = useRef(null)
  const { pointer } = useThree()

  useFrame((state, delta) => {
    if (!group.current) return

    // Slowly rotate the 3D sculpture and subtly react to mouse movement.
    group.current.rotation.x = THREE.MathUtils.damp(
      group.current.rotation.x,
      pointer.y * 0.25 + Math.sin(state.clock.elapsedTime * 0.35) * 0.12,
      3,
      delta,
    )
    group.current.rotation.y = THREE.MathUtils.damp(
      group.current.rotation.y,
      pointer.x * 0.4 + state.clock.elapsedTime * 0.18,
      3,
      delta,
    )
  })

  return (
    <group ref={group}>
      <Float speed={1.4} rotationIntensity={0.35} floatIntensity={0.35}>
        <mesh>
          <icosahedronGeometry args={[1.05, 2]} />
          <MeshDistortMaterial
            color="#8b5cf6"
            emissive="#4c1d95"
            emissiveIntensity={0.65}
            metalness={0.7}
            roughness={0.2}
            distort={0.28}
            speed={1.7}
          />
        </mesh>
      </Float>

      <mesh rotation={[0.8, 0.25, 0.2]}>
        <torusGeometry args={[1.42, 0.012, 12, 120]} />
        <meshStandardMaterial color="#c4b5fd" emissive="#8b5cf6" emissiveIntensity={1.4} metalness={0.8} />
      </mesh>

      <mesh rotation={[1.25, -0.6, 0.7]}>
        <torusGeometry args={[1.62, 0.008, 10, 120]} />
        <meshStandardMaterial color="#e879f9" emissive="#a21caf" emissiveIntensity={1.2} />
      </mesh>

      <Float speed={2.2} rotationIntensity={1} floatIntensity={0.6}>
        <mesh position={[1.55, 0.65, 0.15]} scale={0.12}>
          <icosahedronGeometry args={[1, 1]} />
          <meshStandardMaterial color="#67e8f9" emissive="#0891b2" emissiveIntensity={1.1} metalness={0.5} />
        </mesh>
      </Float>

      <Float speed={1.8} rotationIntensity={1.2} floatIntensity={0.5}>
        <mesh position={[-1.45, -0.65, 0.35]} scale={0.09}>
          <octahedronGeometry args={[1, 0]} />
          <meshStandardMaterial color="#f0abfc" emissive="#c026d3" emissiveIntensity={1.1} metalness={0.5} />
        </mesh>
      </Float>
    </group>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={1.1} />
      <pointLight position={[3, 3, 4]} intensity={35} color="#c4b5fd" />
      <pointLight position={[-3, -2, 2]} intensity={18} color="#e879f9" />
      <CoreShape />
    </>
  )
}

export default function Hero3D() {
  return (
    <div className="hero3d-canvas" aria-label="Interactive animated 3D sculpture" role="img">
      <Canvas
        camera={{ position: [0, 0, 4.8], fov: 42 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
        fallback={<div className="hero3d-fallback" />}
      >
        <Scene />
      </Canvas>
    </div>
  )
}
