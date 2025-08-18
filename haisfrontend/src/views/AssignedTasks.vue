<template>
  <div class="assigned-tasks">
    <div class="page-header">
      <h1>Assigned Tasks</h1>
    </div>

    <div class="task-filters">
      <button class="filter-button">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h11M9 21V3m0 0l-6 6m6-6l6 6" />
        </svg>
        Priority
      </button>
      <button class="filter-button">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h11M9 21V3m0 0l-6 6m6-6l6 6" />
        </svg>
        Status
      </button>
      <button class="filter-button">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h11M9 21V3m0 0l-6 6m6-6l6 6" />
        </svg>
        Due Date
      </button>
    </div>

    <div class="tasks-container">
      <div class="task-card" v-for="task in tasks" :key="task.id">
        <div class="task-header">
          <div class="task-info">
            <h3>{{ task.title }}</h3>
            <p class="task-project">{{ task.project }}</p>
          </div>
          <div class="task-status">
            <span class="status-badge" :class="task.status">{{ getStatusText(task.status) }}</span>
          </div>
        </div>

        <div class="task-details">
          <p class="task-description">{{ task.description }}</p>

          <div class="task-meta">
            <div class="meta-item">
              <strong>Assigned by:</strong> {{ task.assignedBy }}
            </div>
            <div class="meta-item">
              <strong>Due Date:</strong> {{ formatDate(task.dueDate) }}
            </div>
            <div class="meta-item">
              <strong>Priority:</strong>
              <span class="priority-badge" :class="task.priority">{{ task.priority }}</span>
            </div>
          </div>
        </div>

        <div class="task-actions">
          <button v-if="task.status !== 'completed'" @click="completeTask(task.id)" class="btn btn-success">
            Mark as Completed
          </button>
          <span v-if="task.status === 'completed'" class="completed-label">Completed</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AssignedTasks',
  data() {
    return {
      selectedStatus: '',
      tasks: [
        {
          id: 1,
          title: 'Admin Website Development',
          project: 'Company Portal',
          description: 'Develop the admin dashboard with user management and analytics features.',
          assignedBy: 'Anuj Sharma',
          dueDate: '2025-08-05',
          status: 'in-progress',
          priority: 'high'
        },
        {
          id: 2,
          title: 'Maa Bala Sundari Ji Website',
          project: 'Religious Website',
          description: 'Create a responsive website for the temple with event management and donation features.',
          assignedBy: 'Anuj Sharma',
          dueDate: '2025-08-10',
          status: 'pending',
          priority: 'medium'
        },
        {
          id: 3,
          title: 'GJ Website Frontend',
          project: 'Corporate Website',
          description: 'Design and implement the frontend for the corporate website with modern UI/UX.',
          assignedBy: 'Manohar Thakur',
          dueDate: '2025-07-30',
          status: 'completed',
          priority: 'low'
        },
        {
          id: 4,
          title: 'Database Optimization',
          project: 'Performance Enhancement',
          description: 'Optimize database queries and improve overall application performance.',
          assignedBy: 'Anuj Sharma',
          dueDate: '2025-08-15',
          status: 'pending',
          priority: 'high'
        }
      ]
    }
  },
  computed: {
    filteredTasks() {
      if (!this.selectedStatus) {
        return this.tasks
      }
      return this.tasks.filter(task => task.status === this.selectedStatus)
    }
  },
  methods: {
    filterTasks() {
      // Filter logic is handled by computed property
    },
    startTask(taskId) {
      const task = this.tasks.find(t => t.id === taskId)
      if (task) {
        task.status = 'in-progress'
        alert(`Started working on: ${task.title}`)
      }
    },
    completeTask(taskId) {
      const task = this.tasks.find(t => t.id === taskId)
      if (task) {
        task.status = 'completed'
        alert(`Task completed: ${task.title}`)
      }
    },
    viewDetails(task) {
      alert(`Task Details:\n\nTitle: ${task.title}\nProject: ${task.project}\nDescription: ${task.description}\nDue Date: ${this.formatDate(task.dueDate)}`)
    },
    getStatusText(status) {
      const statusMap = {
        'pending': 'Pending',
        'in-progress': 'In Progress',
        'completed': 'Completed'
      }
      return statusMap[status] || status
    },
    formatDate(dateString) {
      const date = new Date(dateString)
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    }
  }
}
</script>

<style scoped>
.assigned-tasks {
  width: 100%;
  margin: 0 auto;
  padding: 1px 38px 24px;
  box-sizing: border-box;
}

.page-header {
  margin-bottom: 12px;
}

.page-header h1 {
  font-size: 24px;
  color: #1A8CAB;
  
}

.task-filters {
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
}

.filter-button {
  padding: 8px 16px;
  border: none;
  border-radius: 20px;
  background-color: #eaf6fb;
  color: #1A8CAB;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
}

.filter-button:hover {
  background-color: #d4eaf4;
}

.filter-button svg {
  width: 16px;
  height: 16px;
}

.tasks-container {
  display: flex;
  flex-direction: column;
  gap: 22px;
}

.task-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  background: #EAEAEA;
  border-radius: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25);
}

.task-card.completed .btn-success {
  width: auto;
  padding: 10px 20px;
  border-radius: 30px;
  font-size: 16px;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 8px;
  background: #28a745;
  color: white;
}

.task-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.task-info {
  flex: 1;
}

.task-info h3 {
  font-size: 18px;
  color: #333;
}

.task-project {
  font-size: 14px;
  color: #4a90e2;
}

.status-badge {
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  text-transform: uppercase;
}

.status-badge.new {
  background-color: #d1ecf1;
  color: #0c5460;
}

.status-badge.inprogress {
  background-color: #fff3cd;
  color: #856404;
}

.status-badge.completed {
  background-color: #d4edda;
  color: #155724;
}

.task-details {
  margin-bottom: 10px;
  width: 100%;
}

.task-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  color: #666;
}

.meta-item {
  margin-right: 20px;
}

.priority-badge {
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: bold;
  background: #f8d7da;
  color: #721c24;
}

.priority-badge.low {
  background: #FFFADC;
  color: #9C8500;
}
.priority-badge.medium {
  background: #ffd5a4;
  color: #7c4200;
}
.task-description {
  font-size: 16px;
  color: #555;
  margin-bottom: 20px;
}

.btn-success {
  background-color: #1A8CAB;
  color: #fff;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
}

.btn-success:hover {
  background-color: #1A8CAB;
}

.completed-label {
  background-color: #1A8CAB;
  color: #fff;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
}

.task-actions {
  display: flex;
  justify-content: flex-start; /* Align buttons to the left */
  gap: 10px;
  flex-wrap: wrap;
  margin-top: auto;
}
</style>
