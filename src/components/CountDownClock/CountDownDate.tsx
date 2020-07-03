import React from "react";
import {ClockProps} from "./CountDownClock";
import Eyecatcher from "../Text/Eyecatcher";

import './CountDownDate.css';

const formatDate = (date: Date) => {
    const options = {
        weekday: "short",
        year: "numeric",
        month: "long",
        day: "2-digit"
    };

    return  date.toLocaleDateString( "de-DE", options);
};


const CountDownDate: React.FC<ClockProps> = ({ children, date }: ClockProps) => {
    const cssPrefix = 'CountDownDate';

    return (
        <div className={`${cssPrefix}__main`}>
            { children }
            <span className={`${cssPrefix}__date`}> <Eyecatcher className={`${cssPrefix}__top`}>{ formatDate(new Date(date)) }</Eyecatcher> </span>
        </div>
    );
}

export default CountDownDate;
