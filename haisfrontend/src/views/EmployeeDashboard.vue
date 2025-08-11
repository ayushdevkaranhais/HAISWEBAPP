<template>
  <div class="employee-dashboard">
    <!-- Header Section -->
    <div class="dashboard-header">
      <div class="welcome-section">
        <h1>Hello, Shivangi!</h1>
        <p>Hope you are having a productive day :)</p>
      </div>
      <div class="user-avatar">
        <img src="https://via.placeholder.com/50x50/e91e63/ffffff?text=S" alt="User Avatar" />
      </div>
    </div>

    <!-- Main Dashboard Content -->
    <div class="dashboard-content">
      <!-- Top Row -->
      <div class="dashboard-row">
        <!-- Latest Assign Task -->
        <div class="dashboard-card latest-tasks-card">
          <div class="card-header">
            <h3>Latest Assign Task</h3>
            <button class="btn btn-link">Check More</button>
          </div>
          <div class="tasks-list">
            <div class="task-item" v-for="task in assignedTasks" :key="task.id">
              <div class="task-icon">⚙️</div>
              <span class="task-name">{{ task.name }}</span>
            </div>
          </div>
        </div>

        <!-- Add Leave -->
        <div class="dashboard-card add-leave-card">
          <h3>Add Leave</h3>
          <form @submit.prevent="submitLeave" class="leave-form">
            <div class="form-group">
              <select v-model="leaveForm.days" class="form-select">
                <option value="">Select Days</option>
                <option value="1">1 Day</option>
                <option value="2">2 Days</option>
                <option value="3">3 Days</option>
                <option value="5">5 Days</option>
              </select>
            </div>
            <div class="form-row">
              <div class="form-group">
                <input 
                  v-model="leaveForm.from" 
                  type="date" 
                  class="form-input"
                  placeholder="From"
                />
              </div>
              <div class="form-group">
                <input 
                  v-model="leaveForm.till" 
                  type="date" 
                  class="form-input"
                  placeholder="Till"
                />
              </div>
            </div>
            <div class="form-group">
              <select v-model="leaveForm.type" class="form-select">
                <option value="">Leave type</option>
                <option value="sick">Sick Leave</option>
                <option value="vacation">Vacation</option>
                <option value="personal">Personal Leave</option>
                <option value="emergency">Emergency Leave</option>
              </select>
            </div>
            <div class="form-group">
              <textarea 
                v-model="leaveForm.description" 
                placeholder="Leave Description"
                class="form-textarea"
                rows="3"
              ></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Update</button>
          </form>
        </div>
      </div>

      <!-- Add Today's Log Section -->
      <div class="dashboard-row">
        <div class="dashboard-card add-log-card">
          <h3>Add Today's Log</h3>
          <form @submit.prevent="addLog" class="log-form">
            <div class="form-row">
              <div class="form-group">
                <input 
                  v-model="logForm.date" 
                  type="date" 
                  class="form-input"
                />
              </div>
              <div class="form-group">
                <select v-model="logForm.project" class="form-select">
                  <option value="">Select Project</option>
                  <option value="admin-website">Admin Website</option>
                  <option value="maa-bala-sundari">Maa Bala Sundari Ji Website</option>
                  <option value="gj-website">GJ Website</option>
                </select>
              </div>
              <div class="form-group">
                <select v-model="logForm.subProject" class="form-select">
                  <option value="">Select Sub-project</option>
                  <option value="frontend">Frontend Development</option>
                  <option value="backend">Backend Development</option>
                  <option value="design">UI/UX Design</option>
                </select>
              </div>
              <div class="form-group">
                <select v-model="logForm.task" class="form-select">
                  <option value="">Select Task</option>
                  <option value="homepage">Homepage Development</option>
                  <option value="dashboard">Dashboard Creation</option>
                  <option value="testing">Testing & QA</option>
                </select>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group task-details">
                <textarea 
                  v-model="logForm.details" 
                  placeholder="Add Task details"
                  class="form-textarea"
                  rows="4"
                ></textarea>
              </div>
              <div class="form-group time-group">
                <input 
                  v-model="logForm.taskId" 
                  type="text" 
                  placeholder="Task Id"
                  class="form-input"
                />
                <div class="hours-spent">
                  <label>Hours Spent</label>
                  <input 
                    v-model="logForm.hoursSpent" 
                    type="number" 
                    step="0.5"
                    min="0"
                    max="24"
                    class="form-input hours-input"
                  />
                </div>
              </div>
            </div>
            <div class="log-actions">
              <button type="submit" class="btn btn-primary">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EmployeeDashboard',
  data() {
    return {
      assignedTasks: [
        { id: 1, name: 'Admin Website' },
        { id: 2, name: 'Maa Bala Sundari Ji Website' },
        { id: 3, name: 'GJ Website' }
      ],
      leaveForm: {
        days: '',
        from: '',
        till: '',
        type: '',
        description: ''
      },
      logForm: {
        date: new Date().toISOString().split('T')[0],
        project: '',
        subProject: '',
        task: '',
        details: '',
        taskId: '',
        hoursSpent: ''
      }
    }
  },
  methods: {
    submitLeave() {
      console.log('Submitting leave request:', this.leaveForm)
      // Add leave submission logic here
      alert('Leave request submitted successfully!')
      this.resetLeaveForm()
    },
    addLog() {
      console.log('Adding log entry:', this.logForm)
      // Add log entry logic here
      alert('Log entry added successfully!')
      this.resetLogForm()
    },
    resetLeaveForm() {
      this.leaveForm = {
        days: '',
        from: '',
        till: '',
        type: '',
        description: ''
      }
    },
    resetLogForm() {
      this.logForm = {
        date: new Date().toISOString().split('T')[0],
        project: '',
        subProject: '',
        task: '',
        details: '',
        taskId: '',
        hoursSpent: ''
      }
    }
  }
}
</script>

<style scoped>
.employee-dashboard {
  max-width: 1200px;
  margin: 0 auto;
}

.dashboard-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}

.welcome-section h1 {
  font-size: 28px;
  color: #333;
  margin: 0 0 5px 0;
}

.welcome-section p {
  color: #666;
  margin: 0;
}

.user-avatar img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.dashboard-content {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.dashboard-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 20px;
  align-items: start;
}

.dashboard-card {
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border: 1px solid #e0e0e0;
}

.dashboard-card h3 {
  margin: 0 0 20px 0;
  color: #333;
  font-size: 18px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.card-header h3 {
  margin: 0;
}

/* Tasks List */
.tasks-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.task-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 0;
}

.task-icon {
  font-size: 16px;
}

.task-name {
  color: #333;
  font-size: 14px;
}

/* Form Styles */
.form-group {
  margin-bottom: 15px;
  position: relative;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  margin-bottom: 15px;
}

.form-input,
.form-select,
.form-textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 14px;
  background: #f8f9fa;
}

.form-input:focus,
.form-select:focus,
.form-textarea:focus {
  outline: none;
  border-color: #4a90e2;
  background: white;
}

/* Button Styles */
.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.3s ease;
}

.btn-primary {
  background: #4a90e2;
  color: white;
}

.btn-primary:hover {
  background: #357abd;
}

.btn-link {
  background: transparent;
  color: #4a90e2;
  text-decoration: none;
  border: none;
  padding: 5px 10px;
}

/* Add Today's Log specific styles */
.add-log-card {
  grid-column: 1 / -1;
}

.task-details {
  grid-row: span 2;
}

.time-group {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.hours-spent label {
  display: block;
  margin-bottom: 8px;
  color: #333;
  font-weight: 500;
  font-size: 14px;
}

.hours-input {
  width: 100px;
}

.log-actions {
  display: flex;
  justify-content: flex-end;
  margin-top: 15px;
}

/* Leave form specific styles */
.add-leave-card {
  background: linear-gradient(135deg, #e3f2fd 0%, #f3e5f5 100%);
}

/* Responsive */
@media (max-width: 768px) {
  .dashboard-row {
    grid-template-columns: 1fr;
  }
  
  .form-row {
    grid-template-columns: 1fr;
  }
  
  .dashboard-header {
    flex-direction: column;
    text-align: center;
    gap: 15px;
  }
  
  .time-group {
    flex-direction: row;
    align-items: end;
  }
}
</style>
