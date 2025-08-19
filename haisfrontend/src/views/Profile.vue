<template>
  <div class="profile-container">
    <!-- Top Right Profile -->
    <!-- <div class="profile-header">
      <img
        src="https://via.placeholder.com/40"
        alt="profile"
        class="profile-pic"
      />
    </div> -->

    <!-- Tabs -->
    <div class="profile-card">
     
      <div class="tabs">
        <button class="tab active">My Profile</button>
        <button class="tab">Notifications</button>
      </div>

      <!-- Profile Form -->
      <div class="form-container">
        <div class="form-actions">
          <button class="btn cancel">Cancel</button>
          <button class="btn save">Save Changes</button>
        </div>
        <div class="heading-h1">
          <h1>Personal Info</h1>
          <p>Update your photo & personal info here</p>
        </div>

        <!-- Name -->
        <div class="form-row">
          <div class="form-group">
            <label>Name</label>
            <input type="text" value="Anuj" />
          </div>
          <div class="form-group">
            <label>&nbsp;</label>
            <input type="text" value="Bhardwaj" />
          </div>
        </div>

        <!-- Email -->
        <div class="form-group">
          <label>Email</label>
          <input type="email" value="anujbhardwaj@gmail.com" />
        </div>

        <!-- Role -->
        <div class="form-group">
          <label>Role</label>
          <input type="text" value="Developer" />
        </div>

        <!-- Upload -->
        <div class="upload-section">
          <img
            src="https://via.placeholder.com/100"
            alt="profile"
            class="upload-pic"
          />
          <div class="upload-box">
            <p>Choose & Upload a file</p>
            <i class="fas fa-upload"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileView",
};
</script>

<style scoped>
/* Container */
.profile-container {
  flex: 1;
  padding: 20px 40px;
  background: #f0f0f0; /* Updated background color */
  min-height: 100vh;
}

/* Header */
.profile-header {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
}
.heading-h1 {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 38px;
  flex-wrap: wrap;
}
.profile-pic {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

/* Profile Card */
.profile-card {
  background: #eaeaea; /* Updated background color */
  border-radius: 6px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  overflow: hidden;
}

/* Tabs */
.tabs {
  display: flex;
  border-bottom: 1px solid #ddd;
}
.tab {
  padding: 12px 20px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 15px;
  color: #333;
}
.tab.active {
  border-bottom: 2px solid #0099cc;
  color: #0099cc;
  font-weight: 500;
}

/* Form */
.form-container {
  background: #eaeaea;
  padding: 20px;
}
.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-bottom: 20px;
}
.btn {
  padding: 8px 16px;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  font-size: 14px;
}
.btn.cancel {
  background: #ccc;
  color: #333;
}
.btn.save {
  background: #0099cc;
  color: #fff;
}

/* Fields */
.form-row {
  display: flex;
  gap: 20px;
}
.form-group {
  flex: 1;
  margin-bottom: 15px;
}
.form-group label {
  display: block;
  font-size: 14px;
  margin-bottom: 5px;
  color: #444;
}
.form-group input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 14px;
}

/* Upload */
.upload-section {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
}
.upload-pic {
  width: 90px;
  height: 90px;
  border-radius: 50%;
}
.upload-box {
  border: 2px dashed #aaa;
  width: 200px;
  height: 100px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #666;
}
.upload-box p {
  font-size: 13px;
  margin-bottom: 6px;
}
.upload-box i {
  font-size: 18px;
}
</style>
