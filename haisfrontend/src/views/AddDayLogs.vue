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
        <select id="project-name" class="form-input" v-model="form.project">
          <option value="" disabled selected>Select Project</option>
          <option value="Project A">Project A</option>
          <option value="Project B">Project B</option>
        </select>
      </div>

      <div class="form-group">
        <input type="text" id="sub-project-name" class="form-input" placeholder="Sub-Project Name" v-model="form.subProject" required />
      </div>

      <div class="form-group">
        <select id="task" class="form-input" v-model="form.task" required>
          <option value="">Select Task</option>
          <option value="Research & Learning">Research & Learning</option>
          <option value="Designing">Designing</option>
          <option value="Developing">Developing</option>
          <option value="Testing">Testing</option>
          <option value="Debugging">Debugging</option>
          <option value="Query handling">Query handling</option>
          <option value="Discussion">Discussion</option>
          <option value="Documenting">Documenting</option>
        </select>
      </div>

      <div class="form-group">
        <input type="text" id="task-id" class="form-input" placeholder="Task Id" v-model="form.taskId" required />
      </div>

      <div class="form-group">
        <textarea id="description" class="form-textarea" placeholder="Description" v-model="form.description" rows="3" required></textarea>
      </div>

      <div class="form-group">
        <input type="number" id="hours-spent" class="form-input" placeholder="Hours Spent" v-model="form.hoursSpent" min="0" step="0.5" />
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
      if (!this.form.project || !this.form.hoursSpent) {
        alert('Please add all fields.');
        return;
      }
      const newLog = { ...this.form, id: Date.now() };
      const existingLogs = JSON.parse(localStorage.getItem('dayLogs')) || [];
      existingLogs.push(newLog);
      localStorage.setItem('dayLogs', JSON.stringify(existingLogs));
      alert('Day log saved successfully!');
      this.resetForm();
    },
    handleSaveAndAddMore() {
      this.handleSubmit();
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
  padding: 18px 38px 25px;
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
.form-input#sub-project-name,
.form-input#task-id,
.form-textarea#description,
.form-input#hours-spent {
  color: #000000;
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
  color: #000000;
}
</style>