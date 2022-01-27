const springBaseUrls = {
    development: 'http://localhost:8000',
    production: 'https://ubuuy-server.herokuapp.com',
};

const springBaseUrl = springBaseUrls[process.env.NODE_ENV.trim()];

/* auth related */
export const loginAuth = () => `${springBaseUrl}/api/auth/login`;
export const logout = () => `${springBaseUrl}/api/auth/logout`;


/* user related */
export const getAllUsers = () => `${springBaseUrl}/users`;



/*
export const login = () => `${springBaseUrl}/basic-auth`;
export const firstPartyCookie = () => `${springBaseUrl}/first-party-cookie`;
*/