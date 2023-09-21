import Vue from "vue";
import Vuex from "vuex";
import articles from "./articles";
import projects from "./projects";
import { categories as projectCategories } from "./projects";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    siteName: "Interior Design",
    articles,
    projects,
    projectCategories,
  },
  actions: {
    toggleFavoriteProject({ commit, getters: { getProjectById } }, id) {
      commit("_toggleFavoriteProject", { id, getProjectById });
    },
  },
  mutations: {
    _toggleFavoriteProject(_, { id, getProjectById }) {
      const project = getProjectById(id);
      project.isFavorite = !project.isFavorite;
    },
  },
  getters: {
    getById: (state) => (property, id) => {
      let result;

      for (const item of state[property]) {
        if (item.id === Number(id)) {
          result = item;
        }
      }

      return result;
    },
    getSiteName(state) {
      return state.siteName;
    },
    getArticles(state) {
      return state.articles;
    },
    getArticleById: (_, getters) => (articleId) => {
      return getters.getById("articles", articleId);
    },
    getProjects(state) {
      return state.projects;
    },
    getProjectById: (_, getters) => (projectId) => {
      return getters.getById("projects", projectId);
    },
    getProjectCategories(state) {
      return state.projectCategories;
    },
  },
});
