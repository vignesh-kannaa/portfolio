import { Canvas, useLoader } from '@react-three/fiber'
import { OrbitControls, Preload } from '@react-three/drei'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const Robot = () => {
  const robotmodel = useLoader(GLTFLoader, `/portfolio/assets/model/robot/scene.gltf`)
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
      <primitive object={robotmodel.scene} scale={2.5} rotation={[0, 7.5, 0]} />
    </mesh>
  )
}
const RobotCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 5, 7], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <OrbitControls
        autoRotate={true}
        autoRotateSpeed={Math.PI}
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      <Robot />
      <Preload all />
    </Canvas>
  )
}
export default RobotCanvas
