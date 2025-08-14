import { ModeToggle } from "@/components/mode-toggle";
import Timer from "@/components/Timer";
import type { GameInput } from "@/types/types";
import { useRef, useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import PlayGround from "@/components/PlayGround";
import HowToPlay from "@/components/HowToPlay";

const MainPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<GameInput>();
  const playgroundRef = useRef<HTMLDivElement>(null);
  const [timerState, setTimerState] = useState<"start" | "pause" | "restart">(
    "pause"
  );
  const [gameStatus, setGameStatus] = useState<
    "idle" | "running" | "win" | "lose"
  >("idle");
  const [point, setPoint] = useState<number>(0);
  const [autoPlay, setAutoPlay] = useState<boolean>(false);
  const [isStart, setIsStart] = useState<boolean>(false);
  const [currentNumber, setCurrentNumber] = useState<number>(0);
  const [difficulty, setDifficulty] = useState<"easy" | "normal" | "hard">(
    "normal"
  );

  const onSubmit: SubmitHandler<GameInput> = (data) => {
    setTimerState("start");
    setPoint(data.point);
    setCurrentNumber(1);
    setGameStatus("running");
    setIsStart(true);
  };

  return (
    <div className="mainpage p-10 w-dvw h-dvh uppercase tracking-widest cursor-none">
      <div className="containter w-full h-full flex">
        <ModeToggle />

        <div className="w-1/5 mr-1 p-1 flex flex-col gap-1">
          <h2 className="text-4xl mb-7">Clear The Points</h2>
          <div className="">
            <form className="flex flex-col gap-3">
                <fieldset disabled={isStart} className="flex flex-col gap-3">

  </fieldset>
              <div>
                <label className="block mb-1">Difficulty:</label>
                <div className="flex flex-col gap-1">
                  <label className="flex items-center w-fit gap-2 cursor-none cursor-target">
                    <input
                      type="radio"
                      value="easy"
                      checked={difficulty === "easy"}
                      onChange={() => setDifficulty("easy")}
                      disabled={isStart}
                    />
                    Easy
                  </label>

                  <label className="flex items-center w-fit gap-2 cursor-none cursor-target">
                    <input
                      type="radio"
                      value="normal"
                      checked={difficulty === "normal"}
                      onChange={() => setDifficulty("normal")}
                      disabled={isStart}
                    />
                    Normal
                  </label>

                  <label className="flex items-center w-fit gap-2 cursor-none cursor-target">
                    <input
                      type="radio"
                      value="hard"
                      checked={difficulty === "hard"}
                      onChange={() => setDifficulty("hard")}
                      disabled={isStart}
                    />
                    Hard
                  </label>
                </div>
              </div>

              <div>
                <label htmlFor="">Point: </label>
                <input
                  className="cursor-none cursor-target border-b-[1px]"
                  type="number"
                  {...register("point", { required: true, min: 2, max: 9999 })}
                  disabled={isStart}
                />
                {errors.point && (
                  <div className="text-red-600">
                    Enter a number from 2 - 9999
                  </div>
                )}
              </div>

              <div>
                {!isStart && (
                  <button
                    onClick={handleSubmit(onSubmit)}
                    className="bg-none border-[1px] p-2 pt-0.5 pb-0.5 cursor-none cursor-target"
                  >
                    Start
                  </button>
                )}
                {isStart && (
                  <div className="flex gap-1">
                    <button
                      type="button"
                      // onClick={() => setRestart(false)}
                      className="bg-none border-[1px] p-2 pt-0.5 pb-0.5 cursor-none cursor-target"
                    >
                      Restart
                    </button>
                    <button
                      type="button"
                      onClick={() => setAutoPlay(!autoPlay)}
                      className={`bg-none border-[1px] p-2 pt-0.5 pb-0.5 cursor-none cursor-target ${
                        autoPlay && "bg-foreground text-accent"
                      }`}
                    >
                      AutoPlay
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setIsStart(false);
                        setTimerState("restart");
                        setAutoPlay(false);
                        setGameStatus("idle");
                      }}
                      className="bg-none border-[1px] p-2 pt-0.5 pb-0.5 cursor-none cursor-target"
                    >
                      Clear
                    </button>
                  </div>
                )}
              </div>
            </form>
          </div>
          <Timer
            timerState={timerState}
            setTimerState={setTimerState}
            isStart={isStart}
          />
          <div className="play_time flex flex-col justify-center items-center pr-8 mt-5">
            <div>Next number:</div>
            <div className="text-7xl">{currentNumber}</div>
          </div>
          <HowToPlay />
        </div>

        <div ref={playgroundRef} className="w-4/5 ml-1 border-[1px]">
          <PlayGround
            difficulty={difficulty}
            playgroundRef={playgroundRef}
            isStart={isStart}
            gameStatus={gameStatus}
            setGameStatus={setGameStatus}
            currentPoint={currentNumber}
            setCurrentPoint={setCurrentNumber}
            point={point}
            setIsStart={setIsStart}
          />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
