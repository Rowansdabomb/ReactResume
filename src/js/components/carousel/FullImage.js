import React from "react"

import "./carousel.scss"

class FullImage extends React.Component {
  render() {
    return (
      <div className="carousel-full-wrapper">
        <div className="carousel-full__image" >
          <i 
            onClick={() => this.props.close()} 
            className="carousel-full__image-close fa fa-times"></i>
          <img src={require(`../../../images/${this.props.image}`)} alt={this.props.alt} />
        </div>
      </div>
    )
  }
}


export default FullImage