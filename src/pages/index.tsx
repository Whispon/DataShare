import type { NextPage } from 'next'
import { Header } from '../components/Header'

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <div>
        Import CSV
        <form>
          <input type="text" name="name" />
        </form>
        データを検索
      </div>
    </div>
  )
}

export default Home
