import React from 'react';
import { mount } from 'enzyme';
import ComparisonCard from '../../ComparisonCard';

describe('ComparisonCard', () => {
  let comparisonCard;

  beforeEach(() => {
    comparisonCard = mount(<ComparisonCard
      schoolRepository={{
        COLORADO: {
          location: 'COLORADO',
          stats: {
            2003: 0.342,
            2004: 0.143
          }
        },
        findAverage: jest.fn(),
        compareDistrictAverages: jest.fn()
      }}
      comparedSchools={['COLORADO', 'ACADEMY 20']}
    />);
  });

  it('should match snapshot', () => {

    // let mockComparisonInfo = { compared: 0 }

    comparisonCard.instance().find('.comparison').text(0);

    expect(comparisonCard).toMatchSnapshot();
  });
});
