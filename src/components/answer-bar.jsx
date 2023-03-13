import { useSelector, useDispatch } from "react-redux";
import { setAnswerClicked } from "../redux/slices/answerClicked-slice";
import { setAddScore } from "../redux/slices/score-slice";

function AnswerBar({
  answer,
  timedOut,
  index,
  selectedAnswerIndex,
  setSelectedAnswerIndex,
  correctAnswer,
}) {
  const dispatch = useDispatch();
  const answerClicked = useSelector((state) => state.answerClicked);

  const handleAnswerClick = () => {
    if (!timedOut) {
      dispatch(setAnswerClicked());
      if (selectedAnswerIndex === null) {
        setSelectedAnswerIndex(index);
        if (answer === correctAnswer) dispatch(setAddScore());
      }
    }
  };
  return (
    <>
      <div
        className={`answer-bar ${
          (!answerClicked ||
            (selectedAnswerIndex != index && answer != correctAnswer)) &&
          "bg-slate-400/60"
        } my-3 p-2 md:text-xl font-semibold text-zinc-700 rounded-md flex justify-between items-center ${
          timedOut || answerClicked ? "" : "lg:hover:bg-sky-700/30"
        } ${timedOut || answerClicked ? "" : "lg:hover:cursor-pointer"} ${
          answerClicked && answer === correctAnswer
            ? "bg-green-300/40 shadow-s2-green"
            : ""
        } ${
          answerClicked &&
          selectedAnswerIndex === index &&
          answer != correctAnswer
            ? "bg-red-300/40 shadow-s2-red"
            : ""
        }`}
        onClick={handleAnswerClick}
      >
        <span dangerouslySetInnerHTML={{ __html: answer }}></span>
        <div className="flex">
          <i
            className={`${
              answerClicked && answer === correctAnswer
                ? "text-green-600 fa-regular fa-circle-check"
                : ""
            }`}
          ></i>
          <i
            className={`${
              answerClicked &&
              selectedAnswerIndex === index &&
              answer != correctAnswer
                ? "text-red-600 fa-regular fa-circle-xmark"
                : ""
            }`}
          ></i>
        </div>
      </div>
    </>
  );
}

export default AnswerBar;
