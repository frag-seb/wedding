import React from "react";
import Layout from "../layout/Layout";
import Content from "../components/Container/Content";

import "./Hotel.css";
import HeadlineImage from "../components/Gallery/HeadlineImage";
import AddressBox from "../components/Address/AddressBox";

const hotels = [
  {
    hotelName: "Hotel Vitalis by AMEDIA",
    addressStreet: "Kathi-Kobus-Str. 20 – 22",
    addressCity: "80797 München",
    phone: "089 120080",
    email: "reservierung.muenchen@amediahotels.com",
    contactPerson: "Ansprechpartnerin: Frau Stefanie Lutz",
    availableUntil: new Date("2020-09-15"),
    pricing: [
      "109 € pro DZ / Nacht inkl. Frühstück",
      "82 € pro EZ / Nacht inkl. Frühstück",
    ],
    className: "left",
    payable: "zahlbar vor Ort",
    description: (
      <>
        Entfernung zur Location: ca. 400 Meter <br />
        (zu Fuß ca. 5 Minuten)
      </>
    ),
  },
  {
    hotelName: "MERCURE Hotel München am Olympiapark",
    addressStreet: "Leonrodstrasse 79",
    addressCity: "80636 München",
    phone: "089 12686-400",
    email: "Sebastian.Seibert@accor.com",
    contactPerson: "Ansprechpartner: Herr Sebastian Seibert",
    availableUntil: new Date("2020-08-29"),
    pricing: [
      "115 € pro DZ / Nacht inkl. Frühstück",
      "95 € pro EZ / Nacht inkl. Frühstück",
    ],
    className: "right",
    payable: "zahlbar vor Ort, Kreditkarte als Garantie erforderlich",
    description: (
      <>
        Entfernung zur Location ca. 1,1 km <br />
        (zu Fuß ca. 15 Minuten)
      </>
    ),
  },
];

const Hotel: React.FC = () => {
  const cssPrefix = "Hotel";

  return (
    <Layout>
      <HeadlineImage />
      <Content className={`${cssPrefix}__content`}>
        <h3>Hotel</h3>
        <div className={`${cssPrefix}__text`}>
          <p>In folgenden Hotels haben wir Zimmerkontingente reserviert.</p>
          <p>
            Bei Interesse könnt ihr euch unter dem Stichwort – Hochzeit Tanja &
            Jochen – ein Zimmer buchen.
          </p>
        </div>

        <div className={`${cssPrefix}__address_box`}>
          {hotels.map((hotel) => (
            <AddressBox {...hotel} />
          ))}
        </div>
        <div className={`${cssPrefix}__text ${cssPrefix}__top-space`}>
          <p>
            Selbstverständlich könnt ihr auch ein anderes Hotel eurer Wahl
            buchen.
          </p>
        </div>
      </Content>
    </Layout>
  );
};
export default Hotel;
