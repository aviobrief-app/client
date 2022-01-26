
import { useContext } from 'react';
import { useAuth } from 'contexts/AuthContext';

import * as authService from 'services/authService';
import * as userService from 'services/userService';

const Dev = () => {
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

    const onGetFPCclick = async () => {
        authService.getFirstPartyCookie()
            .then(response => console.log(response))
            .catch(error => console.log(error));
    }

    const onLogoutClick = async () => {
        authService.logout()
            .then(response => console.log(response))
            .catch(error => console.log(error));
    }


    return (
        <div className="dev">
            <button onClick={onLoginClick}>LOGIN</button>
            <br></br>
            <button onClick={onGetUsersClick}>Get Users</button>
            <br></br>
            <button onClick={onGetFPCclick}>Get First Party Cookie</button>
            <br></br>
            <button onClick={onLogoutClick}>LOGOUT</button>
        </div>
    );
}

export default Dev;