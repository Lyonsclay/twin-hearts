import React from 'react';
import { shallow } from 'enzyme';
import TopicIntro, {
  Details,
  Poster,
  Title,
  Description,
  Thumbnails
} from '../../components/TopicIntro';
import MediaQuery from 'react-responsive'

const props = {
  id: '2',
  title: 'Great Show',
  description: 'It rips the curtain off the American dream!',
  image: 'http://thetvdb.com/banners/fanart/original/28950-23.jpg',
  screenshots: [
    'http://thetvdb.com/banners/fanart/original/289590-25.jpg',
    'http://thetvdb.com/banners/fanart/original/289590-6.jpg',
    'http://thetvdb.com/banners/fanart/original/289590-8.jpg'
  ]
};

describe('TopicIntro', () => {
  const intro = shallow(<TopicIntro {...props} />);

  it('renders children', () => {
    expect(intro.contains(<Poster url={props.image} />)).toBe(true);
    expect(intro.contains(<Details {...props} />)).toBe(true);
  });

  it('children receive props', () => {
    expect(intro.find(Details).first().props().title).toEqual(props.title)
    expect(intro.find(Poster).first().props().url).toEqual(props.image)
  });
});

describe('Details', () => {
  const details = shallow(<Details {...props} />);

  it('renders children', () => {
    expect(details.contains(<Title title={props.title} />)).toBe(true);
    expect(details.contains(<Description description={props.description} />)).toBe(true);
    expect(details.contains(<Thumbnails thumbnails={props.screenshots} />)).toBe(true);
  });

  it('children receive props', () => {
    expect(details.find('Title').prop('title')).toEqual(props.title);
    expect(details.find('Description').prop('description')).toEqual(props.description);
    expect(details.find('Thumbnails').prop('thumbnails')).toEqual(props.screenshots);
  });
});
