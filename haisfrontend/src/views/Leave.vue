<template>
  <div class="leave-page">
    <div class="Leave-header-title">
      <h1>Add Your leave</h1>
    </div>
    <div class="leave-form-card">
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
      <input type="text" v-model="newLeave.reason" class="form-input full" placeholder="Reason" />
      <div class="form-action">
        <button class="btn btn-primary" @click="submitLeave">Apply</button>
      </div>
    </div>

    <!-- Leave Applications -->
    <div class="leave-applications">
      <div class="leave-card" v-for="application in leaveApplications" :key="application.id">
        <div class="leave-user">
          <div class="avatar-circle">{{ getInitials(application.employeeName) }}</div>
          <div class="user-details">
            <h4>{{ application.employeeName }}</h4>
            <span class="type">{{ application.leaveType }}</span>
            <p>{{ application.reason }}</p>
            <p class="duration">From: {{ application.from }} to {{ application.till }}</p>
          </div>
        </div>
        <div class="card-actions">
          <button class="btn" :class="application.status === 'Approved' ? 'btn-success' : 'btn-pending'">
            {{ application.status }}
          </button>
        </div>
      </div>
    </div>

    <!-- Admin Leave Requests Card -->
    <div v-if="$root.userRole === 'admin'" class="leave-requests-card">
      <h3>Leave Requests</h3>
      <table class="leave-requests-table">
        <thead>
          <tr>
            <th>Employee Name</th>
            <th>No. of Days</th>
            <th>From</th>
            <th>Till</th>
            <th>Leave Type</th>
            <th>Reason</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="request in leaveApplications" :key="request.id">
            <td>{{ request.employeeName }}</td>
            <td>{{ request.days }}</td>
            <td>{{ request.from }}</td>
            <td>{{ request.till }}</td>
            <td>{{ request.leaveType }}</td>
            <td>{{ request.reason }}</td>
            <td>
              <button class="btn btn-success" v-if="request.status !== 'Approved'" @click="approveLeave(request)">Approved <span class="status-dot green"></span></button>
              <button class="btn btn-danger" v-if="request.status !== 'Declined'" @click="declineLeave(request)">Declined <span class="status-dot red"></span></button>
              <span v-if="request.status === 'Pending'" class="btn btn-pending">Pending <span class="status-dot yellow"></span></span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LeaveView',
  data() {
    return {
      currentUser: 'John Doe', // Simulated current user
      newLeave: {
        days: '',
        from: '',
        till: '',
        leaveType: '',
        reason: ''
      }
    };
  },
  computed: {
    leaveApplications() {
      return this.$store.getters.getLeaveApplications;
    }
  },
  methods: {
    getInitials(name) {
      return name
        .split(' ')
        .map((word) => word[0])
        .join('');
    },
    submitLeave() {
      if (!this.newLeave.reason || !this.newLeave.days) {
        alert('Please Add all fields');
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
    resetForm() {
      this.newLeave = {
        days: '',
        from: '',
        till: '',
        leaveType: '',
        reason: ''
      };
    },
    approveLeave(request) {
      request.status = 'Approved';
    },
    declineLeave(request) {
      request.status = 'Declined';
    }
  }
};
</script>

<style scoped>
.leave-page {
  width: 100%;
  margin: 0 auto;
  padding: 18px 38px 25px;
  box-sizing: border-box;
}
.Leave-header-title {
  margin-bottom: 8px;
}
.Leave-header-title h1 {
  font-size: 24px;
  color: #1A8CAB;
} 


/* Form Card */
.leave-form-card {
  width: 100%;
  max-width: 100%;
  min-width: 320px;
  height: auto;
  background: linear-gradient(135deg, #DBF6F366  40%, #EAEAEA8A 54%);
  border-radius: 16px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;

}
.leave-form-card h3 {
  margin-bottom: 25px;
  font-size: 20px;
  font-weight: normal;
}

.form-row {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 15px;
}

.form-input {
  width: 100%;
  padding: 6px 10px;
  border: 1px solid #d0d5dd;
  border-radius: 15px; /* More compact border radius */
  flex: 1;
  min-width: 150px;
  font-size: 10px; /* Smaller font size */
  background-color: transparent;
  
}

.form-input.full {
  width: 100%;
  margin-bottom: 12px;
  border-radius: 12px;
  height: 80px; /* Increased height for Reason input box */
}



.form-action {
  display: flex;
  justify-content: flex-end;
}

/* Leave Applications */
.leave-applications {
  margin-top: 22px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

/* Leave Card */
.leave-card {
  background: #EAEAEA;
  border-radius: 12px;
  box-shadow: 0 4px 4px rgba(0,0,0,0.1);
  padding: 10px;
  flex: 1 1 calc(33.33% - 20px); /* Adjusts card width dynamically */
  height: 210px; /* Increased height for approved leave cards */
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}

.leave-user {
  display: flex;
  gap: 15px;
}

.avatar-circle {
  width: 40px;
  height: 40px;
  background: #e1f5fe;
  color: #333;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 14px;
}

.user-details h4 {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
}

.user-details .type {
  font-size: 12px;
  color: #888;
}

.user-details p {
  font-size: 13px;
  margin: 4px 0;
}

.card-actions {
  display: flex;
  gap: 10px;
}

.btn-success {
  background-color: #cbffcb;
  color: #007a00;
  border-radius: 14px;
  padding: 6px 12px;
  font-size: 13px;
  font-weight: 500;
}

.btn-pending {
  background-color: #ffe0b3;
  color: #b36b00;
  border-radius: 14px;
  padding: 6px 12px;
  font-size: 13px;
  font-weight: 500;
}

/* Button Primary */
.btn-primary {
  background-color:#1A8CAB;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;
  border-radius: 67px;
}

.btn-primary:hover {
  background-color: #007596;
}

/* Admin Leave Requests Card */
.leave-requests-card {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.07);
  padding: 24px;
  margin-top: 24px;
}
.leave-requests-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 12px;
}
.leave-requests-table th, .leave-requests-table td {
  padding: 10px 12px;
  text-align: left;
  font-size: 15px;
  border-bottom: 1px solid #eee;
}
.leave-requests-table th {
  background: #f7f7f7;
  font-weight: 600;
}
.btn-success {
  background: #27ae60;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 6px 18px;
  margin-right: 8px;
  cursor: pointer;
}
.btn-danger {
  background: #e74c3c;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 6px 18px;
  margin-right: 8px;
  cursor: pointer;
}
.btn-pending {
  background: #f7b731;
  color: #fff;
  border-radius: 8px;
  padding: 6px 18px;
  margin-right: 8px;
}
.status-dot {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-left: 6px;
}
.status-dot.green {
  background: #27ae60;
}
.status-dot.red {
  background: #e74c3c;
}
.status-dot.yellow {
  background: #f7b731;
}
</style>
