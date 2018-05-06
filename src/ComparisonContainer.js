import React from 'react';
import Card from './Card';
import ComparisonCard from './ComparisonCard';
import './styles/ComparisonContainer.css';
import PropTypes from 'prop-types';

const ComparisonContainer = ({
  comparedSchools,
  schoolData,
  schoolRepository,
  updateComparedSchools
}) => {
  const cardOneData = schoolData[comparedSchools[0]];
  const cardTwoData = schoolData[comparedSchools[1]];

  return (
    <div className="compare-wrapper">
      <Card
        cardData={cardOneData}
        updateComparedSchools={updateComparedSchools}
        className="card border"
      />
      {comparedSchools.length === 2 &&
        <div>
          <ComparisonCard
            schoolRepository={schoolRepository}
            comparedSchools={comparedSchools}
          />
          <Card
            cardData={cardTwoData}
            updateComparedSchools={updateComparedSchools}
            className="card border"
          />
        </div>}
    </div>
  );
};

ComparisonContainer.propTypes = {
  comparedSchools: PropTypes.array,
  schoolData: PropTypes.object,
  schoolRepository: PropTypes.object,
  updateComparedSchools: PropTypes.func
};

export default ComparisonContainer;
