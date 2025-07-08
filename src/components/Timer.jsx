import { useState, useRef } from "react";

export default function StopWatch() {
  const [time, setTime] = useState({ hr: 0, min: 0, sec: 0 });
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState([]);

  const intervalRef = useRef(null);

  const start = () => {
    if (!isRunning) {
      intervalRef.current = setInterval(updateTime, 1000);
      setIsRunning(true);
    }
  };

  const stop = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
  };

  const reset = () => {
    clearInterval(intervalRef.current);
    setTime({ hr: 0, min: 0, sec: 0 });
    setIsRunning(false);
    setLaps([]); // clear laps on reset
  };

  const updateTime = () => {
    setTime((prev) => {
      let { hr, min, sec } = prev;
      sec++;
      if (sec === 60) {
        sec = 0;
        min++;
      }
      if (min === 60) {
        min = 0;
        hr++;
      }
      return { hr, min, sec };
    });
  };

  const printTime = () => {
    const formattedTime = `${time.hr.toString().padStart(2, "0")}:${time.min
      .toString()
      .padStart(2, "0")}:${time.sec.toString().padStart(2, "0")}`;
    setLaps((prevLaps) => [...prevLaps, formattedTime]);
  };

  return (
    <div className="h-50 bg-slate-300 text-center justify-center p-4">
      <h1 className="w-40 h-10 bg-slate-100 p-3 mx-auto mb-5 rounded-lg text-xl font-mono">
        {`${time.hr.toString().padStart(2, "0")}:${time.min
          .toString()
          .padStart(2, "0")}:${time.sec.toString().padStart(2, "0")}`}
      </h1>

      <div className="space-x-8 mb-4">
        <button
          onClick={start}
          disabled={isRunning}
          className={`text-white text-sm p-1 w-16 rounded-lg ${
            isRunning ? "bg-green-200" : "bg-green-400 hover:bg-green-300"
          }`}
        >
          Start
        </button>

        <button
          onClick={stop}
          disabled={!isRunning}
          className={`text-white text-sm p-1 w-16 rounded-lg ${
            !isRunning ? "bg-red-200" : "bg-red-400 hover:bg-red-300"
          }`}
        >
          Stop
        </button>

        <button
          onClick={reset}
          disabled={time.hr === 0 && time.min === 0 && time.sec === 0}
          className={`text-white text-sm p-1 w-16 rounded-lg ${
            time.hr === 0 && time.min === 0 && time.sec === 0
              ? "bg-gray-300"
              : "bg-gray-500 hover:bg-gray-400"
          }`}
        >
          Reset
        </button>

        <button
          onClick={printTime}
          className="text-white text-sm p-1 w-16 rounded-lg bg-blue-500 hover:bg-blue-400"
        >
          Lapse
        </button>
      </div>

      <div className="text-left w-60 mx-auto bg-slate-100 p-3 rounded-lg mt-10 ">
        <h2 className="font-semibold underline mb-2">Lapse Times:</h2>
        {laps.length === 0 ? (
          <p className="text-gray-500">No laps recorded.</p>
        ) : (
          <ul className="list-decimal pl-5">
            {laps.map((lap, index) => (
              <li key={index}>{lap}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
