import React, { Component } from 'react'
import MediaQuery from 'react-responsive'
import Searchbar from '../Searchbar'
import Sidebar from './Sidebar'
import Nav from './Nav'

const menuStyles = {
  marginTop: 0,
  marginLeft: '5em',
}

export default class ResponsiveNav extends Component {
  render() {
    return (
      <div>
      <MediaQuery minDeviceWidth={1224}>
        <MediaQuery minWidth={950}>
          <div className="ui inverted segment">
            <Nav />
          </div>
        </MediaQuery>
        <MediaQuery maxWidth={950}>
          <div className="header-container">
            <Sidebar />
            <div className="ui inverted secondary menu" style={menuStyles}>
              <div className="item">
                <img
                  className="ui small image"
                  src={require('../../assets/images/logo3.png')}
                  alt="logo"
                />
              </div>
              <MediaQuery minWidth={500}>
                <div className="item right menu">
                  <Searchbar icon="search" placeholder="Search..." className="item" />
                </div>
              </MediaQuery>
            </div>
          </div>
        </MediaQuery>
      </MediaQuery>
      <MediaQuery maxDeviceWidth={1224}>
        <div className="header-container">
          <Sidebar />
          <div className="ui inverted secondary menu" style={menuStyles}>
            <div className="item">
              <img
                className="ui small image"
                src={require('../../assets/images/logo3.png')}
                alt="logo"
              />
            </div>
          </div>
        </div>
      </MediaQuery>
      </div>
    );
  }
}

