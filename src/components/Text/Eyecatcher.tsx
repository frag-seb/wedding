import React from "react";

import './Eyecatcher.css';

interface Props {
    children: any;
    className?: string;
}

const Eyecatcher: React.FC<Props> = ({ children, className }: Props) => {
    const cssPrefix = 'Eyecatcher';

    return (
        <span className={`${cssPrefix}__text`}>
            <span className={`${className}`}> { children } </span>
        </span>
    );
}

export default Eyecatcher;
