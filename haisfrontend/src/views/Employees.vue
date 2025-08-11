<template>
  <div class="employees">
    <div class="page-header">
      <h1>Employees</h1>
      <button class="btn btn-primary">Add Employee</button>
    </div>
    
    <div class="employees-grid">
      <div class="employee-card" v-for="employee in employees" :key="employee.id">
        <img :src="employee.avatar" :alt="employee.name" class="employee-image" />
        <h3>{{ employee.name }}</h3>
        <p>{{ employee.position }}</p>
        <p>{{ employee.email }}</p>
        <div class="employee-actions">
          <button class="btn btn-outline">Edit</button>
          <button class="btn btn-danger">Remove</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EmployeesView',
  data() {
    return {
      employees: [
        {
          id: 1,
          name: 'Girish Verma',
          position: 'Software Developer',
          email: 'girish@company.com',
          avatar: 'https://via.placeholder.com/100x100/4a90e2/ffffff?text=GV'
        },
        {
          id: 2,
          name: 'Jitender Chauhan',
          position: 'UI/UX Designer',
          email: 'jitender@company.com',
          avatar: 'https://via.placeholder.com/100x100/4a90e2/ffffff?text=JC'
        },
        {
          id: 3,
          name: 'Manohar Thakur',
          position: 'Project Manager',
          email: 'manohar@company.com',
          avatar: 'https://via.placeholder.com/100x100/4a90e2/ffffff?text=MT'
        }
      ]
    }
  }
}
</script>

<style scoped>
.employees {
  max-width: 1200px;
  margin: 0 auto;
}

.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}

.page-header h1 {
  color: #333;
  margin: 0;
}

.employees-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}

.employee-card {
  background: white;
  border-radius: 12px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border: 1px solid #e0e0e0;
}

.employee-image {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 15px;
}

.employee-card h3 {
  margin: 0 0 10px 0;
  color: #333;
}

.employee-card p {
  margin: 5px 0;
  color: #666;
  font-size: 14px;
}

.employee-actions {
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-top: 15px;
}

.btn {
  padding: 8px 16px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 12px;
  transition: all 0.3s ease;
}

.btn-primary {
  background: #4a90e2;
  color: white;
}

.btn-outline {
  background: transparent;
  border: 1px solid #4a90e2;
  color: #4a90e2;
}

.btn-danger {
  background: #dc3545;
  color: white;
}
</style>
