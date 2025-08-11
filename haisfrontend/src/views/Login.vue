<template>
  <div class="login-container">
    <div class="login-header">
      <h1>Welcome to HAIS :)</h1>
    </div>
    <div class="login-content">
      <div class="login-image">
        <!-- Image placeholder -->
      </div>
      <div class="login-form">
        <h2>Login</h2>
        <form @submit.prevent="handleLogin">
          <div class="form-group">
            <label for="username">
              <span class="icon">👤</span>
              Username
            </label>
            <input type="text" id="username" v-model="username" placeholder="Username" required />
          </div>
          <div class="form-group">
            <label for="password">
              <span class="icon">🔒</span>
              Password
            </label>
            <input type="password" id="password" v-model="password" placeholder="Password" required />
          </div>
          <button type="submit" class="login-button">Login</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import api from '../api';
import { Roles } from '../constants/roles';

export default {
  name: 'LoginPage',
  setup() {
    const username = ref('');
    const password = ref('');

    const handleLogin = async () => {
      try {
        const response = await api.post('/api/OpenProject/login', {
          email: username.value,
          password: password.value,
        });

        const { token, user } = response.data;
        localStorage.setItem('isAuthenticated', true);
        localStorage.setItem('userRole', user.role);
        localStorage.setItem('token', token);

        // Redirect based on role
        if (user.role === Roles.Admin) {
          window.location.href = '/dashboard';
        } else if (user.role === Roles.User) {
          window.location.href = '/employee-dashboard';
        } else {
          alert('Unknown role. Please contact support.');
        }
      } catch (error) {
        alert('Invalid credentials. Please try again.');
      }
    };

    return {
      username,
      password,
      handleLogin,
    };
  },
};
</script>

<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f5f5f5;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.login-header {
  margin-bottom: 20px;
  text-align: center;
  color: #333;
}

.login-content {
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.login-image img {
  max-width: 300px;
  margin-right: 20px;
}

.login-form {
  max-width: 300px;
}

.login-form h2 {
  margin-bottom: 20px;
  color: #333;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  color: #555;
}

.form-group input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
}

.login-button {
  width: 100%;
  padding: 10px;
  background-color: #667eea;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
}

.login-button:hover {
  background-color: #764ba2;
}
</style>
