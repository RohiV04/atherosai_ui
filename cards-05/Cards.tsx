import React from 'react';
import cardsDefinition from './cardsDefinition';
import Card from './Card';

const Cards = () => (
  <>
    <div className="cards">
      {cardsDefinition.map((card) => (
        <Card key={card.title} {...card} />
      ))}
    </div>
    <style jsx>{`
      .cards {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 1rem;
        margin: 0 auto;
        margin-top: 4rem;
        max-width: 70rem;
      }
    `}</style>
  </>
);

export default Cards;
