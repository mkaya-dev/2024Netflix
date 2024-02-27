import React from 'react'
import Navbar from '../Componenet/Navbar';
import gif from "../Images/12.gif"
import Swiper1 from '../Sliderlar/swiper1';
import Swiper2 from '../Sliderlar/swiper2';
import Swiper3 from '../Sliderlar/swiper3';
import Swiper4 from '../Sliderlar/swiper4';
import Swiper5 from '../Sliderlar/swiper5';
import Swiper6 from '../Sliderlar/swiper6';
import Swiper7 from '../Sliderlar/swiper7';
import Swiper8 from '../Sliderlar/swiper8';

const Giris = () => {
  return (
    <>
      <Navbar />
      <div>
        <img src={gif} style={{ width: "100%", marginTop: 90 }} />
        <div style={{ marginLeft: 50, marginTop: -525 }} className='yuksel'>
          <button style={{ background: "#FDBF60", color: "black", border: "1px solid #211C6A", height: 25, marginTop: 10 }}>YENİ</button>
          <h1 style={{ fontSize: 70, color: "white" }}>Avengers infinity war</h1><br />
          <h4 style={{ fontSize: 25, color: "white" }}>Avengers: Sonsuzluk Savaşı, Marvel Comics'in aynı adlı<br/> çizgi roman serisinden uyarlanmış, on dokuzuncu Marvel Sinematik<br/> Evreni süper kahraman filmidir..</h4><br />
          <button style={{ width: 150, height: 50 }} className='btn btn-light'>İZLE <i class="fa-solid fa-play"></i></button>
          <button style={{ width: 250, marginLeft: 15, height: 50 }} className='btn btn-light'>DAHA FAZLA BİLGİ <i class="fa-solid fa-bars"></i></button>
          
        </div>
      </div><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

      <div>
        <h4 style={{ marginLeft: 4 }}>POPÜLER</h4>
        <Swiper5/>
      </div><br/><br/>

      <div>
        <h4 style={{marginLeft:4}}>EN ÇOK İZLENEN FİLMLER</h4>
        <Swiper7/>
      </div><br/><br/>

      <div>
        <h4 style={{ marginLeft: 4 }}>KORKU</h4>
        <Swiper1 />
      </div><br /><br />

      <div>
        <h4 style={{ marginLeft: 4 }}>MACERA</h4>
        <Swiper2 />
      </div><br /><br />

      <div>
        <h4 style={{ marginLeft: 4 }}>KOMEDİ</h4>
        <Swiper3 />
      </div><br /><br />

      <div>
        <h4 style={{ marginLeft: 4 }}>ÇİZGİ FİLM</h4>
        <Swiper4 />
      </div><br/><br/>

      <div>
        <h4 style={{marginLeft:4}}>AKSİYON</h4>
        <Swiper6/>
      </div><br/><br/>

      <div>
        <h4>GERİLİM FİLMLERİ</h4>
        <Swiper8/>
      </div><br/><br/>

      <div className='altNavbar'>
        <div className='altNavbarIc'>
          <div style={{marginLeft:25}}>
          <button style={{width:50,height:50,background:"black",border:"1px solid black",fontSize:25}} className='btn btn-dark'><i class="fa-brands fa-facebook"></i></button>
          <button style={{width:50,height:50,background:"black",border:"1px solid black",fontSize:25}} className='btn btn-dark'><i class="fa-brands fa-instagram"></i></button>
          <button style={{width:50,height:50,background:"black",border:"1px solid black",fontSize:25}} className='btn btn-dark'><i class="fa-brands fa-x-twitter"></i></button>
          <button style={{width:50,height:50,background:"black",border:"1px solid black",fontSize:25}} className='btn btn-dark'><i class="fa-brands fa-youtube"></i></button><br/><br/>
          </div>
          <ul>
            <li style={{fontSize:12}}>Sesli Betimleme</li><br/><br/>
            <li style={{fontSize:12}}>Yatırımcı ilişkileri</li><br/><br/>
            <li style={{fontSize:12}}>Yasal Hükümler</li><br/><br/>
            <li ><button style={{border:"1px solid white",fontSize:12}} className='btn btn-dark'>Hizmet Kodu</button></li><br/><br/>
            <li style={{fontSize:12}}>@ 1997 - 2024 Netflix,inc</li>

          </ul>

          <ul>
            <li style={{fontSize:12}}>Yardım Merkezi</li><br/><br/>
            <li style={{fontSize:12}}>İş İmkanları</li><br/><br/>
            <li style={{fontSize:12}}>Cerez Tercihleri</li><br/><br/>

          </ul>
          <ul>
            <li style={{fontSize:12}}>Hediye Kartalrı</li><br/><br/>
            <li style={{fontSize:12}}>Kullanım Koşulları</li><br/><br/>
            <li style={{fontSize:12}}>Kurumsal Bilgiler</li><br/><br/>
          </ul>

          <ul>
            <li style={{fontSize:12}}>Medya Merkezi</li><br/><br/>
            <li style={{fontSize:12}}>Gizlilik</li><br/><br/>
            <li style={{fontSize:12}}>Bize Ulaşın</li><br/><br/>
          </ul>
    
        </div>
      </div>

    

    </>
  )
}

export default Giris;
