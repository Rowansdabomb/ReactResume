import React from "react";

import { Hero } from "../hero"
import { ContentWrapper } from "../contentWrapper"

class Container extends React.Component {
  render() {
    return (
      <div className="container main-wrapper">
        <div className="row main-wrapper">
          <Hero />
          <ContentWrapper />
        </div>
      </div>
    )
  }
}

export default Container;