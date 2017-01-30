import React, { Component } from 'react'
import { Link } from 'react-router'

const styles = {
  headerStyle: {
    color: "white",
    paddingTop: 20,
    paddingLeft: 40,
    marginBottom: -40
  },
  row: {
    marginBottom: "-3em"
  }
}

export default class GenericSlider extends Component {
  componentDidMount = () => {

  }
  render() {
    const { title } = this.props
    return(
      <div className="container">
        <h3 style={styles.headerStyle}>
          <Link to={this.props.path}>{title.toUpperCase()}</Link>
        </h3>
        <div className="row" style={styles.row}>
          <div className="row__inner">
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}


