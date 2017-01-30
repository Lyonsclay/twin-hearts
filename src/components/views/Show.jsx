import React, { Component } from 'react'
import TopicIntro from '../../components/TopicIntro'
import shows from '../../assets/seeds/shows.json'

const styles = {
  show: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
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
  fetchShow = () => {
    const show = shows.filter((show) => { return show.id === this.props.params.id })[0]
    this.setState({ show: show })
  }
  render() {
    const { show } = this.state
    return (
      <div style={styles.show}>
        <TopicIntro {...show} />
      </div>
    )
  }
}
