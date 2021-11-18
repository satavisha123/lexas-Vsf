<template>
  <SfSection :title-heading="section.title" class="section">
  
    <SfCarousel class="carousel" :settings="{ peek: 16, breakpoints: { 1023: { peek: 0, perView: 2 } } }">
      <!-- <SfCarouselItem class="carousel__item" v-for="(product, i) in products" :key="i">
        <SfProductCard
          data-cy="home-url_product"
          :title="product.title"
          :image="product.image"
          :regular-price="product.price.regular"
          :max-rating="product.rating.max"
          :score-rating="product.rating.score"
          :show-add-to-cart-button="true"
          :is-on-wishlist="product.isOnWishlist"
          link="/"
          class="carousel__item__product"
          @click:wishlist="toggleWishlist(i)"
        />
      </SfCarouselItem>
    </SfCarousel> -->
      <SfCarouselItem class="carousel__item" v-for="(product, i) in products" :key="i">
            <SfProductCard
              :title="productGetters.getName(product)"
              :image="productGetters.getCoverImage(product)"
              :regular-price="$n(productGetters.getPrice(product).regular, 'currency')"
              :max-rating="5"
              :score-rating="productGetters.getAverageRating(product)"
            
            >
             
            </SfProductCard>
          </SfCarouselItem>
    </SfCarousel>
     </SfSection>
     
 
</template>

<script>
import{
  SfCarousel,
  SfProductCard,
  SfSection
} from '@storefront-ui/vue';
import { useUser, useContent, contentGetters, useProduct, productGetters, useWishlist } from '@vue-storefront/kibocommerce';
import { onSSR } from '@vue-storefront/core';
import { computed} from '@vue/composition-api';
import product from '~/tests/e2e/pages/product';

export default {
  components: {
    SfCarousel,
    SfProductCard,
    SfSection
  },
   setup() {
      const {
      products,
      search,
      loading
    } = useProduct();
      const properties = computed(() =>
      productGetters.getAttributes(product.value)
    );
   },


  props: {
    section: {
      type: Object,
      required: true
    }
  },

  data () {
    return {
      products:[
        
      ],
      productGetters,
      
    }
  },

  methods: {
    toggleWishlist(index) {
      this.products[index].isOnWishlist = !this.products[index].isOnWishlist;
    }
  }
}
</script>