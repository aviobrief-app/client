
import * as authService from 'services/authService';

const loginJwt = (username, password) => authService.loginJWT({ username, password });

export const useAuthService = () => {
    return {
        loginJwt,
    }
}