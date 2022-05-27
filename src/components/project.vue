<template>
  <div v-if="project && project.length">
    <b-carousel
    id="carousel-fade"
    style="text-shadow: 0px 0px 2px #000"
    fade
  >
    <b-carousel-slide class="project-carousel" v-for="(pro_slider, index) in project[0].project_images"
        :key="index"
      :img-src="`${pro_slider.image}`"
    ></b-carousel-slide>
    
  </b-carousel>
     <div>
      <partners @close="close" v-if="partner" :partners="partner" :ppartners="project[0].partners" :color="project[0].default_color_code" :project="project"></partners>
      <org @close="close" v-if="organizer" :organizers="organizer" :porg="project[0].partners" :color="project[0].default_color_code" :project="project" :type="type"></org>
      <beneficiary @close="close" :beneficiaries="beneficiary" :ben="project[0].beneficiary_stories" :color="project[0].default_color_code" :project="project" :type="type"></beneficiary>
      <donor @close="close" v-if="donors" :donor="donors" :pdonors="project[0].donors" :color="project[0].default_color_code" :project="project"></donor>
      <procontent @close="close" :content="content" :project="project" :color="project[0].default_color_code" :type="type"></procontent>
      <proright :donors="donors" :beneficiary="beneficiary" :partner="partner" :organizer="organizer" @setprojectview="setprojectview"></proright>
      <proleft @toggleswiss="toggleswiss" :project="project" :globe="globe" :first="first" :location="location" :left="left" @close="close"></proleft>
      <protop :donors="donors" :beneficiary="beneficiary" :partner="partner" :organizer="organizer" @setprojectview="setprojectview"></protop>
      <probottom :project="project" @setactive="setactive"></probottom>
    </div>
  </div>
</template>

<script>
import carousel from "vue-owl-carousel";
import { mapState, mapActions } from "vuex";
import partners from "../components/partners";
import proright from "../components/proright";
import proleft from "../components/proleft";
import protop from "../components/protop";
import probottom from "../components/probottom";
import donor from "../components/donor";
import procontent from "../components/procontent";
export default {
  data: () => ({
    donors: false,
    beneficiary: false,
    partner: false,
    organizer: false,
    show: null,
    globe: false,
    left: false,
    location: false,
    first: false,
    type:null,
    activeItem: null,
    baseEnvLocal: baseEnv,
    content:false,
    sliders: [
      { id: 1, image: "assets/img/farmer.png" },
      { id: 2, image: "assets/img/farmer.png" },
    ],
    p_options: [
      { id: 1, name: "Introduction" },
      { id: 2, name: "Sdg" },
      { id: 3, name: "Activities" },
      { id: 4, name: "Working Area" },
      { id: 5, name: "Results" },
    ],
    showCarousel: false,
  }),
  components: {
    carousel,
    partners,
    donor,
    procontent,
    org: () => import('../components/project_org'),
    beneficiary:()=>import('../components/beneficiary'),
    proright,
    proleft,
    protop,
    probottom,
  },
  props: {
    project: {},
  },
  async created() {},
  computed: {},
  methods: {
    selectdetails(index) {
      this.show = index;
    },
    close(){
      this.donors = false
      this.beneficiary = false
      this.partner = false
      this.organizer = false
      this.content = false
      this.activeItem = null
    },
    toHome() {
      this.$router.push("/");
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
    setprojectview: function (event) {
      let type = event.currentTarget.id;
      console.log("type",type)
      this.globe = false
      this.location = false
      this.first = false
      this.left = false
      if (type == "donor") {
        this.donors = !this.donors;
        this.partner = false;
        this.beneficiary = false;
        this.organizer = false;
        this.content = false
      } else if (type == "partner") {
        this.donors = false;
        this.partner = !this.partner;
        this.beneficiary = false;
        this.organizer = false;
        this.content = false
      } else if (type == "organizer") {
        this.donors = false;
        this.partner = false;
        this.beneficiary = false;
        this.organizer = !this.organizer;
        this.content = false
      } else {
        this.donors = false;
        this.partner = false;
        this.beneficiary = !this.beneficiary;
        this.organizer = false;
        this.content =false
      }
    },
    setactive:function(index)
    {
      if(index == "act"){
        this.type = "act"
      }
      else{
        this.type = "res"
      }
      this.donors = false;
      this.partner = false;
      this.beneficiary = false
      this.organizer = false;
      this.globe = false
      this.location = false
      this.first = false
      this.left = false
      this.content = this.content == false ? this.content = !this.content : true
    }
  },
};
</script>

<style>
.swiss-sub-nav {
  min-width: 434px;
}
.working_area{
  min-width:330px;
  padding-left:0!important;
}
.working_area .area-item{
  border:none;
}
.working_area .area-item a{
  list-style:none;
  display: inline-block;
  color:#000!important;
  text-transform:none;
  font-size:13px;
}
</style>
