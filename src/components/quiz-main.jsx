import { useSelector } from "react-redux";
import Timer from "./timer";

function QuizMain() {
  const quizMainHasStarted = useSelector((state) => state.quizMainHasStarted);
  return (
    <>
      {quizMainHasStarted && (
        <div className="quiz-select-category w-4/5 md:w-3/5 lg:w-1/2 bg-gray-300 p-4 rounded-lg flex flex-col justify-between ">
          <div className="border-b-2 border-zinc-400/20 m-4 pb-2 flex justify-between items-center">
            <span className="block font-robotoMono md:text-lg lg:text-xl text-red-500">
              Quiz In Progress...
            </span>
            <div className="timer-ctn flex justify-center items-center">
              <span className="block mr-2 text-yellow-700 text-sm md:text-base lg:text-lg font-robotoMono font-medium">
                Time Left
              </span>
              <Timer />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default QuizMain;
