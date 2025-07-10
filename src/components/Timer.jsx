import { useState, useEffect, useMemo } from "react";

export default function StopWatch() {
  const [time, setTime] = useState({ hr: "00", min: "00", sec: "00" });
  const [id, setId] = useState();
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState([]);

  let updhr = time.hr;
  let updmin = time.min;
  let updsec = time.sec;

  const start = () => {
    if (!isRunning) {
      updater();
      setId(setInterval(updater, 1000));
    }
    setIsRunning(true);
  };
  const stop = () => {
    clearInterval(id);
    setIsRunning(false);
  };
  const reset = () => {
    clearInterval(id);
    setTime({ hr: "00", min: "00", sec: "00" });
    setIsRunning(false);
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
    return setTime({
      hr: updhr.toString().padStart(2, "0"),
      min: updmin.toString().padStart(2, "0"),
      sec: updsec.toString().padStart(2, "0"),
    });
  };

  function printTime() {
    setLaps([
      ...laps,
      {
        hr: time.hr,
        min: time.min,
        sec: time.sec,
      },
    ]);
    console.log(laps);
  }
  const memoizedLapDisplay = useMemo(() => {
    return (
      <div className="card text-xl text-medium">
        {console.log("I amd rendered again")}
        <ol>
          {laps.length > 0 ? (
            laps.map((item, i) => (
              <li key={i}>
                {i}) {`${item.hr}:${item.min}:${item.sec}`}
              </li>
            ))
          ) : (
            <h2>No Record Yet.</h2>
          )}
        </ol>
      </div>
    );
  }, [laps]);

  return (
    <div className="card ">
      <h1 className="card">{`${time.hr}:${time.min}:${time.sec}`}</h1>

      <div className="flex space-x-2">
        <timerbtn
          onClick={start}
          disabled={isRunning}
          className={`timerbtn ${isRunning ? "bg-blue-100" : "bg-blue-500"}   `}
        >
          Start
        </timerbtn>
        <timerbtn
          onClick={stop}
          disabled={!isRunning}
          className={`timerbtn ${isRunning ? "bg-red-400" : "bg-red-200"}   `}
        >
          Stop
        </timerbtn>
        <timerbtn
          onClick={reset}
          disabled={time.hr === "00" && time.min === "00" && time.sec === "00"}
          className={` timebtn ${
            (time.hr === "00" && time.min === "00",
            time.sec === "00" ? "bg-gray-200" : "bg-gray-400")
          }   `}
        >
          Reset
        </timerbtn>
        <timerbtn
          onClick={printTime}
          disabled={time.hr === "00" && time.min === "00" && time.sec === "00"}
          className={` timerbtn ${
            (time.hr === "00" && time.min === "00",
            time.sec === "00" ? "bg-sky-200" : "bg-sky-400")
          }   `}
        >
          Laspse
        </timerbtn>
      </div>
      {memoizedLapDisplay}
    </div>
  );
}
