<template>
  <div class="our-team">
    <div class="page-header-title">
      <h1>Our Team</h1>
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
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'OurTeam',
  data() {
    return {
      teamMembers: [] // Clear all employees initially
    };
  },
  methods: {
    syncEmployees(newEmployee) {
      this.teamMembers.push(newEmployee); // Add new employee to Our Team table
    }
  },
  mounted() {
    // Load team members from localStorage
    const savedEmployees = localStorage.getItem('teamMembers');
    if (savedEmployees) {
      this.teamMembers = JSON.parse(savedEmployees);
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
</style>

