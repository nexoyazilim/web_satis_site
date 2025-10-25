import React, { useRef, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
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
      '/macbook.gltf',
      (gltf) => {
        setModel(gltf.scene)
        setLoading(false)
      },
      undefined,
      (error) => {
        console.log('GLTF yüklenemedi, GLB dosyasını deniyor:', error)
        // GLB dosyasını dene
        loader.load(
          '/macbook.glb',
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
      scale={[0.2, 0.2, 0.2]}
      position={[0, 0, 0]}
    />
  )
}

function IPhoneModel() {
  const meshRef = useRef()
  
  // Model yüklenene kadar placeholder göster
  const [model, setModel] = React.useState(null)
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState(null)

  useEffect(() => {
    const loader = new GLTFLoader()
    
    loader.load(
      '/iphone.glb',
      (gltf) => {
        setModel(gltf.scene)
        setLoading(false)
      },
      undefined,
      (error) => {
        console.log('iPhone GLB yüklenemedi:', error)
        setError(error)
        setLoading(false)
      }
    )
  }, [])

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Çember üzerinde döndürme - ters yön (MacBook'un karşısında)
      const time = state.clock.getElapsedTime()
      const radius = 2
      meshRef.current.position.x = Math.cos(-time * 0.5 + Math.PI) * radius // 180 derece fark
      meshRef.current.position.z = Math.sin(-time * 0.5 + Math.PI) * radius
      meshRef.current.position.y = 0
      
      // iPhone'u MacBook'un tam karşısına bakacak şekilde döndür
      meshRef.current.lookAt(0, 0, 0)
      meshRef.current.rotateY(Math.PI) // 180 derece çevir (MacBook ile ters yön)
    }
  })

  if (loading) {
    return (
      <mesh ref={meshRef}>
        <boxGeometry args={[0.5, 1, 0.1]} />
        <meshStandardMaterial color="#f0f0f0" />
      </mesh>
    )
  }

  if (error || !model) {
    // Fallback: Basit iPhone benzeri model
    return (
      <group ref={meshRef}>
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[0.5, 1, 0.1]} />
          <meshStandardMaterial color="#1f2937" />
        </mesh>
        <mesh position={[0, 0.3, 0.06]}>
          <boxGeometry args={[0.4, 0.6, 0.02]} />
          <meshStandardMaterial color="#000000" />
        </mesh>
      </group>
    )
  }

  return (
    <primitive 
      ref={meshRef}
      object={model} 
      scale={[1.5, 1.5, 1.5]}
      position={[0, 0, 0]}
    />
  )
}

const MacBook3D = () => {
  return (
    <div className="macbook-3d-container">
      <Canvas
        camera={{ position: [1, 6, 15], fov: 40 }}
        style={{ width: '100%', height: '100%' }}
      >
        <ambientLight intensity={1} />
        
        <MacBookModel />
        <IPhoneModel />
      </Canvas>
    </div>
  )
}

export default MacBook3D
