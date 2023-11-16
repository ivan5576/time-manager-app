import { useState, useEffect } from "react";

export const TimerOfCurrTask = (props) => {
  const { playing } = props;
  const [time, setTime] = useState(0);

  useEffect(() => {
    let currTime;
    if (playing) {
      const startDate = Date.now();

      currTime = setInterval(() => {
        setTime(Date.now() - startDate);
      }, 300)
    } else {
      clearInterval(currTime);
    }
    return () => {
      clearInterval(currTime);
    };
  }, [playing]);

  useEffect(() => {
    // Log the timer value when playing becomes false
    if (!playing) {

      const currentDate = new Date(Date.now());

      // Get UTC time as a string
      const utcTimeString = currentDate.toISOString();

      // Extract the date and time components
      const utcDate = utcTimeString.substring(0, 10);
      const utcTime = utcTimeString.substring(11, 19);

      // Format the date and time
      const formattedDate = `${utcDate}, ${utcTime} UTC`;

      console.log(formattedDate);
    }
  }, [playing, time]);

  const formatTime = (milliseconds) => {

    const totalSeconds = Math.floor(milliseconds / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    return formattedTime;
  }

  return (
    <>
      {formatTime(time)}
    </>
  )
};
