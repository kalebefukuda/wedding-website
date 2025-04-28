"use client";
import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    months: 10,
    days: 10,
    hours: 10,
    minutes: 10,
  });

  // In a real implementation, we would calculate the actual time remaining
  // useEffect(() => {
  //   const targetDate = new Date("2024-06-29T00:00:00");
  //
  //   const interval = setInterval(() => {
  //     const now = new Date();
  //     const difference = targetDate.getTime() - now.getTime();
  //
  //     const months = Math.floor(difference / (1000 * 60 * 60 * 24 * 30));
  //     const days = Math.floor((difference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
  //     const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  //     const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  //
  //     setTimeLeft({ months, days, hours, minutes });
  //   }, 1000);
  //
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <section className="mt-28 ml-4 max-w-full w-[667px] max-md:mt-10">
      <div className="flex gap-5 max-md:flex-col">
        <div className="w-3/12 max-md:ml-0 max-md:w-full">
          <div className="grow text-black whitespace-nowrap max-md:mt-10">
            <div className="text-8xl max-md:mr-1.5 max-md:text-4xl">
              {timeLeft.months}
            </div>
            <div className="mt-16 text-2xl max-md:mt-10">MESES</div>
          </div>
        </div>
        <div className="ml-5 w-3/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow text-black whitespace-nowrap max-md:mt-10">
            <div className="text-8xl max-md:text-4xl">{timeLeft.days}</div>
            <div className="self-center mt-16 text-2xl max-md:mt-10">DIA</div>
          </div>
        </div>
        <div className="ml-5 w-3/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow text-black whitespace-nowrap max-md:mt-10">
            <div className="self-start text-8xl max-md:text-4xl">
              {timeLeft.hours}
            </div>
            <div className="mt-16 text-2xl max-md:mt-10">HORAS</div>
          </div>
        </div>
        <div className="ml-5 w-3/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow text-black whitespace-nowrap max-md:mt-10">
            <div className="self-start text-8xl max-md:text-4xl">
              {timeLeft.minutes}
            </div>
            <div className="mt-16 text-2xl max-md:mt-10">MINUTOS</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountdownTimer;
