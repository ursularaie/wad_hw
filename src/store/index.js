import { createStore } from 'vuex'

export default createStore({
  state: {
    posts: []
  },
  getters: {
    allPosts(state) {
      return state.posts;
    }
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts.map(post => ({
        ...post,
        likes: post.likes || 0
      }));
    },
    likePost(state, index) {
      state.posts[index].likes++;
    },
    resetLikes(state) {
      state.posts.forEach(post => {
        post.likes = 0;
      });
    }
  },
 actions: {
    async fetchPosts({ commit }) {
      try {
        const response = await fetch('/res/json/postsContent.json');
        const data = await response.json();
        // Access the "Posts" array from your JSON structure
        commit('setPosts', data.Posts);
      } catch (error) {
        console.error('Failed to load posts:', error);
      }
    }
  }
})