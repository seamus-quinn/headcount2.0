import React from 'react';
import { shallow } from 'enzyme';
import TableRow from '../../TableRow';

describe('TableRow', () => {
  let wrapper;
 
  beforeEach(() => {
    wrapper = shallow(<TableRow />);
  });

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
