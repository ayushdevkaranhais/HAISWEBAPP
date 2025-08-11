<template>
  <div class="add-day-logs">
    <h2>Add Day Logs</h2>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="date">Date</label>
        <input type="date" id="date" v-model="form.date" required />
      </div>
      <div class="form-group">
        <label for="project">Project Name</label>
        <input type="text" id="project" v-model="form.project" required />
      </div>
      <div class="form-group">
        <label for="subProject">Sub-Project Name</label>
        <input type="text" id="subProject" v-model="form.subProject" required />
      </div>
      <div class="form-group">
        <label for="task">Task</label>
        <input type="text" id="task" v-model="form.task" required />
      </div>
      <div class="form-group">
        <label for="taskId">Task ID</label>
        <input type="text" id="taskId" v-model="form.taskId" required />
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <textarea id="description" v-model="form.description" rows="3" required></textarea>
      </div>
      <div class="form-group">
        <label for="hoursSpent">Hours Spent</label>
        <input type="number" id="hoursSpent" v-model="form.hoursSpent" min="0" step="0.5" required />
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
  padding: 20px;
  background-color: #f5f5f5;
}
.add-day-logs h2 {
  margin-bottom: 20px;
  color: #333;
}
.form-group {
  margin-bottom: 15px;
}
.form-group label {
  display: block;
  margin-bottom: 5px;
  color: #555;
}
.form-group input,
.form-group textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
}
.form-actions {
  display: flex;
  gap: 10px;
}
.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.btn-primary {
  background-color: #667eea;
  color: white;
}
.btn-secondary {
  background-color: #f5f5f5;
  color: #333;
}
</style>
