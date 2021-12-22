<template>
  <div>
    {{ section }}
    <SfBar></SfBar>
  </div>
</template>
<script>
import SfBar from "@storefront-ui/vue";
export default {
  components: {
    SfBar,
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
</style>