import React from "react";
import Card from "../card/index.js";

const CardList = ({ cards }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {cards.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          imageUrl={card.imageUrl}
          description={card.description}
          buttonText={card.buttonText}
          buttonLink={card.buttonLink}
        />
      ))}
    </div>
  );
};

export default CardList;
