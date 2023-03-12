function AnswerBar({
  answerClicked,
  setAnswerClicked,
  answer,
  setTimedOut,
  timedOut,
}) {
  const handleClick = () => {
    if (!timedOut) setAnswerClicked(true);
  };
  return (
    <>
      <div
        className={`answer-bar bg-slate-400/60 my-3 p-2 md:text-xl font-semibold text-zinc-700 rounded-md flex justify-between items-center ${
          timedOut || answerClicked ? "" : "lg:hover:bg-sky-700/30"
        } ${timedOut || answerClicked ? "" : "lg:hover:cursor-pointer"}`}
        onClick={handleClick}
      >
        <span dangerouslySetInnerHTML={{ __html: answer }}></span>
        <i className="fa-regular fa-circle-check"></i>
      </div>
    </>
  );
}

export default AnswerBar;
