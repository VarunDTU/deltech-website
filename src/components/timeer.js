import React from 'react';
import { useState, useEffect } from 'react';

const Timer = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const deadline = "December, 31, 2022";

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };
  //{days < 10 ? "0" + days : days}
  //{hours < 10 ? "0" + hours : hours}
  //{hours < 10 ? "0" + hours : hours}
  //{seconds < 10 ? "0" + seconds : seconds}
  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-w-screen h-36 bg-transparent flex items-center justify-center px-5 py-2" x-data="beer()" x-init="start()">
    <div className="text-yellow-200">
        
        <div className="text-6xl text-center flex w-full items-center justify-center text-yellow-500 ">
            <div className="mx-1 p-2 outline outline-2 outline-black bg-white rounded-lg">
                <div className="md:w-24 w-5 md:text-5xl text-sm font-mono leading-none" x-text="days">{days < 10 ? "0" + days : days}</div>
                <div className="font-mono uppercase md:text-sm text-xs leading-none">Days</div>
            </div>
            <div className="mx-1 p-2 outline outline-2 outline-black bg-white rounded-lg">
                <div className="md:w-24 w-5 md:text-5xl text-sm font-mono leading-none" x-text="hours">{hours < 10 ? "0" + hours : hours}</div>
                <div className="font-mono uppercase md:text-sm text-xs leading-none">Hours</div>
            </div>
            <div className="mx-1 p-2 outline outline-2 outline-black bg-white rounded-lg">
                <div className="md:w-24 w-5 md:text-5xl text-sm font-mono leading-none" x-text="minutes">{minutes < 10 ?'0'+ minutes : minutes}</div>
                <div className="font-mono uppercase md:text-sm text-xs leading-none">Minutes</div>
            </div>
            <div className="mx-1 p-2 outline outline-2 outline-black bg-white rounded-lg">
                <div className="md:w-24 w-5 md:text-5xl text-sm font-mono leading-none" x-text="seconds">{seconds < 10 ? "0" + seconds : seconds}</div>
                <div className="font-mono uppercase md:text-sm text-xs leading-none">Seconds</div>
            </div>
        </div>
    </div>
</div>
  );
};

export default Timer;