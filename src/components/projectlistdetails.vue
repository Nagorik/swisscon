<template>
  <div class="project-list-section">
    <div
      class="project-details-main container-fluid"
      :style="{ height: '100%' + w_height + '%' }"
    >
      <div class="project-details col-md-12" v-if="project_type">
        <div class="main-results d-flex justify-content-center m-auto">
          <p>Main Results of 2021</p>
        </div>
        <div class="row">
          <div class="col-md-10 offset-1">
            <div class="row result-outcome">
              <div class="col-md-3 col-6 px-0 pr-2">
                <div class="outcome-content">
                    <p class="number">
                      <!-- {{ project_type.beneficiry }} -->
                      <number v-if="project_type.beneficiry" :number="project_type.beneficiry"></number>
                      </p>
                    <p class="title">Beneficiaries</p>
                </div>
              </div>

              <div class="col-md-3 col-6 px-0 pr-2">
                <div class="outcome-content">
                  <p class="number">
                    <!-- {{ project_type.out_reach }} -->
                    <number v-if="project_type.out_reach" :number="project_type.out_reach"></number>
                    </p>
                  <p class="title">OutReach</p>
                </div>
              </div>
              <div class="col-md-3 col-6 px-0 pr-2">
                <div class="outcome-content">
                <p class="number">
                  <!-- {{ project_type.income_generated }} -->
                  <number v-if="project_type.income_generated" :number="project_type.income_generated"></number>
                  </p>
                <p class="title">Income Generated</p>
                </div>
              </div>
              <div class="col-md-3 col-6 px-0">
                <div class="outcome-content">
                  <p class="number">
                    <!-- {{ project_type.partner }} -->
                    <number v-if="project_type.partner" :number="project_type.partner"></number>
                    </p>
                  <p class="title">Partners</p>
                </div>
              </div>
            </div>
            <div class="project-list-view row">
          <ul class="project-sub-menu" v-if="projects && projects.length">
            <li class="d-flex" v-for="(pro, cl) in projects" :key="cl">
              <img :src="pro.project_icon" width="20" height="20" alt="">
              <a href="javascript:void(0)" @click="toProject(pro.project_id)">{{
                pro.project_name
              }}</a>
            </li>
          </ul>
        </div>
        <div
          class="address-view row"
          v-if="
            project_type.address || project_type.contact || project_type.link
          "
        >
          <div class="address-content">
            <span><i class="fa fa-map-marker-alt"></i></span>
            <p v-if="project_type.address">{{ project_type.address }}</p>
          </div>
          <div class="address-content">
            <span><i class="fa fa-phone"></i></span>
            <p v-if="project_type.contact">{{ project_type.contact }}</p>
          </div>
          <a :href="project_type.link" target="_blank">
            <div class="address-content pl-0">
                <span><i class="fa fa-globe"></i></span>
              <p v-if="project_type.link">{{ project_type.link }}</p>
              
            </div>
            </a>
        </div>
          </div>
        </div>
        
        
      </div>
      <proleft @toggleswiss="toggleswiss" :globe="globe" :first="first" :location="location" :left="left"></proleft>
      <div class="top-circle"></div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    show: null,
    globe: false,
    left: false,
    location: false,
    first: false,
    activeItem: null,
    baseEnvLocal: baseEnv,
    showCarousel: false,
    w_height: 0,
    componentKey: 0
  }),
  components: {
    proleft: () => import("../components/proleft"),
    number: () => import("../components/number"),
  },
  props: {
    projects: [],
    project_type: {},
  },
  methods: {
    selectdetails(index) {
      this.show = index;
    },
    toHome() {
      this.$router.push("/").catch(()=>{});
    },
    toggleswiss: function(type)
    { 
      if(type == "region_menu"){
        this.globe = !this.globe
        this.location = false
        this.first = false
      }
      else if(type == "work_menu"){
        this.globe = false
        this.location = !this.location
        this.first = false
      }
      else{
        this.globe = false
        this.location = false
        this.first = !this.first
      }
      
    },
    setactive: function (index) {
      if (this.activeItem == index) {
        this.activeItem = null;
      } else {
        this.activeItem = index;
      }
    },
    toProject(id) {
      this.$store
        .dispatch("project/getProject", id)
        .then(() => {
          this.$router.push({ name: "Project", params: { id: id } });
        })
        .catch(() => {});
    },
    getProjectlist(id, event) {
      let type = event.currentTarget.id;
      let obj = {
        id: id,
        type: type,
      };
      this.$store
        .dispatch("project/getProjectlist", obj)
        .then((response) => {
          this.$router.push({
            name: "ProjectList",
            params: { id: id, type: type },
          });
          (this.globe = false),
            (this.left = false),
            (this.location = false),
            (this.first = false),
            (this.activeItem = null);
        })
        .catch(() => {});
    },
    
  },
};
</script>

<style>
.swiss-sub-nav {
  min-width: 434px;
}
.working_area {
  min-width: 330px;
  padding-left: 0 !important;
}
.working_area .area-item {
  border: none;
}
.working_area .area-item a {
  list-style: none;
  display: inline-block;
  color: #000 !important;
  text-transform: none;
  font-size: 13px;
}
.project-icon .pro {
  /* width:14%!important; */
  border-color: #fff !important;
}
.project-details-main .bubble-big {
  left: 8% !important;
  bottom: 3% !important;
}
.project-details-main .bubble-top {
  left: 14% !important;
  bottom: 25% !important;
}
.project-details-main .another-bubble-big {
  right: 1% !important;
}
.project-details-main .another-bubble-top {
  right: 1% !important;
  top: 5% !important;
}
.project-details-main .bubble-bottom {
  left: 7% !important;
  bottom: 5% !important;
}
.top-circle {
  position: absolute;
  width: 100%;
  height: 1038.3px;
  left: 23.96px;
  top: -713.23px;
  background: #00477a;
  opacity: 0.1;
  border-radius: 50%;
}
.project-list-section {
  height: 100%;
  position: relative;
  width: 100%;
  overflow: hidden;
  background: #ffffff;
  padding: 15px;
}
.project-list-section .project-details-main {
  width: 100%;
  height: 100%;
  border-radius: 30px;
  position: relative;
  overflow: hidden;
}
.main-results {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 40px;
  box-sizing:content-box;
  gap: 10px;
  margin-top:50px!important;
  margin-bottom:15px!important;
  /* position: absolute; */
  width: 50%;
  height: 65px;
  /* left: 25%; */
  /* top: 10%; */

  /* Secondary Text Color */

  background: #5a5f61;
  border-radius: 10px;
}
.main-results p {
  font-family: "Calibri";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 40px;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 0;
  /* white */

  color: #ffffff;
}
.project-details-main .result-outcome {
  align-items: center;
  margin-bottom:15px;
  justify-content: center;
  width:100%;
}
.outcome-content {
  /* position: absolute; */
  width: 100%;
  height: 100%;
  /* left: 188.21px; */
  /* top: 248.04px; */
  padding: 0 0 10px 0;
  background: #e4e4e4;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  margin-right:10px;
}
.outcome-content:last-child{
  margin-right:0;
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
.project-list-view {
  /* position:absolute; */
  /* top:48%; */
  /* left:12%; */
  /* width: 80%; */
  display: flex;
  align-items: center;
  justify-content: center;
  background: #e4e4e4;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  min-height: 140px;
  margin-bottom:15px!important;
  width:100%;
}
.address-view {
  /* position:absolute; */
  /* top:73%; */
  /* left:12%; */
  /* width: 80%; */
  align-items: center;
  padding: 15px 10px 10px 10px;
  justify-content: center;
  background: #e4e4e4;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  width:100%;
}
.address-view .address-content {
  padding: 0 10px;
  display: flex;
  gap: 10px;
  word-break: break-all;
}
.address-content p {
  font-family: "Calibri";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  /* identical to box height */

  text-align: justify;

  /* Secondary Text Color */

  color: #5a5f61;
}
.address-content span {
  /* primary Header Color */
  height: 22px;
  width: 22px;
  text-align: center;
  justify-content: center;
  border: 1px solid #00477a;
  border-radius: 50%;
}
.address-content span i {
  /* primary Header Color */
  color: #00477a;
}
.project-list-view .project-sub-menu li a {
  font-family: "Calibri";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 29px;
  /* text-align: justify; */
   text-transform: uppercase;

  /* Secondary Text Color */

  color: #5a5f61;
}

.project-list-view .project-sub-menu {
    display: grid;
    grid-template-columns: 1fr 1fr;
    /* justify-content: center; */
    -moz-column-gap: 0px;
    column-gap: 0px;
    place-content: center;
    align-content: center;
    align-items:start;
    padding:20px;
    place-self: center;
}
.project-list-view .project-sub-menu li span i {
  color: #5a5f61;
}
.project-list-view .project-sub-menu li span {
  margin-top: 3%;
}
.project-list-view .project-sub-menu li{
  min-width:15%;
}
</style>
