export type GameInput = {
  point: number;
};
export interface PointProps {
  number: number;
  time: number;
  z: number;
  x: number;
  y: number;
}
export interface PlayGroundProps {
  playgroundRef: React.RefObject<HTMLDivElement | null>;
  isStart: boolean;
  isWin: boolean;
  setIsWin: React.Dispatch<React.SetStateAction<boolean>>;
  point: number;
  currentPoint: number;
  setCurrentPoint: React.Dispatch<React.SetStateAction<number>>;
}
