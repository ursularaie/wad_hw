<template>
  <div id="app" :class = "pageClass">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  computed: {
    pageClass() {
      if (this.$route.name === 'Main') return 'home-page'
      if (this.$route.name === 'Signup') return 'login-page'
      return ''
    }
  }
}
</script>
