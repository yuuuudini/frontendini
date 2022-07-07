import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Click here banger music!
        </p>
        <a
          className="App-link"
          href="https://open.spotify.com/track/5fpq1wF8xa5tSSlcKHdmGQ?si=2515a3ba97d4430a"
          target="_blank"
          rel="noopener noreferrer"
        >
          sTrAngErS - bMtH
        </a>
      </header>
    </div>
  );
}

export default App;
