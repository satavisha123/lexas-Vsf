<template>
  <div class="main-grid">
    <div v-for="(banner, i) in section.banner" :key="i.id" class="for-banner">
     <div> {{ banner.title }}</div>
       <img v-bind:src="banner.image.url" alt="Girl in a
      jacket" class="item-Image"  width: 310px;
  height: 268px;
 />
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
}

.for-banner{
  display: grid;
}



</style>