<template>
  <div class="topic">
    <div class="articles">
      <div class="page-title">
        <h1>{{ topic.name }}</h1>
        <p v-if="topic.description">{{ topic.description }}</p>
      </div>
      <ArticleList :articles="topicArticles.articles" />
      <!-- <InfiniteLoading
        v-if="isLoadingMore"
        ref="infiniteLoading"
        :on-infinite="moreArticles"
      >
        <span slot="spinner">
          <Spinner1/>
        </span>
        <span slot="no-results">
          <Smile/>
          <div>No more articles!</div>
        </span>
        <span slot="no-more">
          <Smile/>
          <div>No more articles!</div>
        </span>
      </InfiniteLoading> -->
    </div>
    <TheSidebar :featuredArticles="$store.state.featuredArticles" />
  </div>
</template>

<script>
import find from "lodash/find";
import ArticleList from "~/components/ArticleList";
import TheSidebar from "~/components/TheSidebar";
// import InfiniteLoading from 'vue-infinite-loading/src/components/InfiniteLoading.vue'
import Smile from "~/assets/svg/Smile.vue";
import Spinner1 from "~/components/Spinner1.vue";

export default {
  async asyncData({ app, store, params }) {
    if (!store.state.featuredArticles.length) {
      let articles = await app.$axios.get(
        `${
          store.state.wordpressAPI
        }/wp/v2/posts?orderby=date&per_page=10&categories=${
          store.state.featuredID
        }&_embed`
      );
      store.commit("setFeaturedArticles", articles.data);
    }

    if (!store.state.topics) {
      let topics = await app.$axios.get(
        `${store.state.wordpressAPI}/wp/v2/categories?per_page=100`
      );
      store.commit("setTopics", topics.data);
    }

    if (!find(store.state.topicArticles, { slug: params.topic })) {
      let topic = find(store.state.topics, { slug: params.topic });
      let topicArticles = await app.$axios.get(
        `${
          store.state.wordpressAPI
        }/wp/v2/posts?orderby=date&per_page=10&categories=${topic.id}&_embed`
      );
      store.commit("setTopicArticles", {
        slug: params.topic,
        articles: topicArticles.data,
        infiniteLoading: true,
        page: 1
      });
    }
  },

  components: {
    ArticleList,
    TheSidebar,
    // InfiniteLoading,
    Smile,
    Spinner1
  },

  computed: {
    topic() {
      return find(this.$store.state.topics, {
        slug: this.$route.params.topic
      });
    },
    topicArticles() {
      return find(this.$store.state.topicArticles, {
        slug: this.$route.params.topic
      });
    },
    isLoadingMore() {
      return (
        this.topicArticles.infiniteLoading &&
        this.topicArticles.articles.length >= 10
      );
    }
  },

  head() {
    return {
      title: `${this.topic.name} | ${this.$store.state.meta.name}`,
      meta: [{ description: this.$store.state.meta.description }]
    };
  },

  methods: {
    moreArticles() {
      this.topicArticles.page++;

      this.$axios
        .get(
          `${
            this.$store.state.wordpressAPI
          }/wp/v2/posts?orderby=date&per_page=10&categories=${
            this.topic.id
          }&_embed&page=${this.topicArticles.page}`
        )
        .then(response => {
          this.topicArticles.articles = this.topicArticles.articles.concat(
            response.data
          );
          this.$refs.infiniteLoading.$emit("$InfiniteLoading:loaded");
        })
        .catch(() => {
          this.$refs.infiniteLoading.$emit("$InfiniteLoading:complete");
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.topic {
  display: flex;

  .articles {
    background-color: #efefef;
    padding: 0 32px;
    max-width: 900px;
    width: 100%;

    @media (max-width: 1000px) {
      max-width: none;
    }

    @media (max-width: 700px) {
      padding: 0 16px;
    }

    .article-list {
      margin: 32px 0;
    }
  }
}
</style>
