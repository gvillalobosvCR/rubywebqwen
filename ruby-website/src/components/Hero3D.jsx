import { Canvas } from '@react-three/fiber'
import { OrbitControls, Float } from '@react-three/drei'
import { useMemo, useRef } from 'react'
import * as THREE from 'three'

// Red tecnológica corporativa - representa conectividad y redes empresariales
function TechNetwork() {
  const groupRef = useRef()
  
  // Nodos de la red (representan dispositivos/servidores)
  const nodes = useMemo(() => {
    const positions = []
    for (let i = 0; i < 24; i++) {
      const phi = Math.acos(-1 + (2 * i) / 24)
      const theta = Math.sqrt(24 * Math.PI) * phi
      positions.push({
        x: 8 * Math.cos(theta) * Math.sin(phi),
        y: 8 * Math.sin(theta) * Math.sin(phi),
        z: 8 * Math.cos(phi)
      })
    }
    return positions
  }, [])
  
  // Líneas de conexión
  const connections = useMemo(() => {
    const lines = []
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dist = Math.sqrt(
          Math.pow(nodes[i].x - nodes[j].x, 2) +
          Math.pow(nodes[i].y - nodes[j].y, 2) +
          Math.pow(nodes[i].z - nodes[j].z, 2)
        )
        if (dist < 5) {
          lines.push([nodes[i], nodes[j]])
        }
      }
    }
    return lines
  }, [nodes])

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.4}>
      <group ref={groupRef}>
        {/* Nodos */}
        {nodes.map((node, i) => (
          <mesh key={i} position={[node.x, node.y, node.z]}>
            <sphereGeometry args={[0.08, 16, 16]} />
            <meshStandardMaterial 
              color="#dc2626" 
              emissive="#991b1b"
              emissiveIntensity={0.8}
              metalness={0.9}
              roughness={0.2}
            />
          </mesh>
        ))}
        
        {/* Conexiones - usando Line basic geometry */}
        {connections.map((line, i) => {
          const points = [
            new THREE.Vector3(line[0].x, line[0].y, line[0].z),
            new THREE.Vector3(line[1].x, line[1].y, line[1].z)
          ]
          const geometry = new THREE.BufferGeometry().setFromPoints(points)
          return (
            <line key={i} geometry={geometry}>
              <lineBasicMaterial attach="material" color="#ef4444" transparent opacity={0.3} />
            </line>
          )
        })}
      </group>
    </Float>
  )
}

// Anillos orbitales sutiles - representa infraestructura en capas
function OrbitalRings() {
  return (
    <group rotation={[Math.PI / 4, 0, 0]}>
      {[10, 13, 16].map((radius, i) => (
        <mesh key={i} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[radius, 0.02, 16, 100]} />
          <meshStandardMaterial 
            color={i === 1 ? "#dc2626" : "#6b7280"}
            emissive={i === 1 ? "#991b1b" : "#374151"}
            emissiveIntensity={i === 1 ? 0.5 : 0.2}
            metalness={0.8}
            roughness={0.3}
            transparent
            opacity={0.4}
          />
        </mesh>
      ))}
    </group>
  )
}

// Partículas sutiles de fondo
function SubtleParticles() {
  const particles = useMemo(() => {
    const positions = []
    for (let i = 0; i < 40; i++) {
      positions.push({
        x: (Math.random() - 0.5) * 30,
        y: (Math.random() - 0.5) * 30,
        z: (Math.random() - 0.5) * 20 - 5
      })
    }
    return positions
  }, [])
  
  return (
    <group>
      {particles.map((pos, i) => (
        <mesh key={i} position={[pos.x, pos.y, pos.z]}>
          <sphereGeometry args={[0.03, 8, 8]} />
          <meshStandardMaterial 
            color="#f87171" 
            emissive="#dc2626"
            emissiveIntensity={0.3}
            transparent
            opacity={0.4}
          />
        </mesh>
      ))}
    </group>
  )
}

export default function Hero3D() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 18], fov: 35 }}>
        <ambientLight intensity={0.3} />
        <directionalLight position={[10, 10, 5]} intensity={0.8} />
        <pointLight position={[0, 0, 10]} intensity={0.5} color="#ffffff" />
        <pointLight position={[-5, -5, -5]} intensity={0.3} color="#dc2626" />
        <TechNetwork />
        <OrbitalRings />
        <SubtleParticles />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.3}
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  )
}
