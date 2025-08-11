<template>
  <div class="tasks">
    <div class="page-header">
      <h1>Create/Assign Task</h1>
    </div>
    
    <div class="task-form-container">
      <div class="task-card">
        <h2>Create New Task</h2>
        <form @submit.prevent="createTask">
          <div class="form-row">
            <div class="form-group">
              <label>Task Title</label>
              <input v-model="newTask.title" type="text" class="form-input" placeholder="Enter task title" />
            </div>
            <div class="form-group">
              <label>Project</label>
              <select v-model="newTask.project" class="form-select">
                <option value="">Select Project</option>
                <option value="project1">Project 1</option>
                <option value="project2">Project 2</option>
              </select>
            </div>
          </div>
          
          <div class="form-row">
            <div class="form-group">
              <label>Assignee</label>
              <select v-model="newTask.assignee" class="form-select">
                <option value="">Select Assignee</option>
                <option value="girish">Girish Verma</option>
                <option value="jitender">Jitender Chauhan</option>
                <option value="manohar">Manohar Thakur</option>
              </select>
            </div>
            <div class="form-group">
              <label>Due Date</label>
              <input v-model="newTask.dueDate" type="date" class="form-input" />
            </div>
          </div>
          
          <div class="form-group">
            <label>Description</label>
            <textarea v-model="newTask.description" class="form-textarea" rows="4" placeholder="Task description"></textarea>
          </div>
          
          <button type="submit" class="btn btn-primary">Create Task</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TasksView',
  data() {
    return {
      newTask: {
        title: '',
        project: '',
        assignee: '',
        dueDate: '',
        description: ''
      }
    }
  },
  methods: {
    createTask() {
      console.log('Creating task:', this.newTask)
      // Add task creation logic here
    }
  }
}
</script>

<style scoped>
.tasks {
  max-width: 800px;
  margin: 0 auto;
}

.page-header h1 {
  color: #333;
  margin-bottom: 30px;
}

.task-card {
  background: white;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border: 1px solid #e0e0e0;
}

.task-card h2 {
  margin: 0 0 25px 0;
  color: #333;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  color: #333;
  font-weight: 500;
}

.form-input,
.form-select,
.form-textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 14px;
  background: #f8f9fa;
}

.form-input:focus,
.form-select:focus,
.form-textarea:focus {
  outline: none;
  border-color: #4a90e2;
  background: white;
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

@media (max-width: 768px) {
  .form-row {
    grid-template-columns: 1fr;
  }
}
</style>
