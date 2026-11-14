<template>
  <header class="header">
    <nav class="nav-bar">
      <ul class="nav-links">
        <li><router-link to="/" class="nav-link">Home</router-link></li>
        <li id="button_separator">|</li>
        <li><router-link to="/signup" class="nav-link">Signup</router-link></li>
      </ul>
    </nav>
    <div class="profile-container" @click="toggleDropdown">
      <img src="../assets/images/account.png" alt="profile" class="avatar" id="avatar-button">
      <div id="dropdown-menu" class="dropdown-menu" :class="{ hidden: isDropdownHidden }">
        <p class="dropdown-name">John Doe</p>
        <p class="dropdown-email">john.doe@ut.ee</p>
        <router-link to="/signup" class="dropdown-logout">Logout</router-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      isDropdownHidden: true
    }
  },
  methods: {
    toggleDropdown() {
      this.isDropdownHidden = !this.isDropdownHidden;
    }
  }
}
</script>