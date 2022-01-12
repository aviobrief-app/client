import './App.css';
import { useContext } from 'react';
import { useAuth } from 'contexts/AuthContext';

import * as authService from 'services/authService';
import * as userService from 'services/userService';

function App() {

  const authContext = useAuth();

  const onLoginClick = () => {

    const data = { username: "petar.petkov@mailinator.com", password: "111111", };
    authService.loginJWT(data)
      .then((response) => {
        console.log(response);
        authContext.setCurrentUserClaims(response);
      })
      .catch((error) => { console.log(error) })


  }

  const onGetUsersClick = async () => {
    const users = await userService.getAllUsers();
    console.log(users);
  }


  return (
    <div className="App">
      <button onClick={onLoginClick}>LOGIN petar.petkov@mailinator.com</button>
      <br></br>
      <button onClick={onGetUsersClick}>Get Users</button>
    </div>
  );
}

export default App;
