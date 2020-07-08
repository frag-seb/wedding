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
        <h4>Informationen</h4>
      </Content>
    </Layout>
  );
};
export default Information;
