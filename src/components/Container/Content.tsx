import React from "react";

import './Content.css'

interface Props {
    children: any
    className?: string
}

const Content: React.FC<Props> = ({children, className}: Props) => {
    const cssPrefix = 'Content'
    return (
        <div className={`${cssPrefix}__main ${className}`}>
            {children}
        </div>
    )
}

export default Content;
