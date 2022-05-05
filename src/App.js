import logo from './logo.svg';
import './App.css';



function App() {
  const rumah = [
    {
      nama: 'Salman',
      alamat: 'cigugur',
    },
    {
      nama: 'Salman2',
      alamat: 'cigugur2',
    },
    {
      nama: 'Salman3',
      alamat: 'cigugur3',
    },
    {
      nama: 'Salman4',
      alamat: 'cigugur3',
    }
  ];
  console.log('test', rumah.map((rumah) => rumah));
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          tt <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
