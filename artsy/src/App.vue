<template>
  <div>
    <NavbarComponent  :brandname="brandname" :categories="categories" :loggedIn="loggedIn" @showEditNavMenu="showEditNavMenu($event)" :email="email"/>
    <HeroComponent :loggedIn="loggedIn" @showHeroEditor="showHeroEditor($event)" :hero="hero" :timestamp="timestamp" />
    <CategoryComponent :categories="categories" :loggedIn="loggedIn" @showEditNavMenu="showEditNavMenu($event)" />
    <FeaturedProductsComponent :products="products" @showProductEditor="showProductEditor" :loggedIn="loggedIn"/>
    <BlogComponent @showEditBlogMenu="showEditBlogMenu" :loggedIn="loggedIn" :blogs="blogs"/>
    <OffersComponent :loggedIn="loggedIn" @showOffersEditor="showOffersEditor($event)" :hero="hero" :timestamp="timestamp" :offers="offers"/>
    <SellingPointComponent @showSellingPointEditor="showSellingPointEditor($event)" :loggedIn="loggedIn" :sellPoint="sellPoint" />
    <FooterComponent :brandname="brandname" :categories="categories" @showSocialEditor="showSocialEditor" :socials="socials" :loggedIn="loggedIn" :branddesc="branddesc"/>   
  </div>
</template>

<script>
   import CategoryComponent from "@/components/CategoryComponent.vue";
   import FeaturedProductsComponent from "@/components/FeaturedProductsComponent.vue";
   import HeroComponent from "@/components/HeroComponent.vue";
   import NavbarComponent from "@/components/NavbarComponent.vue";
   import OffersComponent from "@/components/OffersComponent.vue";
   import FooterComponent from "@/components/FooterComponent.vue";
   import BlogComponent from "@/components/BlogComponent.vue";
   import SellingPointComponent from "@/components/SellingPointComponent.vue";

export default {
  components: { NavbarComponent, HeroComponent, CategoryComponent, FeaturedProductsComponent, BlogComponent, OffersComponent, SellingPointComponent, FooterComponent },
   data() {
       return {
           brandname: `OZStores`,
           categories: [
               {
                   name: "Women",
                   description:
                       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.",
                   image: "https:websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/women-fashion-free-img.jpg",
               },
               {
                   name: "Men",
                   description:
                       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.",
                   image: "https:websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/men-fashion-free-img.jpg",
               },
               {
                   name: "Accessories",
                   description:
                       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.",
                   image: "https:websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/footwear-free-img.jpg",
               },
               {
                   name: "Guns",
                   description:
                       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.",
                   image: "https:websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/footwear-free-img.jpg",
               },
           ],
           loggedIn: false,
           email: `goziechukwu@gmail.com`,
           sellPoint: [
               {
                   title: "Shipping",
                   image_or_icon:"https:risingtheme.com/html/demo-suruchi-v1/suruchi/assets/img/other/shipping1.png",
                   description: "From handpicked sellers",
               },
               {
                   title: "Support",
                   image_or_icon:"https:risingtheme.com/html/demo-suruchi-v1/suruchi/assets/img/other/shipping2.png",
                   description: "From handpicked sellers",
               },
               {
                   title: "Return",
                   image_or_icon:"https:risingtheme.com/html/demo-suruchi-v1/suruchi/assets/img/other/shipping3.png",
                   description: "From handpicked sellers",
               },
               {
                   title: "Support",
                   image_or_icon:"https:risingtheme.com/html/demo-suruchi-v1/suruchi/assets/img/other/shipping4.png",
                   description: "From handpicked sellers",
               },
           ],
           socials: {
               facebook: ``,
               youtube: ``,
               twitter: ``,
               instagram: ``,
               tiktok: ``
           }
       };
   },
   props: {
      loggedIn: Boolean,
      brandname: String,
      sellPoint: Array,
      categories: Array,
      hero: Object,
      offers: Array,
      products: Array,
      blogs: Array,
      timestamp: Number,
      email: String,
      socials: Object,
      branddesc: String,
  },
  methods: {
      showEditNavMenu (evt) {
          this.$emit(`showEditNavMenu`, evt);
      },
      showHeroEditor (evt) {
          this.$emit(`showHeroEditor`, evt);
      },
      showOffersEditor (evt) {
          this.$emit(`showOffersEditor`, evt);
      },
      showSellingPointEditor (evt) {
          this.$emit(`showSellingPointEditor`, evt);
      },
      showProductEditor(evt) {
          this.$emit(`showProductEditor`, evt);
      },
      showEditBlogMenu (evt) {
          this.$emit(`showEditBlogMenu`, evt);
      },
      showSocialEditor(evt) {
          this.$emit(`showSocialEditor`, evt);
      }
  },
  mounted() {
      // M.AutoInit();
  }
}
</script>
<style>
  :root {
    --primary-color: #000;
  }
  /* fixes design issues with dark mode */
  body {
      background-color: #fff;
  }
</style>