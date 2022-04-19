import React, { useState } from 'react';
import { Button } from 'baseui/button';
import usePomodoro from './hooks';
import { getTimeString } from './utils';

function Pomodoro() {
  const { toggleStartPause, reset, currentTime, state } = usePomodoro();

  return (
    <div>
      <h1>Pomodoro: {state}</h1>
      <h2>{getTimeString(currentTime)}</h2>
      <Button onClick={toggleStartPause}>Start / Pause</Button>
      <Button onClick={reset}>Reset</Button>
    </div>
  );
}

export default Pomodoro;
