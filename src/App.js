import { Header } from "./components/Header"
import { Main } from "./components/Main";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <div>
      <Header />
      <Main countdownTimestampMs={Math.floor(Date.now() + 1502000)}/>
      <GlobalStyle />
    </div>
  );
}

export default App;
