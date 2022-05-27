<template>
  <v-main id="master_app">
    <v-app id="app">
        <Loader />
      <div class="container-fluid swiss-bg" :style="settings && settings.length ? {backgroundImage: `url(${settings[0].default_image})`} : ''">
      <!-- <div class="container-fluid swiss-bg"> -->
        <div class="swiss-main">
        <core-top-bar :settings="settings" />
        <!-- <core-drawer /> -->
        <core-view />
        <!-- <core-footer /> -->
        </div>
      </div>
    </v-app>
  </v-main>
</template>

<script>
import {mapActions,mapState} from "vuex"
export default {
  name: "App",
  data: () => ({
    loader: true,
  }),
  components: {
    CoreFooter: () => import("@/components/core/Footer"),
    CoreTopBar: () => import("@/components/core/TopBar"),
    CoreView: () => import("@/components/core/View"),
    Loader: ()=>import('../components/helpers/loader'),
  },
  async created() {
    this.getSettings()
  },
  computed: {
    ...mapState("homepage", ["settings"]),
  },
  methods: {
    ...mapActions("homepage", ["getSettings"]),
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
#master_app #app{
    font-family: 'Roboto', sans-serif;
}
</style>