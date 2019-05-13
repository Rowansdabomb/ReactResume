import React from "react"

import "./hero.scss"

class Hero extends React.Component {
  render() {
    return (
      <div id="hero" className='hero col-md-5 no-gutter  flex'>
        <div className='row flex-center align-self-center flex-direction-mobile justify-content-center padding'>
          <div className='col-sm-12 col-xs-4'>
              <div id="hero-image" className='hero-image' >
                <div className='hero-image__image'></div>
              </div>
          </div>
          <div className='col-sm-12 col-xs-6'>
              <div className='hero-social'>
                <i className="fa fa-github"></i>
                <i className="fa fa-linkedin"></i>
                <i className="fa fa-envelope"></i>
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