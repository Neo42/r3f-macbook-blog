import {
  ContactShadows,
  Environment,
  Float,
  Html,
  PresentationControls,
  Text,
  useGLTF,
} from '@react-three/drei'
import {Perf} from 'r3f-perf'

export function Experience() {
  const macbook = useGLTF(
    'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf',
  )

  return (
    <>
      {/* <Perf /> */}
      <color args={['#241a1a']} attach="background" />

      <Environment preset="apartment" />
      <PresentationControls
        global
        rotation={[0.13, 0.1, 0]}
        polar={[-0.4, 0.2]}
        azimuth={[-1, 0.75]}
        config={{mass: 2, tension: 400}}
        snap={{mass: 4, tension: 400}}
      >
        <Float rotationIntensity={0.4}>
          <rectAreaLight
            width={2.5}
            height={1.65}
            intensity={65}
            color="#ffd"
            rotation={[-0.1, Math.PI, 0]}
            position={[0, 0.55, -1.15]}
          />
          <primitive object={macbook.scene} position-y={-1.2} rotation-x={0.13}>
            <Html
              transform
              wrapperClass="htmlScreen"
              distanceFactor={1.17}
              position={[0, 1.56, -1.4]}
              rotation-x={-0.256}
            >
              <iframe src="https://blog-neo42.vercel.app/" />
            </Html>
          </primitive>
          <Text
            font="./Bangers-Regular.ttf"
            fontSize={1}
            position={[2, 0.75, 0.75]}
            rotation-y={-1.25}
            maxWidth={3}
          >
            My blog in 3D
          </Text>
        </Float>
      </PresentationControls>

      <ContactShadows position-y={-1.4} opacity={0.4} scale={5} blur={2.4} />
    </>
  )
}
