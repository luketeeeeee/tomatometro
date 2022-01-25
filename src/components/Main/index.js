import React, { useState, useEffect } from 'react';
import { Container } from './styles';

export function Main() {
  const [ minutes, setMinutes ] = useState(25);
  const [ seconds, setSeconds ] = useState(0);
  const [ isStarted, setIsStarted ] = useState(false);

  function handleChangeCountdownTime(minutes, seconds) {
    setIsStarted(false);
    setMinutes(minutes);
    setSeconds(seconds);
    setSeconds(seconds);
  }

  useEffect(() => {
    console.log(`estado atual do isStarted: ${isStarted}`)
    if (isStarted) {
      let interval = setInterval(() => {
        clearInterval(interval);
        if (seconds === 0) {
          if (minutes !== 0) {
            setSeconds(59);
            setMinutes(minutes - 1);
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    }
  }, [seconds, minutes, isStarted]);
  
  const displayedMinutes = minutes < 10 ? `0${minutes}` : minutes; 
  const displayedSeconds = seconds < 10 ? `0${seconds}` : seconds; 

  return (
    <Container>
      <div className="timing-buttons">
        <button
          type="button"
          id="pomodoroButton"
          onClick={() => handleChangeCountdownTime(25, 0)}
        >
          Pomodoro
        </button>
        <button 
          type="button" 
          id="shortPauseButton"
          onClick={() => handleChangeCountdownTime(5, 0)}  
        >
          Pausa Curta
        </button>
        <button
          type="button"
          id="longPauseButton"
          onClick={() => handleChangeCountdownTime(15, 0)}
        >
          Pausa Longa
        </button>
      </div>

      <h1>{displayedMinutes}:{displayedSeconds}</h1>

      <div className="control-buttons">
        <button
          type="button"
          className="startButton"
          onClick={() => setIsStarted(true)}
        >
          Começar
        </button>
        <button
          type="button"
          id="restartButton"
          onClick={() => setIsStarted(false)}
        >
          Parar
        </button>
      </div>
    </Container>
  );
}
