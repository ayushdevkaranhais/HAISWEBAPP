<template>
  <div class="tasks">
    <div class="task-header">
      <button :class="{ active: activeTab === 'create' }" @click="activeTab = 'create'">Create New Task</button>
      <button :class="{ active: activeTab === 'assign' }" @click="activeTab = 'assign'">Assign Task</button>
    </div>
    <div v-if="activeTab === 'create'" class="task-form">
      <div class="form-field">
        <input type="text" v-model="newTask.projectName" class="form-input" placeholder="Project Name " />
        <i class="info-icon">▼</i>
      </div>
      <div class="form-field">
        <input type="text" v-model="newTask.subProjectName" class="form-input" placeholder="Sub-Project Name" />
        <i class="info-icon">▼</i>
      </div>
      <div class="form-field">
        <input type="text" v-model="newTask.taskName" class="form-input" placeholder="Task Name" />
      </div>
      <div class="form-field">
        <textarea v-model="newTask.description" class="form-textarea" rows="3" placeholder="Description"></textarea>
      </div>
      <div class="form-actions">
        <button class="btn btn-primary" @click="createTask">Create Task</button>
      </div>
    </div>
    
    <div v-if="activeTab === 'assign'" class="task-form">
      <div class="form-field">
        <input type="text" v-model="assignTask.projectName" class="form-input" placeholder="Project Name " />
        <i class="info-icon">▼</i>
      </div>
      <div class="form-field">
        <input type="text" v-model="assignTask.subProjectName" class="form-input" placeholder="Sub-Project Name" />
        <i class="info-icon">▼</i>
      </div>
      <div class="form-field">
        <input type="text" v-model="assignTask.taskName" class="form-input" placeholder="Task Name" />
      </div>
      <div class="form-field">
        <textarea v-model="assignTask.description" class="form-textarea" rows="3" placeholder=" Task Description"></textarea>
      </div>
      
      <!-- Date fields row -->
      <div class="form-row date-fields-row">
        <div class="form-field">
          <input type="date" v-model="assignTask.startDate" class="form-input" placeholder="Start Date:" />
          
        </div>
        <div class="form-field">
          <input type="date" v-model="assignTask.dueDate" class="form-input" placeholder="Due Date:" />
          
        </div>
      </div>
      
      <!-- Status and Task ID row -->
      <div class="form-row">
        <div class="form-field">
          <select v-model="assignTask.status" class="form-input">
            <option value="">Status</option>
            <option value="pending">Pending</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        
        </div>
        <div class="form-field">
          <input type="text" v-model="assignTask.taskId" class="form-input" placeholder="Task Id" />
        </div>
      </div>
      
      <!-- Assignees field -->
      <div class="form-field">
        <input type="text" v-model="assignTask.assignees" class="form-input" placeholder="Assignees" />
        <i class="info-icon">▼</i>
      </div>
      
      <div class="form-actions">
        <button class="btn btn-primary" @click="assignTaskMethod">Assign Task</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TasksPage',
  data() {
    return {
      activeTab: 'create',
      newTask: {
        projectName: '',
        subProjectName: '',
        taskName: '',
        description: ''
      },
      assignTask: {
        projectName: '',
        subProjectName: '',
        taskName: '',
        description: '',
        startDate: '',
        dueDate: '',
        status: '',
        taskId: '',
        assignees: ''
      }
    };
  },
  methods: {
    createTask() {
      console.log('Task Created:', this.newTask);
      this.newTask = {
        projectName: '',
        subProjectName: '',
        taskName: '',
        description: ''
      };
    },
    assignTaskMethod() {
      console.log('Task Assigned:', this.assignTask);
      this.assignTask = {
        projectName: '',
        subProjectName: '',
        taskName: '',
        description: '',
        startDate: '',
        dueDate: '',
        status: '',
        taskId: '',
        assignees: ''
      };
    }
  }
};
</script>

<style scoped>
.tasks {
  width: 100%;
  margin: 0 auto;
  padding: 18px 38px 25px;
  box-sizing: border-box;
}

.task-header {
  display: flex;
  gap: 20px;
  margin-bottom: 5px;
  position: relative;
}

.task-header button {
  background: none;
  border: none;
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
  padding: 10px 30px;
  border-bottom: 2px solid transparent;
  color: #666;
}

.task-header button.active {
  border-bottom: 2px solid #1A8CAB;
  color: #1A8CAB;
  position: relative;
  z-index: 2;
}

.tab-underline {
  width: 100%;
  height: 2px;
  background: #EAEAEA;
  margin-top: -2px;
  margin-bottom: 24px;
}

.task-form {
  width: 100%;
  background: #F0F0F0;
  padding: 30px;
  border-radius: 8px;
  
  
}

.form-field {
  margin-bottom: 20px;
  position: relative;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 20px;
}

.form-row .form-field {
  margin-bottom: 0;
}

.date-fields-row {
  margin-top: 20px;
}

.form-input {
  width: 100%;
  padding: 10px 15px;
  border: 1px solid #EAEAEA;
  border-radius: 67px;
  font-size: 14px;
  box-sizing: border-box;
  background: #EAEAEA;
}

.form-textarea {
  width: 100%;
  padding: 10px 15px;
  border: 1px solid #EAEAEA;
  border-radius: 15px;
  font-size: 14px;
  resize: none;
  font-family: inherit;
  box-sizing: border-box;
  background: #EAEAEA;
  margin-bottom: -5px;
}

.info-icon {
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: #999;
  font-size: 16px;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;
}

.btn-primary {
  background: #1A8CAB;
  color: white;
  border: none;
  border-radius: 67px;
  padding: 8px 20px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
}

.btn-primary:hover {
  background: #166b85;
}
</style>
