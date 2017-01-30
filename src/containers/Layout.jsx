import React, { Component } from 'react'

import ResponsiveNav from '../components/Navs/ResponsiveNav'


export default class Layout extends Component {
  render() {
    return(
      <div id="outer-container">
        <ResponsiveNav />
          <h1>{JSON.stringify(this.props.results)}</h1>
        <main id="page-wrap">
          {this.props.children}
        </main>
      </div>
    )
  }
}
