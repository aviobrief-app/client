import './App.css';
import * as userService from 'services/userService';

function App() {

  const onFetchSpringServer = () => {

    console.log('hello world!');

    userService.getAllUsers()
      .then(users => console.log(users))
      .catch(err => console.log(err));
  }


  return (
    <div className="App">
      <button onClick={onFetchSpringServer}>FETCH SPRING SERVER</button>
    </div>
  );
}

export default App;
