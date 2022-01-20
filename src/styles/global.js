import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #F9F9F9;
    
    --main-red: #D12929;
    --light-red: #D96C6C;
    --dark-red: #9E4747;
    --dark-red2: #521010;
    --green: #75CB56;
    --gray: #8B928B;

    --text-body: #F4FFEE;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }
  
  body, input, textarea, button {
    font-family: 'Nunito', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;