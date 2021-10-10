import React from 'react'
import './styles.css'


export const Navbar = () => {
  return (
    <div className="rela__nav">
      <nav className="navbar navbar-expand-md navbar-dark mb-4">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src="http://iselllagos.com/wp-content/uploads/2021/02/cropped-logo-184x91.png" className="rela__custom-logo" alt="iselllagos" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav rela__navbar ms-auto mb-2 mb-md-0">
            <li className="nav-item">
              <a className="nav-link rela__navlink active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link rela__navlink" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link rela__navlink" href="#" tabindex="-1" aria-disabled="true">Contact</a>
            </li>
          </ul>
        </div>
      </div>
</nav>
      
    </div>
  )
}