import React from 'react'
import './Footer.css';

export default function Footer() {
  return <section id='Footer'>
    <div className="container py-5">
      <div className="row text-white py-5">
        <div className="col-md-4 text-center ">
          <h3>LOCATION</h3>
          <p>2215 John Daniel Drive</p>
          <p>Clark, MO 65243</p>
        </div>
        <div className="col-md-4 text-center">
          <h3>AROUND THE WEB</h3>
          <div className="icons d-flex justify-content-center fs-5 py-3 ">
            <i class="i-brand fa-brands fa-facebook mx-2"></i>
            <i class="i-brand fa-brands fa-twitter mx-2"></i>
            <i class="i-brand fa-brands fa-linkedin mx-2"></i>
            <i class="i-brand fa-solid fa-globe mx-2"></i>
          </div>
        </div>
        <div className="col-md-4 text-center ">
          <h3>ABOUT FREELANCER</h3>
          <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
        
        </div>
      </div>
    
    </div>
    <div className="Copyright  d-flex justify-content-center align-items-center py-3 ">
        <p>Copyright © Your Website 2021</p>

      </div>

  </section>
}
