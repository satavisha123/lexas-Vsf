<template>
  <NewItem
    :title="section.title"
    :description="section.subtitle"
    :button-text="section.buttonText"
    :image="section.backgroundImage.url"
  />
</template>

<script>


export default {
  components: {
   NewItem
  },

  props: {
    section: {
      type: Object,
      required: true
    }
  }
}
</script>