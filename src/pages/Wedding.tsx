import React from "react";
import Layout from "../layout/Layout";
import Content from "../components/Container/Content";
import CountDownClock from "../components/CountDownClock/CountDownClock";

import "./Wedding.css";
import HeadlineImage from "../components/Gallery/HeadlineImage";

const Wedding: React.FC = () => {
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
      <Content>
        <h4>Wedding day</h4>
      </Content>
    </Layout>
  );
};
export default Wedding;
