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
      teamMembers: [
        {
          id: 1,
          initials: 'SK',
          name: 'Shivangi Kumar',
          email: 'shivangi.kumar@highaltsolutions.in',
          mobile: '8980675432',
          joinedOn: 'June, 2023'
        },
        {
          id: 2,
          initials: 'DB',
          name: 'Dipanshi Bhardwaj',
          email: 'dipanshi.bhardwaj@highaltsolutions.in',
          mobile: '8980675432',
          joinedOn: 'June, 2024'
        },
        {
          id: 3,
          initials: 'AD',
          name: 'Ayush Devkaran',
          email: 'ayush.devkaran@highaltsolutions.in',
          mobile: '8980675432',
          joinedOn: 'March, 2025'
        },
        {
          id: 4,
          initials: 'AB',
          name: 'Anuj Bhardwaj',
          email: 'anuj.bhardwaj@highaltsolutions.in',
          mobile: '8980675432',
          joinedOn: 'June, 2015'
        },
        {
          id: 5,
          initials: 'GV',
          name: 'Girish Verma',
          email: 'girish.verma@highaltsolutions.in',
          mobile: '8980675432',
          joinedOn: 'June, 2015'
        },
        {
          id: 6,
          initials: 'VK',
          name: 'Vivek Kumar',
          email: 'vivek.kumar@highaltsolutions.in',
          mobile: '8980675432',
          joinedOn: 'March, 2022'
        },
        {
          id: 7,
          initials: 'SB',
          name: 'Saiyam Bhardwaj',
          email: 'saiyam.bhardwaj@highaltsolutions.in',
          mobile: '8980675432',
          joinedOn: 'August, 2023'
        }
      ]
    };
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
  background: #ffffff;
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
.team-table th,
.team-table td {
  padding: 10px 20px; /* Add horizontal padding for proper spacing */
  text-align: left; /* Align text to the left for better readability */
}
.team-table th {
  padding: 15px 25px; /* Increase padding for better spacing between headings */
  text-align: left; /* Keep text aligned to the left */
  color: rgb(2, 2, 2);
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

