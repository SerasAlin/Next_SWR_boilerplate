import axios from 'axios';

import { ApiResponse } from '../interfaces/ApiResponse';
import { UserDataResponse } from '../interfaces/UserDataResponse';
import { SERVER_BASE_URL } from '../utils/constant';

const UserAPI = {
  login: async (username, password): Promise<ApiResponse<UserDataResponse>> => {
    console.log('LOGGING IN')
    try {
      return await axios.post(
        `${SERVER_BASE_URL}/login`,
        JSON.stringify({ username, password }),
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
