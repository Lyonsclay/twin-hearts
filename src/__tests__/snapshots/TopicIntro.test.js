import React from 'react'
import renderer from 'react-test-renderer'
import TopicIntro from '../../components/TopicIntro'

describe('TopicIntro', () => {
  const props = {
    title: 'Great Show',
    description: 'It rips the curtain off the American dream!',
    poster: 'http://thetvdb.com/banners/fanart/original/28950-23.jpg',
    screenshots: [
      "http://thetvdb.com/banners/fanart/original/289590-25.jpg",
      "http://thetvdb.com/banners/fanart/original/289590-6.jpg",
      "http://thetvdb.com/banners/fanart/original/289590-8.jpg"
    ]
  }

  const intro = renderer.create(
    <TopicIntro {...props} />
  )

  let tree = intro.toJSON()

  it('renders', () => {
    expect(tree).toMatchSnapshot();
  })
})
