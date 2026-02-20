import React from "react";
import PricingFeature from "./PricingFeature";

const PricingCard = ({ pricing }) => {
  const { title, price, description, features } = pricing;
  //console.log(pricing);
  return (
    <div>
      <div className=" flex flex-col mt-2 border bg-blue-300 rounded-2xl text-black p-3">
        <h1 className="text-5xl">{title}</h1>
        <h3 className="text-2xl">{price}</h3>
        <div className="bg-blue-700 p-3 rounded-2xl flex-1">
          <p className="text-xl">{description}</p>
          {features.map((feature, index) => (
            <PricingFeature key={index} feature={feature}></PricingFeature>
          ))}
        </div>
        <button className="btn w-full">Subscribe</button>
      </div>
    </div>
  );
};

export default PricingCard;
