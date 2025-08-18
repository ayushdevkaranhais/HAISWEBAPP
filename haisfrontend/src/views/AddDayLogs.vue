<template>
  <div class="add-day-logs">
    <div class="page-header">
      <h1>Add Day Logs</h1>
    </div>

    <form class="day-logs-form" @submit.prevent="handleSubmit">
      <div class="form-group">
        <input type="date" id="date" class="form-input" placeholder="Date" v-model="form.date" required />
      </div>

      <div class="form-group">
        <input type="text" id="project-name" class="form-input" placeholder="Project Name" v-model="form.project" required />
      </div>

      <div class="form-group">
        <input type="text" id="sub-project-name" class="form-input" placeholder="Sub-Project Name" v-model="form.subProject" required />
      </div>

      <div class="form-group">
        <input type="text" id="task" class="form-input" placeholder="Task" v-model="form.task" required />
      </div>

      <div class="form-group">
        <input type="text" id="task-id" class="form-input" placeholder="Task Id" v-model="form.taskId" required />
      </div>

      <div class="form-group">
        <textarea id="description" class="form-textarea" placeholder="Description" v-model="form.description" rows="3" required></textarea>
      </div>

      <div class="form-group">
        <input type="number" id="hours-spent" class="form-input" placeholder="Hours Spent" v-model="form.hoursSpent" min="0" step="0.5" required />
      </div>

      <div class="form-actions">
        <button type="submit" class="btn btn-primary">Save</button>
        <button type="button" class="btn btn-secondary" @click="handleSaveAndAddMore">Save & Add More</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AddDayLogs',
  data() {
    return {
      form: {
        date: '',
        project: '',
        subProject: '',
        task: '',
        taskId: '',
        description: '',
        hoursSpent: ''
      }
    };
  },
  methods: {
    handleSubmit() {
      console.log('Form submitted:', this.form);
      alert('Day log saved successfully!');
      this.resetForm();
    },
    handleSaveAndAddMore() {
      console.log('Form saved and ready for new entry:', this.form);
      alert('Day log saved! You can add another entry.');
      this.resetForm();
    },
    resetForm() {
      this.form = {
        date: '',
        project: '',
        subProject: '',
        task: '',
        taskId: '',
        description: '',
        hoursSpent: ''
      };
    }
  }
};
</script>

<style scoped>
.add-day-logs {
  width: 100%;
  margin: 0 auto;
  padding: 1px 38px 24px;
  box-sizing: border-box;
}
.page-header {
  margin-bottom: 25px;
}
.page-header h1 {
  font-size: 24px;
  color: #1A8CAB;
  
}
.day-logs-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: -4px;
}
.form-group label {
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
}
.form-input,
.form-textarea {
  width: 100%;
  padding: 10px 15px;
  border: 1px solid #e0e0e0;
  border-radius: 67px;
  font-size: 14px;
  background-color: #EAEAEA;
}
.form-textarea {
  resize: none;
  border-radius: 15px;
}
.form-actions {
  display: flex;
  justify-content: flex-end; /* Align buttons to the left */
  gap: 10px;
  margin-top: 15px;
}
.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 67px; /* Update border radius for buttons */
  cursor: pointer;
  font-size: 14px;
}
.btn-primary {
  background: #1A8CAB;
  color: white;
}
.btn-secondary {
  background: #e0e0e0;
  color: #333;
}
</style>
