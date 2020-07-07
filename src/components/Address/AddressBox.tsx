import React from "react";
import HotelPricing from "./HotelPricing";

import "./AddressBox.css";
import Mailto from "../Mailto";

interface Props {
  hotelName: string;
  addressStreet: string;
  addressCity: string;
  phone: string;
  email: string;
  contactPerson: string;
  availableUntil: Date;
  pricing: Array<string>;
  payable: string;
  className: string;
  description: any;
}

const AddressBox: React.FC<Props> = (props: Props) => {
  const cssPrefix = "AddressBox";

  const options = {
    year: "numeric",
    month: "2-digit",
    day: "numeric",
  };

  return (
    <div className={`${cssPrefix}__content ${props.className}`}>
      <h4>{props.hotelName}</h4>
      <div className={`${cssPrefix}__body`}>
        <div className={`${cssPrefix}__address`}>
          <div className={`${cssPrefix}__data`}>
            <span>{props.addressStreet}</span>
            <span>{props.addressCity}</span>
          </div>
          <div className={`${cssPrefix}__contact`}>
            <span>Telefon: {props.phone}</span>
            <span>
              E-Mail: <Mailto email={props.email} />
            </span>
          </div>
        </div>
        <div className={`${cssPrefix}__contact-person`}>
          {props.contactPerson}
        </div>
        <div className={`${cssPrefix}__available-until`}>
          abrufbar bis:{" "}
          {props.availableUntil.toLocaleDateString("de-DE", options)}
        </div>
        <div className={`${cssPrefix}__pricing`}>
          <HotelPricing pricing={props.pricing} />
        </div>
        <div className={`${cssPrefix}__payable`}>{props.payable}</div>
        <div className={`${cssPrefix}__description`}>{props.description}</div>
      </div>
    </div>
  );
};

export default AddressBox;
