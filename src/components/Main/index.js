import React, { useState, useEffect } from 'react';
import { getRemainingTimeUntilMsTimestamp } from '../../utils/CountdownUtils';

import { Container } from './styles';

const defaultTime = {
  seconds: '00',
  minutes: '25'
}

export function Main({countdownTimestampMs}) {
  const [remainingTime, setRemainingTime] = useState(defaultTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateRemainingTime(countdownTimestampMs);
    }, 1000)
  
    return () => clearInterval(intervalId);

  }, [countdownTimestampMs]);
  
  function updateRemainingTime(countdown) {
    setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
  }

  return (
    <Container>
      <div className="timing-buttons">
        <button type="button" id="pomodoroButton">Pomodoro</button>
        <button type="button" id="shortPauseButton">Pausa Curta</button>
        <button type="button" id="longPauseButton">Pausa Longa</button>
      </div>

      <h1>{remainingTime.minutes}:{remainingTime.seconds}</h1>

      <div className="control-buttons">
        <button
          type="button"
          id="startButton"
          >Começar</button>
        <button type="button" id="restartButton">Reiniciar</button>
      </div>
    </Container>
  );
}
