<template>
  <v-dialog v-model="beneficiaries" ref="beneficiaries" height="100%" width="100%" persistent>
    <div
      class="donors"
      v-if="beneficiaries && ben"
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
        class="beneficiary-animation donors-main"
      >
      <v-carousel
      height="auto"
      :show-arrows="false"
      :cycle="true"
    >
      <v-carousel-item
        v-for="(new_ben, b) in ben" :key="b"
      >
          <div class="beneficiary-section">
            <div class="ben-image">
                <img :src="`${new_ben.beneficiary_image}`" alt="" />
                <div class="ben-desc">
                  <p>
                    <strong v-html="new_ben.short_description"></strong>
                  </p>
                  
                </div>
                <div class="pro-bubbles">
                  
                </div>
            </div>
            <div class="beneficiar-content">
              <p v-html="new_ben.long_description.substring(0,1000)+'..'">
              </p>
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
export default {
  name: "beneficiary",
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
    beneficiaries: false,
    ben: [],
    color: null,
    type: null,
    project: {},
  },
  components:{
      protop,
      proright,
      probottom,
      proleft,
      carousel,
      donor: () => import('../components/donor.vue'),
      Part: () => import('../components/partners'),
      org: () => import('../components/project_org'),
      beneficiary:()=>import('../components/beneficiary'),
      procontent:()=>import('../components/procontent'),
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
.beneficiary-section{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    /* padding: 3% 10%; */
    gap: 30px;
    /* position: absolute; */
    width: 94%;
    margin:2% 3% 10% 3%;
    height: auto;
    background:transparent;
    border-radius: 10px;
}
.beneficiar-content p{
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
.ben-img-bubble-top{
  position: absolute;
  width: 230px;
  height: 230px;
  left: 15%;
  z-index:99;
  top: 10%;
  border-radius:50%;
  background: rgba(174, 23, 107, 0.2);
}
.ben-img-bubble-bottom{
  position: absolute;
  width: 230px;
  height: 230px;
  left: 10%;
  z-index:99;
  top: 15%;
  border-radius:50%;
  background: rgba(174, 23, 107, 0.2);
}
.ben-image{
  width:100%;
  z-index:199;
  margin-bottom:10px;
}
/* .ben-image img{
  border-radius:50%;
} */
.ben-desc p{
  font-size:14px;
  color: #00477A;
  margin-bottom:0;
}
.pro-bubbles{
  position: absolute;
  width: 190px;
  height: 190px;
  left: 20%;
  top: 30%;
  background: rgba(90, 95, 97, 0.3);
  border-radius:50%;
}
</style>