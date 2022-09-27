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
import { useUser } from '@auth0/nextjs-auth0';
import { BeforeLogin } from '../components/BeforeLogin';

function Scene() {
  const fbx = useLoader(FBXLoader, 'octopus.fbx');
  const copiedScene = useMemo(() => fbx.clone(), [fbx]);
  const prim = useRef();
  return <primitive object={copiedScene} ref={prim} scale={0.05}/>
};

const products: NextPage = () => {
  const { user, error, isLoading } = useUser();
  // ログインしていたら
  if (user) return (
    <div className="flex flex-col w-screen h-screen">
      <Header />
      {/* container */}
      <div className="flex flex-row justify-center">
          {/* content */}
          <div className="grid grid-cols-3 gap-2 mt-6">
            <div className="border">
              <Canvas>
                <color attach="background" args={['#ababab']} />
                <Suspense fallback={null}>
                    <Scene />
                    <OrbitControls />
                </Suspense>
              </Canvas>
            </div>
            <div className="border">
              <Canvas>
                <color attach="background" args={['#ababab']} />
                <Suspense fallback={null}>
                  <Scene />
                  <OrbitControls />
                </Suspense>
              </Canvas>
            </div>
            <div className="border">
              <Canvas>
                <color attach="background" args={['#ababab']} />
                <Suspense fallback={null}>
                  <Scene />
                  <OrbitControls />
                </Suspense>
              </Canvas>
            </div>
            <div className="border">
              <Canvas>
                <color attach="background" args={['#ababab']} />
                <Suspense fallback={null}>
                  <Scene />
                  <OrbitControls />
                </Suspense>
              </Canvas>
            </div>
            <div className="border">
              <Canvas>
                <color attach="background" args={['#ababab']} />
                <Suspense fallback={null}>
                  <Scene />
                  <OrbitControls />
                </Suspense>
              </Canvas>
            </div>
            <div className="border">
              <Canvas>
                <color attach="background" args={['#ababab']} />
                <Suspense fallback={null}>
                  <Scene />
                  <OrbitControls />
                </Suspense>
              </Canvas>
            </div>
          </div>
      </div>
    </div>
  );
  return (
    <BeforeLogin />
  );
};

export default products;