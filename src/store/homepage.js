// import { axios } from "vue/types/umd";

export default {
  namespaced: true,

  state: () => ({
    settings: {},
    regions: [],
    area: [],
    sdg: [],
    remark: {},
    loader:false,
  }),

  getters: {
    regions(state) {
      return state.regions;
    },
    settings(state) {
      return state.settings;
    },
    area(state) {
      return state.area;
    },
    sdg(state) {
      return state.sdg;
    },
    remark(state) {
      return state.remark;
    },

  },

  mutations: {
    populateSettings(state,newSetting){
      state.settings = newSetting;
    },
    populateRegions(state,newRegion){
      state.regions = newRegion;
    },
    populateRemark(state,newRemark){
      state.remark = newRemark;
    },
    populateArea(state,newArea){
      state.area = newArea;
    },
    populateSdg(state,newSdg){
      state.sdg = newSdg;
    },
    LOADER(state,payload){
      state.loader = payload
    },
  },

  actions: {
    getSettings({commit}) {
      commit('LOADER',true)
      return new Promise((resolve, reject) => {
        axios.get('settings')
    .then(res => {
        resolve(res);
          commit("populateSettings",res.data.data);
          commit('LOADER',false)
          console.log("data",res.data.data)
    })
        .catch((error) => {
          reject(error);
          commit('LOADER',false)
        });
    });
    },
    getRegions({commit}) {
      return new Promise((resolve, reject) => {
        axios.get('region')
    .then(res => {
        resolve(res);
          commit("populateRegions",res.data.data);
    })
        .catch((error) => {
          reject(error);
        });
    });
    },
    getRemark({commit}) {
      return new Promise((resolve, reject) => {
        axios.get('editorial/remark')
    .then(res => {
        resolve(res);
          commit("populateRemark",res.data.data);
    })
        .catch((error) => {
          reject(error);
        });
    });
    },
    getArea({commit}) {
      return new Promise((resolve, reject) => {
        axios.get('working/area')
    .then(res => {
        resolve(res);
          commit("populateArea",res.data.data);
    })
        .catch((error) => {
          reject(error);
        });
    });
    },
    getSdg({commit}) {
      return new Promise((resolve, reject) => {
        axios.get('sdg')
    .then(res => {
        resolve(res);
          commit("populateSdg",res.data.data);
    })
        .catch((error) => {
          reject(error);
        });
    });
    },
    
  }
};
