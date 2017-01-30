import React, { Component } from 'react'
import ResponsiveNav from '../components/Navs/ResponsiveNav'

export default class ResponsiveLayout extends Component {
  render() {
    return (
      <div id="outer-container">
        <ResponsiveNav />
        <main id="page-wrap">
          {this.props.children}
        </main>
      </div>
    )
  }
}
