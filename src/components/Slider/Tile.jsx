import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Tile extends Component {
  render() {
    return(
      <div className="tile">
        <div className="tile__media">
          <Link to={`/shows/${this.props.id}`} >
            <img className="tile__img" src={this.props.src} alt={this.props.title} />
            <p>{this.props.title}</p>
          </Link>
        </div>
      </div>
    )
  }
}
