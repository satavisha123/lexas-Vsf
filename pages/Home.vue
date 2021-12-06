<template>
  <div id="home">
    
    <ContentPage v-if="content[0]" :page="content[0]" />
  </div>
</template>
<script>
import { useContent } from 'vsf-lexascms';
import { onSSR } from '@vue-storefront/core';
import ContentPage from '~/components/ContentPage.vue';

export default {
  name: 'Home',

  components: {
    ContentPage
  },
  
  setup() {
    const { search, content, loading, error } = useContent();
    
    onSSR(async () => {
  await search({
          type: 'collection',
        contentType: 'contentPage',
        params: {
           filter: {
            slug: { _eq: 'homepage' }
          },
                  page: {
            limit: 1,
            sections: {
              limit: 10,
              bannerItems: {
                limit: 5
              },
              items:{
                limit: 10
              },
           



              featuredCategories: {
                limit: 4
              }
            }
          },
          include: 'sections,' +
                   'sections.backgroundImage,'+
                   'sections.items,sections.items.image,'+ 
                   'sections.arrow',
                  
        }
      });
    });

    return { content };
  }
};
</script>
