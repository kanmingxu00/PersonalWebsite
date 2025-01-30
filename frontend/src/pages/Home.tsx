import { Canvas } from '@react-three/fiber'
import { useState } from 'react'
import Button from '../three/Button'
import { Color, Vector3 } from 'three'

function Home() {
  return (
    <Canvas>
      <directionalLight position={[0, 0, 2]} />
      <Button position={new Vector3(1, 0, 1)} args={undefined} color={new Color("orange")} />
    </Canvas>
  )
}

export default Home
