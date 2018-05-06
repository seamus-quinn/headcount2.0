import React from 'react';
import Card from './Card';
import './styles/CardContainer.css';

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

export default CardContainer;