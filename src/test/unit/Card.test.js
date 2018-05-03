import React from 'react';
import ReactDOM from 'react-dom';
import Card from '../../Card';
import { shallow, mount } from 'enzyme';

describe('Card', () => {
  let card;

  beforeEach(() => {
    card = shallow(<Card />)
  })

  it('matches snapshot', () => {

    expect(card).toMatchSnapshot()
  });
})