import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
     <h1>
      Welcome to Maddie's server :)</h1>
      <h5>click here and get knowing what happens when you click !!</h5>
     <buton onClick={window['print']}>Click here</buton>
      </header>
    </div>
  );
}

export default App;