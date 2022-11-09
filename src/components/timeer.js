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
    <div className="min-w-screen h-96a bg-yellow-500 flex items-center justify-center px-5 py-5" x-data="beer()" x-init="start()">
    <div className="text-yellow-100">
        <h1 className="text-3xl text-center mb-3 font-extralight">EVENT</h1>
        <div className="text-6xl text-center flex w-full items-center justify-center">
            <div className="text-2xl mr-1 font-extralight">in</div>
            <div className="w-24 mx-1 p-2 bg-white text-yellow-500 rounded-lg">
                <div className="font-mono leading-none" x-text="days">{days < 10 ? "0" + days : days}</div>
                <div className="font-mono uppercase text-sm leading-none">Days</div>
            </div>
            <div className="w-24 mx-1 p-2 bg-white text-yellow-500 rounded-lg">
                <div className="font-mono leading-none" x-text="hours">{hours < 10 ? "0" + hours : hours}</div>
                <div className="font-mono uppercase text-sm leading-none">Hours</div>
            </div>
            <div className="w-24 mx-1 p-2 bg-white text-yellow-500 rounded-lg">
                <div className="font-mono leading-none" x-text="minutes">{minutes < 10 ?'0'+ minutes : minutes}</div>
                <div className="font-mono uppercase text-sm leading-none">Minutes</div>
            </div>
            <div className="text-2xl mx-1 font-extralight">and</div>
            <div className="w-24 mx-1 p-2 bg-white text-yellow-500 rounded-lg">
                <div className="font-mono leading-none" x-text="seconds">{seconds < 10 ? "0" + seconds : seconds}</div>
                <div className="font-mono uppercase text-sm leading-none">Seconds</div>
            </div>
        </div>
    </div>
</div>
  );
};

export default Timer;