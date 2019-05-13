import React from "react"

class Thumbnail extends React.Component {
  constructor(props) {
    super(props)
    this.imageWidth = 100 / (this.props.size + 2)
    this.state = {
      translate: 0,
      animate: this.props.animate,
    }
  }

  componentDidUpdate() {
    if (this.props.animate && !this.state.animate) {
      this.setState({
        translate: `${ this.props.direction === "next" ? 100 : -100 }%`,
        animate: true
      })
    }
    if (this.state.animate && !this.props.animate) { 
      this.setState({
        translate: `0%`,
        animate: false
      })
    }
  }

  render() {
    const itemStyle = {
      transition: `${this.props.duration}ms`,
      width: `${this.imageWidth}%`,
      height: `100%`,
      transform: `translateX(${this.state.translate}%)`
    }

    return (
      <div 
        className="carousel-gallery__image"
        style={itemStyle}>
        {this.props.data &&      
          <img 
            onClick={() => this.props.showFullImage(`${this.props.dir}/${this.props.data.fileName}`, this.props.data.alt)}
            src={require(`../../../images/${this.props.dir}/${this.props.data.fileName}`)} 
            alt={this.props.data.alt}/>
        }
      </div>
    )
  }
}

Thumbnail.defaultProps = {
  duration: 200,
}

export default Thumbnail