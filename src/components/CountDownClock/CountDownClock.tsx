import React from 'react';
import Countdown from "react-countdown";
import Clock from "./Clock";
import CountDownDate from "./CountDownDate";

import './CountDownClock.css'

export interface ClockProps {
    text: string;
    date: string;
}

const CountDownClock: React.FC<ClockProps> = ({text, date}: ClockProps) => {
    const cssPrefix = 'CountDownClock';

    const renderer = (props: any) => <Clock {...props} />

    return (
        <div className={`${cssPrefix}__main`}>
            <CountDownDate {...{text, date}} />
            <Countdown date={date} renderer={renderer} />
        </div>

    );
}
export default CountDownClock;

