import React from "react";
import Layout from "../layout/Layout";
import Content from "../components/Container/Content";

import "./Information.css";
import HeadlineImage from "../components/Gallery/HeadlineImage";
import CountDownClock from "../components/CountDownClock/CountDownClock";

const Information: React.FC = () => {
  const cssPrefix = "Information";

  return (
    <Layout>
      <HeadlineImage>
        <CountDownClock date={"2020-10-10T16:00:00"}>
          <h2>
            Das Edelste an der Liebe ist das Vertrauen zueinander.{" "}
            <span style={{ fontSize: "0.8rem" }}>* ( Julius Grosse )</span>
          </h2>
        </CountDownClock>
      </HeadlineImage>

      <Content className={`${cssPrefix}__content`}>

        <h3>Informationen</h3>
          <div className={`${cssPrefix}__info-box`}>
              <h4>Essen</h4>
              <p>Für das leibliche Wohl ist bestens gesorgt!</p>
              <p>Zum Essen haben wir ein schönes Menü ausgewählt. Bitte teilt uns bei eurer Rückmeldung mit, ob ihr an diesem Tag die Variante mit Fleisch (Rind) oder vegetarisch essen möchtet.</p>
              <p>Für die Kinder gibt es ein kindgerechtes Essen.</p>
          </div>

          <div className={`${cssPrefix}__info-box`}>
              <h4>Anfahrt</h4>
              <p>Die BIRDIE-Bar liegt zentral in München nahe Maxvorstadt und ist mit den öffentlichen Verkehrsmitteln sowie mit dem Auto gut erreichbar.</p>
              <p>Die Locations liegt auf einem Privatgelände ohne Autoverkehr. Die Kinder haben die Möglichkeit auch vor dem Gebäude im Außenbereich zu spielen (z. B. Bobby Car oder Roller fahren).</p>
              <p>Öffentliche Parkplätze sind direkt vor dem Gelände an der Straße vorhanden.</p>
              <span className={`${cssPrefix}__directions`}>&rarr; <a href="https://efa.mvv-muenchen.de/index.html?itdTime=1545&itdDate=20201010&language=de&name_origin=&name_destination=Infanteriestr.%2011a%2C%2080797%20M%C3%BCnchen&itdTripDateTimeDepArr=arr#trip@dest" target='_blank' rel='noopener noreferrer'>Anfahrtsskizze?</a> </span>
          </div>

          <div className={`${cssPrefix}__info-box ${cssPrefix}__means-of-transport`}>
              <h5>Öffentliche Verkehrsmittel:</h5>
              <div className={`${cssPrefix}__list ${cssPrefix}__list grid-2`}>
                  <span>Tram 12</span>
                  <span>Richtung Scheidplatz</span>
                  <span>Tram 20 / 21</span>
                  <span>Richtung Moosach Hbf.</span>
                  <span>Bus 53 / 59 </span>
                  <span>Richtung Ackermannbogen</span>
                  <span>Bus 153 </span>
                  <span>Richtung Trappentreustraße</span>
              </div>
              <p>Zur Fahrplanauskunft empfehlen die Nutzung der MVV-App oder der MVG-App.</p>
          </div>

          <div className={`${cssPrefix}__info-box`}>
              <h5>In der nähe</h5>
              <div className={`${cssPrefix}__list grid-2`}>
                  <span>Hauptbahnhof München</span>
                  <span>Entfernung ca. 2,7 km</span>
                  <span>Hauptbahnhof München</span>
                  <span>Entfernung ca. 2,7 km</span>
                  <span>Karlsplatz (Stachus)</span>
                  <span>Entfernung ca. 3,0 km</span>
                  <span>Hauptbahnhof München</span>
                  <span>Entfernung ca. 2,7 km</span>
                  <span>Karlsplatz (Stachus)</span>
                  <span>Entfernung ca. 3,0 km</span>
                  <span>Marienplatz</span>
                  <span>Entfernung ca. 4,0 km</span>
                  <span>Olympiapark München</span>
                  <span>Entfernung ca. 1,3 km</span>
                  <span>Schloss Nymphenburg</span>
                  <span>Entfernung ca. 4,3 km</span>
                  <span>Botanischer Garten</span>
                  <span>Entfernung ca. 4,6 km</span>
                  <span>Chinesischer Turm im Englischer Garten</span>
                  <span>Entfernung ca. 3,5 km</span>
              </div>
              <p>Zur Fahrplanauskunft empfehlen die Nutzung der MVV-App oder der MVG-App.</p>
          </div>

          IN DER NÄHE









      </Content>
    </Layout>
  );
};
export default Information;
