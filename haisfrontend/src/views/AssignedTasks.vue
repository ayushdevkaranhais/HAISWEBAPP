<template>
  <div class="assigned-tasks">
    <div class="page-header">
      <h1>Assigned Tasks</h1>
      <div class="task-filters">
        <select v-model="selectedStatus" @change="filterTasks" class="filter-select">
          <option value="">All Tasks</option>
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </div>
    </div>
    
    <div class="tasks-container">
      <div class="task-card" v-for="task in filteredTasks" :key="task.id">
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
          <button 
            v-if="task.status === 'pending'" 
            @click="startTask(task.id)" 
            class="btn btn-primary"
          >
            Start Task
          </button>
          <button 
            v-if="task.status === 'in-progress'" 
            @click="completeTask(task.id)" 
            class="btn btn-success"
          >
            Mark Complete
          </button>
          <button @click="viewDetails(task)" class="btn btn-outline">View Details</button>
        </div>
      </div>
      
      <div v-if="filteredTasks.length === 0" class="no-tasks">
        <h3>No tasks found</h3>
        <p>{{ selectedStatus ? `No ${selectedStatus} tasks at the moment.` : 'No tasks assigned yet.' }}</p>
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
  max-width: 1000px;
  margin: 0 auto;
}

.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}

.page-header h1 {
  color: #333;
  margin: 0;
}

.task-filters {
  display: flex;
  gap: 15px;
}

.filter-select {
  padding: 8px 12px;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  background: white;
  font-size: 14px;
}

.tasks-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.task-card {
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border: 1px solid #e0e0e0;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.task-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}

.task-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 15px;
}

.task-info h3 {
  margin: 0 0 5px 0;
  color: #333;
  font-size: 20px;
}

.task-project {
  margin: 0;
  color: #4a90e2;
  font-size: 14px;
  font-weight: 500;
}

.status-badge {
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
}

.status-badge.pending {
  background: #fff3cd;
  color: #856404;
}

.status-badge.in-progress {
  background: #d1ecf1;
  color: #0c5460;
}

.status-badge.completed {
  background: #d4edda;
  color: #155724;
}

.task-description {
  color: #555;
  line-height: 1.6;
  margin-bottom: 20px;
}

.task-meta {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  margin-bottom: 20px;
}

.meta-item {
  font-size: 14px;
  color: #666;
}

.meta-item strong {
  color: #333;
}

.priority-badge {
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 11px;
  font-weight: 500;
  text-transform: uppercase;
}

.priority-badge.high {
  background: #f8d7da;
  color: #721c24;
}

.priority-badge.medium {
  background: #fff3cd;
  color: #856404;
}

.priority-badge.low {
  background: #d1ecf1;
  color: #0c5460;
}

.task-actions {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.btn {
  padding: 8px 16px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.btn-primary {
  background: #4a90e2;
  color: white;
}

.btn-primary:hover {
  background: #357abd;
}

.btn-success {
  background: #28a745;
  color: white;
}

.btn-success:hover {
  background: #218838;
}

.btn-outline {
  background: transparent;
  border: 1px solid #4a90e2;
  color: #4a90e2;
}

.btn-outline:hover {
  background: #4a90e2;
  color: white;
}

.no-tasks {
  text-align: center;
  padding: 60px 20px;
  color: #666;
}

.no-tasks h3 {
  margin: 0 0 10px 0;
  color: #999;
}

@media (max-width: 768px) {
  .page-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
  }
  
  .task-header {
    flex-direction: column;
    gap: 10px;
  }
  
  .task-meta {
    grid-template-columns: 1fr;
  }
  
  .task-actions {
    justify-content: flex-start;
  }
}
</style>
