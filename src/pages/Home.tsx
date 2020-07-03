import React from 'react';
import CountDownClock from "../components/CountDownClock/CountDownClock";
import Layout from "../components/Container/Layout";
import Content from "../components/Container/Content";

const Home: React.FC = () => {

  return (
      <Layout>
        <CountDownClock date={'2020-10-10T16:00:00'}>
            <h2>Das Edelste an der Liebe ist das Vertrauen zueinander. <span style={{fontSize: "6px"}}>(Julius Grasse)</span></h2>
        </CountDownClock>
        <Content>
            <h4> Home </h4>
        </Content>
      </Layout>
  )
}
export default Home;
