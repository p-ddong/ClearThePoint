import { ModeToggle } from "@/components/mode-toggle";
import Timer from "@/components/Timer";
import type { GameInput } from "@/types/types";
import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import chiikawa from "@/assets/chiikawa.gif";

const MainPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<GameInput>();

  const [timer, setTimer] = useState<number>(0);
//   const [isWin, setIsWin] = useState<boolean>(false);
  const [autoPlay, setAutoPlay] = useState<boolean>(false);
  const [isStart, setIsStart] = useState<boolean>(false);
  const [currentNumber, setCurrentNumber] = useState<number>(0);
  const [difficulty, setDifficulty] = useState<"easy" | "normal" | "hard">(
    "normal"
  );

  const onSubmit: SubmitHandler<GameInput> = (data) => {
    console.log(currentNumber)
    console.log(data)
    setIsStart(true);
    setCurrentNumber(1);
  };

  return (
    <div className="mainpage p-10 w-dvw h-dvh uppercase tracking-widest cursor-none">
      <div className="containter w-full h-full flex">
        <ModeToggle />

        <div className="w-1/5 mr-1 p-1 flex flex-col gap-1">
          <h2 className="text-4xl mb-7">Clear The Points</h2>
          <div className="">
            <form className="flex flex-col gap-3">
              <div>
                <label className="block mb-1">Difficulty:</label>
                <div className="flex flex-col gap-1">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      value="easy"
                      checked={difficulty === "easy"}
                      onChange={() => setDifficulty("easy")}
                    />
                    Easy
                  </label>

                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      value="normal"
                      checked={difficulty === "normal"}
                      onChange={() => setDifficulty("normal")}
                    />
                    Normal
                  </label>

                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      value="hard"
                      checked={difficulty === "hard"}
                      onChange={() => setDifficulty("hard")}
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
                      // onClick={() => setIsStart(false)}
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
                        setIsStart(false), setTimer(0);
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
          <Timer timer={timer} setTimer={setTimer} isStart={isStart} />

          <img className="mt-auto" src={chiikawa} alt="" />
        </div>
        <div className="w-4/5 ml-1 border-[1px]"></div>
      </div>
    </div>
  );
};

export default MainPage;
