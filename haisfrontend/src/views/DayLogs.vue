<template>
  <div class="day-logs">
    <h2>Day Logs</h2>
    <table class="day-logs-table">
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
  methods: {
    navigateToAddLog() {
      this.$router.push('/add-day-logs');
    }
  }
};
</script>

<style scoped>
.day-logs {
  padding: 20px;
  background-color: #ffffff; /* Update background color */
  border-radius: 15px; /* Add rounded corners */
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Add subtle shadow */
}
.day-logs h2 {
  color: #1A8CAB; /* Update header color */
  font-size: 24px; /* Match font size */
}
.day-logs-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}
.day-logs-table th,
.day-logs-table td {
  border: 1px solid #ddd;
  padding: 10px;
  text-align: left;
}
.day-logs-table th {
  background-color: #1A8CAB; /* Update table header color */
  color: white;
}
.add-log-button {
  width: 50px;
  height: 50px;
  border-radius: 67px; /* Update button border radius */
  background-color: #1A8CAB; /* Match button color */
  color: white;
  font-size: 24px;
  border: none;
  cursor: pointer;
}
.add-log-button:hover {
  background-color: #764ba2;
}
</style>
