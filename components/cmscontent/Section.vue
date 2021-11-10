<template>
  <component :is="section.type" :section="section" />
</template>

<script>

import NewsletterSignup from './Section/NewsletterSignup';
import PromoBanner from './Section/PromoBanner';
export default {
  components: {
   
    newsletterSignup: NewsletterSignup,
    promoBanner: PromoBanner
  },
  props: {
    section: {
      type: Object,
      required: true
    }
  }
}
</script>
