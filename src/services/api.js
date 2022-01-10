const springBaseUrls = {
    development: 'http://localhost:8000',
    production: 'todo',
};

const springBaseUrl = springBaseUrls[process.env.NODE_ENV.trim()];

/* user related */
export const getAllUsers = () => `${springBaseUrl}/users`;