import logo from './logo.svg';
import './App.css';
import Checkbox from './components/Checkbox';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Checkbox
          type="checkbox"
          wrappe="true"
						>
							<p className="text-textGray text-sm">
								<strong>TEST</strong>
							</p>
						</Checkbox>
      </header>
    </div>
  );
}

export default App;
