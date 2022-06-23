import type { NextPage } from 'next'
import { Header } from '../components/Header'

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
          <div className="mb-6 text-4xl flex flex-row">
            Import CSV
          </div>
          <div className="flex flex-row">
            <form>
              <input type="text" name="name" className='w-96 border border-gray-300 p-2.5'/>
            </form>
          </div>
          <div className="mt-6 text-4xl flex flex-row">
            データを検索
          </div>
      </div>
    </div>
  )
}

export default Home
