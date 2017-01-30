import React from 'react'
import axios from 'axios'

export default class Discussion extends React.Component {
  constructor(props) {
    super(props);
    this.state = { discussion: {} }
  }
  componentDidMount = () => {
    this.fetchDiscussion()
      .then((response) => {
        this.setState({ discussion: response.data })
      })
  }
  fetchDiscussion = () => {
    return axios.get("//localhost:3000/discussions/" + this.props.params.id)
  }
  render() {
    const { discussion } = this.state
    return(<h1> {discussion.topic} </h1>)
  }
}
