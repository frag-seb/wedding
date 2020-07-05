import React from "react";
import Layout from "../layout/Layout";
import Content from "../components/Container/Content";

import "./Information.css";
import HeadlineImage from "../components/Gallery/HeadlineImage";

const Information: React.FC = () => {
  const cssPrefix = "Information";

  return (
    <Layout>
      <HeadlineImage />
      <Content className={`${cssPrefix}__content`}>
        <h4>Informationen</h4>
      </Content>
    </Layout>
  );
};
export default Information;
