<template>
<div>
    <div id="home">
    <ContentPage v-if="content[0]" :page="content[0]" />
  </div>

  <div class="footer">
    <div class="ig1">
        <ul class="gap">
            <li class="dot">Ignitiv</li>
            <li class="dummytext"> Some information related ignitiv</li>
        </ul>
    </div>
      <div class="ig2">
        <ul class="gap">
            <li class="dot">Shopping online</li>
            <li class="list-unstyled"><a href="#!">Order Status</a></li>
            <li class="list-unstyled"><a href="#!">Shipping and Delivery</a></li>
            <li class="list-unstyled"><a href="#!">Returns</a></li>
            <li class="list-unstyled"><a href="#!">Payment Options</a></li>
            <li class="list-unstyled"><a href="#!">Contact us</a></li>
          </ul></div>
  
    <div class="ig3">
      <ul class="gap">
              <li class="dot">Information</li>
            <li class="list-unstyled"><a href="#!">Gift Card</a></li>
            <li class="list-unstyled"><a href="#!">Find a store</a></li>
            <li class="list-unstyled"><a href="#!">Newsletter</a></li>
            <li class="list-unstyled"><a href="#!">Become a member</a></li>
            <li class="list-unstyled"><a href="#!">Site feedback</a></li>
          </ul></div>
    <div class="ig4">
      <ul class="gap">
              <li class="dot">Contact</li>
            <li class="list-unstyled"><a href="#!">store@ignitiv.com</a></li>
            <li class="list-unstyled"><a href="#!">Hotline: 1234567890</a></li>
      </ul></div>    
     
  </div>

   <div class="DESIGN-BY-IGNITIVCO---2021-ALL-RIGHTS-RESERVED">
  DESIGN BY IGNITIV.CO - © 2021.
   </div>  
</div>
</template>

<script>
//import { SfFooter, SfList, SfImage, SfMenuItem } from '@storefront-ui/vue';
import { useContent } from 'vsf-lexascms';
import { onSSR } from '@vue-storefront/core';
import ContentPage from '~/components/ContentPage.vue';

export default {
  components: {
    // SfFooter,
    // SfList,
    // SfImage,
    // SfMenuItem
    footerImages
  },

   setup() {
    const { search, content, loading, error } = useContent();
    
    onSSR(async () => {
      await search({
        type: 'collection',
        contentType: 'footerImages',
        params: {
          filter: {
            slug: { _eq: 'footer' }
          },
       
          include: 'sections,' + // Content Page Sections
                   'sections.facebook,'
        }
      });
    });
    return { content };
  }
};
//   data() {
//     return {
//       aboutUs: ['Who we are', 'Quality in the details', 'Customer Reviews'],
//       departments: ['Women fashion', 'Men fashion', 'Kidswear', 'Home'],
//       help: ['Customer service', 'Size guide', 'Contact us'],
//       paymentsDelivery: ['Purchase terms', 'Guarantee'],
//       social: ['facebook', 'pinterest', 'google', 'twitter', 'youtube'],
//       isMobile: false,
//       desktopMin: 1024
//     };
//   }
// };
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap");
.footer {
  display: grid;
//flex-direction: row;
  width: 1102px;
  height: 101px;
      display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    padding-left: 100px;
  

  //justify-content: space-between;
  
}

//   .Order-Status-Shipping-and-Delivery-Returns-Payment-Options-Contact-Us {
//   width: 141px;
//   height: 135px;
//   margin: 34px 0 0;
//   font-family: Poppins;
//   font-size: 13px;
//   font-weight: normal;
//   font-stretch: normal;
//   font-style: normal;
//   line-height: 2.23;
//   letter-spacing: normal;
//   text-align: left;
//   color: #000;
// }
.ig1{
  //padding-block: 20px;
   //box-sizing: border-box;
   grid-column: 1/4;
grid-row:1;
}

.ig2{
  //padding-block: 20px;
   //box-sizing: border-box;
   grid-column: 2/4;
grid-row:1;
display: grid;


}

.ig3{
  //padding-block: 20px;
   //box-sizing: border-box;
   grid-column: 3/4;
grid-row:1;
display: grid;


}

.ig4{
  //padding-block: 20px;
   //box-sizing: border-box;
   grid-column: 4/4;
grid-row:1;
display: grid;
}
.gap{
 
  width: 141px;
  height: 135px;
  margin: 34px 0 0;
  font-family: Poppins;
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.23;
  letter-spacing: normal;
  text-align: left;
  color: #000;
}

.dot{
  
list-style: none;
  width: 116px;
  height: 20px;
  margin: 0 25px 34px 0;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.07;
  letter-spacing: normal;
  text-align: left;
  color: #000;
}

.list-unstyled{
  list-style: none;
}

.dummytext {
  width: 412px;
  height: 77px;
  //margin: 41px 28px 30px 100px;
  font-family: Poppins;
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: normal;
  text-align: left;
  color: #808080;
  list-style: none;
}
.footer{
  display: grid;
  //grid-template-columns: 50px 70px;
}
.DESIGN-BY-IGNITIVCO---2021-ALL-RIGHTS-RESERVED {
  width: 308px;
  height: 17px;
  margin: 170px 18px 0 400px;
  font-family: Poppins;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: normal;
  text-align: left;
  color: #aeaeae;
}


 // margin: 57px 22.8px 41px 101px;
  //background-color: #000;


// .footer {
//   margin-bottom: 3.75rem;
//   @include for-desktop {
//     margin-bottom: 0;
//   }
//   &__socials {
//     display: flex;
//     justify-content: space-between;
//     margin: 0 auto var(--spacer-lg);
//     padding: var(--spacer-base) var(--spacer-xl);
//     @include for-desktop {
//       justify-content: flex-start;
//       padding: var(--spacer-xs) 0;
//       margin: 0 auto;
//     }
//   }
//   &__social-image {
//     margin: 0 var(--spacer-2xs) 0 0;
//   }
// }
// .PLP {
//   width: 1280px;
//   height: 2523px;
//   padding: 35px 100px 52px;
//   background-color: #fff;
// }
// .sf-footer {
//   @include for-desktop {
//     border-top: var(--spacer-xs) solid var(--c-primary);
//     padding-bottom: 0;
//     margin-top: var(--spacer-2xl);
//   }
//   &__container {
//     margin: var(--spacer-sm);
//     @include for-desktop {
//       max-width: 69rem;
//       margin: 0 auto;
//     }
//   }
// }

</style>
