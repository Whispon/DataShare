import type { NextPage } from 'next';
import React from 'react';
import { Header } from '../components/Header';
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { Suspense } from "react";
import { useUser } from '@auth0/nextjs-auth0';
import { BeforeLogin } from '../components/BeforeLogin';


// function Scene() {
//   const fbx = useFBX('casper-octpus-0209-b.fbx')
//   return <primitive object={fbx} />
// }

function Scene() {
  const fbx = useLoader(FBXLoader, 'octopus.fbx')
  return <primitive object={fbx} scale={0.05}/>
}

const Home: NextPage = () => {
  const { user, error, isLoading } = useUser();

  if (user) {
    return (
      <div className="flex flex-col w-screen h-screen">
      <Header />
      {/* container */}
      <div className="flex flex-row grow">
          {/* content */}
          <Canvas className="h-screen">
            <color attach="background" args={['#ababab']} />
            <Suspense fallback={null}>
              <Scene />
              <OrbitControls />
            </Suspense>
          </Canvas>
      </div>
    </div>
    );
  };
  return (
    <BeforeLogin />
  )
}

export default Home;
