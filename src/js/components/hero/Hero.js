import React from "react"

import "./hero.scss"

class Hero extends React.Component {
  render() {
    return (
      <div id="hero" className='hero col-md-5 no-gutter  flex'>
        <div className='row flex-center align-self-center flex-direction-mobile justify-content-center padding'>
          <div className='col-xs-12'>
              <div id="hero-image" className='hero-image' >
                <div className='hero-image__image'></div>
              </div>
          </div>
          <div className='col-xs-12'>
              <div className='hero-social'>
                <a href="https://github.com/Rowansdabomb">
                  <i className="fa fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/rowanskye/">
                  <i className="fa fa-linkedin"></i>
                </a>
                <a href="mailto:rowanskye@gmail.com?Subject=Resume%20website%20contact">
                  <i className="fa fa-envelope"></i>
                </a>
                
              </div>
              <div id="hero-introduction">
                  <h1>Hello! I am Rowan Skye</h1>
                  <p>I am an electrical engineer and full stack software developer. My interests include web development, artificial intelligence, sustainable energy, and climbing.</p>
              </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Hero