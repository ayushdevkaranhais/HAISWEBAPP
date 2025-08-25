<template>
  <div class="our-team" :class="{ 'blur-background': showAddEmployeeModal || showInfoModal }">
    <div class="page-header-title">
      <h1>All Employees</h1>
      <button class="btn btn-primary add-employee-button" @click="showAddEmployeeModal = true">Add Employee</button>
    </div>
    <table class="team-table">
      <thead>
        <tr>
          <th>S.No</th>
          <th>Username</th>
          <th>Email</th>
          <th>Mobile No.</th>
          <th>Joined On</th>
         
        </tr>
      </thead>
      <tbody>
        <tr v-for="member in teamMembers" :key="member.id">
          <td>
            <div class="avatar-circle">
              <span>{{ member.initials }}</span>
            </div>
          </td>
          <td>{{ member.name }}</td>
          <td>{{ member.email }}</td>
          <td>{{ member.mobile }}</td>
          <td>{{ member.joinedOn }}</td>
          <td>
            <i class="fas fa-info-circle" title="More Info" @click="showInfo(member)"></i>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Add Employee Modal -->
    <!-- Add Employee Modal -->
    <div v-if="showAddEmployeeModal" class="modal-overlay">
      <div class="modal">
        <h2 class="modal-title">Add Employee</h2>
        <form @submit.prevent="addEmployee">
          <div class="form-row">
            <input type="text" v-model="newEmployee.firstName" placeholder="First Name" class="form-input" />
            <input type="text" v-model="newEmployee.lastName" placeholder="Last Name" class="form-input" />
          </div>
          <div class="form-row">
            <input type="email" v-model="newEmployee.email" placeholder="Email" class="form-input" />
            <input type="text" v-model="newEmployee.mobile" placeholder="Mobile No." class="form-input" />
          </div>
          <div class="form-row">
            <input type="password" v-model="newEmployee.password" placeholder="Password" class="form-input" />
            <input type="password" v-model="newEmployee.confirmPassword" placeholder="Confirm Password" class="form-input" />
          </div>
          <div class="form-row">
            <input type="text" v-model="newEmployee.joinedOn" placeholder="Joined On" class="form-input" />
            <input type="text" v-model="newEmployee.aadhar" placeholder="Aadhar No." class="form-input" />
          </div>
          <div class="form-row">
            <input type="date" v-model="newEmployee.dob" placeholder="DOB" class="form-input" />
            <input type="text" v-model="newEmployee.education" placeholder="Education" class="form-input" />
          </div>
          <div class="form-row">
            <input type="text" v-model="newEmployee.address" placeholder="Address" class="form-input" />
          </div>
          <div class="form-actions">
            <button type="submit" class="btn btn-primary">Add Employee</button>
            <button type="button" class="btn btn-secondary" @click="showAddEmployeeModal = false">Cancel</button>
          </div>
        </form>
      </div>
    </div>

    <!-- Info Modal -->
    <div v-if="showInfoModal" class="modal-overlay">
      <div class="modal info-modal">
        <h2 class="modal-title">Personal Information</h2>
        <form>
          <div class="form-row">
            <input type="text" v-model="selectedEmployee.firstName" placeholder="First Name" class="form-input" />
            <input type="text" v-model="selectedEmployee.lastName" placeholder="Last Name" class="form-input" />
          </div>
          <div class="form-row">
            <input type="email" v-model="selectedEmployee.email" placeholder="Email" class="form-input" />
            <input type="text" v-model="selectedEmployee.mobile" placeholder="Mobile No." class="form-input" />
          </div>
          <div class="form-row">
            <input type="text" v-model="selectedEmployee.password" placeholder="Password" class="form-input" />
            <input type="text" v-model="selectedEmployee.confirmPassword" placeholder="Confirm Password" class="form-input" />
          </div>
          <div class="form-row">
            <input type="text" v-model="selectedEmployee.joinedOn" placeholder="Joined On" class="form-input" />
            <input type="text" v-model="selectedEmployee.aadhar" placeholder="Aadhar No." class="form-input" />
          </div>
          <div class="form-row">
            <input type="date" v-model="selectedEmployee.dob" placeholder="DOB" class="form-input" />
            <input type="text" v-model="selectedEmployee.education" placeholder="Education" class="form-input" />
          </div>
          <div class="form-row">
            <input type="text" v-model="selectedEmployee.address" placeholder="Address" class="form-input" />
          </div>
          <div class="form-actions">
            <button type="button" class="btn btn-primary" @click="updateEmployee">Update Changes</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OurTeam',
  data() {
    return {
      showAddEmployeeModal: false,
      showInfoModal: false,
      selectedEmployee: {},
      teamMembers: [],
      newEmployee: {
        firstName: '',
        lastName: '',
        email: '',
        mobile: '',
        password: '',
        confirmPassword: '',
        joinedOn: '',
        aadhar: '',
        dob: '',
        education: '',
        address: ''
      }
    };
  },
  mounted() {
    const savedEmployees = localStorage.getItem('teamMembers');
    if (savedEmployees) {
      this.teamMembers = JSON.parse(savedEmployees); // Load employees from local storage
    }
  },
  methods: {
    addEmployee() {
      const initials = `${this.newEmployee.firstName.charAt(0)}${this.newEmployee.lastName.charAt(0)}`.toUpperCase();
      const newMember = {
        id: this.teamMembers.length + 1,
        initials,
        name: `${this.newEmployee.firstName} ${this.newEmployee.lastName}`,
        email: this.newEmployee.email,
        mobile: this.newEmployee.mobile,
        joinedOn: this.newEmployee.joinedOn,
        firstName: this.newEmployee.firstName,
        lastName: this.newEmployee.lastName,
        aadhar: this.newEmployee.aadhar,
        dob: this.newEmployee.dob,
        education: this.newEmployee.education,
        address: this.newEmployee.address,
        password: this.newEmployee.password,
        confirmPassword: this.newEmployee.confirmPassword
      };
      this.teamMembers.push(newMember);
      localStorage.setItem('teamMembers', JSON.stringify(this.teamMembers)); // Save employees to local storage
      this.showAddEmployeeModal = false;
      this.newEmployee = {
        firstName: '',
        lastName: '',
        email: '',
        mobile: '',
        password: '',
        confirmPassword: '',
        joinedOn: '',
        aadhar: '',
        dob: '',
        education: '',
        address: ''
      };

    },
    showInfo(member) {
      this.selectedEmployee = member;
      this.showInfoModal = true;
    },
    updateEmployee() {
      const index = this.teamMembers.findIndex(member => member.id === this.selectedEmployee.id);
      if (index !== -1) {
        const updatedMember = {
          ...this.selectedEmployee,
          name: `${this.selectedEmployee.firstName} ${this.selectedEmployee.lastName}`,
          initials: `${this.selectedEmployee.firstName.charAt(0)}${this.selectedEmployee.lastName.charAt(0)}`.toUpperCase()
        };
        this.teamMembers.splice(index, 1, updatedMember);
        localStorage.setItem('teamMembers', JSON.stringify(this.teamMembers)); // Save updated employees to local storage
      }
      this.showInfoModal = false;
    }
  }
};
</script>

<style scoped>
.our-team {
  width: 100%;
  margin: 0 auto;
  padding: 18px 38px 25px;
  box-sizing: border-box;
}
.page-header-title {
  margin-bottom: 12px;
  position: relative;
}
.page-header-title h1 {
  font-size: 24px;
  color: #1A8CAB;
} 
.team-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
  background-color: #fff;
  border-radius: 16px;
  height: auto; /* Set a fixed height for the table */
}
.team-table th,
.team-table td {
  padding: 12px 20px; /* Add horizontal padding for proper spacing */
  text-align: left; /* Align text to the left for better readability */
}
.team-table th {
  padding: 25px 20px; /* Increase padding for better spacing between headings */
  text-align: left; /* Keep text aligned to the left */
  color: rgb(2, 2, 2);
}
.team-table td {
  font-size: 14px; /* Decrease the size of the content */
}
.team-table tbody tr {
    border-bottom: 1px solid #e0e0e0; /* Add lines between rows */
  }

.avatar-circle {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #1a8cab27;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: normal;
  color: #1A8CAB;
}
.add-employee-button {
  position: relative; /* Change position to relative */
  float: right; /* Align the button to the top-right */
  margin-top: -35px; /* Adjust margin to prevent overlap */
  padding: 6px 12px;
  background-color: #1A8CAB;
  color: white;
  border: none;
  border-radius: 16px;
  cursor: pointer;
  font-size: 14px;
}
.add-employee-button:hover {
  background-color: #0a5158;
}




.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #D9D9D985;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
.modal {
  background: white;
  padding: 20px;
  border-radius: 10px;
  width: 500px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.37);
}
.modal-title {
  font-size: 20px;
  margin-bottom: 20px;
  text-align: center;
  color: #1A8CAB;

}
.form-row {
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
}
.form-input, .form-textarea {
  flex: 1;
  padding: 6px;
  background-color: #F2F0F0;
  border: 1px solid #F2F0F0;
  border-radius: 16px;
  font-size: 11px;
}
.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 270px;
}
.btn {
  padding: 8px 16px;
  border: none;
  border-radius: 26px;
  cursor: pointer;
}
.btn-primary {
  background: #1A8CAB;
  color: white;
}
.btn-secondary {
  background: #ccc;
  color: black;
}
.team-table td i {
  color: #1A8CAB;
}
</style>
