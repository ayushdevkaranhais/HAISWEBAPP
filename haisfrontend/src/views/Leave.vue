<template>
  <div class="leave">
    <div class="add-leave-card">
      <h2>Add Leave</h2>
      <form @submit.prevent="applyLeave" class="leave-form">
        <div class="form-row">
          <div class="form-group">
            <label for="days">No. of Days</label>
            <input type="number" id="days" v-model="leaveForm.days" min="1" required />
          </div>
          <div class="form-group">
            <label for="from">From</label>
            <input type="date" id="from" v-model="leaveForm.from" required />
          </div>
          <div class="form-group">
            <label for="till">Till</label>
            <input type="date" id="till" v-model="leaveForm.till" required />
          </div>
          <div class="form-group">
            <label for="type">Leave Type</label>
            <select id="type" v-model="leaveForm.type" required>
              <option value="">Select Type</option>
              <option value="casual">Casual Leave</option>
              <option value="sick">Sick Leave</option>
              <option value="annual">Annual Leave</option>
            </select>
          </div>
        </div>
        <div class="form-group">
          <label for="reason">Reason</label>
          <textarea id="reason" v-model="leaveForm.reason" rows="2" required></textarea>
        </div>
        <div class="form-group" style="display: flex; justify-content: flex-end;">
          <button type="submit" class="apply-button">Apply</button>
        </div>
      </form>
    </div>

    <div v-if="isAdmin" class="admin-leave-section">
      <div class="filter-row" style="margin-bottom: 20px;">
        <label for="leave-status">Leave Status</label>
        <select id="leave-status" v-model="selectedStatus" @change="filterLeaves">
          <option value="">All</option>
          <option value="approved">Approved</option>
          <option value="pending">Pending</option>
          <option value="rejected">Rejected</option>
        </select>
      </div>
      <table class="leave-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Employee Name</th>
            <th>No. of Days</th>
            <th>From</th>
            <th>Till</th>
            <th>Leave Type</th>
            <th>Reason</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(leave, index) in filteredLeaves" :key="leave.id">
            <td>{{ index + 1 }}</td>
            <td>{{ leave.employeeName }}</td>
            <td>{{ leave.days }}</td>
            <td>{{ leave.from }}</td>
            <td>{{ leave.till }}</td>
            <td>{{ leave.type }}</td>
            <td>{{ leave.reason }}</td>
            <td>
              <span :class="leave.status" class="status-label">
                {{ leave.status === 'approved' ? 'Approved' : leave.status === 'pending' ? 'Pending' : 'Rejected' }}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-else class="leave-cards-section">
      <div class="cards-container">
        <div class="leave-card" v-for="application in leaveApplications" :key="application.id">
          <div class="card-header">
            <div class="avatar" :style="{ backgroundColor: application.color }">
              {{ application.initials }}
            </div>
            <div class="details">
              <h3>{{ application.name }}</h3>
              <p>{{ application.reason }}</p>
              <p>From: {{ application.from }} to {{ application.till }}</p>
            </div>
          </div>
          <div class="status">
            <span class="approved">Approved</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LeaveView',
  data() {
    return {
      isAdmin: localStorage.getItem('userRole') === 'admin', // Dynamically set based on logged-in user's role
      selectedStatus: '',
      leaveForm: {
        days: '',
        from: '',
        till: '',
        type: '',
        reason: ''
      },
      leaveApplications: [
        {
          id: 1,
          employeeName: 'Shivangi Kumar',
          days: 1,
          from: '05-08-2025',
          till: '05-08-2025',
          type: 'Sick leave',
          reason: 'Need to go to hospital',
          status: 'approved'
        },
        {
          id: 2,
          employeeName: 'Dipanshi Bhardwaj',
          days: 2,
          from: '30-07-2025',
          till: '31-07-2025',
          type: 'Other',
          reason: 'Practicals of MCA',
          status: 'approved'
        },
        {
          id: 3,
          employeeName: 'Ayush Devkaran',
          days: 1,
          from: '05-08-2025',
          till: '05-08-2025',
          type: 'Urgent Work',
          reason: 'Need to go to hospital',
          status: 'approved'
        }
      ],
      filteredLeaves: []
    };
  },
  methods: {
    applyLeave() {
      console.log('Leave applied:', this.leaveForm);
      alert('Leave application submitted successfully!');
      this.resetForm();
    },
    resetForm() {
      this.leaveForm = {
        days: '',
        from: '',
        till: '',
        type: '',
        reason: ''
      };
    },
    filterLeaves() {
      if (this.selectedStatus) {
        this.filteredLeaves = this.leaveApplications.filter(
          leave => leave.status === this.selectedStatus
        );
      } else {
        this.filteredLeaves = this.leaveApplications;
      }
    }
  },
  created() {
    this.filteredLeaves = this.leaveApplications;
  }
};
</script>

<style scoped>
.leave {
  padding: 20px;
  background-color: #f5f5f5;
}
.add-leave-card {
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 60px;
}
.leave-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.form-row {
  display: flex;
  gap: 20px;
}
.form-group {
  flex: 1;
}
.leave-form label {
  display: block;
  margin-bottom: 5px;
  color: #555;
}
.leave-form input,
.leave-form select,
.leave-form textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 20px; /* Changed to make input boxes curvy */
  font-size: 14px;
}
textarea {
  resize: none;
}
textarea#reason {
  width: 60%; /* Reduced the width of the Reason input box to half */
}
.apply-button {
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}
.apply-button:hover {
  background-color: #0056b3;
}
.admin-leave-section {
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-top: 20px;
}
.filter-row {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
}
.filter-row label {
  font-weight: bold;
}
.filter-row select {
  padding: 10px;
  border-radius: 20px;
  border: 1px solid #ddd;
}
.leave-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 10px; /* Add space between rows */
}
.leave-table th,
.leave-table td {
  padding: 10px;
  text-align: left;
}
.leave-table th {
  background-color: #667eea;
  color: white;
}
.table-card {
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
}
.status-label {
  padding: 5px 10px;
  border-radius: 20px;
  color: white;
  font-weight: bold;
}
.status-label.approved {
  background-color: #4caf50; /* Green for approved */
  color: white; /* Ensure text color is white */
}
.status-label.pending {
  background-color: #ff9800; /* Yellow for pending */
  color: white; /* Ensure text color is white */
}
.status-label.rejected {
  background-color: #f44336; /* Red for declined */
  color: white; /* Ensure text color is white */
}
.cards-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
.leave-card {
  flex: 1;
  min-width: 250px;
  max-width: calc(33.33% - 20px);
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
}
.card-header {
  display: flex;
  gap: 10px;
}
.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: white;
}
.status {
  margin-top: 10px;
}
.approved {
  color: #4caf50;
}
</style>
