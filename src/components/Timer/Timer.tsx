import React, { useEffect } from "react";

interface Props {
  isStart: boolean;
  timer: number;
  setTimer: React.Dispatch<React.SetStateAction<number>>;
}

const Timer = ({ isStart, timer, setTimer }: Props) => {
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isStart) {
      const startTime = Date.now() - timer;
      interval = setInterval(() => {
        setTimer(Date.now() - startTime);
      }, 10);
    }
    return () => clearInterval(interval);
  }, [isStart]);

  return (
    <div className="play_time flex flex-col justify-center items-center pr-4">
      <div>Time:</div>
      <div className="flex items-end">
        <div className="text-7xl">{(timer / 1000).toFixed(2)}</div>
        <div className="text-2xl">s</div>
      </div>
    </div>
  );
};

export default Timer;
