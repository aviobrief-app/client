import { AuthContextProvider } from 'contexts/AuthContext';


const withAuthContext = (Component) => {

    return (
        <AuthContextProvider>
            {Component}
        </AuthContextProvider>
    )

};

export default withAuthContext;