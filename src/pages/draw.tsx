import type { NextPage } from 'next'
import { Header } from '../components/Header'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
          <div className="flex flex-row">
            <div className='w-80 h-60 bg-yellow-400'>
                図形描画イメージ
            </div>
          </div>
          <button className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            <Link href="/">
                シェアする
            </Link>
          </button>
      </div>
    </div>
  )
}

export default Home
