import React, { Component } from 'react';
import TopicIntro from '../components/TopicIntro';
import shows from '../assets/seeds/shows.json';

export const styles = {
  shows: {
    display: 'flex',
    flexDirection: 'column',
    flexFlow: 'row wrap',
    justifyContent: 'space-around'
  }
};

export const featuredShow = () => {
  const show = Math.floor(Math.random() * 11 )
  return shows[show]
}

const Shows = () => {
  return (
    <div style={styles.shows}>
      <TopicIntro {...featuredShow()} />
    </div>
  )
}

export default Shows;


