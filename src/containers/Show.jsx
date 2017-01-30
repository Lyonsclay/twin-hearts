import React, { Component } from 'react'
import TopicIntro from '../components/TopicIntro'
import ShowTopics from '../components/Show/ShowTopics'
import shows from '../assets/seeds/shows.json'

const styles = {
  show: {
    display: 'flex',
    flexDirection: 'column'
  }
};

export default class Show extends Component {
  constructor(props) {
    super(props)
    this.state = { show: {} }
  }
  componentDidMount = () => {
    this.fetchShow()
  }
  componentDidUpdate = (prevProps) => {
    const oldId = prevProps.params.id
    const newId = this.props.params.id
    if (newId !== oldId)
      this.fetchShow()
  }
  fetchShow = () => {
    const show = shows.filter((show) => { return show.id === this.props.params.id })[0]
    this.setState({ show: show })
  }
  render() {
    const { show } = this.state
    return (
      <div style={styles.show}>
        <TopicIntro {...show} />
        <ShowTopics show={show} />
      </div>
    )
  }
}
