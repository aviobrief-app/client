import React, { useContext, useState, useEffect } from 'react';

const AuthContext = React.createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('USER')));
    const [currentUserClaims, setCurrentUserClaims] = useState(JSON.parse(sessionStorage.getItem('USER_CLAIMS')));

    useEffect(() => {

        sessionStorage.setItem('USER', JSON.stringify(currentUser));
        sessionStorage.setItem('USER_CLAIMS', JSON.stringify(currentUserClaims));

    }, [currentUser, currentUserClaims])


    const authContextGlobalInfo = {
        currentUser,
        setCurrentUser,
        currentUserClaims,
        setCurrentUserClaims,
    };

    return (
        <AuthContext.Provider value={authContextGlobalInfo}>
            {children}
        </AuthContext.Provider>
    );

}

export default AuthContext;