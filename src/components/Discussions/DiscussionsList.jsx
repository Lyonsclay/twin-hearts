import React, { Component } from 'react'

import DiscussionCard from './DiscussionCard'

export default class DiscussionList extends Component {
  render() {
    const discussionCards = this.props.discussions.map((discussion) => {
      return (
          <DiscussionCard
            key={discussion.id}
            id={discussion.id}
            topic={discussion.topic}
          />
      )
    })
    return (
      <div>
       {discussionCards}
      </div>
    )
  }
}
