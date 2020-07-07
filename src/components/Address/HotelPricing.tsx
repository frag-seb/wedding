import React from "react";

import "./HotelPricing.css";

interface Props {
  pricing: Array<String>;
}

const HotelPricing: React.FC<Props> = ({ pricing }: Props) => {
  const cssPrefix = "HotelPricing";

  return (
    <ul className={`${cssPrefix}__content`}>
      {pricing.map((price) => (
        <li className={`${cssPrefix}__price`}>{price}</li>
      ))}
    </ul>
  );
};

export default HotelPricing;
