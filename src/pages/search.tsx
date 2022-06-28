import type { NextPage } from 'next'
import { Header } from '../components/Header'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
        <div className="flex flex-row mb-6">
            <form>
              <input type="text" name="name" className='w-96 border border-gray-300 p-2.5'/>
            </form>
        </div>

        <div className="flex flex-row">
            <div className='w-80 h-60 bg-orange-400'>
                CSVリストのイメージ
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home
