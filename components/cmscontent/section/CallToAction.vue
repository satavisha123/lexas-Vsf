<template>
<div class="Card">
  <SfCard
    :title="section.title"
     :buttontext="section.buttonText"
    :description="section.description"
   
     />
</div>
</template>

<script>
import SfCard from '@storefront-ui/vue';
export default {
  components: {
    SfCard
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
  background-color: aqua;
}
</style>

