import React, { useEffect, useState } from "react";
import "./index.css";

interface CountdownProps {
  day: number;   // Day of the month (1-31)
  month: number; // Month (1-12)
  year: number;  // Year (e.g., 2024)
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownComponent: React.FC<CountdownProps> = ({ day, month, year }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [isBirthday, setIsBirthday] = useState<boolean>(false);

  useEffect(() => {
    const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      dayMs = hour * 24;

    const today = new Date();
    let targetYear = year;

    // Adjust the birthday to the next occurrence if it has passed this year
    let birthday = new Date(targetYear, month - 1, day); // month-1 because JavaScript months are 0-indexed

    if (today > birthday) {
      targetYear++;
      birthday = new Date(targetYear, month - 1, day);
    }

    const countDownDate = birthday.getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      if (distance < 0) {
        setIsBirthday(true);
        clearInterval(intervalId);
      } else {
        setTimeLeft({
          days: Math.floor(distance / dayMs),
          hours: Math.floor((distance % dayMs) / hour),
          minutes: Math.floor((distance % hour) / minute),
          seconds: Math.floor((distance % minute) / second),
        });
      }
    };

    const intervalId = setInterval(updateCountdown, 1000);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [day, month, year]);

  return (
    <div className="big" >
      <div className="countdown-container">
        <h1 className="countdown-h1" id="headline">{isBirthday ? "It's my birthday!" : "Countdown to my birthday"}</h1>
        {!isBirthday && (
          <div id="countdown">
            <ul>
              <li className="countdown-li" >
                <span className="countdown-span" id="days">{timeLeft.days}</span>days
              </li>
              <li className="countdown-li" >
                <span className="countdown-span" id="hours">{timeLeft.hours}</span>Hours
              </li>
              <li className="countdown-li" >
                <span className="countdown-span" id="minutes">{timeLeft.minutes}</span>Minutes
              </li>
              <li className="countdown-li" >
                <span className="countdown-span" id="seconds">{timeLeft.seconds}</span>Seconds
              </li>
            </ul>
          </div>
        )}
        {isBirthday && (
          <div id="content" className="countdown-emoji">
            <span className="countdown-emoji-span" role="img" aria-label="party">🥳</span>
            <span className="countdown-emoji-span" role="img" aria-label="celebrate">🎉</span>
            <span className="countdown-emoji-span" role="img" aria-label="cake">🎂</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default CountdownComponent;
