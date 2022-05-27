<template>
  <div class="project-right">
        <ul>
          <li class="project-icon">
            <div class="pro">
              <a
                href="javascript:void(0)"
                id="organizer"
                @click="setview($event)"
                style="background-color: transparent; color: #fff"
              >
                <img
                  style="background-color: transparent; border-radius: 50%"
                  :src="require('@/assets/img/partner.svg')"
                  alt=""
                />
              </a>
            </div>
          </li>
          <li class="project-icon">
            <div class="pro">
              <a href="javascript:void(0)" id="beneficiary"
                @click="setview($event)">
                <img
                  style="background-color: transparent; border-radius: 50%"
                  :src="require('@/assets/img/benif.svg')"
                  alt=""
                />
              </a>
            </div>
          </li>
        </ul>

        <div class="right-bubble-left">
          
        </div>
        <div class="right-bubble-right">

        </div>
        <div class="right-bubble-mid">

        </div>
        
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
        return (this.$emit('setprojectview',event))
    }
    }
}
</script>

<style>
.right-bubble-left{
  position: absolute;
left: 50%;
right: -27.93%;
top: -62.81%;
bottom: 48.38%;
border-radius:50%;
width:180px;
height:180px;
background: #EE7300;
opacity: 0.5;
/* transform: rotate(90deg); */
}
.right-bubble-mid{
  position: absolute;
  left: 50%;
  right: -27.94%;
  top: -3.86%;
  bottom: 31.32%;
  border-radius:50%;
  width:180px;
  height:180px;
  background: #FED060;
  opacity: 0.5;
/* transform: rotate(90deg); */
}
.right-bubble-right{
  position: absolute;
  left: 50%;
  right: -27.93%;
  top: 50.97%;
  bottom: 14.22%;
  border-radius:50%;
  width:180px;
  height:180px;
  background: #AE176B;
  opacity: 0.5;
/* transform: rotate(90deg); */
}
</style>