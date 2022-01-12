import React, { useContext, useState, useEffect } from 'react';
import { useAuthService } from 'hooks/useAuthService';

const AuthContext = React.createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {

    const [currentUserClaims, setCurrentUserClaims] = useState(null);


    const authContextGlobalInfo = {
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