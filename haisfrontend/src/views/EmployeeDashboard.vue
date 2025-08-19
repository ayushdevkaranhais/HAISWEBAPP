<template>
  <div class="dashboard">
    <!-- Header Section -->
    <div class="dashboard-header">
      <div class="welcome-section">
        <h1 class="dashboard-title">Hello, Shivangi!</h1>
        <p class="dashboard-subtitle">Hope you are having a productive day :)</p>
      </div>
      <div class="user-avatar">
        <img src="https://randomuser.me/api/portraits/women/45.jpg" alt="User Avatar" class="avatar-img" />
      </div>
    </div>

    <!-- Top Cards -->
    <div class="dashboard-row top-cards">
      
      <!-- Latest Assign Task -->
      <div class="latest-task-card">
        <h3>Latest Assign Task</h3>
        <ul class="task-list">
          <li class="task-item">
            <span class="task-icon">⚙️</span>
            Admin Website
          </li>
          <li class="task-item">
            <span class="task-icon">⚙️</span>
            Maa Bala Sundari Ji Website
          </li>
          <li class="task-item">
            <span class="task-icon">⚙️</span>
            Gj Website
          </li>
        </ul>
        <div class="card-actions">
          <button class="btn btn-primary" @click="navigateTo('assigned-tasks')">Check More</button>
        </div>
      </div>

      <!-- Add Leave -->
      <div class="add-leave-card">
        <h3>Add Leave</h3>
        <div class="form-row">
          <input type="number" v-model="newLeave.days" placeholder="No. of Days" class="form-input" min="1" max="10" />
          <input type="date" v-model="newLeave.from" class="form-input" />
          <input type="date" v-model="newLeave.till" class="form-input" />
          <select v-model="newLeave.leaveType" class="form-input">
            <option value="">Leave Type</option>
            <option value="Casual">Casual</option>
            <option value="Sick">Sick</option>
          </select>
        </div>
        <input type="text" v-model="newLeave.reason" class="form-input full" placeholder="Leave Description" />
        <div class="form-action">
          <button class="btn btn-primary" @click="submitLeave">Apply</button>
        </div>
      </div>
    </div>

    <!-- Add Today's Log -->
    <div class="dashboard-row">
      <div class="add-log-card">
        <h3>Add Today's Log</h3>
        <form @submit.prevent="submitLog">
          <div class="form-row">
            <input type="date" class="form-input" />
            <select class="form-select">
              <option>Select Project</option>
            </select>
            <select class="form-select">
              <option>Select Sub-project</option>
            </select>
            <select class="form-select">
              <option>Select Task</option>
            </select>
          </div>
          <div class="form-row">
            <input type="text" placeholder="Add Task details" class="form-input" />
            <input type="text" placeholder="Task id" class="form-input" />
            <input type="text" placeholder="Hours Spend" class="form-input" />
          </div>
          <div class="card-actions">
            <button type="submit" class="btn btn-primary">Update</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EmployeeDashboard',
  data() {
    return {
      currentUser: 'Ayush Devkaran', // Simulated current user
      newLeave: {
        days: '',
        from: '',
        till: '',
        leaveType: '',
        reason: ''
      },
      leaveApplications: [], // Shared leave applications array
      assignedTasks: [
        { id: 1, name: 'Admin Website' },
        { id: 2, name: 'Maa Bala Sundari Ji Website' },
        { id: 3, name: 'GJ Website' }
      ],
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
      if (!this.newLeave.reason || !this.newLeave.days) {
        alert('Please add all fields.');
        return;
      }
      const newApplication = {
        id: this.leaveApplications.length + 1,
        employeeName: this.currentUser, // Automatically use the current user's name
        ...this.newLeave,
        status: 'Pending'
      };
      this.leaveApplications.push(newApplication);
      this.resetForm();
    },
    addLog() {
      console.log('Adding log entry:', this.logForm)
      // Add log entry logic here
      alert('Log entry added successfully!')
      this.resetLogForm()
    },
    resetForm() {
      this.newLeave = {
        days: '',
        from: '',
        till: '',
        leaveType: '',
        reason: ''
      };
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

.dashboard-title {
  font-size: 24px;
  font-weight: normal;
  color: #333;
}

.dashboard-subtitle {
  font-size: 14px;
  color: #666;
  margin-top: 4px;
}

.user-avatar img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.dashboard-content {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.dashboard-row {
  display: grid;
  grid-template-columns: 1fr;
  gap: 22px;
  margin-top: 22px;
}

.dashboard-card {
  background: white;
  border-radius: 16px;
  padding: 20px;
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
  gap: 12px;
}

.unified-card {
  background: linear-gradient(135deg, #dbf6f3, #eaeaea8a);
}

.assign-task-card {
  background: linear-gradient(135deg, #d6ecf4, #eaeaea8a);
  width: 100%;
}

/* Buttons */
.btn {
  padding: 8px 20px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  border: none;
  transition: all 0.3s ease;
}
.btn-primary {
  background-color: #1A8CAB;
  color: white;
}
.btn-primary:hover {
  background-color: #0a5158;
}

/* Form elements */
.form-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 12px;
  margin-bottom: 15px;
}

.form-input,
.form-select {
  width: 100%;
  padding: 6px 10px; /* Further reduced padding */
  border: 1px solid #d0d5dd;
  border-radius: 15px; /* More compact border radius */
  font-size: 10px; /* Smaller font size */
  background-color: transparent;
  color: #3b3b3bda;
  outline: none;
  transition: border 0.3s ease;
}
.form-input:focus,
.form-select:focus {
  border-color: #000000b9;
}

/* Adjusted left padding for all user input boxes in Add Leave card */
.add-leave-card .form-input,
.add-leave-card .form-select {
  padding-left: 10px; /* Set left padding */
  margin-left: 6px; /* Added left margin for spacing */
}

/* Adjusted left padding for all user input boxes in Add Today's Log card */
.add-log-card .form-input,
.add-log-card .form-select {
  padding-left: 10px; /* Set consistent left padding */
  
}

/* Task list */
.task-list {
  list-style: none;
  padding: 0;
  margin: 10px 0 20px;
}
.task-item {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 8px;
  color: #333;
  font-size: 15px;
}
.task-icon {
  font-size: 16px;
  
}
.latest-task-card {
  width: 313px;
  height: 268px;
  background: linear-gradient(135deg, #D6ECF4, rgba(234, 234, 234, 0.54));
  border-radius: 16px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

/* Updated font-weight and font-size for Latest Assign Task */
.latest-task-card h3 {
  font-weight: normal;
  font-size: 20px;
  padding-left: 8px; /* Added left padding for spacing */
}

/* Further reduced margin-bottom between Latest Assign Task heading and its content */
.latest-task-card h3 {
  margin-bottom: 4px; /* Further reduced margin */
}

.add-leave-card {
  flex: 1;
  background: linear-gradient(135deg, #D6ECF4, rgba(234, 234, 234, 0.54));
  height: 268px;
  border-radius: 16px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 268px;
}

.add-leave-card h3 {
  font-weight: normal;
  font-size: 20px;
  margin-bottom: 12px; /* Added gap for better visual appeal */
  padding-left: 9px; /* Added left padding for spacing */
}

/* Reduced margin-bottom between Add Leave and input fields */
.add-leave-card .form-row {
  margin-bottom: 18px; /* Reduced margin */
  gap: 10px; /* Add proper gap between input boxes */
}

.add-leave-card .form-input[placeholder="Leave Description"] {
  height: 39px; /* Increase height of leave description input box */
}

.task-list {
  list-style: none;
  padding: 0;
  margin: 10px 0;
}

.task-item {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
  font-size: 14px;
  
}

.task-icon {
  font-size: 16px;
}

.top-cards {
  display: flex;
  gap: 22px;
  flex-wrap: wrap;
}

.card-actions {
  margin-top: auto;
  display: flex;
  justify-content: flex-end;
}

.add-log-card {
  width: 100%;
  max-width: 100%;
  min-width: 320px;
  height: auto;
  background: linear-gradient(135deg, #DDE5F8, rgba(234, 234, 234, 0.54));
  border-radius: 16px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
}

/* Ensured responsiveness for Add Leave and Add Today's Log cards */
.add-leave-card,
.add-log-card {
  flex: 1;
  min-width: 300px; /* Set a minimum width for responsiveness */
  max-width: 100%; /* Allow cards to scale within the container */
  box-sizing: border-box; /* Ensure padding and border are included in width */
}

/* Adjusting gap between all card headings and their content */
.latest-task-card h3,
.add-leave-card h3,
.add-log-card h3 {
  margin-bottom: 15px; /* Updated to look impressive */
}

.add-leave-card h3 {
  margin-bottom: 1px;
}

/* Adding gap between heading and content in Assign Task card */
.latest-task-card h3 {
  margin-bottom: 15px; /* Added gap for better visual appeal */
}


@media (min-width: 1200px) {
  .add-log-card {
    padding: 32px 48px;
  }
  .add-log-card .form-row {
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
  }
  .add-log-card form {
    max-width: 100%;
  }
}

@media (min-width: 1600px) {
  .add-log-card {
    padding: 40px 64px;
  }
}

.add-log-card h3 {
font-weight: normal;
  font-size: 20px;
  margin-bottom: 20px; /* Added gap for better visual appeal */

}

.add-log-card .form-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  margin-bottom: 15px;
}

.add-leave-card .card-actions {
  margin-top: auto;
  display: flex;
  justify-content: flex-end;
}
.add-log-card .card-actions {
  margin-top: auto;
  display: flex;
  justify-content: flex end;
}


/* Adjusted left padding for Add Today's Log card heading */
.add-log-card h3 {
  padding-left: 8px; /* Added left padding for spacing */
  margin-left: 6px; /* Added left margin for spacing */
}

/* Reduced gap between Add Today's Log heading and card header */
.add-log-card h3 {
  margin-bottom: 20px; /* Adjusted to match Add Leave card */
}
</style>

