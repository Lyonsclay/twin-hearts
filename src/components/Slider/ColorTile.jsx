import React, { Component } from 'react';

const styles = {
  color: {
    minHeight: '100%',
    opacity: 0.5
  },
  image: {
    backgroundSize: 'cover'
  },
  title: {
    textAlign: 'center',
    width: '100%',
    marginTop: 0,
    fontFace: 'helvetica',
    fontWeight: 100,
    fontSize: 16,
    opacity: .8,
    letterSpacing: 1
  }
}

export default class ColorTile extends Component {
  handleClick = (e) => {
    e.preventDefault();
  }

  render() {
    const color = { backgroundColor: this.props.color }
    const colorStyle = Object.assign({}, styles.color, color)
    const image = { backgroundImage: `url(${this.props.src})` }
    const imageStyle = Object.assign({}, styles.image, image)

    return(
      <div className="tile" onClick={this.handleClick}>
        <div className="tile__media">
          <div
            style={imageStyle}
            className="tile__img"
          >
            <div style={colorStyle}>
            </div>
          </div>
          <p style={styles.title}>
            {this.props.title}
          </p>
        </div>
      </div>
    )
  }
}
