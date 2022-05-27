<template>
  <v-dialog
    v-model="content"
    ref="content"
    height="100%"
    width="100%"
    persistent
  >
    <div class="donors procon" v-if="content && project">
      <v-icon
        color="black"
        @mouseover="icon = true"
        @mouseout="icon = false"
        style="
          background-color: #5a5f61;
          border-radius: 50%;
          color: #fff !important;
        "
        text
        @click="$emit('close')"
      >
        {{ icon ? "mdi-close" : "mdi-minus" }}
      </v-icon>
      <div class="procontent donors-main">
        <div class="donor-div">
          <div class="pro-options-sub-menu">
              <div class="pro-options-content" v-if="type == 'intro'">
                <p v-html="project[0].introduction"></p>
              </div>
              <div class="pro-options-content" v-else-if="type == 'sdg'">
                <p v-html="project[0].sdg" class="text-white"></p>
              </div>
              <div class="pro-options-content my-5" v-else-if="type == 'act'">
                <p v-html="project[0].activities"></p>
              </div>
              <div class="pro-options-content" v-else-if="type == 'work'">
                <div v-for="(area, sl) in project[0].working_areas" :key="sl">
                  <p v-html="area.name"></p>
                </div>
              </div>
              <div class="pro-options-content" v-else>
                <!-- <div class="result-outcome">
                  <div class="outcome-content">
                    <p class="number">{{ project[0].beneficiry }}</p>
                    <p class="title">Beneficiary</p>
                  </div>
                  <div class="outcome-content">
                    <p class="number">{{ project[0].partner }}</p>
                    <p class="title">Partner</p>
                  </div>
                  <div class="outcome-content">
                    <p class="number">{{ project[0].out_reach }}</p>
                    <p class="title">Out Reach</p>
                  </div>
                  <div class="outcome-content">
                    <p class="number">{{ project[0].income_generated }}</p>
                    <p class="title">Income</p>
                  </div>
                </div> -->
                <div class="row result-outcome">
              <div class="col-md-3 col-6 px-0 pr-2">
                <div class="outcome-content">
                    <p class="number">
                      {{ project[0].beneficiry }}
                      <!-- <number :number="project[0].beneficiry"></number> -->
                    </p>
                    <p class="title">Beneficiary</p>
                </div>
              </div>

              <div class="col-md-3 col-6 px-0 pr-2">
                <div class="outcome-content">
                  <p class="number">
                    {{ project[0].out_reach }}
                    <!-- <number :number="project[0].out_reach"></number> -->
                    </p>
                  <p class="title">OutReach</p>
                </div>
              </div>
              <div class="col-md-3 col-6 px-0 pr-2">
                <div class="outcome-content">
                <p class="number">
                  {{ project[0].income_generated }}
                  <!-- <number :number="project[0].income_generated"></number> -->
                  </p>
                <p class="title">Income Generated</p>
                </div>
              </div>
              <div class="col-md-3 col-6 px-0">
                <div class="outcome-content">
                  <p class="number">
                    {{ project[0].partner }}
                    <!-- <number :number="project[0].partner"></number> -->
                    </p>
                  <p class="title">Partner</p>
                </div>
              </div>
            </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  </v-dialog>
</template>

<script>
export default {
  name: "procontent",
  data: () => ({
    donors: false,
    beneficiary: false,
    partner: false,
    organizer: false,
    newContent: false,
    newtype: "",
    icon: false,
  }),
  components: {
    number: () => import("../components/number"),
  },
  props: {
    content: false,
    project: {},
    color: null,
    type: "",
  },
  methods: {
    setprojectview: function (event) {
      let type = event.currentTarget.id;
      if (type == "donor") {
        this.donors = !this.donors;
        this.partner = false;
        this.beneficiary = false;
        this.organizer = false;
        console.log("donors true korechi ");
      } else if (type == "partner") {
        this.donors = false;
        this.partner = !this.partner;
        this.beneficiary = false;
        this.organizer = false;
        console.log("partner true korechi");
      } else if (type == "organizer") {
        this.donors = false;
        this.partner = false;
        this.beneficiary = false;
        this.organizer = !this.organizer;
      } else {
        this.donors = false;
        this.partner = false;
        this.beneficiary = !this.beneficiary;
        this.organizer = false;
      }
    },
    setactive: function (type) {
      console.log("new type peyechi", type);
      this.newtype = type;
      //   if(index == 0){
      //     type = "intro"
      //   }
      //   else if(index == 1){
      //     type = "sdg"
      //   }
      //   else if(index == 2){
      //     type = "act"
      //   }
      //   else if(index == 4){
      //     type = "work"
      //   }
      //   else{
      //     type = "res"
      //   }
      this.newContent = !this.newContent;
    },
  },
};
</script>

<style scoped>
.pro-options-content p {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 36px;
  text-align: justify;
  color: #5a5f61;
}
.pro-options-sub-menu {
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: flex-start; */
  /* padding: 50px; */
  gap: 70px;
  position: absolute;
  width: 84%;
  height: 90%;
  overflow-y: auto;
  overflow-x:hidden;
  padding:0 10px;
  left: 10%;
  top: 20%;
  background: transparent;
  border-radius: 10px;
}

.outcome-content {
  /* position: absolute; */
  width: 100%;
  height: 100%;
  /* left: 188.21px; */
  /* top: 248.04px; */
  padding: 0 15px;
  background: #e4e4e4;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
}
.outcome-content .title {
  font-family: "Calibri";
  font-style: normal;
  font-weight: 700;
  font-size: 50px;
  line-height: 64px;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 0;
  /* primary Header Color */

  color: #00477a;
}
.outcome-content .number {
  font-family: "Calibri";
  font-style: normal;
  font-weight: 700;
  font-size: 50px;
  line-height: 64px;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 0;
  /* primary Header Color */

  color: #00477a;
}
</style>