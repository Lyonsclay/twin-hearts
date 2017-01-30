import React, { Component } from 'react'
import { Link } from 'react-router'

export default class DiscussionCard extends Component {
  render() {
    return (
      <div
        className="ui segment padded inverted container center aligned"
        style={{ "width": "60%" }}
      >
         <Link to={"/discussions/" + this.props.id} >{this.props.topic}</Link>
     </div>
    )
  }
}
