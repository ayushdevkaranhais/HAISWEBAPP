<template>
  <div class="our-team">
      <div class="page-header-title">
        <h1>Our Team</h1>
    </div>
    <div class="team-grid">
      <div class="team-member-card" v-for="member in teamMembers" :key="member.id">
        <img :src="member.avatar" :alt="member.name" class="member-image" />
        <h3>{{ member.name }}</h3>
        <p class="member-position">{{ member.position }}</p>
        <p class="member-email">{{ member.email }}</p>
        <div class="member-status">
          <span class="status-indicator" :class="member.status"></span>
          <span class="status-text">{{ member.statusText }}</span>
        </div>
      </div>
    </div>
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
          name: 'Anuj Sharma',
          position: 'Team Lead',
          email: 'anuj@company.com',
          avatar: 'https://via.placeholder.com/100x100/4a90e2/ffffff?text=AS',
          status: 'online',
          statusText: 'Online'
        },
        {
          id: 2,
          name: 'Girish Verma',
          position: 'Software Developer',
          email: 'girish@company.com',
          avatar: 'https://via.placeholder.com/100x100/4a90e2/ffffff?text=GV',
          status: 'online',
          statusText: 'Online'
        },
        {
          id: 3,
          name: 'Jitender Chauhan',
          position: 'UI/UX Designer',
          email: 'jitender@company.com',
          avatar: 'https://via.placeholder.com/100x100/4a90e2/ffffff?text=JC',
          status: 'away',
          statusText: 'Away'
        },
        {
          id: 4,
          name: 'Manohar Thakur',
          position: 'Project Manager',
          email: 'manohar@company.com',
          avatar: 'https://via.placeholder.com/100x100/4a90e2/ffffff?text=MT',
          status: 'offline',
          statusText: 'Offline'
        },
        {
          id: 5,
          name: 'Shivangi Kumar',
          position: 'Junior Developer',
          email: 'shivangi@company.com',
          avatar: 'https://via.placeholder.com/100x100/e91e63/ffffff?text=SK',
          status: 'online',
          statusText: 'Online (You)'
        },
        {
          id: 6,
          name: 'A.D',
          position: 'Junior Developer',
          email: 'A.D@company.com',
          avatar: 'https://via.placeholder.com/100x100/e91e63/ffffff?text=SK',
          status: 'online',
          statusText: 'Online (You)'
        },
      ]
    }
  }
}
</script>

<style scoped>
.page-header-title{
  margin-bottom: 12px;
  
}
.page-header-title h1{
  font-size: 24px;
  color: #1A8CAB;
  
  
}
.our-team {
  width: 100%;
  margin: 0 auto;
  padding: 1px 38px 24px;
  box-sizing: border-box;
}

.page-header h1 {
  color: #333;
  margin-bottom: 30px;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 22px;
  margin-top: 20px; /* Add margin to create space at the top */
}

.team-member-card {
  background: #EAEAEA; /* Updated background color */
  border-radius: 12px;
  padding: 20px;
  height: 220px;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border: 1px solid #e0e0e0;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.team-member-card:hover {
  transform: translateY(3px);
  background: linear-gradient(90deg, #cce5f6 0%, #f7f7f7 100%);
}

.member-image {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 15px;
  object-fit: cover;
}

.team-member-card h3 {
  margin: 0 0 8px 0;
  color: #333;
  font-size: 18px;
}

.member-position {
  margin: 0 0 8px 0;
  color: #4a90e2;
  font-weight: 500;
  font-size: 14px;
}

.member-email {
  margin: 0 0 15px 0;
  color: #666;
  font-size: 14px;
}

.member-status {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.status-indicator {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  display: inline-block;
}

.status-indicator.online {
  background-color: #28a745;
}

.status-indicator.away {
  background-color: #ffc107;
}

.status-indicator.offline {
  background-color: #dc3545;
}

.status-text {
  font-size: 12px;
  color: #666;
}

@media (max-width: 768px) {
  .team-grid {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
}
</style>

