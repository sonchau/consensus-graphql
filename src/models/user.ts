export const generateUserModel = ({ req }) => ({
    getAll: () => {
      return fetch('https://geografia-user-admin.herokuapp.com', { headers: req.headers });
    },
   });