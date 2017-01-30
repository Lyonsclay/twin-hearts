import React, { Component } from 'react'
import MediaQuery from 'react-responsive'

export const styles = {
  main: {
    marginBottom: "-4em"
  },
  intro: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  introMobile: {
    display: 'flex',
    flexDirection: 'column-reverse',
    justifyContent: 'space-around'
  },
  details: {
    overflow: 'hidden',
    flex: '0 0 auto',
    contentJustify: 'space-around',
    flexBasis: '30%',
    textAlign: 'center',
    minWidth: 240
  },
  poster: {
    marginLeft: 20,
    marginRight: 20,
    height: 450,
    textAlign: 'center',
    minWidth: 480
  },
  title: {
    marginTop: 15
  },
  description: {
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
    textAlign: 'center',
    margin: 40
  },
  thumbs: {
    height: 90
  },
  img: {
    margin: 15,
    maxWidth: '100%',
    maxHeight: '100%'
  }
};


export const Poster = ({url}) => {
  return (
    <div style={styles.poster}>
      <img src={url} style={styles.img} alt="poster" />
    </div>
  );
};

export const Title = ({title}) => {
  return (
    <div style={styles.title}>
      <h1>{title}</h1>
    </div>
  );
};

export const Description = ({description}) => {
  return (
    <div style={styles.description}>
      <p>{description}</p>
    </div>
  );
};

export class Thumbnails extends Component {
  render() {
    let images = []
    try {
      images = this.props.thumbnails.map((url, index) => (
        <img src={url} key={index} style={styles.img} alt="thumb" />
      ));
    } catch (e) {
      console.log('Error receiving Thumbnails', e)
    }

    return (
      <div style={styles.thumbs}>
        {images}
      </div>
    )
  }
}

export const Details = ({title, description, screenshots}) => {
  return (
    <div style={styles.details}>
      <Title title={title} />
      <Description description={description} />
      <Thumbnails thumbnails={screenshots} />
    </div>
  );
};

const TopicIntro = (props) => {
  return (
    <div style={styles.main}>
      <MediaQuery minWidth={1100} >
        <div style={styles.intro}>
          <Details {...props} />
          <Poster url={props.image} />
        </div>
      </MediaQuery>
      <MediaQuery maxWidth={1100} >
        <div style={styles.introMobile}>
          <Details {...props} />
          <Poster url={props.image} />
        </div>
      </MediaQuery>
    </div>
  );
};

export default TopicIntro;
