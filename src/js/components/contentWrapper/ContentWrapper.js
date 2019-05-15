import React from "react"

import { Section } from "../section"

import { 
  makeWebSafe,
  makeReactKey
} from "../../helpers"

import './contentWrapper.scss'

import { images, webSiteData } from "../../data.js"

class ContentWrapper extends React.Component {
  
  render() {
    const dt = new Date()
    console.log(dt.getFullYear())
    return (
      <div id="content" className='col-md-7 content no-gutter'>
        <div id="main-content-view" className='padding'>
          { webSiteData.sections.map((data, index) => {
            console.log(data)
            return(
              <Section 
                key={makeReactKey('section', index)} 
                images={ images[makeWebSafe(data.title)] }
                {...data} />
            )
          })}
          <div className="footer">
            { dt.getFullYear() }
          </div>
          
        </div>
      </div>
    )
  }
}

export default ContentWrapper