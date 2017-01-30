import _ from 'lodash'
import React, { Component } from 'react'
import { Search } from 'semantic-ui-react'
import {browserHistory} from 'react-router'
import shows from '../assets/seeds/shows.json'

export default class Searchbar extends Component {
  componentWillMount() {
    this.resetComponent()
  }

  resetComponent = () => this.setState({ isLoading: false, results: [], value: '' })

  handleChange = (e, result) => {
    e.preventDefault();
    const path = `/shows/${result.id}`
    browserHistory.push(path)
  }

  handleSearchChange = (e, value) => {
    this.setState({ isLoading: true, value })

    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent()

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
      const isMatch = (result) => re.test(result.title)

      this.setState({
        isLoading: false,
        results: _.filter(shows, isMatch),
      })
    }, 100)
  }

  render() {
    const { isLoading, value, results } = this.state

    const parsedResults = results.map((result) => ({
      id: parseInt(result.id,10),
      image: result.image,
      title: result.title,
    }))

      return (
        <Search
          loading={isLoading}
          onChange={this.handleChange}
          onSearchChange={this.handleSearchChange}
          results={parsedResults}
          value={value}
          {...this.props}
        />
      )
  }
}
