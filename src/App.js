import React from 'react'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from './Pages/Home';
import Giris from './Pages/Giris';
import Login from './Pages/Login';
 function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Giris' element={<Giris />} />
      <Route path='/Login' element={<Login/>} />
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App;
