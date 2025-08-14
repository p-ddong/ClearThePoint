import { useState } from "react";
import type { PointProps } from "@/types/types";

const Point = ({ onClick, number, time, z, x, y }: PointProps) => {
  const [visible, setVisible] = useState(true);

  const fade = () => {
    setVisible(false);
  };

  return (
    <div
      onClick={() => {
        onClick?.();
        fade();
      }}
      className={`cursor-target absolute border-[2px] w-10 h-10 flex items-center justify-center bg-accent text-accent-foreground rounded-full transition-opacity ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      style={{ left: x, top: y, zIndex: z, transitionDuration: `${time}ms` }}
    >
      {number}
    </div>
  );
};

export default Point;
