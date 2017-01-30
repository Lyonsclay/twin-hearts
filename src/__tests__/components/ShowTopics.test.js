import React from 'react'
import { shallow } from 'enzyme'
import ShowTopics from '../../components/Show/ShowTopics'

const show = {
  "id": "2",
  "image": "http://thetvdb.com/banners/fanart/original/277165-3.jpg",
  "title": "Silicon Valley",
  "description": "In the high-tech gold rush of modern Silicon Valley, the people most qualified to succeed are the least capable of handling success. A comedy partially inspired by Mike Judge\"s own experiences as a Silicon Valley engineer in the late 1980s.",
  "screenshots": [
    "http://thetvdb.com/banners/fanart/original/277165-6.jpg",
    "http://thetvdb.com/banners/fanart/original/277165-8.jpg",
    "http://thetvdb.com/banners/fanart/original/277165-2.jpg",
    "http://thetvdb.com/banners/fanart/original/277165-3.jpg"
  ]
}

describe('ShowTopics', () => {
  const topics = shallow(<ShowTopics show={show} />)

  it('renders', () => {
    expect(topics).toBeDefined()
  })
})
