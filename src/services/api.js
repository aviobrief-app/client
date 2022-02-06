const springBaseUrls = {
    development: 'http://localhost:8000',
    production: 'https://ubuuy-server.herokuapp.com',
};

const springBaseUrl = springBaseUrls[process.env.NODE_ENV.trim()];

/* auth related */
export const registerOrganizationOwner = () => `${springBaseUrl}/api/auth/register-organization-owner`;
export const loginAuth = () => `${springBaseUrl}/api/auth/login`;
export const logout = () => `${springBaseUrl}/api/auth/logout`;


/* user related */
export const getAllUsers = () => `${springBaseUrl}/users`;

/* products related*/
export const addProduct = () => `${springBaseUrl}/products`;



/*
export const login = () => `${springBaseUrl}/basic-auth`;
export const firstPartyCookie = () => `${springBaseUrl}/first-party-cookie`;
*/