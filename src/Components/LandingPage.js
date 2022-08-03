import React from 'react'
import img from '../Assets/IMG63836.jpg'
import img1 from '../Assets/IMG20220427172652.jpg'
import img2 from '../Assets/IMG20220427172816.jpg'

const LandingPage = () => {
  return (
    <>
      <div id="carouselExampleControls" className="carousel slide" data-interval="3000" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item">
            <img className="d-block w-100 slideImage" src={img} alt="First slide"/>
          </div>
          <div className="carousel-item active">
            <img className="d-block w-100 slideImage" src={img1} alt="Second slide"/>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100 slideImage" src={img2} alt="Third slide"/>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </>
  )
}

export default LandingPage