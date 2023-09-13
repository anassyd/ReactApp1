import React from 'react'
import './Home.css';

export default function Home() {
   
    return<section id="home">
     <div className="container">
        <div className="row">
            <div className="home text-center my-5 ">
                <img src="https://routeegy.github.io/startFramework/assets/images/avataaars.svg" className="w-25"></img>
                <div className="text mt-3">
                    <h2 className='fw-bolder fs-2 text-white'>START FRAMEWORK</h2>
                    <div className="d-flex align-items-center justify-content-center mb-3">
                        <div className="line-home me-3"></div>
                        <i className="fa-solid fa-star text-white"></i>
                        <div className="line-home ms-3"></div>
                    </div>
                    <p className="text-white">Graphic Artist - Web Designer - Illustrator</p>
                </div>
            </div>
        </div>
    </div>
    </section>
      
    
}
