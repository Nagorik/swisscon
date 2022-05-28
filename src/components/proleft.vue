<template>
  <div class="project-left" :class="{ active: left }">
        <ul>
          <div class="project-icon">
            <div class="pro">
              <a href="javascript:void(0)" @click="toHome">
                <img
                  style="background-color: transparent; border-radius: 50%"
                  :src="require('@/assets/img/home.svg')"
                  alt=""
                />
              </a>
            </div>
          </div>
          <div class="project-icon">
            <div class="pro">
              <a href="javascript:void(0)" id="region_menu" @click="toggleswiss($event);$emit('close')">
                <img
                  style="background-color: transparent; border-radius: 50%"
                  :src="require('@/assets/img/final_reg.svg')"
                  alt=""
                />
              </a>
            </div>
            <div class="proleft-main-menu region" v-if="globe">
              <div class="swiss-list-menu" v-if="regions && regions.length">
            <div class="swiss-menu">
              <div class="swiss-menu-item" v-for="(reg,index) in regions[0].has_country" :key="index" id="region" @click="getProjectlist(reg.id,$event);$emit('close')">
                <img :src="reg.icon" width="20" height="20" alt="">
                <div class="menu-content" :class="{ active:highlightproject(reg.id) === true }">
                  <p>{{reg.name}}</p>
                </div>
              </div>
            </div>
          </div>
          </div>

          </div>
          <div class="project-icon">
            <div class="pro">
              <a href="javascript:void(0)" id="work_menu" @click="toggleswiss($event);$emit('close')">
                <img
                  style="background-color: transparent; border-radius: 50%"
                  :src="require('@/assets/img/work.svg')"
                  alt=""
                />
              </a>
            </div>
            <div class="proleft-main-menu work" v-if="location">
              <div class="swiss-list-menu" v-if="area && area.length">
                <div class="swiss-work-menu">
                  <div class="swiss-menu-item" v-for="(newarea,p) in area" :key="p" id="work" @click="getProjectlist(newarea.id,$event)">
                    <img :src="newarea.icon" width="20" height="20" alt="">
                    <div class="menu-content" :class="{ active:highlightprojectarea(newarea.id) === true }">
                      <p>{{newarea.name}}</p>
                    </div>
                  </div>
                </div>
              </div>
          </div>
            
          </div>
          <div class="project-icon">
            <div class="pro">
              <a href="javascript:void(0)" id="sdg_menu" @click="toggleswiss($event);$emit('close')">
                <img
                  style="background-color: transparent; border-radius: 50%"
                  :src="require('@/assets/img/new_sdg.svg')"
                  alt=""
                />
              </a>
            </div>
            <div class="proleft-main-menu sdg" v-if="first">
              <div class="swiss-list-menu" v-if="sdg && sdg.length">
                <div class="swiss-sdg-menu">
                  <div class="swiss-menu-item" :style="{'height':'36px'}" v-for="(newsdg,s) in sdg" :key="s" id="sdg" @click="getProjectlist(newsdg.id,$event)">
                    <img :src="newsdg.icon" width="20" height="20" alt="">
                    <div class="menu-content" :class="{ active:highlightprojectsdg(newsdg.id) === true }">
                      <p><strong>SDG {{s+1}}</strong>: {{newsdg.name}}</p>
                    </div>
                  </div>
                </div>
              </div>
          </div>
            </div>
            </ul>
    </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
    name: "proleft",
    data: () => ({
        // globe: false,
        // left: false,
        // location: false,
        // first: false,
        region:false,
        work:false,
        new_sdg:false,
    }),
    props:{
        project: {},
        globe:false,
        first:false,
        location:false,
        left:false,
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
    toHome() {
        this.$router.push("/").catch(()=>{});
    },
    toggleswiss: function(event)
    {
      let type = event.currentTarget.id;
      this.$emit('toggleswiss',type);
      
    },
    getProjectlist(id,event){
      let type = event.currentTarget.id;
      let obj ={
        id: id,
        type:type
      }
      this.$store
        .dispatch("project/getProjecttypeinfo", obj).then(() => {}).catch(() => {});    
      this.$store
        .dispatch("project/getProjectlist", obj)
        .then((response) => {
            this.$router.push({ name: "ProjectList", params: { id: id,type:type}}).catch(()=>{});
          
        })
        .catch(() => {});
    },
    highlightproject(id){
      if(this.project){
        let pro_check = this.project[0].countries.filter((res)=>res.id === id);
        return pro_check.length > 0 ? true :false;
      }
      else{
        return false;
      }
    },
    highlightprojectarea(id){
      if(this.project){
        let pro_check = this.project[0].working_areas.filter((res)=>res.id === id);
        return pro_check.length > 0 ? true :false;
      }
      else{
        return false;
      }
    },
    highlightprojectsdg(id){
      if(this.project){
        let pro_check = this.project[0].sdgs.filter((res)=>res.id === id);
        return pro_check.length > 0 ? true :false;
      }
      else{
        return false;
      }
    },
    }
}
</script>

<style>
.proleft-main-menu{
  position:absolute;
  bottom:0;
  left:72px;
}
.proleft-main-menu.sdg{
  right:-23%;
  bottom:-59%;
}
.proleft-main-menu.work{
  bottom:-53%;
}
.proleft-main-menu.region{
  bottom:-53%;
}
.proleft-main-menu.region .swiss-list-menu::before{
  bottom: 33%;
  left: -21%;
}
.proleft-main-menu.sdg .swiss-list-menu::before{
  bottom: 21%;
  left: -32px;
}
.proleft-main-menu.work .swiss-list-menu::before{
   bottom: 40px;
  left: -31px;
}
.proleft-main-menu .swiss-list-menu::before{
    content: '';
    border-right: 17px solid rgba(222, 222, 222, 0.95);
    border-top: 17px solid transparent;
    border-bottom: 17px solid transparent;
    /* width: 0; */
    z-index: 1;
    position: absolute;
    bottom: -21%;
    left: 39%;
}
.proleft-main-menu.region .swiss-list-menu .swiss-menu {
    flex-direction: column;
    padding: 10px 15px;
    gap: 0;
    height:100%;
}
.proleft-main-menu.region .swiss-menu-item{
  height:40px;
}
</style>