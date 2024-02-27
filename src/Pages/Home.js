import React from 'react'
import "./All.css"
import icon1 from "../Images/1.jpg"
import icon2 from "../Images/2.jpg"
import icon3 from "../Images/3.jpg"
import icon4 from "../Images/4.jpg"
import icon5 from "../Images/5.jpg"
import { Link } from 'react-router-dom'


const Home = () => {
    return (
        <>
            <div className='Alan'>
                <h1 style={{marginLeft:525,color:"white"}}>Kim İzliyor....</h1><br/>
                <div class="container text-center">
                    <div class="row align-items-start">
                        <div class="col-2">
                            <div className='kutu1'>
                               <Link to="/Giris" > <img src={icon1} style={{ width: 200 }} /> </Link>
                            </div><br/>
                            <span>Mustafa</span>
                        </div>
                        <div class="col-2">
                            <div className='kutu2'>
                              <Link to="/Giris" > <img src={icon2} style={{ width: 200 }} /> </Link>
                            </div><br/>
                            <span>Kadir</span>
                        </div>
                        <div class="col-2">
                            <div className='kutu3'>
                               <Link to="/Giris">  <img src={icon3} style={{ width: 200 }} /> </Link>
                            </div><br/>
                            <span>Sude</span>

                        </div>
                        <div class="col-2">
                            <div className='kutu4'>
                               <Link to="/Giris" >  <img src={icon4} style={{ width: 200, height: 200 }} /></Link>
                            </div><br/>
                            <span>Cenk</span>

                        </div>
                        <div class="col-2">
                            <div className='kutu5'>
                              <Link to="/Giris" > <img src={icon5} style={{ width: 200 }} /> </Link> 
                            </div><br/>
                            <span>Hasan</span>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}


export default Home;
