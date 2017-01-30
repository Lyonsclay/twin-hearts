import React from 'react'
import shows from '../assets/seeds/shows'
import { Link } from 'react-router'

const styles = {
  grid: {
    padding: "2em",
  },
  image: {
    padding: "0.5em",
  },
  title: {
    float: "left",
    fontWeight: 200,
    padding: "0.5em",
  },
  thumbs: {
    paddingLeft: "0.5em",
    paddingRight: "0.5em",
  }
}

export default class Profile extends React.Component {
  state = { topShows: [], firstRow: [], secondRow: [], thirdRow: [] }
  componentDidMount = () => {
    this.setState({
      topShows: shows.slice(0,3),
      firstRow: shows.slice(3,10),
    })
  }
  render() {
    const { topShows, firstRow } = this.state
    const rows = firstRow
    const images = topShows.map((el) => {
      return (
        <div className="column" key={el.id} style={styles.image} >
          <div className="ui image">
            <Link to={`/shows/${el.id}`} ><img src={el.image} alt={el.title} /></Link>
          </div>
          <span style={styles.title}> {el.title} </span>
        </div>
      )
    })
    const thumbs = rows.map((el) => {
        return (
          <div className="column" style={styles.thumbs} key={el.id}>
            <div className="ui image">
              <Link to={`/shows/${el.id}`} ><img src={el.image} alt={el.title} /></Link>
            </div>
            <span style={styles.title}> {el.title} </span>
          </div>
        )
      })
    return(
      <div className="container" style={styles.grid} >
      <h1 style={styles.title} > MY SHOWS </h1>
        <div className="ui stackable three column grid" >
          {images}
        </div>
        <div className="ui stackable six column grid" >
          {thumbs}
        </div>
      </div>
    )
  }
}
