import React from "react";
import Layout from "../layout/Layout";
import Content from "../components/Container/Content";

import "./Hotel.css";
import HeadlineImage from "../components/Gallery/HeadlineImage";

const Hotel: React.FC = () => {
  const cssPrefix = "Hotel";

  return (
    <Layout>
      <HeadlineImage />
      <Content className={`${cssPrefix}__content`}>
        <h4>Hotel</h4>
      </Content>
    </Layout>
  );
};
export default Hotel;
