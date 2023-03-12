import { useSelector, useDispatch } from "react-redux";
import Timer from "./timer";
import { useState } from "react";
import AnswerBar from "./answer-bar";
import { quizData } from "../question_data";
import { setQuizScoreStarted } from "../redux/slices/quizScore-slice";
import { resetQuizMainStarted } from "../redux/slices/startQuizMain-slice";

function QuizMain() {
  const dispatch = useDispatch();
  const quizMainHasStarted = useSelector((state) => state.quizMainHasStarted);
  const [answerClicked, setAnswerClicked] = useState(false);
  const [quizDataIndex, setQuizDataIndex] = useState(0);
  const [key, setKey] = useState(0); //key for resetting timer
  const [timedOut, setTimedOut] = useState(false);

  const quiz_data_list = quizData.results;
  const quiz_data = quiz_data_list[quizDataIndex];
  const answers = quiz_data.incorrect_answers.concat(quiz_data.correct_answer);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const shuffled_answers = shuffleArray(answers);

  const handleNextBtn = () => {
    if (quizDataIndex < quiz_data_list.length - 1) {
      setQuizDataIndex(quizDataIndex + 1);
      setAnswerClicked(false);
      setTimedOut(false);
      setKey(key + 1);
    } else {
      dispatch(resetQuizMainStarted());
      dispatch(setQuizScoreStarted());
    }
  };

  const handleTimerComplete = () => {
    setAnswerClicked(true);
    setTimedOut(true);
  };

  return (
    <>
      {quizMainHasStarted && (
        <div className="quiz-select-category w-10/12 md:w-3/5 lg:w-1/2 bg-gray-300 p-2 sm:p-4 rounded-lg flex flex-col justify-between ">
          <div className="header border-b-2 border-zinc-400/20 my-4 mx-2 pb-2 flex justify-between items-center">
            <span className="block font-robotoMono md:text-lg lg:text-xl text-green-600 font-semibold">
              Quiz In Progress...
            </span>
            {timedOut && (
              <span className="block text-red-500 font-medium sm:p-1 md:text-lg text-sm sm:text-base shadow-s2-red rounded-md text-center animate-pulse">
                TIME OUT
              </span>
            )}
            <div className="timer-ctn flex justify-center items-center text-right">
              <span className="block mr-1 text-orange-600 text-sm md:text-base lg:text-lg font-robotoMono font-medium">
                Time Left
              </span>
              <Timer
                isPlaying={answerClicked ? false : true}
                duration={15}
                key={key}
                onComplete={handleTimerComplete}
              />
            </div>
          </div>
          <div className="body border-b-2 border-zinc-400/20 px-4 mx-2 flex flex-col pb-2">
            <span
              className="question block text-lg md:text-xl  font-bold text-zinc-700 mb-2"
              dangerouslySetInnerHTML={{ __html: quiz_data.question }}
            ></span>
            {shuffled_answers.map((answer, index) => (
              <AnswerBar
                key={index}
                answerClicked={answerClicked}
                setAnswerClicked={setAnswerClicked}
                answer={answer}
                timedOut={timedOut}
              />
            ))}
          </div>
          <div className="footer mx-2 py-2 flex justify-between items-center">
            <span className="block text-zinc-900/70 md:text-lg font-robotoMono font-medium">
              Question {quizDataIndex + 1} of {quiz_data_list.length}
            </span>
            {answerClicked && (
              <button
                className="p-2 sm:p-3 text-sm md:text-base bg-sky-700 text-white rounded-lg lg:hover:bg-sky-600 m-2 font-medium"
                onClick={handleNextBtn}
              >
                {quizDataIndex < quiz_data_list.length - 1
                  ? "NEXT QUESTION"
                  : "END QUIZ"}
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default QuizMain;
