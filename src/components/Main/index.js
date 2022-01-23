import React, { useState, useEffect } from 'react';
import Countdown from 'react-countdown';

import { Container } from './styles';

export function Main() {
  return (
    <Container>
      <div className="timing-buttons">
        <button type="button" id="pomodoroButton">Pomodoro</button>
        <button type="button" id="shortPauseButton">Pausa Curta</button>
        <button type="button" id="longPauseButton">Pausa Longa</button>
      </div>

      <Countdown date={Date.now() + 1500000} zeroPadTime={2} autoStart={false} />

      <div className="control-buttons">
        <button
          type="button"
          id="startButton"

          >
            Começar
        </button>
        <button type="button" id="restartButton">Reiniciar</button>
      </div>
    </Container>
  );
}
