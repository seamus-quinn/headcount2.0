import React from 'react';
import { shallow } from 'enzyme';
import ComparisonContainer from '../../ComparisonContainer';

describe('ComparisonContainer', () => {
  let comparisonContainer;
  let mockComparedSchools = ['COLORADO', 'ACADEMY 20'];
  let mockSchoolData = {
    'COLORADO':
      {
        location: 'COLORADO',
        stats: { 2003: .021 }
      }
  };
  let mockSchoolRepository;
  let mockUpdateComparedSchools;

  beforeEach(() => {
    comparisonContainer = shallow(<ComparisonContainer
      comparedSchools={mockComparedSchools}
      schoolData={mockSchoolData}
      schoolRepository={mockSchoolRepository}
      updateComparedSchools={mockUpdateComparedSchools}
    />);
  });

  it('matches snapshot', () => {
    expect(comparisonContainer).toMatchSnapshot();
  });

});
