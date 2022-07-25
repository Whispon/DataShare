import type { NextPage } from 'next'
import React from 'react';
import { Header } from '../components/Header'
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col w-screen h-screen">
      <Header />
      {/* container */}
      <div className="flex flex-row grow">
          {/* sidebar */}
          <div className="w-36 bg-gray-100 border-r border-gray-300">
            <div className="flex flex-col">
              <button className="">sample1</button>
              <button className="">sample2</button>
            </div>
          </div>

          {/* content */}
          <canvas className="bg-sky-200">
          </canvas>
      </div>
    </div>
  )
}

export default Home
