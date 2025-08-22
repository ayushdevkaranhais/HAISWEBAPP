<template>
  <div class="day-logs">
    <div class="page-header">
      <h1>Day Logs</h1>
    </div>
    <template v-if="$root.userRole === 'admin'">
      <div class="daylogs-admin-filters">
        <div class="filters-row">
          <input type="text" class="filter-input" placeholder="From - Till" />
          <span class="calendar-icon">📅</span>
          <input type="text" class="filter-input" placeholder="Project" />
          <span class="dropdown-icon">▼</span>
          <input type="text" class="filter-input" placeholder="Sub-Project" />
          <span class="dropdown-icon">▼</span>
          <input type="text" class="filter-input" placeholder="Assigned to" />
          <span class="dropdown-icon">▼</span>
          <button class="search-icon">🔍</button>
        </div>
        <hr class="filter-underline" />
      </div>
      <div class="dashboard-content">
        <div class="dashboard-card">
          <table class="log-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Task</th>
                <th>Task Id</th>
                <th>Description</th>
                <th>Time Spent</th>
                <th>Assigned to</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="log in logs" :key="log.id">
                <td>{{ log.date }}</td>
                <td>{{ log.task }}</td>
                <td>{{ log.taskId }}</td>
                <td>
                  <span class="description-text" :title="log.description">
                    {{ log.description.length > 50 ? log.description.substring(0, 50) + '' : log.description }}
                  </span>
                </td>
                <td>{{ log.hoursSpent }}</td>
                <td>{{ log.assignedTo || 'N/A' }}</td>
              </tr>
            </tbody>
          </table>
          <div class="total-row">Total : {{ logs.length }}</div>
        </div>
      </div>
    </template>
    <template v-else>
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
                <td>
                  <span class="description-text" :title="log.description">
                    {{ log.description.length > 50 ? log.description.substring(0, 50) + '' : log.description }}
                  </span>
                </td>
                <td>{{ log.hoursSpent }}</td>
                <td>
                  <button @click="deleteLog(log.id)" class="delete-icon" title="Delete">🗑️</button>
                </td>
              </tr>
            </tbody>
          </table>
          <button class="add-log-button" @click="navigateToAddLog">+</button>
        </div>
      </div>
    </template>
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
    },
    refreshLogs() {
      const savedLogs = JSON.parse(localStorage.getItem('dayLogs')) || [];
      this.logs = savedLogs;
    },
    deleteLog(logId) {
      this.logs = this.logs.filter(log => log.id !== logId);
      localStorage.setItem('dayLogs', JSON.stringify(this.logs));
      alert('Day log deleted successfully!');
    }
  },
  mounted() {
    this.refreshLogs();
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
  margin-bottom: 30px;
}
.page-header h1 {
  font-size: 24px;
  color: #1A8CAB;
}
.daylogs-admin-filters {
  margin: 0 auto;
  max-width: 900px;
  margin-bottom: 10px;
}
.filters-row {
  display: flex;
  align-items: center;
  gap: 18px;
  background: #eafafd;
  border-radius: 30px;
  padding: 8px 18px;
  margin-bottom: 0;
}
.filter-input {
  background: #eafafd;
  border: none;
  border-radius: 30px;
  padding: 8px 18px;
  font-size: 14px;
  min-width: 140px;
}
.calendar-icon, .dropdown-icon, .search-icon {
  font-size: 18px;
  color: #1A8CAB;
  background: none;
  border: none;
  cursor: pointer;
}
.filter-underline {
  border: none;
  border-bottom: 2px solid #1A8CAB;
  margin-top: -2px;
  margin-bottom: 18px;
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
  min-height: 250px; /* Increase the height of the card */
  height: auto; /* Automatically adjust height based on content */
  font-weight: 600px;
}
.log-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
 
}
.log-table th,
.log-table td {
  border: none; /* Remove grid lines from the table */
  padding: 20px; /* Increased padding for proper spacing between fields */
  text-align: left; /* Center align the content */
  font-size: 14px; /* Decrease the size of the content */
  
  
}
.log-table th {
  font-weight: 600;
  font-size: 16px; /* Reduced font size for table headings */
  color: rgb(12, 12, 12);
  pointer-events: none; /* Disable hover effects on table headings */
  ;
}
.log-table tr:hover {
  background-color: #F0F0F0; /* Change background color on hover */
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); /* Apply drop shadow on hover */
  cursor: pointer; /* Add pointer cursor on hover */
}
.add-log-button {
  position: relative; /* Position the button inside the table */
  margin-top: 10px; /* Add spacing to prevent overlap */
  align-self: flex-end; /* Center the button within the table */
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
.delete-icon {
  background: none;
  border: none;
  color: #FF0000;
  cursor: pointer;
  font-size: 12px; /* Reduced font size for smaller icon */
}
.total-row {
  text-align: right;
  font-size: 15px;
  color: #888;
  margin-top: 8px;
}
</style>
