<template>
  <SfCard
    :title="section.title"
    :description="section.subtitle"
    :buttontext="section.buttonText"
     />
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
