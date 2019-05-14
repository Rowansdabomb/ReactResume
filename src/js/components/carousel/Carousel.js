import React from "react"

import Thumbnail from "./Thumbnail"
import FullImage from "./FullImage"
import './carousel.scss'

class Carousel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      prev: this.props.images.length - 1,
      animate: false,
      direction: null,
      imageRange: [],
      fullImage: null
    }
    this.timerID = null
    this.carouselHeight = 100 / this.props.size
  }

  componentDidMount() {
    const imageRange = this.getImageRange()
    this.setState({
      imageRange: imageRange
    })
  }

  
  showFullImage = (name, alt) => {
    this.setState({
      fullImage: {
        fileName: name,
        alt: alt
      }
    })
  }

  closeFullImage = () => {
    this.setState({
      fullImage: null
    })
  }

  animateSlide = (state) => {
    // animates the slide for this.props.duration milliseconds
    clearTimeout(this.timerID)

    this.setState({
      ...state,
      animate: true
    }, () => {
      this.timerID = setTimeout(() => {
        const imageRange = this.getImageRange()
        this.setState({
          animate: false,
          imageRange: imageRange
        })
      }, this.props.duration)
    })
  }

  inRange = (value, size) => {
    if (value > size) value = 0
    if (value < 0) value = size
    return value
  }

  slideImage = (direction) => {
    const imageLength = this.props.images.length - 1
    let prev = this.state.prev + direction
    prev = this.inRange(prev, imageLength)

    this.animateSlide({
      prev: prev,
      direction: direction > 0 ? "next" : "prev"
    })
  }

  getImageRange = () => {
    let imageIndexes = []

    let index = this.state.prev 
    while (true) {
      if (imageIndexes.length >= this.props.size + 2) break

      imageIndexes.push(index)

      index++
      if (index >= this.props.images.length) index = 0
    }

    let imageRange = []
    for (let i = 0; i < imageIndexes.length; i++) {
      imageRange[i] = this.props.images[imageIndexes[i]]
    }

    return imageRange
  }

  renderButton = (direction) => {
    return (
      <div className={`carousel-button ${direction > 0 ? "next" : "prev"}`} onClick={() => this.slideImage(direction)}>
        <i className={`fa fa-chevron-${direction > 0 ? "right" : "left"}`}></i>
      </div>
    )
  }

  render() {
    const containerStyle = {
      paddingTop: `${this.carouselHeight}%`
    }

    const galleryStyle = {
      right:`${ -this.carouselHeight }%`,
      left: `${ -this.carouselHeight }%`,
    }

    return (
      <div className="carousel-container" style={containerStyle}>
        <div className="carousel-gallery" style={galleryStyle}>
          { this.state.imageRange.map( ( data, index ) => 
            <Thumbnail 
              showFullImage={(name, alt) => this.showFullImage(name, alt)}
              key={`image-${index}`} 
              animate={this.state.animate} 
              direction={this.state.direction} 
              data={data} 
              index={index} 
              {...this.props} /> 
          )}
        </div>
        { this.renderButton(-1) }
        { this.renderButton(1) }
        { this.state.fullImage && 
          <FullImage 
            image={`${this.state.fullImage.fileName}`} 
            alt={this.state.fullImage.alt} 
            close={() => this.closeFullImage()}/>
        }
      </div>
    )
  }
}

export default Carousel;