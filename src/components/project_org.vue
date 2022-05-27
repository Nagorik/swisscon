<template>
  <v-dialog v-model="organizers" ref="organizers" height="100%" width="100%" persistent>
    <div
      class="donors"
      v-if="organizers && project[0].partner_stories"
    >
    <v-icon
            color="black" @mouseover="icon = true" @mouseout="icon = false"
            style="background-color: #5A5F61;border-radius:50%;color:#fff!important"
            text
            @click="$emit('close')"
          >
            {{icon ? 'mdi-close' : 'mdi-minus'}}
          </v-icon>
      <div
        class="project-animation donors-main"
      >
      <v-carousel
      height="auto"
      :show-arrows="false"
      :cycle="true"
    >
      <v-carousel-item
        v-for="(org, o) in project[0].partner_stories" :key="o"
      >
          <div class="organizers-content">
            <div class="organizer-image">
              <img :src="`${org.image}`" alt="" />
              <div class="org-desc">
                <p>
                    <strong v-html="org.short_description"></strong>
                </p>
              </div>
              <div class="pro-bubbles">
                  
                </div>
            </div>
            <div class="organizer-content">
              <p v-html="org.long_description.substring(0,800)+'..'"></p>
            </div>
            </div>
          </v-carousel-item>
          </v-carousel>
      </div>
    </div>
  </v-dialog>
</template>

<script>
import carousel from "vue-owl-carousel";
import protop from "../components/protop.vue"
import proright from "../components/proright.vue"
import probottom from "../components/probottom.vue"
import proleft from "../components/proleft.vue"
import donor from "../components/donor.vue"
import procontent from "../components/procontent";
export default {
  name: "org",
  data: () => ({
        donors: false,
        beneficiary: false,
        partner: false,
        organizer: false,
        content:false,
        newtype:'',
        icon:false,
  }),
  props: {
    organizers: false,
    porg: [],
    type:null,
    color:null,
    project:{},
  },
  components:{
      protop,
      proright,
      probottom,
      proleft,
      donor,
      carousel,
      Part: () => import('../components/partners'),
      org: () => import('../components/project_org'),
      Ben: () => import('../components/beneficiary'),
      procontent,
  },
  methods:{
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
    setactive:function(index)
    {
      if(index == 0){
        this.newtype = "intro"
      }
      else if(index == 1){
        this.newtype = "sdg"
      }
      else if(index == 2){
        this.newtype = "act"
      }
      else if(index == 4){
        this.newtype = "work"
      }
      else{
        this.newtype = "res"
      }
      this.content = !this.content
    }
  }
};
</script>

<style>
.organizers-content{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    /* padding: 3% 10%; */
    gap: 30px;
    /* position: absolute; */
    width: 94%;
    z-index:199;
    height: auto;
    margin:3% 3% 10% 3%;
    background:transparent;
    border-radius: 10px;
}
.organizers-content .organizer-image{
  width: 216px;
  height: 230px;
}
.organizer-content p{
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 30px;
  /* or 164% */
  text-align: justify;
  color: #5A5F61;
}
.v-carousel__controls{
  background:transparent!important;
  bottom:20%;
}
.org-img-bubble-top{
  position: absolute;
  width: 230px;
  height: 230px;
  left: 15%;
  z-index:99;
  top: 10%;
  border-radius:50%;
  background: rgba(174, 23, 107, 0.2);
}
.org-img-bubble-bottom{
  position: absolute;
  width: 230px;
  height: 230px;
  left: 10%;
  z-index:99;
  top: 15%;
  border-radius:50%;
  background: rgba(174, 23, 107, 0.2);
}
.organizer-image{
  width:100%!important;
  z-index:199;
}
.org-desc p{
  font-size:14px;
  color:#00477A;
  margin-bottom:0;
}
</style>