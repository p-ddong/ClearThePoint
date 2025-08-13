import type { PointProps } from "@/types/types";
const Point = ({ number, time, z, x, y }: PointProps) => {
  console.log(time)
  return (
    <div
      className={`cursor-target absolute border-[2px] w-10 h-10 flex items-center justify-center bg-accent text-accent-foreground rounded-full`}
      style={{ left: x, top: y, zIndex: z }}
    >
      {number}
    </div>
  );
};

export default Point;
