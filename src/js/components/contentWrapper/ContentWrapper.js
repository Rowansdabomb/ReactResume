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
    return (
      <div id="content" className='col-md-7 content no-gutter'>
        <div id="main-content-view" className='padding'>
          { webSiteData.sections.map((data, index) => {
              return(
                <Section 
                  key={makeReactKey('section', index)} 
                  images={ images[makeWebSafe(data.title)] }
                  {...data} />
              )
          })}
        </div>
      </div>
    )
  }
}

export default ContentWrapper