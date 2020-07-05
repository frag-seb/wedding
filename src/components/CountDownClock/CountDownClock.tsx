import React from "react";
import Countdown from "react-countdown";
import Clock from "./Clock";
import CountDownDate from "./CountDownDate";

import "./CountDownClock.css";

export interface ClockProps {
  children: any;
  date: string;
}

const CountDownClock: React.FC<ClockProps> = ({
  children,
  date,
}: ClockProps) => {
  const cssPrefix = "CountDownClock";

  return (
    <div className={`${cssPrefix}__main`}>
      <CountDownDate {...{ date }}>{children}</CountDownDate>
      <Countdown date={date} renderer={(props: any) => <Clock {...props} />} />
    </div>
  );
};
export default CountDownClock;
