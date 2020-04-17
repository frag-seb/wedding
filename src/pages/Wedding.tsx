import React from 'react';
import Layout from "../components/Container/Layout";
import Content from "../components/Container/Content";
import CountDownClock from "../components/CountDownClock/CountDownClock";

function Wedding() {
  return (
      <Layout>
          <CountDownClock text="Tanja & Jochen" date={'2020-10-10T16:00:00'} />
          <Content>
            <h4>Wedding day</h4>
          </Content>
    </Layout>
  )
}
export default Wedding;
