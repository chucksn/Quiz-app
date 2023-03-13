import { useSelector, useDispatch } from "react-redux";
import { setAnswerClicked } from "../redux/slices/answerClicked-slice";

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

  const handleClick = () => {
    if (!timedOut) {
      dispatch(setAnswerClicked());
      setSelectedAnswerIndex(index);
    }
  };
  return (
    <>
      <div
        className={`answer-bar bg-slate-400/60 my-3 p-2 md:text-xl font-semibold text-zinc-700 rounded-md flex justify-between items-center ${
          timedOut || answerClicked ? "" : "lg:hover:bg-sky-700/30"
        } ${timedOut || answerClicked ? "" : "lg:hover:cursor-pointer"} ${
          answerClicked && answer === correctAnswer
            ? "bg-green-200 shadow-s2-green"
            : ""
        } ${
          answerClicked &&
          selectedAnswerIndex === index &&
          answer != correctAnswer
            ? "bg-red-200 shadow-s2-red"
            : ""
        }`}
        onClick={handleClick}
      >
        <span dangerouslySetInnerHTML={{ __html: answer }}></span>
        <i className="fa-regular fa-circle-check"></i>
      </div>
    </>
  );
}

export default AnswerBar;
