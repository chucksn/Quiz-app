import { CountdownCircleTimer } from "react-countdown-circle-timer";

const renderTime = ({ remainingTime }) => {
  return (
    <div className="timer flex flex-col items-center justify-center">
      <div className="value text-2xl text-green-600 font-ubuntu ">
        {remainingTime}
      </div>
    </div>
  );
};

function Timer({ isPlaying, onComplete }) {
  return (
    <>
      <CountdownCircleTimer
        isPlaying={isPlaying}
        onComplete={onComplete}
        duration={15}
        size={50}
        strokeWidth={4}
        colors={["#00ABF0", "#F7B801", "#A30000", "#A30000"]}
        colorsTime={[9, 6, 3, 0]}
      >
        {renderTime}
      </CountdownCircleTimer>
    </>
  );
}

export default Timer;
