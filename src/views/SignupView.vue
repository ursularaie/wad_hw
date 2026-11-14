<template>
  <main class="container login-page">
    <section class="login-card">
      <h2>Welcome to PostIt</h2>
      <h3>Create an account</h3>

      <form @submit.prevent="handleSignup" class="login-form">
        <div class="field-group">
          <input type="email" v-model="email" placeholder="Email" required>
        </div>
        <div class="field-group">
          <input type="password" v-model="password" placeholder="Password" required>
        </div>
        
        <div v-if="passwordErrors.length > 0" style="color: #d9534f; font-size: 13px; text-align: left; width: 80%;">
          <p>the password is not valid -</p>
          <ul>
            <li v-for="(error, index) in passwordErrors" :key="index">{{ error }}</li>
          </ul>
        </div>

        <button type="submit" class="submit-button">Sign up</button>
      </form>
    </section>
  </main>
</template>

<script>
export default {
  name: 'SignupView',
  data() {
    return {
      email: '',
      password: '',
      passwordErrors: []
    }
  },
  methods: {
    validatePassword() {
      let errors = [];
      const pwd = this.password;

      if (pwd.length < 8 || pwd.length >= 15) {
        errors.push("Password length must be at least 8 and less than 15 characters");
      }
      if (!/[A-Z]/.test(pwd)) {
        errors.push("Password includes at least one uppercase alphabet character");
      }
      const lowercaseMatches = pwd.match(/[a-z]/g);
      if (!lowercaseMatches || lowercaseMatches.length < 2) {
        errors.push("Password includes at least two lowercase alphabet characters");
      }
      if (!/[0-9]/.test(pwd)) {
        errors.push("Password includes at least one numeric value");
      }
      if (pwd.length > 0 && !/^[A-Z]/.test(pwd)) {
        errors.push("Password should start with an uppercase letter");
      }
      if (!pwd.includes('_')) {
        errors.push("Password hould include the character '_'");
      }

      this.passwordErrors = errors;
      return errors.length === 0;
    },
    handleSignup() {
      if (this.validatePassword()) {
        alert("Signup successful!");
        this.$router.push('/');
      }
    }
  }
}
</script>