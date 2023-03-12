import { useSelector, useDispatch } from "react-redux";

function QuizScore() {
  const dispatch = useDispatch();
  const quizScoreStarted = useSelector((state) => state.quizScoreStarted);
  return (
    <>
      {quizScoreStarted && (
        <div className="quiz-score w-10/12 md:w-3/5 lg:w-1/2 bg-gray-300 p-2 sm:p-4 rounded-lg flex flex-col justify-between items-center">
          <i className="text-yellow-600 text-7xl md:text-8xl lg:text-9xl py-8 fa-solid fa-crown"></i>

          <span className="complete-txt block text-zinc-900/70 text-lg md:text-xl font-medium">
            You've completed the Quiz!
          </span>
          <span className="block text-zinc-900/70 text-lg md:text-xl font-medium">
            You scored 4 out of 20
          </span>
          <div className="btn-container mt-2 flex justify-center py-6">
            <button className="play-again-btn p-3  bg-sky-700 text-white rounded-lg lg:hover:bg-sky-600 m-2 font-medium">
              Play Again
            </button>
            <button className="quit-btn p-3  bg-sky-700 text-white rounded-lg lg:hover:bg-sky-600 m-2 font-medium">
              Quit Quiz
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default QuizScore;
