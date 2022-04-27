import { useEffect } from "react";
import { useStopwatch } from "react-timer-hook";
import usePlaying from "../../../../../contexts/usePlaying";
import Score from "../Score";

const TimeScore = () => {
  const { setPlayerOneTimeTaken, isGameFinished } = usePlaying();
  const { seconds, minutes, isRunning, start, pause, reset } = useStopwatch({
    autoStart: true,
  });

  let displayMinutes = minutes < 10 ? "0" + minutes : minutes;
  let displaySeconds = seconds < 10 ? "0" + seconds : seconds;

  useEffect(() => {
    if (isGameFinished) {
      pause();
    } else if (!isRunning && !isGameFinished) {
      reset();
      start();
    }
  }, [isGameFinished, pause, reset, isRunning, start]);

  useEffect(() => {
    setPlayerOneTimeTaken({ minute: minutes, second: seconds });
  }, [seconds, minutes, setPlayerOneTimeTaken]);

  const timeValue = `${displayMinutes}:${displaySeconds}`;

  return <Score title='Time' value={timeValue} />;
};

export default TimeScore;
