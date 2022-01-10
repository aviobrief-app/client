import './App.css';

function App() {

  const onFetchSpringServer = () => {
    console.log('hello world!');
  }
  return (
    <div className="App">
      <button onClick={onFetchSpringServer}>FETCH SPRING SERVER</button>

    </div>
  );
}

export default App;
