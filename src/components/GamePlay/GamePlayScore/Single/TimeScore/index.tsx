import { useEffect } from "react";
import { useStopwatch } from "react-timer-hook";
import usePlaying from "../../../../../contexts/usePlaying";
import Score from "../Score";

const TimeScore = () => {
  const { setPlayerOneTimeTaken } = usePlaying();
  const { seconds, minutes, hours, days, isRunning, start, pause, reset } =
    useStopwatch({ autoStart: true });

  let displayMinutes = minutes < 10 ? "0" + minutes : minutes;
  let displaySeconds = seconds < 10 ? "0" + seconds : seconds;

  useEffect(() => {
    setPlayerOneTimeTaken({ minute: minutes, second: seconds });
  }, [seconds, minutes, setPlayerOneTimeTaken]);

  const timeValue = `${displayMinutes}:${displaySeconds}`;

  return <Score title='Time' value={timeValue} />;
};

export default TimeScore;
