const springBaseUrls = {
    development: 'http://localhost:8000',
    production: 'https://aviobrief-spring-server.herokuapp.com',
};

const springBaseUrl = springBaseUrls[process.env.NODE_ENV.trim()];

/* auth related */
export const login = () => `${springBaseUrl}/basic-auth`;
export const loginAuth = () => `${springBaseUrl}/api/auth`;
export const firstPartyCookie = () => `${springBaseUrl}/first-party-cookie`;


/* user related */
export const getAllUsers = () => `${springBaseUrl}/users`;