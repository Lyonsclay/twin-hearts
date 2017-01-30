import React, { Component } from 'react'

import Tile from './Tile'

export default class Slider extends Component {
  render() {
      const tiles = this.props.shows.map((show, index) => {
      return(
        <Tile
          key={index}
          src={show.image}
          id={show.id}
          title={show.title}
        />
      )
    }).sort(() => { return 0.5 - Math.random() })
    return(
      <div className="container">
        <div className="row">
          <div className="row__inner">
            {tiles}
          </div>
        </div>
      </div>
    )
  }
}


