import type { NextPage } from 'next';
import React, {
    useMemo,
    useRef
  } from 'react';
import { Header } from '../components/Header';
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { Suspense } from "react";

function Scene() {
  const fbx = useLoader(FBXLoader, 'octopus.fbx');
  const copiedScene = useMemo(() => fbx.clone(), [fbx]);
  const prim = useRef();
  return <primitive object={copiedScene} ref={prim} scale={0.05}/>
};

const Home: NextPage = () => {
  return (
    <div className="flex flex-col w-screen h-screen">
      <Header />
      {/* container */}
      <div className="flex flex-row grow justify-center">
          {/* content */}
          <div className="grid grid-cols-3">
            <div className="border m-2">
              <Canvas className="h-[96px] w-[96px]">
                <Suspense fallback={null}>
                    <Scene />
                    <OrbitControls />
                </Suspense>
              </Canvas>
            </div>
            <div className="border m-2">
              <Canvas className="h-[96px] w-[96px]">
                  <Suspense fallback={null}>
                    <Scene />
                    <OrbitControls />
                  </Suspense>
              </Canvas>
            </div>
            <div className="border m-2">
              <Canvas className="h-[96px] w-[96px]">
                  <Suspense fallback={null}>
                    <Scene />
                    <OrbitControls />
                  </Suspense>
              </Canvas>
            </div>
            <div className="border m-2">
              <Canvas className="h-[96px] w-[96px]">
                  <Suspense fallback={null}>
                    <Scene />
                    <OrbitControls />
                  </Suspense>
              </Canvas>
            </div>
            <div className="border m-2">
              <Canvas className="h-[96px] w-[96px]">
                  <Suspense fallback={null}>
                    <Scene />
                    <OrbitControls />
                  </Suspense>
              </Canvas>
            </div>
            <div className="border m-2">
              <Canvas className="h-[96px] w-[96px]">
                  <Suspense fallback={null}>
                    <Scene />
                    <OrbitControls />
                  </Suspense>
              </Canvas>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Home