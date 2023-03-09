import { useSelector } from "react-redux";

function QuizMain() {
  const quizMainHasStarted = useSelector((state) => state.quizMainHasStarted);
  return (
    <>
      {quizMainHasStarted && (
        <div className="quiz-select-category w-4/5 md:w-3/5 lg:w-1/2 bg-gray-300 p-4 rounded-lg flex flex-col justify-between "></div>
      )}
    </>
  );
}

export default QuizMain;
