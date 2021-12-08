<template>

  <div class="main-grid">
    <div v-for="(banner, i) in section.banner" :key="i.id" >
    <div v-if="i===0" :key="i.id" class="for-banner1">
       <img v-bind:src="banner.image.url" alt="Girl in a
      jacket" class="banner-Image"  width: 310px;
  height: 268px;
 />
   <div  class="title"> {{ banner.title }}</div>
    </div>
    <div v-if="i===1" :key="i.id" class="for-banner2">
       <img v-bind:src="banner.image.url" alt="Girl in a
      jacket" class="banner-Image"  width: 310px;
  height: 268px;
 />
   <div class="title"> {{ banner.title }}</div>
    </div>
    
    
    </div>
    <SfAccordion />
  </div>
</template>

<script>
import { SfAccordion } from "@storefront-ui/vue";

export default {
  components: {
    SfAccordion,
  },

  props: {
    section: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap");

.main-grid{
  display: grid;
  grid-template-columns: 1fr 1fr;
      width: 1240px;    
    padding-top: 41px;
}

.for-banner2{
  display: grid;
  grid-template-columns: 1fr 1fr;
   background-color:#f5f5f5;
}

.for-banner1{
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: #e2d20b;
}

.title{
  width: 183px;
    height: 70px;
    margin: 51px 0 30px 67px;
    font-family: Poppins;
    font-size: 25px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.4;
    letter-spacing: normal;
    text-align: left;
    color: #3c3c3c;
}

.banner-Image{
  margin: 35px 13px 20px 30px;
}

</style>
