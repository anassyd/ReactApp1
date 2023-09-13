import React from 'react'
import './portfolio.css'

export default function Portfolio() {
  return <section id="portfolio">
    <div className="container">
    <div className="portfolio-title my-2  ">
          <h2 className="fw-bolder fs-1 text-center mt-5">PORTFOLIO COMPONENT</h2>
          <div className="d-flex align-items-center justify-content-center mb-3">
            <div className="line me-3 text-black"></div>
            <i className="fa-solid fa-star "></i>
            <div className="line ms-3 text-black"></div>
          </div>
        </div>
    <div className="row row-cols-1 row-cols-md-3 g-5 py-3">
   
  <div className="col">

    <div className="card h-100 position-relative overflow-hidden">
    
      <img src="https://routeegy.github.io/startFramework/assets/images/poert1.png" className="card-img-top rounded-2" alt="..."/>
      <div className="layer text-center position-absolute d-flex justify-content-center align-items-center">
        
      <i class="fa-solid fa-plus fa-6x text-white"></i>
     
    </div>
    </div>
  </div>
  <div className="col">
   
    <div className="card h-100 overflow-hidden">
    
      <img src="https://routeegy.github.io/startFramework/assets/images/port2.png" className="card-img-top rounded-2" alt="..."/>
      <div className="layer text-center position-absolute d-flex justify-content-center align-items-center">
        
      <i class="fa-solid fa-plus fa-6x text-white"></i>
     
    </div>
    </div>
  </div>
  <div className="col">
    
    <div className="card h-100 overflow-hidden">

      <img src="https://routeegy.github.io/startFramework/assets/images/port3.png" className="card-img-top rounded-2" alt="..."/>
      <div className="layer text-center position-absolute d-flex justify-content-center align-items-center">
        
      <i class="fa-solid fa-plus fa-6x text-white"></i>
     
    </div>
    </div>
  </div>
  <div className="col">
   
    <div className="card h-100 overflow-hidden">
   
      <img src="https://routeegy.github.io/startFramework/assets/images/poert1.png" className="card-img-top rounded-2" alt="..."/>
      <div className="layer text-center position-absolute d-flex justify-content-center align-items-center">
   
      <i class="fa-solid fa-plus fa-6x text-white"></i>
    
    </div>
    </div>
  </div>
  <div className="col">
    
    <div className="card h-100 overflow-hidden ">
    
      <img src="https://routeegy.github.io/startFramework/assets/images/port2.png" className="card-img-top rounded-2" alt="..."/>
      <div className="layer text-center position-absolute d-flex justify-content-center align-items-center">
       
      <i class="fa-solid fa-plus fa-6x text-white"></i>
      
    </div>
    </div>
  </div>
   <div className="col">
   
    <div className="card h-100 overflow-hidden">
   
      <img src="https://routeegy.github.io/startFramework/assets/images/port3.png" className="card-img-top rounded-2" alt="..."/>
      <div className="layer text-center position-absolute d-flex justify-content-center align-items-center">

      <i class="fa-solid fa-plus fa-6x text-white"></i>
     
    </div>
    </div>
  </div>
</div>
    </div>
  </section>
}
