import React from "react";

import { Carousel } from "../carousel"

import { 
  makeWebSafe, 
  makeReactKey,
  makeDateRange
} from "../../helpers"

import './subsection.scss'

class SubSection extends React.Component {
  renderContents() {
    return (
      <div className="drop-wrapper">
        { this.props.content.map((paragraph, index) => {
          return (
            <p 
              key={makeReactKey(this.props.title, index)}
              id={makeWebSafe(this.props.title)}
              dangerouslySetInnerHTML={{__html: paragraph}}>
            </p>
          )
        })}

        { this.props.images &&
          <Carousel 
            size={3}
            dir={`${this.props.dir}/${makeWebSafe(this.props.title)}`} 
            images={this.props.images}/>
        }
      </div>
    )
  }

  render() {
    const dateRange = this.props.startDate ? makeDateRange(this.props.startDate, this.props.endDate) : null
    return (
      <div id={makeWebSafe(this.props.title)} className="subsection">
        <div className="flex f-space-between f-align-items-center">
          <div className='subsection__title'>
              <h3>
                <a href={this.props.url}>
                  { this.props.title }
                  { this.props.url && 
                    <i className="fa fa-external-link"></i>
                  }
                </a>
              </h3>
          </div>
          {dateRange &&
            <div className="date">
                <h3>{dateRange}</h3>
            </div>
          }
        </div>

        {this.props.role &&         
          <div className="subtitle">
              <h3 className="float-left">{this.props.role}</h3>
          </div>
        }

        { this.renderContents() }
        
      </div>
    )
  }
}

export default SubSection;