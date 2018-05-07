import DistrictRepository from '../../helper.js';
import kinderData from '../../data/kindergartners_in_full_day_program.js';

describe('DistrictRepository iteration 0', () =>  {
  const district = new DistrictRepository(kinderData);

  test('findAverage for ACADEMY 20', () => {
    expect(district.findAverage('ACADEMY 20')).toBe(.407);
  });

  test('compareDistrictAverages ACADEMY 20 against YUMA SCHOOL DISTRICT 1', () => {
    const expected = district.compareDistrictAverages('ACADEMY 20', 'YUMA SCHOOL DISTRICT 1');
    const result =  { 
      "ACADEMY 20": 0.407, 
      "YUMA SCHOOL DISTRICT 1": 0.909, 
      "compared": 0.448 
    };

    expect(expected).toEqual(result);
  });

  test('compareDistrictAverages is case insensitive', () => {
    const expected = district.compareDistrictAverages('ACADeMY 20', 'YUMA ScHOoL DiStRICT 1');
    const result =  { 
      "ACADEMY 20": 0.407, 
      "YUMA SCHOOL DISTRICT 1": 0.909, 
      "compared": 0.448 
    };
    
    expect(expected).toEqual(result);
  });

  test('compareDistrictAverages ACADEMY 20 against Colorado', () => {
    const expected = district.compareDistrictAverages('ACADEMY 20', 'Colorado');
    const result = { 
      "ACADEMY 20": 0.407, 
      "COLORADO": 0.53, 
      "compared": 0.768
    };

    expect(expected).toEqual(result);
  });

});
