import React, { useRef, useEffect } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls, Environment } from '@react-three/drei'
import * as THREE from 'three'
import '../../css/home/MacBook3D.css'

function MacBookModel() {
  const meshRef = useRef()
  
  // Model yüklenene kadar placeholder göster
  const [model, setModel] = React.useState(null)
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState(null)

  useEffect(() => {
    const loader = new GLTFLoader()
    
    // Önce GLTF dosyasını yüklemeyi dene
    loader.load(
      `${import.meta.env.BASE_URL}macbook.gltf`,
      (gltf) => {
        setModel(gltf.scene)
        setLoading(false)
      },
      undefined,
      (error) => {
        console.log('GLTF yüklenemedi, GLB dosyasını deniyor:', error)
        // GLB dosyasını dene
        loader.load(
          `${import.meta.env.BASE_URL}macbook.glb`,
          (gltf) => {
            setModel(gltf.scene)
            setLoading(false)
          },
          undefined,
          (error) => {
            console.log('GLB de yüklenemedi, fallback model kullanılıyor:', error)
            setError(error)
            setLoading(false)
          }
        )
      }
    )
  }, [])

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Çember üzerinde döndürme - ters yön
      const time = state.clock.getElapsedTime()
      const radius = 2
       // Çember yarıçapını küçülttük
      meshRef.current.position.x = Math.cos(-time * 0.5) * radius
      meshRef.current.position.z = Math.sin(-time * 0.5) * radius
      meshRef.current.position.y = 0
      
      // MacBook'u ters çevir (arkasını göster)
      meshRef.current.lookAt(0, 0, 0)
      meshRef.current.rotateY(Math.PI) // 180 derece çevir
    }
  })

  if (loading) {
    return (
      <mesh ref={meshRef}>
        <boxGeometry args={[2, 1.2, 0.1]} />
        <meshStandardMaterial color="#f0f0f0" />
      </mesh>
    )
  }

  if (error || !model) {
    // Fallback: Basit MacBook benzeri model
    return (
      <group ref={meshRef}>
        {/* MacBook gövdesi */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[3, 2, 0.2]} />
          <meshStandardMaterial color="#d1d5db" />
        </mesh>
        
        {/* Ekran */}
        <mesh position={[0, 1.1, 0.1]} rotation={[0.2, 0, 0]}>
          <boxGeometry args={[2.8, 1.8, 0.05]} />
          <meshStandardMaterial color="#1f2937" />
        </mesh>
        
        {/* Ekran içeriği */}
        <mesh position={[0, 1.1, 0.125]} rotation={[0.2, 0, 0]}>
          <boxGeometry args={[2.6, 1.6, 0.01]} />
          <meshStandardMaterial color="#3b82f6" />
        </mesh>
        
        {/* Trackpad */}
        <mesh position={[0, -0.3, 0.1]}>
          <boxGeometry args={[1.2, 0.8, 0.02]} />
          <meshStandardMaterial color="#6b7280" />
        </mesh>
        
        {/* Apple logosu */}
        <mesh position={[0, 0.2, 0.11]}>
          <circleGeometry args={[0.1]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>
      </group>
    )
  }

  return (
    <primitive 
      ref={meshRef}
      object={model} 
      scale={[0.1, 0.1, 0.1]}
      position={[0, 0, 0]}
    />
  )
}

const MacBook3D = () => {
  return (
    <div className="macbook-3d-container">
      <Canvas
        camera={{ position: [1, 3, 5], fov: 50 }}
        style={{ width: '100%', height: '100%' }}
      >
        <ambientLight intensity={1} />
        
        <MacBookModel />
      </Canvas>
    </div>
  )
}

export default MacBook3D
