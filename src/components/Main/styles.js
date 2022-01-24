import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  .timing-buttons {
    width: 57%;
    margin-bottom: 5rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 3rem;
    justify-content: space-between;

    button {
      height: 40px;
      font-size: 1.2rem;
      font-weight: 600;
      color: var(--text-body);
      border: none;
      border-radius: 0.25rem;
    }

    #pomodoroButton {
      background: var(--main-red);
    }

    #shortPauseButton {
      background: var(--dark-red);
    }

    #longPauseButton {
      background: var(--light-red);
    }
  }

  h1 {
    color: var(--main-red);
    font-size: 3rem;
    margin-bottom: 5rem;
  }

  .control-buttons {
    width: 35%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    justify-content: space-between;

    button {
      height: 50px;
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--text-body);
      border: none;
      border-radius: 0.75rem;
    }

    .startButton {
      background: var(--green);
    }

    #restartButton {
      background: var(--gray);
    }
  }
`;