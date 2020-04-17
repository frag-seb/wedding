import React from "react";

import './Content.css'

interface Props {
    children: any
}

const Content: React.FC<Props> = ({children}: Props) => {
    const cssPrefix = 'Content'
    return (
        <div className={`${cssPrefix}__main`}>
            {children}
        </div>
    )
}

export default Content;
