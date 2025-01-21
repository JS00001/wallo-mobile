import Axios from 'axios';

import Constants, { Urls } from '@/constants';

const defaultHeaders = {
  'X-ClientVersion': Constants.version,
};

const axios = Axios.create({
  baseURL: `${Urls.ApiUrl}/api/v1`,
  headers: {
    ...defaultHeaders,
  },
});

export default axios;
