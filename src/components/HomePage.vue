<template>

  <div class="container">
    <div class="row sm-full">
    <div class="col-md-6">
      <div class="title-main">
        <p class="south-asia-title">
          South Asia Report 2021
        </p>      
      </div>
        
    </div>
    <div class="col-md-6 col-12 mt-5">
      <div id="chartdiv" class="float-right" ref="chartdiv">
      <div class="bangladesh-title" v-if="bangladesh">
          <p>bangladesh</p>
      </div>
      <div class="nepal-title" v-if="nepal">
        <p>Nepal</p>
      </div>
      <div class="myanmar-title" v-if="myanmar">
          <p>Myanmar</p>
      </div>
      <svg id="local_chart" width="100%" viewBox="0 0 792 647" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M343.76 130.108L344.365 141.988L349.63 140.052L353.164 146.157L353.681 146.693L363.588 150.666L363.726 150.776L367.975 157.397L377.015 160.703L382.721 165.932L369.88 174.611L361.186 193.032L370.829 196.957L394.005 213.643L396.774 212.708L410.803 221.179L421.633 224.434L437.873 222.14L447.976 226.301L449.082 231.71L460.902 238.153L482.423 241.896L489.067 244.895L495.612 242.411L500.911 246.571L516.622 245.227L519.059 239.041L515.841 230.428L519.077 215.057L529.564 210.516L533.949 215.194L534.371 226.743L533.414 234.171L551.668 239.726L563.629 235.818L571.596 238.337L597.291 236.662L599.115 227.525L589.272 221.926L590.077 217.702L597.062 218.338L610.976 213.792L611.757 209.673L621.931 200.456L635.861 196.055L650.159 185.507L653.119 188.32L666.153 190.796L678.207 182.649L686.415 190.791L693.673 204.914L704.754 207.956L705.23 213.781L692.127 226.359L679.933 228.969L661.205 242.042L661.468 253.763L651.161 267.149L653.001 274.816L644.551 290.316L641.179 299.85L624.032 296.746L626.283 304.019L625.275 315.83L619.23 324.75L620.977 332.47L616.791 340.178L608.537 340.729L606.846 325.45L604.135 320.195L601.821 303.976L595.336 307.805L588.535 319.076L582.169 316.377L579.092 304.424L583.551 295.168L594.2 293.007L602.122 278.103L597.997 272.263L564.697 272.415L551.862 269.228L552.417 255.761L541.537 253.667L537.946 250.17L524.428 246.556L516.742 256.657L524.01 263.354L523.779 271.544L516.778 286.452L528.784 291.976L524.908 303.868L528.362 308.984L534 337.984L533.735 347.492L516.808 348.075L510.504 343.621L492.311 350.521L486.973 356.199L488.949 367.9L483.816 376.299L473.415 384.804L458.169 389.598L440.404 401.846L425.21 419.978L415.303 424.757L404.979 434.785L386.358 445.849L383.521 457.696L372.541 462.631L361.212 463.9L354.964 475.032L348.019 471.864L340.183 475.819L334.156 489.902L335.917 501.015L334.287 509.153L338.23 528.286L334.999 543.285L326.159 558.878L323.443 568.138L325.107 576.686L324.011 596.385L314.216 596.563L305.008 610.437L304.255 619.788L291.919 623.228L286.724 627.951L283.387 639.336L271.292 645.994L259.607 638.278L251.133 626.852L246.763 614.329L247.758 603.732L239.685 584.071L236.193 570.961L225.938 555.017L218.495 531.9L217.386 518.627L212.794 499.982L204.853 486.792L205.132 479.607L197.037 464.726L195.056 455.65L193.986 429.844L190.79 406.305L189.698 381.037L196.006 365.208L196.226 353.124L192.524 340.395L195.213 327.862L190.097 327.876L182.873 337.344L186.288 343.8L180.421 351.789L159.511 360.201L153.478 359.958L142.948 351.863L124.904 327.25L148.841 319.964L151.657 311.456L139.558 315.601L131.616 313.377L121.456 305.628L114.956 291.014L125.985 289.125L127.226 282.712L143.065 283.133L145.69 285.377L162.512 280.706L172.012 281.418L173.121 275.304L168.247 259.465L161.959 253.221L159.849 245.398L162.924 237.052L151.406 229.605L154.777 221.941L168.331 208.266L173.879 204.785L178.887 211.14L201.057 206.997L212.997 190.927L224.585 185.538L237.025 167.216L245.603 164.201L248.586 157.276L264.495 145.482L264.8 131.711L282.108 120.736L270.642 115.601L261.494 100.84L265.394 95.6706L266.839 72.9842L273.336 70.9665L297.444 76.7878L314.246 72.6303L323.792 65.5096L338.653 58.3022L338.821 58.5286L344.479 74.9383L355.421 81.1221L351.223 86.2662L350.254 97.9113L355.159 103.461L355.413 104.558L355.098 116.719L354.959 117.981L339.528 117.282L343.76 130.108Z" fill="#7991A2" stroke="white" stroke-width="0.99999"/>
        <path d="M338.639 58.3019L323.778 65.5093L314.231 72.6299L297.429 76.7874L273.322 70.9661L266.824 72.9838L265.38 95.6703L261.48 100.839L270.628 115.6L282.094 120.736L264.785 131.711L264.48 145.481L248.572 157.276L245.589 164.201L237.01 167.216L224.57 185.537L212.983 190.926L201.043 206.997L178.873 211.14L173.865 204.785L168.316 208.266L154.763 221.941L151.392 229.604L162.91 237.051L159.834 245.398L161.944 253.22L168.233 259.465L173.107 275.303L171.998 281.418L162.498 280.706L145.676 285.377L143.051 283.133L127.212 282.712L125.971 289.125L114.942 291.014L105.379 291.636L100.09 283.607L99.9176 271.15L91.65 268.574L93.1456 260.837L89.692 253.251L74.955 257.32L58.2643 257.612L55.5518 260.125L39.5488 255.086L34.5793 258.596L18.3701 256.884L13.2063 259.191L0.681641 257.123L5.02145 245.248L11.0199 235.487L22.6774 229.305L36.0673 227.733L39.0892 215.483L31.994 215.191L35.6242 199.558L31.1978 190.71L23.9741 187.596L20.8047 182.322L19.0266 170.137L13.953 159.799L38.9419 170.388L58.2181 169.449L66.8487 172.048L75.1396 168.857L85.1588 169.403L105.644 164.576L115.151 142.84L126.451 135.272L132.365 137.302L138.967 131.685L151.689 126.066L162.399 129.984L171.161 124.167L172.95 114.194L180.453 102.673L188.265 101.102L195.928 96.2356L191.277 85.5314L212.717 83.2462L213.55 73.7523L228.134 61.3857L227.986 48.6528L224.868 44.4948L234.303 37.1425L253.384 30.1558L273.355 29.6167L277.072 30.9801L287.288 27.4413L300.783 29.8984L308.304 35.1764L307.598 47.3966L312.21 51.5348L332.249 58.5537L338.639 58.3019Z" fill="#7991A2" stroke="white" stroke-width="0.99999"/>
        <path d="M294.259 23.6077L287.296 27.4415L277.08 30.9802L273.363 29.6169L253.392 30.1559L234.311 37.1427L224.876 44.4949L227.994 48.653L228.142 61.3859L213.558 73.7524L212.725 83.2464L191.285 85.5316L195.936 96.2358L188.273 101.102L180.461 102.673L172.957 114.194L171.169 124.167L162.407 129.985L151.697 126.066L138.975 131.685L132.373 137.302L126.459 135.272L115.159 142.84L105.652 164.576L85.1668 169.403L75.1475 168.857L66.8567 172.048L58.226 169.45L38.9499 170.388L13.9609 159.799L19.9714 154.531L35.661 140.846L36.9833 129.641L24.28 126.931L28.8211 111.572L30.359 93.7009L38.5816 86.7433L32.9648 83.7684L35.6984 74.7972L50.4282 60.4438L58.6552 45.7957L77.4661 54.333L86.065 50.5623L89.3908 43.4054L102.793 40.2471L115.405 34.4166L125.492 19.5301L138.138 17.7891L143.558 11.9108L154.398 16.6043L163.214 17.2278L173.541 20.7667L177.322 25.1988L194.26 18.6187L198.098 22.9235L204.366 14.6104L217.602 12.9551L218.42 8.00637L232.324 -1.62463L237.778 1.395L240.762 8.60045L234.609 23.8233L238.694 32.3054L260.158 21.9364L271.129 18.3517L274.6 23.0547L284.194 19.8083L294.259 23.6077Z" fill="#7991A2" stroke="white" stroke-width="0.99999"/>
        <path d="M590.089 217.702L589.285 221.926L599.128 227.526L597.303 236.662L571.608 238.338L563.641 235.818L551.68 239.727L533.426 234.171L534.383 226.743L548.006 210.301L557.061 206.11L564.416 210.942L589.619 213.705L590.089 217.702Z" fill="#7991A2" stroke="white" stroke-width="0.99999"/>
        <path id="myanmar" @mouseover="myanmar = true" @mouseout="myanmar = false" @click="countryprojectList($event)" class="country-pointer" d="M790.002 348.677L782.222 354.298L772.099 367.079L769.805 376.125L764.763 373.821L753.302 381.483L746.554 382.346L744.54 388.248L727.293 388.612L721.173 395.277L720.313 413.712L714.57 416.542L721.689 434.423L736.144 449.936L742.011 464.758L739.83 484.828L731.722 489.338L733.135 498.013L753.36 522.402L755.725 544.276L759.946 548.555L765.004 565.74L755.882 581.04L746.4 591.123L745.367 601.755L739.862 590.843L744.438 583.795L745.657 570.171L741.247 534.923L733.65 522.179L723.556 497.086L720.835 474.46L718 471.279L718.514 459.769L713.198 460.128L708.632 448.199L696.71 459.303L678.03 468.153L669.935 478.099L660.09 476.004L652.212 465.565L644.041 469.177L652.035 437.191L648.499 423.246L640.588 408.026L632.697 405.109L638.977 396.014L625.263 382.504L617.527 382.145L611.84 371.49L603.065 366.49L600.043 355.576L608.879 351.807L608.531 340.729L616.786 340.178L620.972 332.47L619.225 324.75L625.27 315.83L626.278 304.019L624.027 296.746L641.174 299.85L644.545 290.316L652.995 274.816L651.155 267.148L661.462 253.763L661.2 242.042L679.928 228.969L692.122 226.359L705.225 213.781L704.749 207.956L708.834 201.862L720.408 209.431L724.988 221.745L732.069 221.219L734.689 241.939L733.755 255.988L721.093 269.334L717.184 270.216L711.797 286.433L715.433 299.098L726.228 294.475L737.685 294.272L740.584 314.081L750.646 316.047L751.149 328.93L748.447 336.994L763.8 338.977L770.63 351.161L783.499 346.852L790.002 348.677Z" fill="#00477A" stroke="white" stroke-width="0.99999"/>
        <path id="nepal" @mouseover="nepal = true" @mouseout="nepal = false" @click="countryprojectList($event)" class="country-pointer" d="M519.071 215.057L515.836 230.428L519.053 239.042L516.616 245.228L500.905 246.571L495.607 242.411L489.062 244.895L482.417 241.896L460.896 238.154L449.077 231.71L447.97 226.301L437.867 222.141L421.627 224.434L410.797 221.179L396.768 212.709L393.999 213.644L370.823 196.958L361.181 193.032L369.875 174.611L382.715 165.932L390.982 162.534L403.067 162.951L404.843 167.319L417.463 176.382L423.214 177.919L430.785 186.875L441.053 186.263L443.018 192.658L452.108 199.319L460.939 199.497L459.79 205.218L470.814 206.143L484.963 213.552L488.076 210.32L499.559 215.568L519.071 215.057Z" fill="#00477A" stroke="white" stroke-width="0.99999"/>
        <path id="bangladesh" @mouseover="bangladesh = true" @mouseout="bangladesh = false" @click="countryprojectList($event)" class="country-pointer" d="M608.545 340.73L608.892 351.807L600.056 355.576L603.078 366.49L597.411 358.147L596.477 347.07L589.971 329.319L584.068 322.996L574.227 327.285L567.849 316.552L563.533 323.907L566.586 334.572L557.289 344.085L550.017 340.445L537.65 346.034L534.008 337.984L528.37 308.985L524.916 303.868L528.792 291.976L516.786 286.453L523.787 271.544L524.018 263.355L516.75 256.657L524.436 246.556L537.954 250.17L541.545 253.667L552.425 255.761L551.87 269.228L564.705 272.415L598.005 272.263L602.13 278.103L594.208 293.008L583.559 295.168L579.1 304.424L582.177 316.377L588.543 319.076L595.344 307.805L601.829 303.976L604.143 320.195L606.854 325.45L608.545 340.73Z" fill="#00477A" stroke="white" stroke-width="0.99999"/>
      </svg>
      </div>
    </div>
    </div>
    <div class="back-circle">
    </div>
    <div class="swiss-list">
        <div class="swiss-list-content" id="remark_menu" @click="toggleswiss($event)">
          <div class="swiss-list-icon">
            <img
                  style="background-color: transparent; border-radius: 50%"
                  :src="require('@/assets/img/edit.svg')"
                  height="20"
                  alt=""
                />
          </div>
          <div class="swiss-list-desc">
            <p>Editorial Remark</p>
          </div>
          <div class="swiss-main-menu remark" v-if="remark">
              <div class="swiss-list-menu" v-if="editorial && editorial.length">
            <div class="swiss-remark-menu">
              <div class="swiss-menu-item">
                <img :src="editorial[0].image" alt="">
                <div class="menu-content">
                  <p>{{editorial[0].description}} </p>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
        <div class="swiss-list-content" id="region_menu" @click="toggleswiss($event)">
          <div class="swiss-list-icon">
            <img
                  style="background-color: transparent; border-radius: 50%"
                  :src="require('@/assets/img/blue_globe.png')"
                  height="20"
                  alt=""
                />
          </div>
          <div class="swiss-list-desc">
            <p>Country</p>
          </div>
          <div class="swiss-main-menu region" v-if="region">
              <div class="swiss-list-menu" v-if="regions && regions.length">
            <div class="swiss-menu">
              <div class="swiss-menu-item" v-for="(reg,index) in regions[0].has_country" :key="index" id="region" @click="getProjectlist(reg.id,$event)">
                <img :src="reg.icon" width="20" height="20" alt="">
                <div class="menu-content">
                  <p>{{reg.name}}</p>
                </div>
              </div>
            </div>
          </div>
          </div>
          
        </div>
        <div class="swiss-list-content" id="work_menu" @click="toggleswiss($event)">
          <div class="swiss-list-icon">
            <img
                  style="background-color: transparent; border-radius: 50%"
                  :src="require('@/assets/img/area.png')"
                  height="20"
                  alt=""
                />
          </div>
          <div class="swiss-list-desc">
            <p>Working Area</p>
          </div>
          <div class="swiss-main-menu work" v-if="work">
              <div class="swiss-list-menu" v-if="area && area.length">
                <div class="swiss-work-menu">
                  <div class="swiss-menu-item" v-for="(newarea,p) in area" :key="p" id="work" @click="getProjectlist(newarea.id,$event)">
                    <img :src="newarea.icon" width="20" height="20" alt="">
                    <div class="menu-content">
                      <p>{{newarea.name}}</p>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
        <div class="swiss-list-content" id="sdg_menu" @click="toggleswiss($event)">
          <div class="swiss-list-icon">
            <img
                  style="background-color: transparent; border-radius: 50%"
                  :src="require('@/assets/img/sdg.png')"
                  height="20"
                  alt=""
                />
          </div>
          <div class="swiss-list-desc">
            <p>Sdgs</p>
          </div>
          <div class="swiss-main-menu sdg" v-if="sdg">
              <div class="swiss-list-menu" v-if="sdgall && sdgall.length">
                <div class="swiss-sdg-menu">
                  <div class="swiss-menu-item" v-for="(newsdg,s) in sdgall" :key="s" id="sdg" @click="getProjectlist(newsdg.id,$event)">
                    <img :src="newsdg.icon" width="20" height="20" alt="">
                    <div class="menu-content">
                      <p><strong>SDG {{s+1}}</strong>: {{newsdg.name}}</p>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
    </div>
  </div>
  
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data: () => ({
    remark: false,
    region:false,
    work:false,
    sdg:false,
    bangladesh:false,
    nepal:false,
    myanmar:false,
  }),
  props:{
    regions: [],
    editorial: {},
    sdgall: [],
    area: []
  },
  async created() {},
  mounted() {
  
  },
  computed: {

  },
  methods: {
    toggleswiss: function(event)
    {
      let type = event.currentTarget.id;
      if(type == "remark_menu"){
        this.region = false
        this.sdg = false
        this.work = false
        this.remark = !this.remark;
      }
      else if(type == "region_menu"){
        this.region = !this.region
        this.sdg = false
        this.work = false
        this.remark = false;
      }
      else if(type == "work_menu"){
        this.region = false
        this.sdg = false
        this.work = !this.work
        this.remark = false;
      }
      else{
        this.region = false
        this.sdg = !this.sdg
        this.work = false
        this.remark = false;
      }
      
    },
    
    toProject(id) {
      this.$store
        .dispatch("project/getProject", id)
        .then(() => {
          this.$router.push({ name: "Project", params: { id: id}});;
        })
        .catch(() => {});
    },
    countryprojectList(event){
      let country = event.currentTarget.id;
      let region = this.regions[0].has_country.filter(region => region.name.toLowerCase() === country)
      let type = 'region'
      let id = region[0].id
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
  },
};
</script>

<style>
.back-circle{
    position: absolute;
    width: 48%;
    height: 93%;
    left: 95%;
    border-radius: 50%;
    top: 15%;
    background: #00477A;
    opacity: 0.1;
}
.swiss-list {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 50px;
    position: absolute;
    width: 84%;
    height: 67.7px;
    left: 8%;
    bottom: 5%;
}
.country-pointer{
  cursor:pointer;
}
.country-pointer:hover{
  fill:#183c55;
}
.swiss-list .swiss-list-content{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  width: 21%;
  height: 70%;
  border: 1px solid #FFFFFF;
  position:relative;
  cursor:pointer;
}
.swiss-list .swiss-list-desc{
  font-family: 'Calibri';
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 39px;
  /* identical to box height */

  text-align: justify;
  text-transform: uppercase;

  color: #FFFFFF;
}
.swiss-list .swiss-list-desc p{
  margin-bottom:0;
}
.swiss-list .swiss-list-icon{
  color:#fff;
  margin-right:5px;
}
.swiss-main-menu{
  position:absolute;
  bottom:151%;
}
.swiss-main-menu.remark{
  left:0;
}
.swiss-main-menu.sdg{
  right:-23%;
}
.swiss-main-menu.remark .swiss-list-menu::before{
  bottom:-5%;
  left:15%;
}
.swiss-main-menu.sdg .swiss-list-menu::before{
  bottom:-5%;
  left:85%;
}
.swiss-main-menu.work .swiss-list-menu::before{
  bottom:-8%;
  left:51%;
}
.swiss-list-menu{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  position: relative;
  width: max-content;
  height: auto;
  background: rgba(222, 222, 222, 0.95);
  border-radius: 10px;
}
.swiss-list-menu::before{
    content: '';
    border-top: 15px solid rgba(222, 222, 222, 0.95);
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    /* width: 0; */
    z-index: 1;
    position: absolute;
    bottom: -21%;
    left: 39%;
}
.swiss-list-menu .swiss-menu{
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 20px;
    width: 100%;
    gap: 11px;
    height: 70px;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 10px;

}
.swiss-list-menu .swiss-work-menu{
  display:grid;
  grid-template-columns: 1fr 1fr;
  column-gap:20px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
}
.swiss-list-menu .swiss-remark-menu{
  display:flex;
  flex-direction: row;
  padding: 20px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  max-width:700px;
}
.swiss-list-menu .swiss-sdg-menu{
  display:grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap:0;
  padding: 20px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
}
.swiss-menu .swiss-menu-item,.swiss-work-menu .swiss-menu-item,.swiss-sdg-menu .swiss-menu-item{
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  margin: 0 10px;
  width: 100%;
  height: 49px;
}
.swiss-remark-menu .swiss-menu-item{
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  width: 100%;
  height:100%;
  gap:10px;
}
.swiss-menu-item p{
  font-family: 'Calibri';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 29px;
  text-align: justify;
  margin-bottom:0!important;

/* Secondary Text Color */

color: #5A5F61;
}
.swiss-menu-item img{
  margin-right:5px;
}
.bangladesh-title p,.nepal-title p,.myanmar-title p{
    width: 140px;
    height: 35px;
    left: 67px;
    top: 10px;

    font-family: 'Calibri';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 39px;
    /* identical to box height */

    text-align: center;
    text-transform: uppercase;

    /* Secondary Text Color */

    color: #5A5F61;

}
.bangladesh-title,.nepal-title,.myanmar-title{
  position: absolute;
  width: 150px;
  height: 40px;
  left: 0px;
  top: 0px;

  background: rgba(255, 255, 255, 0.9);
  border-radius: 4px;
}
.bangladesh-title{
  left:49%;
  top:20%;
}
.nepal-title{
  left:36%;
  top:20%;
}
.myanmar-title{
  left:65%;
  top:20%;
}
</style>
