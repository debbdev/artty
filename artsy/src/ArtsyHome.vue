<template>
    <div>
        <NavbarComponent :brandname="brandname" :categories="categories" :loggedIn="loggedIn" @showEditNavMenu="showEditNavMenu($event)" :email="email"/>
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
import M from 'materialize-css';
import CategoryComponent from "./components/Artsy/CategoryComponent.vue";
import FeaturedProductsComponent from "./components/Artsy/FeaturedProductsComponent.vue";
import HeroComponent from "./components/Artsy/HeroComponent.vue";
import NavbarComponent from "./components/Artsy/NavbarComponent.vue";
import OffersComponent from "./components/Artsy/OffersComponent.vue";
import FooterComponent from "./components/Artsy/FooterComponent.vue";
import BlogComponent from "./components/Artsy/BlogComponent.vue";
import SellingPointComponent from "./components/Artsy/SellingPointComponent.vue";

export default {
    components: { NavbarComponent, HeroComponent, OffersComponent, FeaturedProductsComponent, CategoryComponent, FooterComponent, SellingPointComponent, BlogComponent },
    data() {
        return {
            brandname: `ARTsy`,
            categories: [
                    {
                        name: "Wall Art",
                        description:
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.",
                        image: "https://i.pinimg.com/originals/55/52/17/5552174460005864a09e91b24c8036e0.jpg",
                    },
                    {
                        name: "Home Decor",
                        description:
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.",
                        image: "https://d1ee3oaj5b5ueh.cloudfront.net/thumbs/750xAUTO_2022_11_6378a70e3eff4.webp",
                    },
                    {
                        name: "Collections",
                        description:
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.",
                        image: "https://d1ee3oaj5b5ueh.cloudfront.net/thumbs/1080xAUTO_2023_09_6514719be3b4a.webp",
                    },
                    {
                        name: "Paintings",
                        description:
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.",
                        image: "https://d1ee3oaj5b5ueh.cloudfront.net/thumbs/1080xAUTO_2023_09_6514719be3b4a.webp",
                    },
                    {
                        name: "Prints",
                        description:
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.",
                        image: "https://d1ee3oaj5b5ueh.cloudfront.net/thumbs/1080xAUTO_2023_09_6514719be3b4a.webp",
                    },
                    {
                        name: "Sculpture",
                        description:
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.",
                        image: "https://d1ee3oaj5b5ueh.cloudfront.net/thumbs/1080xAUTO_2023_09_6514719be3b4a.webp",
                    },
                ],
            loggedIn: false,
            email: `goziechukwu@gmail.com`,
            sellPoint: [
                {
                    title: "Shipping",
                    image_or_icon:"https://risingtheme.com/html/demo-suruchi-v1/suruchi/assets/img/other/shipping1.png",
                    description: "From handpicked sellers",
                },
                {
                    title: "Support",
                    image_or_icon:"https://risingtheme.com/html/demo-suruchi-v1/suruchi/assets/img/other/shipping2.png",
                    description: "From handpicked sellers",
                },
                {
                    title: "Return",
                    image_or_icon:"https://risingtheme.com/html/demo-suruchi-v1/suruchi/assets/img/other/shipping3.png",
                    description: "From handpicked sellers",
                },
            ],
            socials: {
                facebook: ``,
                youtube: ``,
                twitter: ``,
                instagram: ``,
                tiktok: ``
            },
            hero: { },
            products: [],
            blogs: [],
            offers: []
        };
    },
    // DO NOT CAHNGE PROPS
    props: {
        // loggedIn: Boolean,
        // brandname: String,
        // sellPoint: Array,
        // categories: Array,
        // hero: Object,
        // offers: Array,
        // products: Array,
        // blogs: Array,
        // timestamp: Number,
        // email: String,
        // socials: Object,
        // branddesc: String,
    },
    // DO NOT CAHNGE METHODS
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
        M.AutoInit();
    }
}
</script>
<style>
    :root {
        /* RETURN THIS TO #fff */
      --primary-color: #661313;
    }
    /* fixes design issues with dark mode */
    body {
        background-color: #fff;
    }
</style>