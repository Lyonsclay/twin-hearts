import React from 'react'
import ColorTile from '../../components/Slider/ColorTile'
import GenericSlider from '../../components/Slider/GenericSlider'
import showTopics from '../../assets/seeds/showTopics.json'

const tiles = (topic, show) => (
  [...Array(100)].map((n, index) =>
    <ColorTile
      color={topic.color}
      key={index}
      src={show.screenshots[topic.id % 4]}
      title={topic.title}
    />
  )
)


const ShowTopics = ({show}) => {
  const topics = showTopics.map((topic, index) =>
    <GenericSlider
      title={topic.title}
      key={index}
      path={"/shows/" + show.id + "/" + topic.title}
    >
      {show.screenshots ? tiles(topic, show) : []}
    </GenericSlider>
  )

  return <div style={{ margin: 110 }}>{topics}</div>
}

export default ShowTopics


