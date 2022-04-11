import axios from 'axios';

import { SERVER_BASE_URL } from '../utils/constant';

const UserAPI = {
  login: async (email, password) => {
    try {
      return await axios.post(
        `${SERVER_BASE_URL}/login`,
        JSON.stringify({ user: { email, password } }),
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    } catch (error) {
      return error.response;
    }
  },
};

export default UserAPI;
