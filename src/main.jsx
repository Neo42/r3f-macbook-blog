import './style.css'
import ReactDOM from 'react-dom/client'
import {Canvas} from '@react-three/fiber'
import {Experience} from './Experience'
import {StrictMode} from 'react'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
  <StrictMode>
    <Canvas
      camera={{
        fov: 45,
        near: 0.1,
        far: 2000,
        position: [-3, 1.5, 4],
      }}
    >
      <Experience />
    </Canvas>
  </StrictMode>,
)
