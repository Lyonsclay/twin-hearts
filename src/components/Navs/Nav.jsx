import React, { Component } from 'react'
import { Link, IndexLink } from 'react-router'
import Searchbar from '../Searchbar'

const styles = {

}
export default class Nav extends Component {
  render() {
  return (
      <div className="ui inverted secondary menu" style={styles.nav}>
        <div className="item">
          <img
            className="ui small image"
            src={require('../../assets/images/logo3.png')}
            alt="logo"
          />
        </div>
        <IndexLink to="/" activeClassName="active" className="item">
          HOME
        </IndexLink>
        <Link to="profile" activeClassName="active"  className="item">
          PROFILE
        </Link>
        <Link to="discussions" activeClassName="active"  className="item">
          Discussions
        </Link>
        <div className="right menu">
          <Searchbar icon="search" placeholder="Search..." className="item" />
        </div>
      </div>
    )
  }
}
