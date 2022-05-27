// import { axios } from "vue/types/umd";

export default {
    namespaced: true,
  
    state: () => ({
      project: {},
      project_type: {},
      projects: [],
    }),
  
    getters: {
      projects(state) {
        return state.projects;
      },
      project(state) {
        return state.project;
      },
      project_type(state) {
        return state.project_type;
      },
  
    },
  
    mutations: {
      populateProjects(state,newProject){
        state.projects = newProject;
      },
      populateProject(state,newPro){
        state.project = newPro;
      },
      populateProjectType(state,newProtype){
        state.project_type = newProtype;
      },
    },
  
    actions: {
      getProjectlist({commit},apiArg) {
          // let isSuccess = false
          return new Promise((resolve, reject) => {
          let url = "";
            if(apiArg.type == "work"){
                url = 'project/area/'
            }
            else if (apiArg.type == "sdg"){
                url = 'project/sdg/'
            }
            else{
                url = 'project/region/'
            }
            axios.get(url+apiArg.id)
          .then(res => {
            resolve(res);
          // isSuccess = res.data.data
            commit("populateProjects",res.data.data);
            // return isSuccess;
          // })
          // .catch((error) => {
          //   isSuccess = false
          // });
          // return isSuccess;
        })
        .catch((error) => {
          reject(error);
        });
      });
      },
      getProjecttypeinfo({commit},apiArg) {
          // let isSuccess = false
          return new Promise((resolve, reject) => {
          let url = "";
            if(apiArg.type == "work"){
                url = 'area/'
            }
            else if (apiArg.type == "sdg"){
                url = 'sdg/'
            }
            else{
                url = 'country/'
            }
            axios.get(url+apiArg.id)
          .then(res => {
            resolve(res);
          // isSuccess = res.data.data
          console.log("project type",res.data.data)
            commit("populateProjectType",res.data.data);
            // return isSuccess;
          // })
          // .catch((error) => {
          //   isSuccess = false
          // });
          // return isSuccess;
        })
        .catch((error) => {
          reject(error);
        });
      });
      },
      getProject({commit},apiArg) {
        return new Promise((resolve, reject) => {
          axios.get('project/'+apiArg)
      .then(res => {
          resolve(res);
            commit("populateProject",res.data.data);
      })
          .catch((error) => {
            reject(error);
          });
      });
      },
    }
  };
  