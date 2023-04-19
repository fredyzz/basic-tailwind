import React from "react";
import CardList from "../../components/cardList/index.js";

const HomePage = () => {
  const cards = [
    {
      title: "Card 1",
      imageUrl: "https://source.unsplash.com/random/1",
      description: "This is a description for Card 1.",
      buttonText: "Learn More",
      buttonLink: "#",
    },
    {
      title: "Card 2",
      imageUrl: "https://source.unsplash.com/random/2",
      description: "This is a description for Card 2.",
      buttonText: "Learn More",
      buttonLink: "#",
    },
    {
      title: "Card 3",
      imageUrl: "https://source.unsplash.com/random/3",
      description: "This is a description for Card 3.",
      buttonText: "Learn More",
      buttonLink: "#",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1>Home</h1>
      <CardList cards={cards} />
    </div>
  );
};

export default HomePage;
