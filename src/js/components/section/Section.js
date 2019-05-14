import React from "react";

import './section.scss'

import { SubSection } from "../subSection"
import { 
  makeWebSafe,
  makeReactKey
} from "../../helpers"

import { sections } from "../../data.js"

class Section extends React.Component {

  renderSkillBar = (data, index) => {
    return (
      <div key={makeReactKey('skill-bar-', index)}className="col-md-4 f-space-between align-items-center"> {data.title}
        <div className="skill-bar">
          <div className="bar">
            <div className="skill-level" style={{width: `${data.width}%`}}></div>
          </div>
        </div>
      </div>
    )
  }

  renderProficiency = (data) => {
    return (
      <article className="clearfix">
        <div className="row">
          {this.props.subSections.map((data, index) => {
            return (
              this.renderSkillBar(data, index)
            )
          })}
        </div>
      </article>
    )
  }

  renderDefaultSubsection = () => {
    return (
      <article className="clearfix">
        {this.props.subSections.map((data, index) => {
          const images = this.props.images ? 
            this.props.images[makeWebSafe(data.title)] ? 
              this.props.images[makeWebSafe(data.title)]["images"] : null 
            : null
          return (
            <SubSection 
              key={ makeReactKey('subsection', index) } 
              images={ images }
              dir={makeWebSafe(this.props.title)}
              {...data} />
          )
        })}
      </article>
    )
  }

  render() {
    return (
      <section id={makeWebSafe(this.props.title)}>
        <a className="anchor" href={makeWebSafe(this.props.title)}> </a>

        <aside className='aside'>
            <h4>{this.props.title}</h4>
        </aside>
        { this.props.title === sections.PROFICIENCIES ?
          this.renderProficiency() :
          this.renderDefaultSubsection()
        }

      </section>
    )
  }
}

export default Section;