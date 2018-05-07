import React from 'react';
import { shallow, mount } from 'enzyme';
import ComparisonCard from  '../../ComparisonCard';

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
       />)
  })

  it('should match snapshot', () => {

    // let mockComparisonInfo = { compared: 0 }

    wrapper.instance().find('.comparison').text(0)

    expect(comparisonCard).toMatchSnapshot();
  })
});










// let mockComparisonInfo = { compared: 2 }

// let mockSchoolRepository = {
//   findAverage: jest.fn(),
//   compareDistrictAverages: jest.fn()
// };

// let comparisonCard = mount(<ComparisonCard schoolRepository={mockSchoolRepository} comparedSchools={mockSchoolRepository} />);

