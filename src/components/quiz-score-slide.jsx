import { useSelector, useDispatch } from "react-redux";
import { resetQuizDataIndex } from "../redux/slices/quizDataIndex-slice";
import { resetQuizScoreStarted } from "../redux/slices/quizScore-slice";
import { setQuizMainStarted } from "../redux/slices/startQuizMain-slice";
import { resetAnswerClicked } from "../redux/slices/answerClicked-slice";
import { resetFirstPopup } from "../redux/slices/firstPopup-slice";
import { resetScore } from "../redux/slices/score-slice";
import { motion, AnimatePresence } from "framer-motion";

const inOut_animation_variant = {
  hidden: {
    x: "100vw",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      type: "spring",
      stiffness: 70,
      ease: "easeInOut",
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
    transition: {
      duration: 1,
      type: "spring",
      stiffness: 70,
      ease: "easeInOut",
    },
  },
};

function QuizScoreSlide() {
  const dispatch = useDispatch();
  const quizScoreStarted = useSelector((state) => state.quizScoreStarted);
  const score = useSelector((state) => state.score);

  const handlePlayAgain = () => {
    dispatch(resetScore());
    dispatch(resetQuizDataIndex());
    dispatch(resetAnswerClicked());
    dispatch(resetQuizScoreStarted());
    dispatch(setQuizMainStarted());
  };

  const handleEndQuiz = () => {
    dispatch(resetScore());
    dispatch(resetQuizDataIndex());
    dispatch(resetAnswerClicked());
    dispatch(resetQuizScoreStarted());
    dispatch(resetFirstPopup());
  };
  return (
    <>
      <AnimatePresence>
        {quizScoreStarted && (
          <motion.div
            className="quiz-score w-11/12 md:w-3/5 lg:w-1/2 bg-gray-300 p-2 sm:p-4 rounded-lg flex flex-col justify-between items-center absolute"
            variants={inOut_animation_variant}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <i className="text-yellow-600 text-7xl md:text-8xl lg:text-9xl py-8 fa-solid fa-crown"></i>

            <span className="complete-txt block text-zinc-900/70 text-lg md:text-xl font-medium">
              You've completed the Quiz!
            </span>
            <span className="block text-zinc-900/70 text-lg md:text-xl font-medium">
              You scored{" "}
              <span className="text-orange-600 text-xl md:text-2xl">
                {score}
              </span>{" "}
              out of{" "}
              <span className="text-orange-600 text-xl md:text-2xl">15</span>
            </span>
            <div className="btn-container mt-2 flex justify-center py-6">
              <button
                className="play-again-btn p-3  bg-sky-700 text-white rounded-lg lg:hover:bg-sky-600 m-2 font-medium"
                onClick={handlePlayAgain}
              >
                Play Again
              </button>
              <button
                className="quit-btn p-3  bg-sky-700 text-white rounded-lg lg:hover:bg-sky-600 m-2 font-medium"
                onClick={handleEndQuiz}
              >
                End Quiz
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default QuizScoreSlide;
