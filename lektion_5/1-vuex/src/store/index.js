import { createStore } from 'vuex'

export default createStore({
  state: {
    posts: [{ id: 1, title: 'test'}, { id: 2, title: 'test 2'}]
  },
  getters: {
    posts: state => state.posts
  },
  mutations: {
    SET_POSTS: (state, data) => {
      state.posts = data
    }
  },
  actions: {
    getPosts: async ({ commit }) => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts')
      const data = await res.json()
      commit('SET_POSTS', data)
    }
  },
  modules: {
  }
})
