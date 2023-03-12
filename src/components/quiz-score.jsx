import { useSelector } from "react-redux";

function QuizScore() {
  const quizScoreStarted = useSelector((state) => state.quizScoreStarted);
  return (
    <>
      {quizScoreStarted && (
        <div className="quiz-score w-10/12 md:w-3/5 lg:w-1/2 bg-gray-300 p-2 sm:p-4 rounded-lg flex flex-col justify-between "></div>
      )}
    </>
  );
}

export default QuizScore;
