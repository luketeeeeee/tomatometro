import React from 'react';

import { Container } from './styles';

export function Main() {
  return (
    <Container>
      <div className="timing-buttons">
        <button type="button" id="pomodoroButton">Pomodoro</button>
        <button type="button" id="shortPauseButton">Pausa Curta</button>
        <button type="button" id="longPauseButton">Pausa Longa</button>
      </div>

      {/* <Display 
        itsCounting={false} 
        minutes={time.minutes} 
        seconds={time.seconds}
      /> */}

      <div className="control-buttons">
        <button type="button" id="startButton">Começar</button>
        <button type="button" id="restartButton">Reiniciar</button>
      </div>
    </Container>
  );
}
