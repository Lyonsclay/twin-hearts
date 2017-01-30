import React, { Component } from 'react'
import axios from 'axios'

import NewDiscussionForm from '../components/Discussions/NewDiscussionForm'
import DiscussionsList from '../components/Discussions/DiscussionsList'

export default class Discussions extends Component {
  constructor(props) {
    super(props)
    this.state = { id: 1, discussions: [] }
  }
  componentDidMount = () => {
    this.updateState()
  }
  updateState = () => {
    this.fetchDiscussions()
      .then((discussions) => {
        this.setState({ discussions: discussions })
    })
  }
  handleNewDiscussionSubmit = (topicName) => {
    this.createDiscussion(topicName).then(() => { this.updateState() })
  }
  fetchDiscussions = (id) => {
    return axios.get("//localhost:3000/shows/" + this.state.id + "/discussions")
      .then((response) => { return response.data })
  }
  createDiscussion = (topicName) => {
    const url = "//localhost:3000/shows/" + this.state.id + "/discussions"
    return axios.post(url, { topic: topicName })
  }
  render() {
    return (
      <div className="ui center aligned container">
        <NewDiscussionForm handleSubmit={this.handleNewDiscussionSubmit} /><hr/>
        <DiscussionsList discussions={this.state.discussions} />
      </div>
    )
  }
}
