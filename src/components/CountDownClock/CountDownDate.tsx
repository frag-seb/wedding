import React from "react";
import {ClockProps} from "./CountDownClock";

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


const CountDownDate: React.FC<ClockProps> = ({ text, date }: ClockProps) => {
    const cssPrefix = 'CountDownDate';

    return (
        <div className={`${cssPrefix}__main`}>
            <h2>{ text }</h2>
            <span className={`${cssPrefix}__date`}>--- { formatDate(new Date(date)) } ---</span>
        </div>
    );
}

export default CountDownDate;
