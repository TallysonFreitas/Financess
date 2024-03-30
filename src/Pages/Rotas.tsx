import { createBrowserRouter } from 'react-router-dom'
import Home from './Home'
import Analytics from './Analytics'
import AboutPage from './About'

const Rotas = createBrowserRouter([
  { path: '/', Component: Home },
  { path: '/analytics', Component: Analytics },
  { path: '/about', Component: AboutPage }
])

export default Rotas
