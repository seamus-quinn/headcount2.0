import React from 'react';
import App from '../../App';
import { shallow, mount } from 'enzyme';
import CardContainer from '../../CardContainer';

describe('App', () => {
  let app;

  beforeEach(() => {
    app = shallow(<App />);
  });

  it('matches snapshot', () => {
    expect(app).toMatchSnapshot();
  });

  it('state is equal to an object', () => {
    expect(app.state().schoolData).toBeInstanceOf(Object);
  });

  it('should have state.data with length of 181', () => {
    expect(app.state().schoolNames).toHaveLength(181);
  });

  it('renders CardContainer with correct props', () => {
    expect(app.find(CardContainer).prop('schoolData')).toBeInstanceOf(Object);
  });

  it('initiates having state with correct properties', () => {
    const actual = Object.keys(app.instance().state);
    const expected = [
      'schoolRepository',
      'schoolNames',
      'schoolData',
      'comparedSchools'
    ];

    expect(actual).toEqual(expected);
  });

  it('calls componentDidMount', () => {
    const spy = jest.spyOn(App.prototype, 'componentDidMount');
    const app = mount(<App />);
    app.instance().componentDidMount;

    expect(spy).toHaveBeenCalled();
  });

  describe('updateComparedSchools', () => {
    let initialState; 
    let expectedState;

    it('should add names to the array', () => {
      let app = shallow(<App />);
      initialState = [];
      expectedState = ['COLORADO'];
      
      app.setState({comparedSchools: initialState});
      app.instance().updateComparedSchools('COLORADO');
      
      expect(app.state('comparedSchools')).toEqual(expectedState);
    });

    it('should remove matching names from the array', () => {
      let app = shallow(<App />);
      initialState = ['COLORADO'];
      expectedState = [];

      app.setState({ comparedSchools: initialState });
      app.instance().updateComparedSchools('COLORADO');

      expect(app.state('comparedSchools')).toEqual(expectedState);
    });

    it('should limit the array length to two elements', () => {
      let app = shallow(<App />);
      initialState = ['COLORADO', 'ACADEMY 20'];
      expectedState = ['COLORADO', 'ADAMS-ARAPAHOE 28J'];

      app.setState({ comparedSchools: initialState });
      app.instance().updateComparedSchools('ADAMS-ARAPAHOE 28J');

      expect(app.state('comparedSchools').length).toEqual(2);
      expect(app.state('comparedSchools')).toEqual(expectedState);
    });
  }); 
});
