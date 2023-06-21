import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import BookDetail from './components/bookdetail/BookDetail'

function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <div className='space'></div>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/detail' element={<BookDetail/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
