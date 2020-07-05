import React from "react";

import "./Clock.css";

interface Props {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  completed?: number;
}
const Clock: React.FC<Props> = ({
  days,
  hours,
  minutes,
  seconds,
  completed,
}: Props) => {
  return (
    <div className="Clock">
      <div className="box">
        <div>{days}</div>
        <span>Days</span>
      </div>
      <div className="box">
        <div>{hours}</div>
        <span>Hours</span>
      </div>
      <div className="box">
        <div>{minutes}</div>
        <span>Mins</span>
      </div>
      <div className="box">
        <div>{seconds}</div>
        <span>Secs</span>
      </div>
    </div>
  );
};

export default Clock;
