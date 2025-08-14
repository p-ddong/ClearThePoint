import React, { useEffect, useRef, useState } from "react";

interface Props {
  isStart: boolean;
  timerState: "start" | "pause" | "restart";
  setTimerState: React.Dispatch<
    React.SetStateAction<"start" | "pause" | "restart">
  >;
}

const Timer = ({ timerState, isStart }: Props) => {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number>(0);

  useEffect(() => {
    if (isStart && timerState === "start") {
      startTimeRef.current = Date.now();
      intervalRef.current = setInterval(() => {
        setTimer(Date.now() - startTimeRef.current);
      }, 10);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isStart, timerState]);

  return (
    <div className="flex flex-col justify-center items-center pr-8">
      <div>Time:</div>
      <div className="flex items-end">
        <div className="text-7xl">{(timer / 1000).toFixed(2)}</div>
        <div className="text-2xl">s</div>
      </div>
    </div>
  );
};

export default Timer;
