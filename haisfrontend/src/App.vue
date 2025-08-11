<template>
  <div id="app">
    <div class="app-container">
      <template v-if="$route.name !== 'Login'">
        <Sidebar :userRole="userRole" />
      </template>
      <main class="main-content" :style="$route.name === 'Login' ? 'margin-left: 0;' : ''">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue';
import { ref, onMounted } from 'vue';

export default {
  name: 'App',
  components: {
    Sidebar,
  },
  setup() {
    const userRole = ref('');

    onMounted(() => {
      userRole.value = localStorage.getItem('userRole') || '';
    });

    return {
      userRole,
    };
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background-color: #f5f5f5;
}

.app-container {
  display: flex;
  min-height: 100vh;
}

.main-content {
  flex: 1;
  padding: 20px;
  margin-left: 250px;
}

@media (max-width: 768px) {
  .main-content {
    margin-left: 0;
    padding: 10px;
  }
}
</style>
