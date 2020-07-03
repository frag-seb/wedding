import React from 'react';
import Layout from "../components/Container/Layout";
import Content from "../components/Container/Content";
import CountDownClock from "../components/CountDownClock/CountDownClock";

import './Wedding.css';

const Wedding: React.FC = () => {

  return (
      <Layout>
          <CountDownClock date={'2020-10-10T16:00:00'}>
              <h2>Das Edelste an der Liebe ist das Vertrauen zueinander. <span style={{fontSize: "0.8rem"}}>* ( Julius Grosse )</span></h2>
          </CountDownClock>
          <Content>
            <h4>Wedding day</h4>
          </Content>
    </Layout>
  )
}
export default Wedding;
