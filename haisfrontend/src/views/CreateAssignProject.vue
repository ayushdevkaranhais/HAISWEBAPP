<template>
  <div class="create-assign-project">
    <div class="task-header">
      <button :class="{ active: activeTab === 'create' }" @click="activeTab = 'create'">Create New Project</button>
      <button :class="{ active: activeTab === 'assign' }" @click="activeTab = 'assign'">Assign Project</button>
    </div>
    
    <div v-if="activeTab === 'create'" class="task-form">
      <!-- Toggle Switch -->
      <div class="toggle-section toggle-center">
        <span class="toggle-label">New Project</span>
        <label class="toggle-switch">
          <input type="checkbox" v-model="isExistingProject" />
          <span class="slider"></span>
        </label>
        <span class="toggle-label" :style="isExistingProject ? 'color: #1A8CAB;' : ''">Existing Project</span>
      </div>
      <div v-if="!isExistingProject">
        <!-- New Project Form -->
        <div class="form-field">
          <input type="text" v-model="newProject.projectName" class="form-input" placeholder="Project Name " />
        </div>
        <div class="form-field">
          <input type="text" v-model="newProject.subProjectName" class="form-input" placeholder="Sub-Project Name" />
        </div>
        <div class="form-field">
          <input type="text" v-model="newProject.description" class="form-input description-input" placeholder="Description" />
        </div>
        <div class="form-field">
          <input type="text" v-model="newProject.toolsFramework" class="form-input" placeholder="Tools & Framework " />
        </div>
        <div class="form-field">
          <div class="file-upload file-upload-inline">
            <input type="text" class="form-input file-input" :value="selectedFile" placeholder="Attach Document" readonly />
            <label class="file-button-label">
              <input type="file" ref="fileInput" @change="handleFileUpload" style="display: none;" />
              <span class="file-button-text">Choose File</span>
            </label>
          </div>
        </div>
      </div>
      <div v-else>
        <!-- Existing Project Form (with project selection) -->
        <div class="form-field">
          <select v-model="selectedExistingProject" class="form-input">
            <option value="">Select Project</option>
            <option value="project1">Project 1</option>
            <option value="project2">Project 2</option>
          </select>
        </div>
        <div class="form-field">
          <input type="text" v-model="existingProject.subProjectName" class="form-input" placeholder="Sub-Project Name" />
        </div>
        <div class="form-field">
          <input type="text" v-model="existingProject.description" class="form-input description-input" placeholder="Description" />
        </div>
        <div class="form-field">
          <input type="text" v-model="existingProject.toolsFramework" class="form-input" placeholder="Tools & Framework " />
        </div>
        <div class="form-field">
          <div class="file-upload file-upload-inline">
            <input type="text" class="form-input file-input" :value="existingSelectedFile" placeholder="Attach Document" readonly />
            <label class="file-button-label">
              <input type="file" ref="existingFileInput" @change="handleExistingFileUpload" style="display: none;" />
              <span class="file-button-text">Choose File</span>
            </label>
          </div>
        </div>
      </div>
      <div class="form-actions">
        <button class="btn btn-primary" @click="createProject">Create Project</button>
      </div>
    </div>
    
    <div v-if="activeTab === 'assign'" class="task-form assign-project-form">
      <!-- Assign Project Form Content -->
      <div class="form-field">
        <select v-model="assignProject.selectedProject" class="form-input">
          <option value="">Select Project</option>
          
          <option value="project1">Project 1</option>
          <option value="project2">Project 2</option>
        </select>
      </div>
      <div class="form-field">
        <input type="text" v-model="assignProject.subProjectName" class="form-input" placeholder="Sub-Project Name" />
      </div>
      <div class="form-field">
        <input type="text" v-model="assignProject.description" class="form-input description-input" placeholder="Description" />
      </div>
      <div class="form-field">
        <input type="text" v-model="assignProject.toolsFramework" class="form-input" placeholder="Tools & Framework " />
      </div>
      <div class="form-field">
        <div class="file-upload file-upload-inline">
          <input type="text" class="form-input file-input" :value="assignSelectedFile" placeholder="Attach Document" readonly />
          <label class="file-button-label">
            <input type="file" ref="assignFileInput" @change="handleAssignFileUpload" style="display: none;" />
            <span class="file-button-text">Choose File</span>
          </label>
        </div>
      </div>
      <div class="form-field">
        <div class="assignees-field assignees-field-small">
          <input type="text" v-model="assigneeInput" class="form-input" placeholder="Add Assignees" @keyup.enter="addAssignee" />
          <div class="assignees-list">
            <span v-for="(assignee, index) in assignees" :key="index" class="assignee-chip">
              {{ assignee }}
              <span class="remove-chip" @click="removeAssignee(index)">&#10006;</span>
            </span>
          </div>
          <span class="dropdown-arrow" @click="addAssignee">&#9660;</span>
        </div>
      </div>
      <div class="form-actions">
        <button class="btn btn-primary" @click="assignProjectMethod">Assign Project</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CreateAssignProject',
  data() {
    return {
      activeTab: 'create',
      isExistingProject: false,
      selectedFile: '',
      existingSelectedFile: '',
      selectedExistingProject: '',
      newProject: {
        projectName: '',
        subProjectName: '',
        description: '',
        toolsFramework: ''
      },
      existingProject: {
        projectName: '',
        subProjectName: '',
        description: '',
        toolsFramework: ''
      },
      assignProject: {
        selectedProject: '',
        subProjectName: '',
        description: '',
        toolsFramework: ''
      },
      assignSelectedFile: '',
      assignees: [ 'Ayush Devkaran'],
      assigneeInput: ''
    };
  },
  watch: {
    selectedExistingProject(newVal) {
      // Example: Simulate fetching project data
      if (newVal === 'project1') {
        this.existingProject = {
          projectName: 'Project 1',
          subProjectName: 'Sub 1',
          description: 'Description for Project 1',
          toolsFramework: 'Vue, Node.js'
        };
        this.existingSelectedFile = 'project1-doc.pdf';
      } else if (newVal === 'project2') {
        this.existingProject = {
          projectName: 'Project 2',
          subProjectName: 'Sub 2',
          description: 'Description for Project 2',
          toolsFramework: 'React, Express'
        };
        this.existingSelectedFile = 'project2-doc.pdf';
      } else {
        this.existingProject = {
          projectName: '',
          subProjectName: '',
          description: '',
          toolsFramework: ''
        };
        this.existingSelectedFile = '';
      }
    }
  },
  methods: {
    createProject() {
      console.log('Project Created:', this.newProject);
      // Reset form
      this.newProject = {
        projectName: '',
        subProjectName: '',
        description: '',
        toolsFramework: ''
      };
      this.selectedFile = '';
    },
    addAssignee() {
      if (this.assigneeInput.trim() && !this.assignees.includes(this.assigneeInput.trim())) {
        this.assignees.push(this.assigneeInput.trim());
        this.assigneeInput = '';
      }
    },
    removeAssignee(index) {
      this.assignees.splice(index, 1);
    },
    assignProjectMethod() {
      // You can handle the assignment logic here
      alert('Project assigned to: ' + this.assignees.join(', '));
    },
    handleFileUpload(event) {
      const file = event.target.files[0];
      if (file) {
        this.selectedFile = file.name;
      }
    },
    handleExistingFileUpload(event) {
      const file = event.target.files[0];
      if (file) {
        this.existingSelectedFile = file.name;
      }
    },
    handleAssignFileUpload(event) {
      const file = event.target.files[0];
      if (file) {
        this.assignSelectedFile = file.name;
      }
    }
  }
};
</script>

<style scoped>
.create-assign-project {
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
  font-weight: 400px;
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
  background: #f0f0f0;
  padding: 30px;
  border-radius: 16px;
  margin-bottom: 40px;
}

.toggle-section {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 30px;
}

.toggle-center {
  justify-content: center;
  margin-bottom: 30px;
  display: flex;
}

.toggle-label {
  font-size: 13px;
  font-weight: 500;
  color: #333;
  align-items: center;

}

.toggle-switch {
  position: relative;
  display: inline-block;
  width: 24px;
  height: 12px;
}

.toggle-switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 12px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 8px;
  width: 8px;
  left: 2px;
  bottom: 2px;
  background-color: white;
  transition: 0.4s;
  border-radius: 50%;
}

input:checked + .slider {
  background-color: #1A8CAB;
}

input:checked + .slider:before {
  transform: translateX(12px);
}

.form-field {
  margin-bottom: 20px;
}

.field-label {
  display: block;
  margin-bottom: 8px;
  font-size: 14px;
  color: #333;
  font-weight: 500;
}

.form-input {
  width: 100%;
  padding: 8px 10px 10px 20px;
  border: 1px solid #EAEAEA;
  border-radius: 67px;
  font-size: 14px;
  box-sizing: border-box;
  background: #EAEAEA;
}

.form-input.description-input {
  width: 100%;
  padding: 10px 15px 40px 15px;
  border: 1px solid #EAEAEA;
  border-radius: 15px;
  font-size: 14px;
  resize: none;
  font-family: inherit;
  box-sizing: border-box;
  background: #EAEAEA;
}

.form-textarea {
  width: 100%;
  padding: 10px 20px 10px 20px;
  border: 1px solid #EAEAEA;
  border-radius: 6px;
  font-size: 14px;
  resize: none;
  font-family: inherit;
  box-sizing: border-box;
  background: #EAEAEA;
}

.form-textarea[placeholder="Description:"] {
  border-radius: 10px !important;
  height: 32px !important;
}

.form-select {
  width: 100%;
  padding: 10px 20px 10px 30px;
  border: 1px solid #EAEAEA;
  border-radius: 67px;
  font-size: 14px;
  background-color: #EAEAEA;
  box-sizing: border-box;
}

.file-upload {
  display: flex;
  align-items: center;
  gap: 10px;
}

.file-upload-inline {
  display: flex;
  align-items: center;
  background: #EAEAEA;
  border-radius: 67px;
  padding: 0 10px;
}

.file-input {
  border: none;
  background: transparent;
  flex: 1;
  font-size: 14px;
  padding: 10px 0 10px 10px;
}

.file-button-label {
  display: flex;
  align-items: center;
  margin-left: 8px;
  cursor: pointer;
  background: #EAEAEA;
  border-radius: 15px;
  padding: 0 12px;
  height: 32px;
}

.file-button-text {
  color: #bdbdbd;
  font-size: 14px;
  padding: 0 8px;
}

.file-button:hover {
  background: #e9e9e9;
}

.file-text {
  font-size: 14px;
  color: #666;
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

.assignees-field {
  display: flex;
  align-items: center;
  background: #EAEAEA;
  border-radius: 67px;
  padding: 0 20px;
  width: 100%;
}
.assignees-field-small {
  height: 40px;
  min-height: 40px;
  padding: 0 10px;
}
.assignees-field-small .form-input {
  font-size: 14px;
  padding: 8px 10px;
}
.assignees-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-left: 10px;
}
.assignee-chip {
  background: #fff;
  border-radius: 15px;
  padding: 1px 20px;
  font-size: 8px;
  display: flex;
  align-items: center;
  box-shadow: 0 1px 4px rgba(0,0,0,0.07);
}
.remove-chip {
  margin-left: 6px;
  cursor: pointer;
  color: #888;
  font-size: 13px;
}
.dropdown-arrow {
  margin-left: 10px;
  cursor: pointer;
  color: #1A8CAB;
  font-size: 20px;
  display: flex;
  align-items: center;
}
.add-chip {
  margin-left: 10px;
  cursor: pointer;
  color: #1A8CAB;
  font-size: 20px;
}

.assign-project-form {
  margin-bottom: 20px;
}
</style>