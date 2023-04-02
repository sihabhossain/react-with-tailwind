import React from "react";
import Feature from "../Feature/Feature";

const PriceCard = ({ price }) => {
  //   console.log(price);
  return (
    <div className="bg-indigo-400 mt-4 rounded-md p-4 flex flex-col">
      <h2 className="text-center">
        <span className="text-5xl font-extrabold text-purple-700">
          {price.price}
        </span>
        <span className="text-2x font-bold text-white">/Mon</span>
      </h2>
      <h4 className="text-4xl font-bold text-center my-6">{price.name}</h4>

      <p className="font-bold text-white underline">Features:</p>
      {price.features.map((feature, idx) => (
        <Feature key={idx} feature={feature}></Feature>
      ))}
      <button className="w-full mt-auto hover:bg-red-600 bg-green-500 py-2 rounded-md text-white font-bold">
        Buy Now
      </button>
    </div>
  );
};

export default PriceCard;
