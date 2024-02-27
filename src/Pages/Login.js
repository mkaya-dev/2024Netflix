import React from 'react'
import Navbar from '../Componenet/Navbar';

 const Login = () => {
  return (
    <>
    <Navbar/><br/><br/><br/><br/><br/><br/><br/><br/>
    <div className='profilDıs'>
      <div className='profilIc'>
        <h3 style={{textAlign:"center",color:"red"}}>NETFLİX</h3>
        <input type='text' placeholder='Kullanıcı Adı' style={{width:500,height:40,outline:"none"}}  /><br/><br/>
        <input type='text' placeholder='Şifre' style={{width:500,height:40,outline:"none"}}  /><br/><br/>
        <input type='text' placeholder='E-posta' style={{width:500,height:40,outline:"none"}}  /><br/><br/>
        <button style={{width:500,height:40}} className='btn btn-primary'>Kayıt Ol</button>
      </div>
    </div>
    
    </>
  )
}

export default Login;
