<template>
  <div class="project-bottom" :class="{fullwidth: project[0].name.length > 12 }">
        
        <div class="project-options">
          <ul>
            <li :style="{borderColor: '#fff'}" class="options-list" v-for="(options, sl) in p_options" :key="sl">
              <a
                href="javascript:void(0)" @click="setnew(options.id)"

                >{{ options.name }}</a
              >
            </li>
          </ul>
        </div>
        <div class="project-title">
          <a :href="project[0].public_link" target="_blank">
          <h3 v-if="project[0].name.length < 12" class="text-white" :style="{'text-shadow': '-1px 0 ' +project[0].working_areas[0].color_code +', 0 1px '+project[0].working_areas[0].color_code+', 1px 0 '+project[0].default_color_code+', 0 -1px '+project[0].default_color_code}">{{project[0].name}}</h3>
          <h5 v-else class="text-white" :style="{'text-shadow': '-1px 0 ' +project[0].working_areas[0].color_code +', 0 1px '+project[0].working_areas[0].color_code+', 1px 0 '+project[0].default_color_code+', 0 -1px '+project[0].default_color_code}">
          {{project[0].name}}
          </h5>
          </a>
        </div>
  </div>
</template>

<script>
export default {
    name: "probottom",
    data: () => ({
        donors: false,
        beneficiary: false,
        partner: false,
        organizer: false,
        type:'',
    p_options: [
      // { id: 1, name: "Introduction" },
      // { id: 2, name: "Sdg" },
      { id: 3, name: "Activities" },
      // { id: 4, name: "Working Area" },
      { id: 5, name: "Main Results 2021" },
    ],
    }),
    props:{
        project: {},
    },
    methods:{
        
    setnew:function(index)
    {
      if(index == 3){
        this.type = "act"
      }
      else{
        this.type = "res"
      }
        return this.$emit('setactive',this.type)
    }
    }
}
</script>

<style>
.project-options{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 9px;

  width: 100%;
  height: 40px;

  background: rgba(0, 0, 0, 0.4);
  border-radius:
}
.project-title{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 5px 25px;
  gap: 10px;
  margin:6px 0;
  width: 100%;
  height: auto;
  max-width:500px;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  text-align:center;
}
</style>