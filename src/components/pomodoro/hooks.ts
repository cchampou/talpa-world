import { useEffect, useRef, useState } from 'react';
import { PomodoroState, REST_TIME, WORK_TIME } from './utils';

const usePomodoro = () => {
  const timer = useRef<number>();
  const [time, setTime] = useState(WORK_TIME);
  const [state, setState] = useState<PomodoroState>(PomodoroState.WORK);

  const start = () => {
    if (timer.current) return;
    timer.current = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);
  };

  const pause = () => {
    if (!timer.current) return;
    clearInterval(timer.current);
    timer.current = undefined;
  };

  const reset = () => {
    pause();
    setTime(25 * 60);
  };

  const toggleStartPause = () => {
    if (timer.current) pause();
    else start();
  };

  useEffect(() => {
    if (time === -1) {
      if (state === PomodoroState.WORK) {
        setTime(REST_TIME);
        setState(PomodoroState.REST);
      } else {
        setTime(WORK_TIME);
        setState(PomodoroState.WORK);
      }
    }
  }, [time]);

  return {
    reset,
    start,
    state,
    toggleStartPause,
    pause,
    currentTime: time,
  };
};

export default usePomodoro;
