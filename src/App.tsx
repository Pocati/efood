import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GlobalStyle } from './Styles/GlobalStyles'
import Home from './components/Home'
import Cart from './components/Cart'
import Perfil from './Pages/Perfil'

import { Provider } from 'react-redux'
import { store } from './store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <Cart />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/perfil" element={<Perfil />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App