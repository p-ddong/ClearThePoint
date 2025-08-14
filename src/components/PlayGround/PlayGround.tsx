import type { PlayGroundProps, PointProps } from "@/types/types";
import Point from "../Point";
import { useEffect, useRef, useState } from "react";

const PlayGround = ({
  difficulty,
  setIsStart,
  isStart,
  gameStatus,
  point,
  currentPoint,
  setCurrentPoint,
  setGameStatus,
  playgroundRef,
}: PlayGroundProps) => {
  const fadeTimeoutRef = useRef<NodeJS.Timeout | null>(null); 
  const nextPointTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [pointsData, setPointsData] = useState<PointProps[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const winNumber = point;

  useEffect(() => {
    if (playgroundRef.current) {
      const rect = playgroundRef.current.getBoundingClientRect();
      setDimensions({ width: rect.width, height: rect.height });
    }
  }, []);

  useEffect(() => {
    if (isStart && dimensions.width && dimensions.height) {
      const newPoints: PointProps[] = [];
      for (let i = 1; i <= point; i++) {
        const randomX = Math.floor(Math.random() * (dimensions.width - 40));
        const randomY = Math.floor(Math.random() * (dimensions.height - 40));
        newPoints.push({
          number: i,
          time:
            difficulty === "easy" ? 3000 : difficulty === "hard" ? 1500 : 3000, // thời gian fade
          z: 9999 - i,
          x: randomX,
          y: randomY,
        });
      }
      setPointsData(newPoints);
      setCurrentPoint(1);
    } else {
      setPointsData([]);
    }
  }, [isStart, point, dimensions]);

  const loseGame = () => {
    setGameStatus("lose");
    setCurrentPoint(1);
    setIsStart(false);
    setPointsData([]);
  };

  const PointClicking = (key: number, time: number) => {
    if (key == currentPoint) {
      setCurrentPoint((prev) => prev + 1);
      const newPoints = pointsData.filter((p) => p.number !== key);
      if (fadeTimeoutRef.current) clearTimeout(fadeTimeoutRef.current);
      if (nextPointTimeoutRef.current) clearTimeout(nextPointTimeoutRef.current);

      if (key == winNumber) {
        fadeTimeoutRef.current = setTimeout(() => {
          setGameStatus("win");
          setCurrentPoint(1);
          setIsStart(false);
          setPointsData([]);
        }, time);

      } else {
        fadeTimeoutRef.current = setTimeout(() => {
          setPointsData(newPoints);
        }, time);
        if (difficulty !== "easy") {
          const limitTime = difficulty === "normal" ? 3000 : 1500;
          nextPointTimeoutRef.current = setTimeout(() => {
            loseGame();
          }, limitTime);
        }
      }
    } else {
      if (fadeTimeoutRef.current) clearTimeout(fadeTimeoutRef.current);
      if (nextPointTimeoutRef.current) clearTimeout(nextPointTimeoutRef.current);
      loseGame();
    }
  };

  return (
    <div className="relative w-full h-full">
      {pointsData.map((p) => (
        <Point
          key={p.number}
          number={p.number}
          time={p.time}
          z={p.z}
          x={p.x}
          y={p.y}
          onClick={() => PointClicking(p.number, p.time)}
        />
      ))}
      {gameStatus === "lose" && (
        <div className="w-full h-full flex items-center justify-center text-red-600 text-3xl">
          You lost ...
        </div>
      )}
      {gameStatus === "win" && (
        <div className="w-full h-full flex items-center justify-center text-3xl text-green-600">
          all cleared you win !!!!!
        </div>
      )}
    </div>
  );
};

export default PlayGround;
