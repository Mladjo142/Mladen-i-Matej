
import Vue from "vue";
import Vuex from "vuex";
import { fetchNews } from "@/services/api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cancelTokens: [],
    news: [],
    lastPage: 0,
    query: "",
    currentDate: "",
    currentPage: 1,
    isError: false,
    isLoading: false,
    usersList: [
      {
        id: 1,
        email: 'jhone@gmail.com',
        firstName: 'Jhone',
        lastName: 'Doe',
        office: 'Tech Company',
        phone: '0167712112',
      },
      {
        id: 2,
        email: 'rita@yahoo.com',
        firstName: 'Oni',
        lastName: 'Rita',
        office: 'BB Tech',
        phone: '+11 028372923',
      },
      {
        id: 3,
        email: 'James@mailora.com',
        firstName: 'Mr',
        lastName: 'James',
        office: 'Omen Care',
        phone: '+66 038372923',
      },
      {
        id: 4,
        email: 'khalidhasan@gmail.com',
        firstName: 'Khalid',
        lastName: 'Hasan',
        office: 'Drug Supply Gram',
        phone: '01762136217',
      },
    ],
  },
  mutations: {
 
    ADD_CANCEL_TOKEN(state, token) {
      state.cancelTokens.push(token);
    },
    CLEAR_CANCEL_TOKENS(state) {
      state.cancelTokens = [];
    },
    SET_QUERY(state, query) {
      state.query = query;
    },
    SET_CURRENT_DATE(state, date) {
      state.currentDate = date;
    },
    SET_CURRENT_PAGE(state, page) {
      state.currentPage = page;
    },
    SET_NEWS(state, news) {
      state.news = news;
    },
    SET_LAST_PAGE(state, lastPage) {
      state.lastPage = lastPage;
    },
    SET_ERROR(state, isError) {
      state.isError = isError;
    },
    SET_LOADING(state, isLoading) {
      state.isLoading = isLoading;
    },

    deleteUser(state, id) {
      const index = state.usersList
        .map((x) => {
          return x.id
        })
        .indexOf(id)
      state.usersList.splice(index, 1)
    },
    addUser(state, obj) {
      const contact = {
        id: Date.now(),
        ...obj,
      }
      state.usersList.push(contact)
    },

    editUser(state, item) {
      const items = state.usersList
      var foundIndex = items.findIndex((x) => x.id == item.id)
      items[foundIndex] = item
    },
  },
  actions: {
    CANCEL_PENDING_REQUESTS({ state }) {
      state.cancelTokens.forEach(request => {
        if (request.cancel) {
          request.cancel();
        }
      });

     
    },
    async FETCH_NEWS_LIST(
      { state, commit },
      {
        query = state.query,
        page = state.currentPage,
        date = state.currentDate
      }
    ) {
      commit("SET_ERROR", false);
      commit("SET_LOADING", true);
      commit("SET_QUERY", query);
      commit("SET_CURRENT_DATE", date);
      commit("SET_CURRENT_PAGE", page);

      const { news, lastPage, isError, isLoading } = await fetchNews(
        query,
        page,
        date
      );

      commit("SET_NEWS", news);
      commit("SET_LAST_PAGE", lastPage);
      commit("SET_ERROR", isError);
      commit("SET_LOADING", isLoading);
    },
    RESET_SEARCH_FIELDS({ commit }) {
      commit("SET_QUERY", "");
      commit("SET_CURRENT_DATE", "");
      commit("SET_CURRENT_PAGE", 1);
    }
  },
  modules: {},
  getters:{
    userList: (state) => {
      return state.usersList
    },
    fetchNews:(state)=>{
      return state.news
    }
  }
});