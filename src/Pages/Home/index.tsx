import Debts from '../../containers/Debts'
import Header from '../../containers/Header'
import Intro from '../../containers/Intro'
import Taxes from '../../containers/Taxes'

const Home = () => {
  return (
    <>
      <Header />
      <Intro />
      <Taxes />
      <Debts />
    </>
  )
}

export default Home
