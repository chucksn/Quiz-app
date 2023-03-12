import { useSelector, useDispatch } from "react-redux";
import { resetQuizStarted } from "../redux/slices/startQuiz-slice";
import { resetFirstPopup } from "../redux/slices/firstPopup-slice";
import { setQuizMainStarted } from "../redux/slices/startQuizMain-slice";

function QuizInstructionSlide() {
  const dispatch = useDispatch();
  const quizHasStarted = useSelector((state) => state.quizHasStarted);

  const handleExit = () => {
    dispatch(resetQuizStarted());
    dispatch(resetFirstPopup());
  };

  const handleContinue = () => {
    dispatch(resetQuizStarted());
    dispatch(setQuizMainStarted());
  };
  return (
    <>
      {quizHasStarted && (
        <div className="quiz-rules w-10/12 md:w-3/5 lg:w-1/2 bg-gray-300 p-2 sm:p-4 rounded-lg flex flex-col justify-between ">
          <div className="border-b-2 border-zinc-400/20 m-4 pb-2">
            <span className="block font-itim text-center text-xl md:text-2xl lg:text-3xl text-zinc-900/70">
              Quiz Rules
            </span>
          </div>
          <div className="rule-list border-b-2 border-zinc-400/20 px-8 flex flex-col items-center pb-2">
            <ol className=" list-decimal text-zinc-900/70 md:text-lg font-robotoMono font-medium">
              <li>
                You have only <span className="text-sky-500">15 seconds</span>{" "}
                to answer each question.
              </li>
              <li>Once an answer is selected, it can't be undone. </li>
              <li>An option cannot be selected once the timer goes off.</li>
              <li>You can't exit from the Quiz while you're still playing.</li>
              <li>Points are gained based on correct answers.</li>
            </ol>
          </div>
          <div className="btn-container mt-2 flex justify-center">
            <button
              className="exit p-3  bg-sky-700 text-white rounded-lg lg:hover:bg-sky-600 m-2 font-medium"
              onClick={handleExit}
            >
              Exit Quiz
            </button>
            <button
              className="continue p-3  bg-sky-700 text-white rounded-lg lg:hover:bg-sky-600 m-2 font-medium"
              onClick={handleContinue}
            >
              Continue
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default QuizInstructionSlide;
