import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import EmployeeDashboard from '../views/EmployeeDashboard.vue'
import Employees from '../views/Employees.vue'
import Tasks from '../views/Tasks.vue'
import Leave from '../views/Leave.vue'
import Calendar from '../views/Calendar.vue'
import DayLogs from '../views/DayLogs.vue'
import Profile from '../views/Profile.vue'
import OurTeam from '../views/OurTeam.vue'
import AssignedTasks from '../views/AssignedTasks.vue'
import Login from '../views/Login.vue'
import AddDayLogs from '../views/AddDayLogs.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/employee-dashboard',
    name: 'EmployeeDashboard',
    component: EmployeeDashboard
  },
  {
    path: '/employees',
    name: 'Employees',
    component: Employees
  },
  {
    path: '/our-team',
    name: 'OurTeam',
    component: OurTeam
  },
  {
    path: '/tasks',
    name: 'Tasks',
    component: Tasks
  },
  {
    path: '/assigned-tasks',
    name: 'AssignedTasks',
    component: AssignedTasks
  },
  {
    path: '/leave',
    name: 'Leave',
    component: Leave
  },
  {
    path: '/calendar',
    name: 'Calendar',
    component: Calendar
  },
  {
    path: '/day-logs',
    name: 'DayLogs',
    component: DayLogs
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/add-day-logs',
    name: 'AddDayLogs',
    component: AddDayLogs
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated');
  const userRole = localStorage.getItem('userRole');

  if (to.name !== 'Login' && !isAuthenticated) {
    next({ name: 'Login' });
  } else if (to.name === 'Login' && isAuthenticated) {
    next({ name: userRole === 'admin' ? 'Dashboard' : 'EmployeeDashboard' });
  } else {
    next();
  }
});

export default router
