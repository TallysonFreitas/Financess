import { createBrowserRouter } from 'react-router-dom'
import Home from './Home'
import Analytics from './Analytics'

const Rotas = createBrowserRouter([
  { path: '/', Component: Home },
  { path: '/analytics', Component: Analytics }
])

export default Rotas
