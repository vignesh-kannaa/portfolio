import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { OrbitControls, Preload } from '@react-three/drei'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import * as THREE from 'three'
import { Suspense, useEffect, useState } from 'react'
import CanvasLoader from '../components/CanvasLoader'

const Robot = (isMobile: any) => {
  const robotmodel = useLoader(GLTFLoader, `/portfolio/assets/model/robot/scene.gltf`)
  const mixer = new THREE.AnimationMixer(robotmodel.scene)
  const animations = robotmodel.animations
  animations.forEach((animation) => {
    mixer.clipAction(animation).play()
  })
  // // Update the mixer in each frame
  // useFrame((_, delta) => {
  //   mixer.update(delta)
  // })
  useEffect(() => {
    const animate = () => {
      mixer.update(0.01) // Update the mixer with a fixed delta value
      requestAnimationFrame(animate)
    }

    animate()
  }, [])
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={robotmodel.scene}
        scale={isMobile ? 3.5 : 3}
        rotation={[0, 7.5, 0]}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
      />
    </mesh>
  )
}
const RobotCanvas = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia('(max-width: 500px)')

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches)

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event: any) => {
      setIsMobile(event.matches)
    }

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener('change', handleMediaQueryChange)

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
    }
  }, [])
  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 5, 7], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          // autoRotate={true}
          // autoRotateSpeed={Math.PI}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Robot isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}
export default RobotCanvas
