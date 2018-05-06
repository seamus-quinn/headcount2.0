import React from 'react';
import CardContainer from '../../CardContainer';
import { shallow } from 'enzyme';

describe('CardContainer', () => {
  let cardContainer;
  let mockSchoolNames = ['COLORADO', 'ACADEMY 20'];
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
    cardContainer = shallow(<CardContainer
      comparedSchools={mockComparedSchools}
      schoolData={mockSchoolData}
      schoolRepository={mockSchoolRepository}
      updateComparedSchools={mockUpdateComparedSchools}
      schoolNames={mockSchoolNames}
    />);
  });

  it('matches snapshot', () => {

    expect(cardContainer).toMatchSnapshot();
  });
});