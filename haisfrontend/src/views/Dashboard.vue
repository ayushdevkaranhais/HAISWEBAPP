<template>
  <div class="dashboard">
    <!-- Header Section -->
    <div class="dashboard-header">
      <div class="welcome-section">
        <h1>Hello, Anuj!</h1>
        <p>Hope you are having a productive day :)</p>
      </div>
      <div class="user-avatar">
        <img src="https://via.placeholder.com/50x50/4a90e2/ffffff?text=A" alt="User Avatar" />
      </div>
    </div>

    <!-- Main Dashboard Content -->
    <div class="dashboard-content">
      <!-- Top Row -->
      <div class="dashboard-row">
        <!-- Create New Project -->
        <div class="dashboard-card create-project-card" style="height: 300px;">
          <h3>Create New Project</h3>
          <form @submit.prevent="createProject" class="project-form">
            <div class="form-group">
              <input 
                v-model="projectForm.name" 
                type="text" 
                placeholder="Name of the Project"
                class="form-input"
              />
            </div>
            <div class="form-group">
              <textarea 
                v-model="projectForm.description" 
                placeholder="Description"
                class="form-textarea"
                rows="3"
              ></textarea>
            </div>
            <button type="submit" class="btn btn-primary" style="float: right;">Create</button>
          </form>
        </div>

        <!-- Employees -->
        <div class="dashboard-card employees-card" style="height: 300px;">
          <div class="card-header">
            <h3>Employees</h3>
          </div>
          <div class="employees-list">
            <div class="employee-item" v-for="employee in employees" :key="employee.id">
              <img :src="employee.avatar" :alt="employee.name" class="employee-avatar" />
              <span class="employee-name">{{ employee.name }}</span>
            </div>
          </div>
          <button class="btn btn-primary" style="float: right;margin-top: 40px">All Employees</button>
        </div>

        <!-- Leave Applicants -->
        <div class="dashboard-card leave-card" style="height: 300px;">
          <h3>Leave Applicants</h3>
          <div class="leave-applicant">
            <img src="https://via.placeholder.com/40x40/4a90e2/ffffff?text=SK" alt="Shivangi Kumar" class="leave-avatar" />
            <p class="leave-name">Shivangi Kumar</p>
          </div>
           <div class="leave-info">
              <p class="leave-description">Leave description</p>
              <p class="leave-days">No. of days</p>
            </div>
          <div class="leave-actions" style="float: right;margin-top: 70px">
            <button class="btn btn-success">Approve</button>
            <button class="btn btn-danger">Deny</button>
          </div>
        </div>
      </div>

      <!-- Assign Task Section -->
      <div class="dashboard-row">
        <div class="dashboard-card assign-task-card">
          <div class="card-header">
            <h3>Assign Task</h3>
            <button class="btn btn-link">Create New Task</button>
          </div>
          <form @submit.prevent="assignTask" class="task-form">
            <div class="form-row">
              <div class="form-group">
                <input 
                  v-model="taskForm.startDate" 
                  type="date" 
                  class="form-input"
                />
              </div>
              <div class="form-group">
                <select v-model="taskForm.project" class="form-select">
                  <option value="">Select Project</option>
                  <option value="project1">Project 1</option>
                  <option value="project2">Project 2</option>
                </select>
              </div>
              <div class="form-group">
                <select v-model="taskForm.subProject" class="form-select">
                  <option value="">Select Sub-project</option>
                  <option value="sub1">Sub Project 1</option>
                  <option value="sub2">Sub Project 2</option>
                </select>
              </div>
              <div class="form-group">
                <input 
                  v-model="taskForm.assignees" 
                  type="text" 
                  placeholder="Add Assignees"
                  class="form-input"
                />
              </div>
            </div>
            <div class="form-row">
              <div class="form-group">
                <input 
                  v-model="taskForm.taskId" 
                  type="text" 
                  placeholder="Task Id"
                  class="form-input"
                />
              </div>
              <div class="form-group">
                <select v-model="taskForm.status" class="form-select">
                  <option value="">Status</option>
                  <option value="pending">Pending</option>
                  <option value="in-progress">In Progress</option>
                  <option value="completed">Completed</option>
                </select>
              </div>
              <div class="form-group">
                <input 
                  v-model="taskForm.dueDate" 
                  type="date" 
                  class="form-input"
                />
              </div>
              <div class="form-group task-description">
                <textarea 
                  v-model="taskForm.description" 
                  placeholder="Task Description"
                  class="form-textarea"
                  rows="3"
                ></textarea>
                <div class="task-actions">
                  <span class="save-icon">💾</span>
                  <button type="submit" class="btn btn-primary">Update</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashboardView',
  data() {
    return {
      projectForm: {
        name: '',
        description: ''
      },
      taskForm: {
        startDate: '',
        project: '',
        subProject: '',
        assignees: '',
        taskId: '',
        status: '',
        dueDate: '',
        description: ''
      },
      employees: [
        {
          id: 1,
          name: 'Girish Verma',
          avatar: 'https://via.placeholder.com/32x32/4a90e2/ffffff?text=GV'
        },
        {
          id: 2,
          name: 'Jitender Chauhan',
          avatar: 'https://via.placeholder.com/32x32/4a90e2/ffffff?text=JC'
        },
        {
          id: 3,
          name: 'Manohar Thakur',
          avatar: 'https://via.placeholder.com/32x32/4a90e2/ffffff?text=MT'
        }
      ]
    }
  },
  methods: {
    createProject() {
      console.log('Creating project:', this.projectForm)
      // Add project creation logic here
    },
    assignTask() {
      console.log('Assigning task:', this.taskForm)
      // Add task assignment logic here
    },
    handleFileUpload(event) {
      const file = event.target.files[0]
      console.log('File uploaded:', file)
      // Handle file upload logic here
    }
  }
}
</script>

<style scoped>
.dashboard {
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
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  align-items: start;
}

.dashboard-card {
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border: 1px solid #e0e0e0;
  height: 300px; /* Ensure consistent height for all cards */
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

/* Form Styles */
.form-group {
  margin-bottom: 15px;
  position: relative;
}

.form-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  margin-bottom: 15px;
}

.form-input,
.form-select,
.form-textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #e0e0e0;
  border-radius: 20px; /* Make fields curvy */
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

.add-icon {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #4a90e2;
  cursor: pointer;
}

.file-input {
  display: none;
}

.file-label {
  display: flex;
  align-items: center;
  padding: 12px;
  background: #f8f9fa;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  cursor: pointer;
  color: #666;
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
  border-radius: 20px; /* Ensure curvy button */
  padding: 10px 20px;
  font-size: 14px;
  border: none;
  cursor: pointer;
}

.btn-primary:hover {
  background: #357abd; /* Slightly darker shade on hover */
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

.btn-success {
  background: #28a745;
  color: white;
}

.btn-danger {
  background: #dc3545;
  color: white;
}

.btn-link {
  background: transparent;
  color: #4a90e2;
  text-decoration: none;
  border: none;
  padding: 5px 10px;
}

/* Employees List */
.employees-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.employee-item {
  display: flex;
  align-items: center;
  gap: 12px;
}

.employee-avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
}

.employee-name {
  color: #333;
  font-size: 14px;
}

/* Leave Applicants */
.leave-applicant {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 15px;
}

.leave-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.leave-info {
  flex: 1;
}

.leave-name {
  font-weight: 500;
  margin: 0 0 4px 0;
  color: #333;
}

.leave-description,
.leave-days {
  margin: 0;
  color: #666;
  font-size: 12px;
}

.leave-actions {
  display: flex;
  gap: 10px;
}

/* Task Form */
.assign-task-card {
  grid-column: 1 / -1;
}

.task-description {
  grid-column: 1 / -1;
}

.task-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}

.save-icon {
  font-size: 20px;
  cursor: pointer;
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

  .dashboard-card {
    height: auto; /* Adjust height for smaller screens */
  }
}
</style>
