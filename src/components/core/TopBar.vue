<template>
  <div>
    <v-container>
      <div class="p-15 topbar">
        <div class="topbar-logo mt-2">
          <div class="d-flex-wrapper">
            <div class="left-logo">
              <a @click="toHome()" style="cursor:auto">
                <img
                  style=""
                  :src="require('@/assets/img/left_logo.png')"
                  alt=""
                />
                </a>
            </div>
            <div class="d-sm-logo float-right">
              <a @click="toHome()" style="cursor:auto">
                <img v-if="settings && settings.length"
                  height="50"
                  :src="`${settings[0].logo}`"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
// Utilities
import { mapMutations, mapState, mapActions } from "vuex";
// Components
export default {
  name: "CoreTopBar",
  computed: {},
  data: () => ({
    baseEnvLocal: baseEnv,
  }),
  props:{
    settings:{}
  },
  async created() {
  },
  computed: {
    
  },
  methods: {
    toHome() {
      this.$router.push("/");
    },
    
  },
};
</script>

<style scoped>
  .left-logo{
    position: absolute;
    left: 5.47%;
    right: 69.22%;
    top: 6.94%;
    bottom: 64.44%;
  }
</style>
