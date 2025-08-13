import type { PlayGroundProps, PointProps } from "@/types/types";
import Point from "../Point";
import { useEffect, useState } from "react";

const PlayGround = ({
  isStart,
  isWin,
  point,
  currentPoint,
  setCurrentPoint,
  setIsWin,
  playgroundRef,
}: PlayGroundProps) => {
  console.log(isWin,currentPoint,setCurrentPoint,setIsWin)
  const [pointsData, setPointsData] = useState<PointProps[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

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
          time: 0,
          z: 9999 - i,
          x: randomX,
          y: randomY,
        });
      }
      setPointsData(newPoints);
    } else {
      setPointsData([]);
    }
  }, [isStart, point, dimensions]);

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
        />
      ))}
    </div>
  );
};

export default PlayGround;
