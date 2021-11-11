<template>
  <component :is="section.type" :section="section" />
</template>

<script>
//import BestSellers from './Section/BestSellers';
import FeaturedCategories from './Section/FeaturedCategories';
import CallToAction from './Section/CallToAction';
import NewsletterSignup from './Section/NewsletterSignup';
import PromoBanner from './Section/PromoBanner';
//import NewProb from './Section/NewProb';
export default {
  components: {
    // bestSellers: BestSellers,
     featuredCategories: FeaturedCategories,
      //newProb : NewProb,
     callToAction: CallToAction,
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
