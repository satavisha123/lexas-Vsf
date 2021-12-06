<template>
<div>
<div class="Card">
  <div class="Shop-By-Category">
{{section.contentTitle}}

  </div>
<div class="gridforcategory">
  <div v-for="(items,i) in section.items" :key="i.id" >
   {{items.title}}
    <img
        v-bind:src="items.image.url"
        alt="Girl in a jacket"
       
      />

  </div>
</div>
</div>

  <SfBannerGrid 
     />
</div>
</template>

<script>
import SfBannerGrid  from '@storefront-ui/vue';
export default {
  components: {
    SfBannerGrid 
  },
  props: {
    section: {
      type: Object,
      required: true
    }
  }
};
</script>
<style>
.Card{
  /* width: 1079px;
  height: 600px; */
  display: grid;
  

}

.Shop-By-Category {
  /* width: 268px; */
  height: 43px;
  margin: 5px 5px 8px 100px;
  font-family: 'Poppins';
  font-size: 30px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.53;
  letter-spacing: normal;
  /* text-align: center; */
  color: #4d4d4f;
}

.gridforcategory{
  display: grid;
}
</style>
