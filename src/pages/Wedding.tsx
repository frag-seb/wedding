import React from "react";
import Layout from "../layout/Layout";
import Content from "../components/Container/Content";
import CountDownClock from "../components/CountDownClock/CountDownClock";

import "./Wedding.css";
import HeadlineImage from "../components/Gallery/HeadlineImage";

const Wedding: React.FC = () => {
  const cssPrefix = "Wedding";
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
        <h3>Wedding day</h3>
        <div className={`${cssPrefix}__image`}>
          <img src="/img/wedding_day.jpeg" />
        </div>
      </Content>
    </Layout>
  );
};
export default Wedding;
