import React from 'react'
import './styles.css'

export const HeroSection = () => {
  return (
    <div className="rela__hero">
      <div className="container col-xxl-12 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-5">
            <img src="http://iselllagos.com/wp-content/uploads/2021/02/Hero.png" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" loading="lazy" />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3">Virtual Inspection Just got better</h1>
            <p className="lead">We're providing a better and easier solution to purchasing properties in Nigeria, through our virtual inspection service, we're able to provide our users with a way of verify each property listed information, guaranty their safety and make them have get back the time they could lose to transport</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Learn more</button>
              <a href="https://wa.me/+2349097115128" target="_blank" className="btn btn-light btn-lg px-4">Chat with our CEO</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}