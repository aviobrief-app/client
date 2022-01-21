import { Routes, Route } from "react-router-dom"
import './App.css';
import { useContext } from 'react';
import { useAuth } from 'contexts/AuthContext';

import * as authService from 'services/authService';
import * as userService from 'services/userService';

import Dev from 'components/Dev';

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
    userService.getAllUsers()
      .then(response => console.log(response))
      .catch(error => console.log(error));
  }


  return (
    <div className="dev">
      <button onClick={onLoginClick}>LOGIN petar.petkov@mailinator.com</button>
      <br></br>
      <button onClick={onGetUsersClick}>Get Users</button>
    </div>
  );
}

export default App;
