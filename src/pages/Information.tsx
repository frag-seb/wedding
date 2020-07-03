import React from 'react';
import Layout from "../components/Container/Layout";
import Content from "../components/Container/Content";

import './Information.css';

const Information: React.FC = () => {
    const cssPrefix = 'Information'

    return (
        <Layout>
            <Content className={`${cssPrefix}__content`}>
                <h4>Informationen</h4>
            </Content>
        </Layout>
    )
}
export default Information;
