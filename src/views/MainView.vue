<template>
  <main class="container home-page">
    <div id="main_content">
      <div id="leftside_column"></div>

      <div class="center-column">
        <div id="posts">
          <div class="post" v-for="(post, index) in posts" :key="index">
            <div class="post_header">
              <span class="username">{{ post.accountName }}</span>
              <img :src="post.profileImage" alt="Profile" class="post_profile_pic" />
            </div>

            <div class="post_pic_div" v-if="post.postPic">
              <img :src="post.postPic" :alt="post.picAlt || 'Post image'" class="post_pic" />
            </div>
            <p v-html="post.postText"></p>
            <div class="like_button_div">
              <button class="like_button" @click="likePost(index)">
                <img src="../assets/images/thumbs-up.png" alt="Like" class="like_icon" />
              </button>
            </div>
            <div class="post_footer">
              <span>Likes: {{ post.likes || 0 }}</span>
              <p>{{ post.postDate }}</p>
            </div>
          </div>
        </div>

        <div class="reset-likes-container" style="text-align: center; margin: 20px 0;">
          <button class="submit-button" @click="resetLikes">Reset likes</button>
        </div>
      </div>

      <div id="rightside_column"></div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'MainView',
  computed: {
    posts() {
      return this.$store.getters.allPosts;
    }
  },
  methods: {
    likePost(index) {
      this.$store.commit('likePost', index);
    },
    resetLikes() {
      this.$store.commit('resetLikes');
    }
  },
  mounted() {
    if (this.posts.length === 0) {
      this.$store.dispatch('fetchPosts');
    }
  }
}
</script>