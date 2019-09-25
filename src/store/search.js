const SEARCH_RESULTS = 'SEARCH_RESULTS';

const search = {
  state() {
    return {
      searchResults: '',
    };
  },
  mutations: {
    [SEARCH_RESULTS](state, response) {
      const localStorage = state;
      localStorage.searchResults = response.searchResults;
    },
  },
  actions: {
    searchResults({ commit }, response) {
      commit(SEARCH_RESULTS, response);
    },
  },
};

export default search;
