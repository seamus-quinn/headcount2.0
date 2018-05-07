import React from 'react';
import Card from './Card';
import './styles/CardContainer.css';
import PropTypes from 'prop-types';

const CardContainer = ({
  schoolData,
  schoolNames,
  updateComparedSchools,
  comparedSchools
}) => {
  const cards = schoolNames.map((schoolName, index) => {
    if (comparedSchools.includes(schoolName)) {
      const cardData = schoolData[schoolName];
      return <Card
        cardData={cardData}
        key={index}
        updateComparedSchools={updateComparedSchools}
        className="card border"
      />;
    } else {
      const cardData = schoolData[schoolName];
      return <Card
        cardData={cardData}
        key={index}
        updateComparedSchools={updateComparedSchools}
        className="card"
      />;
    }
  });
  return cards;
};

CardContainer.propTypes = {
  schoolData: PropTypes.object,
  schoolNames: PropTypes.array,
  updateComparedSchools: PropTypes.func,
  comparedSchools: PropTypes.array
};

export default CardContainer;