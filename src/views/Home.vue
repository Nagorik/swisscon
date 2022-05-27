<template>
  <HomePage :regions="regions" :editorial="remark" :sdgall="sdg" :area="area" />
</template>

<script>
import HomePage from '../components/HomePage'
import {mapActions,mapState} from "vuex"
export default {
  name: 'Home',
  components: {
    HomePage,
  },
  async created() {
    this.getRegions()
    this.getRemark()
    this.getArea()
    this.getSdg()
  },
  computed: {
    ...mapState("homepage", ["regions"]),
    ...mapState("homepage", ["remark"]),
    ...mapState("homepage", ["area"]),
    ...mapState("homepage", ["sdg"]),
  },
  methods: {
    ...mapActions("homepage", ["getRegions"]),
    ...mapActions("homepage", ["getRemark"]),
    ...mapActions("homepage", ["getArea"]),
    ...mapActions("homepage", ["getSdg"]),
  }
}
</script>
