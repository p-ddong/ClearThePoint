export type GameInput = {
  point: number;
};

export interface PointProps {
  number: number;
  time: number;
  z: number;
  x: number;
  y: number;
  onClick?: () => void;
}

export interface PlayGroundProps {
  difficulty: "easy" | "normal" | "hard";
  setIsStart: React.Dispatch<React.SetStateAction<boolean>>;
  playgroundRef: React.RefObject<HTMLDivElement | null>;
  isStart: boolean;
  gameStatus: "idle" | "running" | "win" | "lose";
  setGameStatus: React.Dispatch<
    React.SetStateAction<"idle" | "running" | "win" | "lose">
  >;
  point: number;
  currentPoint: number;
  setCurrentPoint: React.Dispatch<React.SetStateAction<number>>;
}
