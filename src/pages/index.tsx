import type { NextPage } from 'next'
import { Header } from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className="flex flex-col w-screen h-screen">
      <Header />
      {/* container */}
      <div className="flex flex-row grow">
          {/* sidebar */}
          <div className="w-36 bg-gray-100 border-r border-gray-300">
          </div>

          {/* content */}
          <canvas className="bg-sky-500">
            
          </canvas>
      </div>
    </div>
  )
}

export default Home
