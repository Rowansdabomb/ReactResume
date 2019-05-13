import React from "react";

import './section.scss'

import { SubSection } from "../subSection"
import { 
  makeWebSafe,
  makeReactKey
} from "../../helpers"

class Section extends React.Component {

  render() {
    return (
      <section id={makeWebSafe(this.props.title)}>
        <a className="anchor" href={makeWebSafe(this.props.title)}> </a>

        <aside className='aside'>
            <h4>{makeWebSafe(this.props.title)}</h4>
        </aside>

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
      </section>
    )
  }
}

export default Section;