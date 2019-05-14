import React from "react"

class Proficiency extends React.Component {

  renderProficiency = (data) => {
    return (
      <li> {data.title}C/C++
        <div class="skill-bar">
          <div class="bar">
            <div class="skill-level" style={{width: `${data.width}%`}}></div>
          </div>
        </div>
      </li>
    )
  }

  render() {
    return(
      <div class="sub-section">
        <aside class='aside'>
            <h4>Proficiencies</h4>
        </aside>
        <article class="clearfix">

        </article>
      </div>
    )
  }
}

export default Proficiency