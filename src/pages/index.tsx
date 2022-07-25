import type { NextPage } from 'next'
import { Header } from '../components/Header'
import Link from 'next/link'

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
          <div className="flex flex-col grow">
            
          </div>
      </div>
    </div>
  )
}

export default Home
