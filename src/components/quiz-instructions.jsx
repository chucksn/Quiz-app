import { useSelector } from "react-redux";

function QuizInstructions() {
  const quizHasStarted = useSelector((state) => state.quizHasStarted);
  return (
    <>
      {quizHasStarted && (
        <div className=" w-4/5 md:w-3/5 lg:w-1/2 bg-gray-300 p-4 rounded-lg flex flex-col justify-between ">
          <div className="border-b-2 border-zinc-400/20 m-4 pb-2">
            <span className="quiz-title block font-ubuntu font-medium text-zinc-800/70 text-center text-xl md:text-2xl lg:text-3xl ">
              BRAINER QUIZ
            </span>
            <span className="block font-itim text-center md:text-2xl text-lg text-zinc-900/70">
              Instructions
            </span>
          </div>
        </div>
      )}
    </>
  );
}

export default QuizInstructions;
