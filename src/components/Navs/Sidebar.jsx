import React, { Component } from 'react';
import { push as Menu } from 'react-burger-menu';
import { IndexLink, Link } from 'react-router';
import Radium from 'radium';
import Searchbar from '../Searchbar';

let RadiumIndexLink = Radium(IndexLink)
let RadiumLink = Radium(Link)

const styles = {
  sidebar: {
    marginTop: "2em", 
    marginBottom: "1em"
  },
  img: {
    width: 240,
    marginBottom: "2em"
  },
  search: {
    right: "1.5em"
  }
}
export default class Sidebar extends Component {
  state = {
    isOpen: false,
  }
  handleLinkClick = () => {
    this.setState({ isOpen: false })
  }
  render() {
    const { isOpen } = this.state
    return (
      <Menu
        pageWrapId={ "page-wrap" }
        outerContainerId={ "outer-container" }
        isOpen={isOpen}
      >
         <img
            className="ui small image"
            src={require('../../assets/images/logo3.png')}
            alt="logo"
            style={styles.img}
          />
        <RadiumIndexLink
          onClick={this.handleLinkClick}
          activeClassName="active"
          className="sidebar-item"
          style={styles.sidebar}
          to="/"
        >
          HOME
        </RadiumIndexLink>
        <RadiumLink
          onClick={this.handleLinkClick}
          activeClassName="active"
          className="sidebar-item"
          style={styles.sidebar}
          to="/profile"
        >
          SHOWS
        </RadiumLink>
        <RadiumLink
          onClick={this.handleLinkClick}
          className="sidebar-item"
          style={styles.sidebar}
          to="/"
        >
          GROUPS
        </RadiumLink>
        <RadiumLink>
          <Searchbar icon="search" style={styles.search} placeholder="Search..." className="sidebar-item" />
        </RadiumLink>
      </Menu>
    );
  }
}
