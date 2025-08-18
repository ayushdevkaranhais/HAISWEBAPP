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
        <template v-if="userRole === 'user'">
          <li class="nav-item">
            <router-link to="/add-day-logs" class="nav-link" :class="{ active: $route.path === '/add-day-logs' }">
              <span class="nav-icon">📝</span>
              Add Day Logs
            </router-link>
          </li>
        </template>
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
        <li class="nav-item">
          <a href="#" class="nav-link" @click.prevent="handleLogout">
            <span class="nav-icon">🚪</span>
            Logout
          </a>
        </li>
      </ul>
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
  background-color: #F0F0F0; /* Updated color */
  color: #111;
  z-index: 1000;
  
}

.sidebar, .sidebar * {
  color: #111 !important;
}

.sidebar-header {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding:  10px 19px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.logo {
  font-size: 35px;
  
}

.logo-text {
  font-weight: normal;
}

.logo-accent {
  color: #1A8CAB !important;
  font-weight: normal;
}

.sidebar-nav {
  padding: 20px 0 0 0;
}

.nav-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-item {
  margin: 3px 0; /* Reduced gap between nav links */
}

.nav-link {
  display: flex;
  align-items: center;
  padding: 4px 20px;
  color: #111 !important;
  text-decoration: none;
  transition: all 0.25s cubic-bezier(.4,2,.3,1);
  border-left: 0px solid transparent;
  border-radius: 5px;
  margin-bottom: 11px;
  font-size: 14px;
  font-weight: normal;
  letter-spacing: 1px;
  box-shadow: none;
  background: transparent;
}

.nav-link:hover {
  background: #1a8cab9c !important;
  color: #ffffff !important;
  transform: translateX(1px) scale(1.06);
  box-shadow: 0 2px 16px 0 rgba(85, 84, 84, 0.13);
  border-top-right-radius: 40px;
  border-bottom-right-radius: 40px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.nav-link.active {
  background: #1A8CAB !important;
  border-left: 3px solid #1A8CAB;
  color: #ffffff !important;
  transform: scale(1.07);
  border-top-right-radius: 40px;
  border-bottom-right-radius: 40px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

/* Added gap between nav icons and nav links */
.nav-icon {
  margin-left: 0px;
  margin-right: 15px; /* Increased gap */
  font-size: 18px;
  width: 20px;
  text-align: center;
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