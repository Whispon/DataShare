import type { NextPage } from 'next'
import { Header } from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className='"flex flex-col items-center"'>
      <Header />
      <div className="flex flex-col my-4">
        <div className="flex flex-row">
          Import CSV
          <form>
            <input type="text" name="name" />
          </form>
          データを検索
        </div>
      </div>
    </div>
  )
}

export default Home
