import { Timer } from "lucide-react";
import { useRef, useState } from "react";
import { duration } from "duration-pretty";

const App = () => {
  const timerRef = useRef<number | null>(null);
  const [timer, setTimer] = useState<number>(0);
  const [isStart, setIsStart] = useState<boolean>(false);

  // starts a timer with 1 second interval
  const startTimer = () => {
    if (isStart) return;
    timerRef.current = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 999);
    setIsStart(true);
  };

  // Stops timer
  const pauseTimer = () => {
    if (timerRef.current !== null) {
      clearInterval(timerRef.current);
    }
    setIsStart(false);
  };

  const formatTime = duration(timer, "seconds").format("HH:mm:ss");

  return (
    <div className="flex min-w-screen min-h-screen items-center justify-center bg-neutral-200">
      <div className="flex flex-col items-center gap-8 p-8 rounded shadow-lg bg-white">
        {/* Stop watch icon */}
        <Timer size={48} />

        {/* Formatted time */}
        <div className="text-5xl sm:text-6xl">{formatTime}</div>

        {/* Button list */}
        <div className="flex gap-4 sm:gap-6">
          <button className="btn from-indigo-700 to-indigo-600" onClick={() => startTimer()}>Start</button>
          <button className="btn from-indigo-600 to-indigo-600"
            onClick={() => {
              pauseTimer();
            }}
          >
            Stop
          </button>
          <button className="btn from-indigo-600 to-indigo-700"
            onClick={() => {
              pauseTimer();
              setTimer(0);
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};
export default App;
