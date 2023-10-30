import { useState, useEffect } from "react";

export const TimerOfCurrTask = (props) => {
  const { playing } = props;
  const [time, setTime] = useState(0);

  useEffect(() => {
    // Side effect code here
    // This code will run after the first render and after every update
    // You can perform data fetching, subscriptions, or manually changing the DOM in here
    // Cleanup function (optional)
    let currTime;
    if (playing) {
      const startDate = Date.now();

      currTime = setInterval(() => {
        setTime(Date.now() - startDate);
      }, 1000)
    } else {
      clearInterval(currTime);
    }
    return () => {
      // Code to run before the component is unmounted or before the effect runs again
      // This is where you can clean up any subscriptions or other resources created by the effect
      clearInterval(currTime);
    };
  }, [playing]);

  const formatTime = (milliseconds) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    return formattedTime;
  }


  return (
    <>{formatTime(time)}</>
  )
};
