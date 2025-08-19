<template>
  <div class="day-logs">
    <div class="page-header">
      <h1>Day Logs</h1>
    </div>
    <div class="dashboard-content">
      <div class="dashboard-card">
        <table class="log-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Project</th>
              <th>Sub-Project</th>
              <th>Task</th>
              <th>Task ID</th>
              <th>Description</th>
              <th>Hours Spent</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="log in logs" :key="log.id">
              <td>{{ log.date }}</td>
              <td>{{ log.project }}</td>
              <td>{{ log.subProject }}</td>
              <td>{{ log.task }}</td>
              <td>{{ log.taskId }}</td>
              <td>{{ log.description }}</td>
              <td>{{ log.hoursSpent }}</td>
            </tr>
          </tbody>
        </table>
        <button class="add-log-button" @click="navigateToAddLog">+</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DayLogs',
  data() {
    return {
      logs: [
        {
          id: 1,
          date: '14-07-2025',
          project: 'Odura',
          subProject: 'Ontrap',
          task: 'Front-end Changes',
          taskId: '797',
          description: 'Navigation updates',
          hoursSpent: 0.3
        },
        {
          id: 2,
          date: '13-07-2025',
          project: 'Odura',
          subProject: 'Cockpit',
          task: 'Research',
          taskId: '109',
          description: 'How to show data in charts',
          hoursSpent: 0.5
        },
        {
          id: 3,
          date: '12-07-2025',
          project: 'Odura',
          subProject: 'Bakery',
          task: 'Debugging',
          taskId: '900',
          description: 'Errors.',
          hoursSpent: 4
        }
      ]
    };
  },
  created() {
    const savedLogs = JSON.parse(localStorage.getItem('dayLogs')) || [];
    this.logs = savedLogs;
  },
  methods: {
    navigateToAddLog() {
      this.$router.push('/add-day-logs');
    }
  }
};
</script>

<style scoped>
.day-logs {
  width: 100%;
  margin: 0 auto;
  padding: 18px 38px 25px;
  box-sizing: border-box;
}
.page-header {
  margin-bottom: 20px;
}
.page-header h1 {
  font-size: 24px;
  color: #1A8CAB;
}
.dashboard-content {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.dashboard-card {
  background: #EAEAEA;
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
  position: relative;
  min-height: 480px; /* Increase the height of the card */
}
.log-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}
.log-table th,
.log-table td {
  border: none; /* Remove grid lines from the table */
  padding: 15px; /* Add equal spacing in all fields */
  text-align: left;
  font-size: 14px; /* Decrease the size of the content */
}
.log-table th {
  font-size: 16px; /* Increase the font size of all table headings */
  color: rgb(12, 12, 12);
  pointer-events: none; /* Disable hover effects on table headings */
}
.log-table tr:hover {
  background-color: #F0F0F0; /* Change background color on hover */
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); /* Apply drop shadow on hover */
  cursor: pointer; /* Add pointer cursor on hover */
}
.add-log-button {
  position: absolute;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #1A8CAB;
  color: white;
  font-size: 24px;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.add-log-button:hover {
  background-color: #0a5158;
}
</style>
