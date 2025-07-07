import { useState } from "react";

export default function StopWatch() {
  const [time, setTime] = useState({ hr: 0, min: 0, sec: 0 });
  const [status, setStatus] = useState();

  let updhr = time.hr;
  let updmin = time.min;
  let updsec = time.sec;

  const start = () => {
    updater();
    setStatus(setInterval(updater, 1000));
  };
  const stop = () => {
    clearInterval(status);
  };
  const reset = () => {
    clearInterval(status);
    setTime({ hr: 0, min: 0, sec: 0 });
  };

  const updater = () => {
    if (updsec === 60) {
      updsec = 0;
      updmin++;
    }
    if (updmin === 60) {
      updmin = 0;
      updhr++;
    }
    updsec++;
    return setTime({ hr: updhr, min: updmin, sec: updsec });
  };
  return (
    <div className=" h-50 bg-slate-300 text-center justify-center ">
      <h1 className="w-30 h-10 bg-slate-100 p-3 ml-[49%]  mb-5 rounded-lggit">
        {`${time.hr < 10 ? "0" + time.hr : time.hr}:${
          time.min < 10 ? "0" + time.min : time.min
        }:${time.sec < 10 ? "0" + time.sec : time.sec}`}
      </h1>
      <div className="space-x-8">
        <button
          onClick={start}
          className=" text-white text-sm p-1 w-16 rounded-lg bg-green-400 hover:bg-green-300 active:bg-green-400 hover:text-black click:disable "
        >
          Start
        </button>
        <button
          onClick={stop}
          className=" text-white text-sm p-1 w-16 rounded-lg bg-red-400 hover:bg-red-300 active:bg-red-400 hover:text-black "
        >
          Stop
        </button>
        <button
          onClick={reset}
          className=" text-white text-sm p-1 w-16 rounded-lg bg-gray-500 hover:bg-gray-400 active:bg-gray-500 hover:text-black "
        >
          Reset
        </button>
      </div>
    </div>
  );
}
