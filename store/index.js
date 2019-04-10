// import Vuex from "vuex";

export const state = () => ({
  user: null,
  clubs: null,
  partners: null,
  article: null,
  articles: [],
  articlesFilters: [],
  event: null,
  events: null,
  eventsFilters: {
    future: true,
    past: true,
    free: true,
    paid: true
  },
  // { name: "future", active: true },
  // { name: "past", active: true },
  // { name: "free", active: true },
  // { name: "paid", active: true }
  // clubs: [],
  // clubsort: null
  // },
  page: null,
  authorArticles: [],
  authors: null,
  // indexInfiniteLoading: {
  //   enabled: true,
  //   page: 1
  // },
  featuredArticles: [],
  featuredColor: {},
  featuredID: 194,
  meta: {
    description: "",
    name: "",
    logo: ""
  },
  topicArticles: [],
  topics: null,
  wordpressAPI: "https://rest.dhq.atlasagency.com.au/wp/wp-json",
  wordpressAPIpath: "/wp/v2"
  // wordpressAPI: 'https://wp-api.kmr.io/wp-json'
});

// ==========
export const mutations = {
  setEventsFilters(state, data) {
    state.eventsFilters = data;
  },
  setArticle(state, data) {
    state.article = data;
  },
  setArticles(state, data) {
    state.articles = state.articles.concat(data);
  },
  setPage(state, data) {
    state.page = data;
  },
  setAuthorArticles(state, data) {
    state.authorArticles.push(data);
  },
  setAuthors(state, data) {
    state.authors = data;
  },
  setIndexInfiniteLoading(state, data) {
    state.indexInfiniteLoading = data;
  },
  setFeaturedColor(state, data) {
    state.featuredColor = data;
  },
  setFeaturedArticles(state, data) {
    state.featuredArticles = state.featuredArticles.concat(data);
  },
  setMeta(state, data) {
    state.meta = data;
  },
  setTopicArticles(state, data) {
    state.topicArticles.push(data);
  },
  setTopics(state, data) {
    state.topics = data;
  },
  setClubs(state, data) {
    state.clubs = data;
  },
  setEvents(state, data) {
    state.events = data;
  },
  setEvent(state, data) {
    state.event = data;
  },
  setUser(state, data) {
    state.user = data;
  },
  setPartners(state, data) {
    state.partners = data;
  },
  setPartner(state, data) {
    state.partner = data;
  }
};

// =======
export const actions = {
  async nuxtServerInit({ commit, state, dispatch }) {
    console.log(":::nuxtServerInit");
    let meta = await this.$axios.get(state.wordpressAPI);
    commit("setMeta", meta.data);

    await dispatch("fetchClubs");
    // probably all the menu
  },
  async fetchArticles({ commit, state }) {
    console.log(":::fetchArticles");
    let articles = await this.$axios.get(
      `${state.wordpressAPI}${
        state.wordpressAPIpath
      }/posts?orderby=date&per_page=10&_embed`
    );
    commit("setArticles", articles.data);
  },
  async fetchClubs({ commit, state }) {
    console.log(":::fetchClubs");
    let clubs = await this.$axios.get(
      `${state.wordpressAPI}${state.wordpressAPIpath}/club?_embed`
    );
    commit("setClubs", clubs.data);
  },
  async fetchEvents({ commit, state }) {
    console.log(":::fetchEvents");
    let events = await this.$axios.get(
      `${state.wordpressAPI}${
        state.wordpressAPIpath
      }/event?orderby=date&per_page=10&_embed`
    );
    commit("setEvents", events.data);
  },
  // async fetchFromWP({ commit, state }, post_type) {

  // }
  toggleEventsFilters({ commit, state }, filter) {
    let _filters = { ...state.eventsFilters };
    _filters[filter] = !_filters[filter];

    commit("setEventsFilters", _filters);
  }
};

// =======
export const getters = {};
