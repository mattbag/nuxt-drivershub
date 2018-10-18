import Vuex from 'vuex'

const store = () => new Vuex.Store({
  state: {
    user: null,
    clubs: null,
    events: null,
    partners: null,
    event: null,
    article: null,
    articles: [],
    page: null,
    authorArticles: [],
    authors: null,
    indexInfiniteLoading: {
      enabled: true,
      page: 1
    },
    featuredArticles: [],
    featuredColor: {},
    featuredID: 194,
    meta: {
      description: '',
      name: '',
      logo: ''
    },
    topicArticles: [],
    topics: null,
    wordpressAPI: 'https://rest.dhq.atlasagency.com.au/wp/wp-json',
    wordpressAPIpath: '/wp/v2',
    // wordpressAPI: 'https://wp-api.kmr.io/wp-json'
  },
  actions: {
    async nuxtServerInit({ commit, state }) {
      // console.log('nuxtServerInit')
      let meta = await this.$axios.get(state.wordpressAPI)
      commit('setMeta', meta.data)
      let clubs = await this.$axios.get(`${state.wordpressAPI}${state.wordpressAPIpath}/club?_embed`)
      commit("setClubs", clubs.data)
      // probably all the menu
    },
    async fetchArticles({ commit, state }) {
      // console.log('fetchArticles')
      let articles = await this.$axios.get(`${state.wordpressAPI}${state.wordpressAPIpath}/posts?orderby=date&per_page=10&_embed`)
      commit("setArticles", articles.data);
    },
    async fetchEvents({ commit, state }) {
      // console.log('fetchEvents')
      let events = await this.$axios.get(`${state.wordpressAPI}${state.wordpressAPIpath}/event?orderby=date&per_page=10&_embed`)
      commit("setEvents", events.data);
    },
    // async fetchFromWP({ commit, state }, post_type) {

    // }

  },
  // getters:{},

  mutations: {
    setArticle(state, data) {
      state.article = data
    },
    setArticles(state, data) {
      state.articles = state.articles.concat(data)
    },
    setPage(state, data) {
      state.page = data
    },
    setAuthorArticles(state, data) {
      state.authorArticles.push(data)
    },
    setAuthors(state, data) {
      state.authors = data
    },
    setIndexInfiniteLoading(state, data) {
      state.indexInfiniteLoading = data
    },
    setFeaturedColor(state, data) {
      state.featuredColor = data
    },
    setFeaturedArticles(state, data) {
      state.featuredArticles = state.featuredArticles.concat(data)
    },
    setMeta(state, data) {
      state.meta = data
    },
    setTopicArticles(state, data) {
      state.topicArticles.push(data)
    },
    setTopics(state, data) {
      state.topics = data
    },
    setClubs(state, data) {
      state.clubs = data
    },
    setEvents(state, data) {
      state.events = data
    },
    setEvent(state, data) {
      state.event = data
    },
    setUser(state, data) {
      state.user = data
    },
    setPartners(state, data) {
      state.partners = data
    },
    setPartner(state, data) {
      state.partner = data
    }
  }
})

export default store
