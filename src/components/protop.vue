<template>
  <div class="project-top">
        <div class="project-button d-flex">
          <li class="" style="list-style: none">
            <v-btn
              id="donor"
              @click="setview($event)"
              class="btn mr-2"
              :style="{ backgroundColor: '#fff', color: '#000',fontWeight:'600' }"
              >Donors</v-btn
            >
          </li>
          <li style="list-style: none">
            <v-btn
              id="partner"
              @click="setview($event)"
              class="btn ml-2"
              :style="{ backgroundColor: '#fff', color: '#000',fontWeight:'600' }"
              >Partners</v-btn
            >
          </li>
        </div>
        <!-- <div class="another-bubble-big">
        </div> -->
    <!-- <div class="another-bubble-top">
    </div> -->
      </div>
</template>

<script>
export default {
    props:{
        donors: false,
        beneficiary: false,
        partner: false,
        organizer: false,
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
    setview(event)
    {
        console.log("id",event.currentTarget.id)
        let type = event.currentTarget.id;
        return (this.$emit('setprojectview',event))
    }
    }
}
</script>

<style>

</style>