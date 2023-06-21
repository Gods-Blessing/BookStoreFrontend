import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import BookDetail from './components/bookdetail/BookDetail'
import CheckoutPage from './components/checkoutpage/CheckoutPage'
import ShoppingCart from './components/shoppingcart/ShoppingCart'

function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <div className='space'></div>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/detail/:id' element={<BookDetail/>}/>
      <Route path='/checkout' element={<CheckoutPage/>}/>

      <Route path='/cart' element={<ShoppingCart/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
