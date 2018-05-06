import React from 'react';
import Card from '../../Card';
import { mount } from 'enzyme';

describe('Card', () => {
  let card;

  beforeEach(() => {
    card = mount(<Card />);
  });

  it('matches snapshot', () => {
    expect(card).toMatchSnapshot();
  });
});