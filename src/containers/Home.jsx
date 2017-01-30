import React, { Component } from 'react'
import Slider from '../components/Slider/Slider'

import shows from '../assets/seeds/shows.json'
import topics from '../assets/seeds/topics.json'

const styles = {
  slider: {
    marginBottom: "-2em"
  },
  home: {
    marginLeft: "3.5em",
    marginRight: "3.3em"
  },
  image: {
    height: "2em",
    marginRight: "0.5em"
  },
  title: {
    fontSize: "1.7em"
  },
  topic: {
    display: "flex",
    flexDirection: "row",
    marginBottom: "-3em"
  }
}
export default class Home extends Component {
  render() {
    const topicSliders = topics.map((topic,index) => (
      <div key={index} style={styles.slider}>
        <div style={styles.topic}>
          <div style={styles.title}>
            {topic.title}
          </div>
        </div>
        <Slider shows={shows} />
      </div>
    ))
    return (
      <div style={styles.home}>
        <div className="contain">
          {topicSliders}
        </div>
      </div>
    )
  }
}


