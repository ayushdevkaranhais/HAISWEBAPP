<template>
  <div class="profile">
    <div class="page-header">
      <h1>My Profile</h1>
    </div>
    
    <div class="profile-container">
      <div class="profile-card">
        <div class="profile-header">
          <img :src="profile.avatar" :alt="profile.name" class="profile-avatar" />
          <div class="profile-info">
            <h2>{{ profile.name }}</h2>
            <p>{{ profile.position }}</p>
            <p>{{ profile.email }}</p>
          </div>
        </div>
        
        <div class="profile-details">
          <div class="detail-group">
            <label>Phone</label>
            <p>{{ profile.phone }}</p>
          </div>
          <div class="detail-group">
            <label>Department</label>
            <p>{{ profile.department }}</p>
          </div>
          <div class="detail-group">
            <label>Join Date</label>
            <p>{{ profile.joinDate }}</p>
          </div>
          <div class="detail-group">
            <label>Employee ID</label>
            <p>{{ profile.employeeId }}</p>
          </div>
        </div>
        
        <div class="profile-actions">
          <button class="btn btn-primary">Edit Profile</button>
          <button class="btn btn-outline">Change Password</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileView',
  data() {
    return {
      profile: {
        name: 'Anuj',
        position: 'Senior Developer',
        email: 'anuj@company.com',
        phone: '+1 (555) 123-4567',
        department: 'Engineering',
        joinDate: 'January 15, 2023',
        employeeId: 'EMP001',
        avatar: 'https://via.placeholder.com/120x120/4a90e2/ffffff?text=A'
      }
    }
  }
}
</script>

<style scoped>
.profile {
  max-width: 600px;
  margin: 0 auto;
}

.page-header h1 {
  color: #333;
  margin-bottom: 30px;
}

.profile-card {
  background: white;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border: 1px solid #e0e0e0;
}

.profile-header {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 1px solid #e0e0e0;
}

.profile-avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
}

.profile-info h2 {
  margin: 0 0 10px 0;
  color: #333;
}

.profile-info p {
  margin: 5px 0;
  color: #666;
}

.profile-details {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 30px;
}

.detail-group label {
  display: block;
  font-weight: 600;
  color: #333;
  margin-bottom: 5px;
}

.detail-group p {
  margin: 0;
  color: #666;
}

.profile-actions {
  display: flex;
  gap: 15px;
}

.btn {
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.3s ease;
}

.btn-primary {
  background: #4a90e2;
  color: white;
}

.btn-primary:hover {
  background: #357abd;
}

.btn-outline {
  background: transparent;
  border: 1px solid #4a90e2;
  color: #4a90e2;
}

.btn-outline:hover {
  background: #4a90e2;
  color: white;
}

@media (max-width: 768px) {
  .profile-header {
    flex-direction: column;
    text-align: center;
  }
  
  .profile-details {
    grid-template-columns: 1fr;
  }
  
  .profile-actions {
    flex-direction: column;
  }
}
</style>
