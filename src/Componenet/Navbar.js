import React from 'react'
import "../Pages/All.css"
import { Link } from 'react-router-dom';

 const Navbar = () => {
  return (
    <>
    <nav>
       <Link style={{textDecoration:"none"}} to="/Giris"> <h4 style={{marginTop:4,marginLeft:6,color:"RED"}}>NETFLİX</h4></Link>
        <ul>
            <li>Ana Sayfa</li>
            <li>Diziler</li>
            <li>Filimler</li>
            <li>Yeni ve Popüler</li>
            <li>Listem</li>
            <li>Dile Göre Göz At</li>
        </ul>
        <ul style={{marginLeft:630}}>
          <li><i class="fa-solid fa-magnifying-glass"></i> <input type='text' placeholder='Ara....' style={{outline:"none"}} /></li>
          <li>Çocuk</li>
          <li><i class="fa-regular fa-bell"></i></li>
         <Link to="/Login" ><li><i style={{color:"white"}} class="fa-regular fa-user"></i></li></Link> 
         <Link style={{color:"white"}} to="/"><li><i class="fa-solid fa-arrow-right-from-bracket"></i></li></Link>
        </ul>
    </nav>
    
    </>
  )
}

export default Navbar;