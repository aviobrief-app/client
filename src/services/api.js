const springBaseUrls = {
    development: 'http://localhost:8000',
    production: 'todo',
};

const springBaseUrl = springBaseUrls[process.env.NODE_ENV.trim()];

/* auth related */
export const login = () => `${springBaseUrl}/basic-auth`;

/* user related */
export const getAllUsers = () => `${springBaseUrl}/users`;