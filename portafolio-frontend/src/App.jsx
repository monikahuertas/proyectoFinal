import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Users from './pages/users/index'
import Customers from './pages/customers/index'
import Products from './pages/products/index'
import Quotation from './pages/quotation/index'
import Home from './pages/home/index'
import './assets/app.css'
import Login from './api/login'
import ResponsiveAppBar from './components/molecules/ResponsiveAppBar/ResponsiveAppBar'


function App() {
  

  return (
      <Router>
        <ResponsiveAppBar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/usuarios' element={<Users/>} />
          <Route path='/clientes' element={<Customers/>} />
          <Route path='/productos' element={<Products />} />
          <Route path='/cotizaciones' element={<Quotation />} />
        </Routes>
      </Router>
  )
}

export default App
