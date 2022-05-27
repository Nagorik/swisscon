<template>
<div>
    {{animateNumber}}
</div>
  
</template>

<script>
export default {
    data:()=>({
        animateNumber:0,
        interval:false
    }),
    props:{
        number:{
            default: 0
        }
    },
    async created () {
        this.animateNumber = this.number ? this.number : 0;
        console.log("display number",this.animateNumber)
    },

  watch: {
    number () {
      clearInterval(this.interval);

      if(this.number == this.animateNumber) {
        return;
      }

      this.interval = window.setInterval(() => {
        if(this.animateNumber != this.number) {
          var change = (this.number - this.animateNumber) / 10;
          change = change >= 0 ? Math.ceil(change) : Math.floor(change);
          this.animateNumber = this.animateNumber + change;
        }
      }, 40);
    }
  }
}
</script>

<style>

</style>