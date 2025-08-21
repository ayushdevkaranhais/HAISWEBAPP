import { createStore } from 'vuex';

const store = createStore({
  state: {
    leaveApplications: []
  },
  mutations: {
    addLeaveApplication(state, application) {
      state.leaveApplications.push(application);
    }
  },
  actions: {
    submitLeave({ commit }, application) {
      commit('addLeaveApplication', application);
    }
  },
  getters: {
    getLeaveApplications(state) {
      return state.leaveApplications;
    }
  }
});

export default store;
