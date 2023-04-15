import React from "react";
import Actions from "./components/actions/index.js";
import Description from "./components/description/index.js";
import Title from "./components/title/index.js";
import ButtonLearnMore from "./components/actions/components/buttons/learnMore/index.js";

const Card = ({ title, imageUrl, description, buttonText, buttonLink }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img className="w-full h-56 object-cover" src={imageUrl} alt={title} />
      <div className="p-6">
        <Title title={title} />
        <Description description={description} />
        <Actions className={"pt-6"}>
          <ButtonLearnMore buttonLink={buttonLink} buttonText={buttonText} />
        </Actions>
      </div>
    </div>
  );
};

export default Card;
