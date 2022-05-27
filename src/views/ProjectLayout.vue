<template>
<v-main id="master_app">
  <v-app id="app">
    <div class="project-section">
        <div class="project_main" v-if="project && project.length">
          <core-view :project="project" />
        </div>
    </div>
    
  </v-app>
</v-main>
</template>

<script>
import {mapState} from "vuex"
import carousel from 'vue-owl-carousel'

export default {
  name: "App",
  components: {
    CoreView: () => import("@/components/project"),
    carousel,     
  },
  async created(){
    this.getProject();
  },
  computed:{
    ...mapState("project", ["project"]),
  },
  methods: {
     async getProject() {
      this.$store
        .dispatch("project/getProject",this.$route.params.id)
        .then(() => {
        })
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