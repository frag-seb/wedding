import React from 'react';
import Layout from "../components/Container/Layout";
import Content from "../components/Container/Content";

import './Hotel.css';

const Hotel: React.FC = () => {
    const cssPrefix = 'Hotel';

    return (
      <Layout>
        <Content className={`${cssPrefix}__content`}>
            <h4>Hotel</h4>
        </Content>
      </Layout>
    )
}
export default Hotel;
