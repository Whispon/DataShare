import type { NextPage } from 'next';
import React from 'react';
import { Header } from '../components/Header';
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { Suspense } from "react";

// function Scene() {
//   const fbx = useFBX('casper-octpus-0209-b.fbx')
//   return <primitive object={fbx} />
// }

function Scene() {
  const fbx = useLoader(FBXLoader, 'octopus.fbx')
  return <primitive object={fbx} />
}

const Home: NextPage = () => {
  return (
    <div className="flex flex-col w-screen h-screen">
      <Header />
      {/* container */}
      <div className="flex flex-row grow">
          {/* sidebar */}
          <div className="w-36 bg-gray-100 border-r border-gray-300 h-screen">
            <div className="flex flex-col">
              <button className="">sample1</button>
              <button className="">sample2</button>
            </div>
          </div>

          {/* content */}
          <Canvas className="h-screen">
            <Suspense fallback={null}>
              <Scene />
              <OrbitControls />
            </Suspense>
          </Canvas>
      </div>
    </div>
  )
}

export default Home
