import './App.css';
import * as authService from 'services/authService';
import * as userService from 'services/userService';

function App() {

  const onFetchSpringServer = () => {

    authService.login()
      .then((res) => console.log(res));

    // userService.getAllUsers()
    //   .then(users => console.log(users))
    //   .catch(err => console.log(err));
  }


  return (
    <div className="App">
      <button onClick={onFetchSpringServer}>FETCH SPRING SERVER</button>
    </div>
  );
}

export default App;
