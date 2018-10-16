import api from './helper';

export default {
  searchRepositories: params => api.get('search/repositories', params),
};
