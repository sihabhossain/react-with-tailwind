import React from "react";

const PriceCard = ({ price }) => {
  //   console.log(price);
  return (
    <div>
      <h2>
        <span className="text-5xl font-extrabold text-purple-700">
          {price.price}
        </span>
        <span className="text-2x">/Mon</span>
      </h2>
      <h4 className="text-2xl font-bold">{price.name}</h4>
    </div>
  );
};

export default PriceCard;
