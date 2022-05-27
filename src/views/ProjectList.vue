<template>
<v-main id="master_app">
  <v-app id="app">
    <project-list-details :projects="projects" :project_type="project_type" />
  </v-app>
</v-main>
</template>

<script>
import {mapState,mapActions} from "vuex"
export default {
  name: "App",
  components: {
    ProjectListDetails: () => import("@/components/projectlistdetails"),
  },
  async created(){
    this.getProjectlist();
    this.getProjecttypeinfo();
  },
  computed:{
    ...mapState("project", ["projects"]),
    ...mapState("project", ["project_type"]),
  },
  methods: {
     async getProjectlist() {
         let obj = {
             id: this.$route.params.id,
             type: this.$route.params.type
         }
          this.$store
        .dispatch("project/getProjectlist",obj)
        .then(() => {
        })
        .catch(() => {});
    },
    async getProjecttypeinfo(){
      let obj = {
             id: this.$route.params.id,
             type: this.$route.params.type
         }
      this.$store
        .dispatch("project/getProjecttypeinfo", obj).then(() => {})
        .catch(() => {});
    },
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap');
#master_app #app{
    font-family: 'Open Sans', sans-serif;
}
</style>