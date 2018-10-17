import axios from 'axios';

const URL = 'https://api.github.com/';

export const fullUrlFrom = (endpoint) => {
  if (endpoint[0] !== '/') endpoint = `/${endpoint}`;
  return URL + endpoint.slice(1);
};

export const configureInterceptor = () => {
  // interceptor for request
  axios.interceptors.request.use(config => (config), error => Promise.reject(error));

  // interceptor for response
  axios.interceptors.response.use(
    response => response,
    (error) => {
      if (error.response) {
        const { response } = error;
        return Promise.reject(response);
      }
      return Promise.reject(error);
    },
  );
};

const fetchUrl = (method, endpoint, params = {}) => axios({
  method,
  params,
  url: fullUrlFrom(endpoint),
});

const api = {
  get(endpoint, params) {
    return fetchUrl('GET', endpoint, params);
  },
};

export default api;
