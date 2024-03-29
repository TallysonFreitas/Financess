import { RouterProvider } from 'react-router-dom'
import Rotas from './Pages/Rotas'
import { Provider } from 'react-redux'
import store from './Redux/store'

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={Rotas} />
    </Provider>
  )
}

export default App
