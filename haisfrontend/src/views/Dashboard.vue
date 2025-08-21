<template>
  <div class="dashboard">
    <!-- Header Section -->
    <div class="dashboard-header">
      <div class="welcome-section">
        <h1 class="dashboard-title">Hello, Anuj!</h1>
        <p class="dashboard-subtitle">Hope you are having a productive day :)</p>
      </div>
      <div class="user-avatar">
        <img src="https://via.placeholder.com/50x50/4a90e2/ffffff?text=A" alt="User Avatar" class="avatar-img" />
      </div>
    </div>

    <!-- Main Dashboard Content -->
    <div class="dashboard-content">
      <!-- Top 3 Cards in a Row -->
      <div class="dashboard-row top-cards">
        <!-- Create New Project -->
        <div class="dashboard-card unified-card">
          <h3>Create New Project</h3>
          <form @submit.prevent="createProject" class="project-form">
            <div class="form-group">
              <input v-model="projectForm.name" type="text" placeholder="Name of the Project" class="form-input" />
            </div>
            <div class="form-group">
              <textarea v-model="projectForm.description" placeholder="Description" class="form-textarea" rows="4"></textarea>
            </div>
            <div class="card-actions">
              <button type="submit" class="btn btn-primary">Create</button>
            </div>
          </form>
        </div>

        <!-- Employees -->
        <div class="dashboard-card employee-card">
          <h3>Employees</h3>
          <div class="employee-list">
            <div class="employee-row" v-for="employee in employees" :key="employee.id">
              <img :src="employee.avatar" :alt="employee.name" class="employee-avatar" />
              <span class="employee-name">{{ employee.name }}</span>
            </div>
          </div>
          <div class="card-actions">
            <button class="btn btn-employees">All Employees</button>
          </div>
        </div>

        <!-- Leave Applicants -->
        <div class="dashboard-card leave-applicant-card">
          <h3>Leave Applicants</h3>
          <div class="leave-details">
            <img
              src="https://randomuser.me/api/portraits/women/45.jpg"
              alt="Shivangi Kumar"
              class="leave-avatar"
            />
            <div class="leave-info">
              <p class="leave-name">Shivangi Kumar</p>
              <p class="leave-description">Leave description</p>
              <p class="leave-days">No. of days</p>
            </div>
          </div>
          <div class="card-actions">
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
                <input v-model="taskForm.startDate" type="date" class="form-input" />
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
                <input v-model="taskForm.assignees" type="text" placeholder="Add Assignees" class="form-input" />
              </div>
            </div>
            <div class="form-row">
              <div class="form-group">
                <input v-model="taskForm.taskId" type="text" placeholder="Task Id" class="form-input" />
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
                <input v-model="taskForm.dueDate" type="date" class="form-input" />
              </div>
              <div class="form-group task-description">
                <textarea v-model="taskForm.description" placeholder="Task Description" class="form-textarea" rows="3"></textarea>
              </div>
            </div>
            <div class="card-actions">
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
          avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
        },
        {
          id: 2,
          name: 'Jitender Chauhan',
          avatar: 'https://randomuser.me/api/portraits/men/33.jpg'
        },
        {
          id: 3,
          name: 'Manohar Thakur',
          avatar: 'https://randomuser.me/api/portraits/men/34.jpg'
        }
      ]
    };
  },
  methods: {
    createProject() {
      console.log('Creating project:', this.projectForm);
    },
    assignTask() {
      console.log('Assigning task:', this.taskForm);
    }
  }
};
</script>

<style scoped>
.dashboard {
  width: 100%;
  margin: 0 auto;
  padding: 18px 38px 25px;
  box-sizing: border-box;
  background-color: #F0F0F0; /* Updated background color for the dashboard */
}

.dashboard-header {
 display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 38px;
  flex-wrap: wrap;
}

.welcome-section h1.dashboard-title {
  font-size: 24px;
  font-weight: normal;
  color: #333;
}

.welcome-section p.dashboard-subtitle {
  font-size: 14px;
  color: #666;
  margin-top: 4px;
}

.user-avatar {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.user-avatar img {
 width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* ...your existing styles below remain unchanged */

.dashboard-content {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.dashboard-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 22px;
}

.top-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 22px;
}

.dashboard-card {
  background: white;
  border-radius: 16px;
  padding: 20px;
  padding-left: 30px;
  padding-right: 30px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.05);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;

}

.card-actions {
  display: flex;
  justify-content: flex-end;
  margin-top: auto;
  margin-top: 5px;
}
.card-actions {
  margin-top: auto;
  display: flex;
  justify-content: flex-end;
  gap: 12px;
}
.unified-card {
  background: linear-gradient(135deg, #FEF4DF, #EAEAEA8A);
}

.unified-card:nth-child(3) {
  background: linear-gradient(135deg, #DBF6F3, #EAEAEA8A);
}

.assign-task-card {
  background: linear-gradient(135deg, #D6ECF4, #EAEAEA8A);
  width: 100%;
}

/* Add spacing between input and textarea in Create Project */
.project-form .form-group + .form-group {
  margin-top: 12px;
}

/* Add space between Create button and description box in Create New Project card */
.project-form .card-actions {
  margin-top: 25px; /* Add spacing */
}

/* Reduce the size of the description box in Create New Project card */
.project-form .form-textarea {
  height: 65px; /* Reduce height */
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.form-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  margin-bottom: 15px;
}

/* Inputs, selects, textareas */
.form-input,
.form-select,
.form-textarea {
  width: 100%;
  padding: 6px 10px;
  border: 1px solid #d0d5dd;
  border-radius: 15px;
  border-color: #3333333d;
  font-size: 10px;
  background-color: transparent; 
  color: #333;
  resize: none;
  outline: none;
  box-shadow: none;
  color: #3b3b3ba4;
  transition: border 0.3s ease;
}

.form-input:focus,
.form-select:focus,
.form-textarea:focus {
  border-color: #000000b9; /* Optional: blue border on focus */
}

.project-form .form-textarea {
  border-radius: 16px;
  padding: 14px 18px;
  background-color: transparent;
}

.task-description {
  grid-column: 1 / -1;
}

.task-actions {
  margin-top: 10px;
  display: flex;
  justify-content: flex-end;
}

/* === Button Styling Updated === */

.btn {
  padding: 8px 20px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  border: none;
  transition: all 0.3s ease;
}

/* Primary (Create, Update) */
.btn-primary {
  background-color: #1A8CAB;
  color: white;
}
.btn-primary:hover {
  background-color: #0a5158;
}

/* Employees */
.btn-employees {
  padding: 8px 20px;
  border-radius: 20px;
  cursor: pointer;
  background-color: #1A8CAB;
  color: white;
  font-size: 14px;
  font-weight: 500;
  border: none;
  transition: all 0.3s ease;
}
.btn-employees:hover {
  background-color: #0a5158;
  
}

/* Approve */
.btn-success {
  background: #27912b;
  color: white;
  padding: 8px 20px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
}
.btn-success:hover {
  background: #0c6611;
}

/* Deny */
.btn-danger {
  background: #f44336;
  color: white;
  padding: 8px 20px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
}
.btn-danger:hover {
  background: #8a1515;
}

/* Link button */
.btn-link {
  background: transparent;
  color: #0a0a0a;
  font-weight: 600;
  text-decoration: underline;
  padding: 6px 12px;
  font-size: 14px;
  margin-bottom: 22px; /* Added gap for better visual appeal */
}
.btn-link:hover {
  color: #353535;
}

.employee-card {
  background: linear-gradient(135deg, #d6ecf4, #ffffff);
  padding: 20px;
  padding-left: 30px;
  padding-right: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.employee-list {
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.employee-row {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: -4px; /* Decreased gap */
}

.employee-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
}

.employee-name {
  font-size: 13px; /* Reduced font size */
  font-weight: normal;
  color: #333;
}

.employee-footer {
  margin-top: auto;
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
}

.leave-applicant-card {
  background: linear-gradient(135deg, #dbf6f3, #eaeaea8a);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  padding-left: 30px;
  padding-right: 30px;
  min-height: 268px;
}

.leave-details {
  display: flex;
  align-items: center;
  gap: 25px;
  margin: 20px 0;
}

.leave-avatar {
 width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-top: -55px; /* Reduced top margin */
}

.leave-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  font-size: 13px;
  color: #333;
  margin-top: 6px;
}

.leave-info .leave-description,
.leave-info .leave-days {
  font-weight: normal; /* Normal weight */
  font-size: 14px; /* Bold font size */
}

.leave-info .leave-name {
  margin-bottom: 10px; /* Added gap */
}

.leave-name {
  font-weight: normal;
  font-size: 13px;
}

.leave-actions {
  display: flex;
  justify-content: flex-start;
  gap: 12px;
  margin-top: auto;
}


/* Adding gap between heading and content in Assign Task card */
.assign-task-card h3 {
  margin-bottom: 25px; /* Added gap for better visual appeal */
}

/* Add gap between Assign Task headings and input boxes */
.assign-task-card .form-group label {
  margin-bottom: 18px; /* Add spacing below headings */
  display: block; /* Ensure label is on its own line */
}

/* Set font weight of all card headings to normal */
.dashboard-card h3 {
  font-weight: normal;
}

@media (max-width: 768px) {
  .dashboard-header {
    flex-direction: column;
    text-align: center;
    gap: 15px;
  }

  .task-actions {
    flex-direction: column;
    align-items: stretch;
  }

  .btn + .btn {
    margin-top: 10px;
  }

  .dashboard {
    padding: 16px;
  }
}
</style>

