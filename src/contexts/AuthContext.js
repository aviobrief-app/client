import React, { useContext, useState } from 'react';

const AuthContext = React.createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState(null);
    const [currentUserClaims, setCurrentUserClaims] = useState(null);


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