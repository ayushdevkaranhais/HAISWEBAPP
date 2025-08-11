<template>
  <aside class="sidebar">
    <div class="sidebar-header">
      <h2 class="logo">
        <span class="logo-text">high</span>
        <span class="logo-accent">(alt)</span>
      </h2>
    </div>

    <nav class="sidebar-nav">
      <ul class="nav-list">
        <!-- Common navigation items -->
        <li class="nav-item">
          <router-link :to="userRole === 'admin' ? '/' : '/employee-dashboard'" class="nav-link" :class="{ active: isActiveRoute(['/', '/employee-dashboard']) }">
            <span class="nav-icon">📊</span>
            Dashboard
          </router-link>
        </li>

        <!-- Admin-specific navigation items -->
        <template v-if="userRole === 'admin'">
          <li class="nav-item">
            <router-link to="/employees" class="nav-link" :class="{ active: $route.path === '/employees' }">
              <span class="nav-icon">👥</span>
              Employees
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/tasks" class="nav-link" :class="{ active: $route.path === '/tasks' }">
              <span class="nav-icon">⚙️</span>
              Create/Assign Task
            </router-link>
          </li>
        </template>

        <!-- Employee-specific navigation items -->
        <template v-if="userRole === 'user'">
          <li class="nav-item">
            <router-link to="/our-team" class="nav-link" :class="{ active: $route.path === '/our-team' }">
              <span class="nav-icon">👥</span>
              Our Team
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/assigned-tasks" class="nav-link" :class="{ active: $route.path === '/assigned-tasks' }">
              <span class="nav-icon">✔️</span>
              Assigned Tasks
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/add-day-logs" class="nav-link" :class="{ active: $route.path === '/add-day-logs' }">
              <span class="nav-icon">📝</span>
              Add Day Logs
            </router-link>
          </li>
        </template>

        <!-- Common navigation items -->
        <li class="nav-item">
          <router-link to="/leave" class="nav-link" :class="{ active: $route.path === '/leave' }">
            <span class="nav-icon">🌴</span>
            Leave
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/calendar" class="nav-link" :class="{ active: $route.path === '/calendar' }">
            <span class="nav-icon">📅</span>
            HAIS Calendar
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/day-logs" class="nav-link" :class="{ active: $route.path === '/day-logs' }">
            <span class="nav-icon">📝</span>
            Day Logs
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/profile" class="nav-link" :class="{ active: $route.path === '/profile' }">
            <span class="nav-icon">👤</span>
            My Profile
          </router-link>
        </li>
      </ul>

      <!-- Logout button -->
      <div class="logout-button">
        <button @click="handleLogout" class="logout">Logout</button>
      </div>
    </nav>
  </aside>
</template>

<script>
export default {
  name: 'AppSidebar',
  props: {
    userRole: {
      type: String,
      required: true
    }
  },
  methods: {
    isActiveRoute(routes) {
      return routes.includes(this.$route.path);
    },
    handleLogout() {
      localStorage.removeItem('isAuthenticated');
      localStorage.removeItem('userRole');
      this.$router.push('/');
    },
  },
};
</script>

<style scoped>
.sidebar {
  position: fixed;
  left: 0;
  top: 0;
  width: 250px;
  height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  z-index: 1000;
}

.sidebar-header {
  padding: 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.logo {
  font-size: 24px;
  font-weight: 300;
  margin: 0;
}

.logo-text {
  font-weight: 400;
}

.logo-accent {
  color: #64b5f6;
  font-weight: 300;
}

.sidebar-nav {
  padding: 20px 0;
}

.nav-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-item {
  margin: 0;
}

.nav-link {
  display: flex;
  align-items: center;
  padding: 12px 20px;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: all 0.3s ease;
  border-left: 3px solid transparent;
}

.nav-link:hover {
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
}

.nav-link.active {
  background-color: rgba(255, 255, 255, 0.15);
  border-left-color: #64b5f6;
  color: white;
}

.nav-icon {
  margin-right: 12px;
  font-size: 18px;
  width: 20px;
  text-align: center;
}

.logout-button {
  padding: 20px;
  text-align: center;
}

.logout {
  background-color: #ff4d4d;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
}

.logout:hover {
  background-color: #ff1a1a;
}

@media (max-width: 768px) {
  .sidebar {
    transform: translateX(-100%);
    transition: transform 0.3s ease;
  }

  .sidebar.open {
    transform: translateX(0);
  }
}
</style>

