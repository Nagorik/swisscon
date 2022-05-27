<template>
  <!-- <div v-if="this.$store.state.shared.status_messages.showLoading"> -->
  <div v-if="loader">
    <div class="loader-main">
      <div class="load-image-main">
          <div class="load-image">
          <div class="load-image-mid">

        </div>
        <div class="load-image-left">

        </div>
        <div class="load-image-right">

        </div>
      </div>
      </div>        
    </div>
  </div>
</template>

<script>
  import {mapState} from "vuex"
    export default {
        name: "loader",
        data: () =>({
          load: false
        }),
        computed: {
          ...mapState("homepage",["loader"]),
        }
    }
</script>

<style>
  .load-image-main{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
     padding: 50px;
     margin:auto;
     gap: 10px;
     position:relative;
     width: 430px;
     height: 430px;
  }
  .load-image{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 10px;
  position:relative;
  width: 330.98px;
  height: 166px;

  }
  .load-image-mid{
  position: absolute;
  left: 24.98%;
  right: 25.05%;
  top: 0%;
  bottom: 0%;
  background: #AE176B;
  
  opacity: 0.5;
  border-radius:50%;
  }
  .load-image-left{
 position: absolute;
/* left: 0%;
right: 50.04%; */
left: 24.98%;
  right: 25.05%;
top: 0%;
bottom: 0%;

background: #EE7300;
opacity: 0.5;
  border-radius:50%;
  animation: orbit1 2s linear infinite;
  }
  .load-image-right{
  position: absolute;
  /* left: 50.04%;
  right: 0%; */
  left: 24.98%;
  right: 25.05%;
  top: 0%;
  bottom: 0%;
  background: #FED060;
  opacity: 0.5;
  border-radius:50%;
  animation: orbit2 2s linear infinite;
  }
  @keyframes orbit2 {
	from { 	transform: rotate(0deg) translateX(300px) rotate(0deg); }
	to   {  transform: translateX(0); background-color: blue; }
  }
  @keyframes orbit1 {
	from { 	transform: rotate(0deg) translateX(-300px) rotate(0deg); }
	to   {  transform: translateX(0); background-color: blue; }
}
  .lds-roller {
    display: inline-block;
    position: absolute;
    width: 80px;
    height: 80px;
    top: 40%;
    left: 46%;
    z-index: 9999;
  }
  .loader-main{
    height: 100vh;
    width: 100%;
    position: relative;
    display:flex;
    align-items:center;
    justify-content:center;
  }
  .loader-main::after{
    content: "";
    position:absolute;
    left:0;
    top: 0;
    height: 100%;
    width: 100%;
    background-color: transparent;
    opacity:0.2;
  }
  .lds-roller div {
    animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    transform-origin: 40px 40px;
  }
  .lds-roller div:after {
    content: " ";
    display: block;
    position: absolute;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #000;
    margin: -4px 0 0 -4px;
  }
  .lds-roller div:nth-child(1) {
    animation-delay: -0.036s;
  }
  .lds-roller div:nth-child(1):after {
    top: 63px;
    left: 63px;
  }
  .lds-roller div:nth-child(2) {
    animation-delay: -0.072s;
  }
  .lds-roller div:nth-child(2):after {
    top: 68px;
    left: 56px;
  }
  .lds-roller div:nth-child(3) {
    animation-delay: -0.108s;
  }
  .lds-roller div:nth-child(3):after {
    top: 71px;
    left: 48px;
  }
  .lds-roller div:nth-child(4) {
    animation-delay: -0.144s;
  }
  .lds-roller div:nth-child(4):after {
    top: 72px;
    left: 40px;
  }
  .lds-roller div:nth-child(5) {
    animation-delay: -0.18s;
  }
  .lds-roller div:nth-child(5):after {
    top: 71px;
    left: 32px;
  }
  .lds-roller div:nth-child(6) {
    animation-delay: -0.216s;
  }
  .lds-roller div:nth-child(6):after {
    top: 68px;
    left: 24px;
  }
  .lds-roller div:nth-child(7) {
    animation-delay: -0.252s;
  }
  .lds-roller div:nth-child(7):after {
    top: 63px;
    left: 17px;
  }
  .lds-roller div:nth-child(8) {
    animation-delay: -0.288s;
  }
  .lds-roller div:nth-child(8):after {
    top: 56px;
    left: 12px;
  }
  @keyframes lds-roller {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
