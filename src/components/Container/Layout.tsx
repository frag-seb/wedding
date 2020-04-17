import React from "react";
import MainNavigation from "../Navigation/MainNavigation";

interface Props {
    children: any
}

const Layout: React.FC<Props> = ({children}: Props) => {
    const cssPrefix = 'Layout';

    return (
        <div className={`${cssPrefix}__main`}>
            <header className={`${cssPrefix}__header`}>
                <MainNavigation />
            </header>

            <div className={`${cssPrefix}__content`}> { children }</div>

        </div>
    )
}

export default Layout;
