<template>
  <v-dialog v-model="partners" ref="partners" height="100%" width="100%" persistent>
      <div class="donors" v-if="partners && ppartners">
      <v-icon
            color="black" @mouseover="icon = true" @mouseout="icon = false"
            style="background-color: #5A5F61;border-radius:50%;color:#fff!important"
            text
            @click="$emit('close')"
          >
            {{icon ? 'mdi-close' : 'mdi-minus'}}
          </v-icon>
      <div class="partners-animation donors-main">
            <div class="donor-div">
                <div class="donors-sub-menu">
                    <div class="d-flex" v-for="(part,index) in ppartners" :key="index">
                    <div class="donor-image">
                        <img :src="`${part.logo}`" alt="">
                    </div>
                </div>
                </div>
            </div>
      </div>
      </div>
  </v-dialog>
</template>

<script>
import protop from "../components/protop.vue"
import proright from "../components/proright.vue"
import proleft from "../components/proleft.vue"
import probottom from "../components/probottom.vue"
import donor from "../components/donor";
import org from "../components/project_org";
import beneficiary from "../components/beneficiary";
import procontent from "../components/procontent";
export default {
    name: 'part',
    data: () => ({
        donors: false,
        beneficiary: false,
        partner: false,
        organizer: false,
        content:false,
        newtype:'',
        icon:false,
    }),
    components:{
      protop,
      proright,
      proleft,
      probottom,
      org,
      beneficiary,
      procontent,
      donor,
    },
    props:{
        partners:false,
        ppartners: [],
        color:null,
        type:'',
        project:{},
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
}
</script>

<style>

</style>