import React from "react";
import MainNavigation from "../Navigation/MainNavigation";

import './Layout.css';

import Eyecatcher from "../Text/Eyecatcher";

interface Props {
    children: any
}

const Layout: React.FC<Props> = ({children}: Props) => {
    const cssPrefix = 'Layout';

    return (
        <div className={`${cssPrefix}__main`}>
            <header className={`${cssPrefix}__header`}>
                <h2>Tanja & Jochen</h2>
                <span className={`${cssPrefix}__header-text`}>
                    <Eyecatcher className={`${cssPrefix}__header-text-top`}>Just Married</Eyecatcher>
                </span>
                <MainNavigation />
            </header>

            <div className={`${cssPrefix}__content`}> { children }</div>

        </div>
    )
}

export default Layout;
