<template>
    <div class="row noMarginBottom">
        <div class="col l12 featuredPrdtBackground">
            <div class="container">
                <h2 class="centerAlign">Featured Products</h2>
                <div class="row" @click="showProductEditor">
                    <!-- Loop through your products using v-for -->
                    <div
                        class="col l3 s12 product"
                        v-for="(product, index) in seededProducts"
                        :key="index"
                    >
						<a href="#"
						>
							<img
								class="responsive-img"
								:src="renderImage(product)"
								alt=""
								loading="lazy"
							/>
							<h3>{{ product.title }}</h3>
                         </a>
                        <span class="category grey-text">{{
                            product.category.name
                        }}</span>
                        <span class="pexamplerice">
                            <span
                                class="oldPrice grey-text"
                                v-if="product.oldPrice"
                                >{{ product.oldPrice }}</span
                            >
                             <!-- removed formatPrice(product.amount), was causing error  --debbdev -->
                            <span class="curPrice">{{ product.amount }}</span>
                        </span>
                        <div class="rating">
                            <i
                                class="material-icons"
                                v-for="star in 5"
                                :key="star"
                                >{{
                                    product.rating > star
                                        ? "star"
                                        : "star_border"
                                }}</i
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    //import priceMixixn from "@/mixin/priceMixin";
    export default {
        computed: {
            displayedProducts() {
                if (this.products && this.products.length > 0) {
                    return this.products;
                } else if (this.seededProducts && this.seededProducts.length > 0) {
                    return this.seededProducts;
                } else {
                    return [];
                }
            },
        },
       // mixins: [priceMixixn],
        data() {
            return {
                renderImage(prd) {
                    if (prd !== undefined && prd.images[0] !== undefined) {
                        return prd.images[0].url
                    }
                },
				seededProducts: [
                    {
                        title: "Pirate Head",
                        category: {
                            name: "Sculpture",
                        },
                        oldPrice: "$150.00",
                        curPrice: "$120.00",
                        rating: 3,
                        images: [
                            {
                                url: "https://d1ee3oaj5b5ueh.cloudfront.net/thumbs/750xAUTO_2023_09_6516afa05bd82.webp",
                            },
                        ],

                        link: "#",
                    },
                    {
                        title: "Volcanic Rocks",
                        category: {
                            name: "Paintings",
                        },
                        curPrice: "$150.00",
                        rating: 2,
                        images: [
                            {
                                url: "https://d1ee3oaj5b5ueh.cloudfront.net/thumbs/750xAUTO_2023_09_6516b019973de.webp",
                            },
                        ],

                        link: "#",
                    },
                    {
                        title: "Flower Pot",
                        category: {
                            name: "Paintings",
                        },
                        curPrice: "$150.00",
                        rating: 3,
                        images: [
                            {
                                url: "https://d1ee3oaj5b5ueh.cloudfront.net/thumbs/750xAUTO_2023_09_6516af7694919.webp",
                            },
                        ],

                        link: "#",
                    },
                    {
                        title: "MarketSquare",
                        category: {
                            name: "Paintings",
                        },
                        curPrice: "$130.00",
                        rating: 4,
                        images: [
                            {
                                url: "https://d1ee3oaj5b5ueh.cloudfront.net/thumbs/AUTOx600_processed_art_2023_10_1fec75c1-e04e-473f-8cbf-e5ba2ae059e5-main-master.webp",
                            },
                        ],

                        link: "#",
                    },
                    {
                        title: "Lemon Bracelet",
                        category: {
                            name: "Sculpture",
                        },
                        curPrice: "$120.00",
                        rating: 5,
                        images: [
                            {
                                url: "https://d1ee3oaj5b5ueh.cloudfront.net/thumbs/AUTOx600_processed_art_2023_10_3c352a35-6a1c-4224-bb95-0f81c2f8ff91-main-master.webp",
                            },
                        ],

                        link: "#",
                    },
                    {
                        title: "Boho Fish Face",
                        category: {
                            name: "Drawings",
                        },
                        curPrice: "$120.00",
                        rating: 4,
                        images: [
                            {
                                url: "https://d1ee3oaj5b5ueh.cloudfront.net/thumbs/AUTOx600_processed_art_2023_10_fc3b1266-719f-4e71-9a28-4d149468e5df-main-master.webp",
                            },
                        ],

                        link: "#",
                    },
                    {
                        title: "Abstarct Leaf",
                        category: {
                            name: "Prints",
                        },
                        curPrice: "$120.00",
                        rating: 2,
                        images: [
                            {
                                url: "https://d1ee3oaj5b5ueh.cloudfront.net/thumbs/AUTOx600_processed_art_2023_08_5f264e0a-6c47-47cd-aeb8-2a1a4b600575-main-master.webp",
                            },
                        ],

                        link: "#",
                    },
                    {
                        title: "Bright Red",
                        category: {
                            name: "Paintings",
                        },
                        curPrice: "$120.00",
                        rating: 3,
                        images: [
                            {
                                url: "https://d1ee3oaj5b5ueh.cloudfront.net/thumbs/AUTOx600_processed_art_2023_08_d97b72a0-511f-4f6f-bd90-ab17c1d9fcd9-main-master.webp",
                            },
                        ],

                        link: "#",
                    },
                    {
                        title: "Pumice Lake",
                        category: {
                            name: "Photo",
                        },
                        curPrice: "$120.00",
                        rating: 3,
                        images: [
                            {
                                url: "https://d1ee3oaj5b5ueh.cloudfront.net/thumbs/AUTOx600_processed_art_2023_10_65d6e48e-f528-4d30-8763-a35a4a179d4c-main-master.webp",
                            },
                        ],

                        link: "#",
                    },
                    {
                        title: "Abstract Red",
                        category: {
                            name: "Drawings",
                        },
                        curPrice: "$120.00",
                        rating: 3,
                        images: [
                            {
                                url: "https://d1ee3oaj5b5ueh.cloudfront.net/thumbs/AUTOx600_processed_art_2023_10_bbcc1057-4559-41e0-8bbe-773248f0a1c4-main-master.webp",
                            },
                        ],

                        link: "#",
                    },
                    {
                        title: "Headless",
                        category: {
                            name: "Sculpture",
                        },
                        curPrice: "$120.00",
                        rating: 3,
                        images: [
                            {
                                url: "https://d1ee3oaj5b5ueh.cloudfront.net/thumbs/280xAUTO_processed_art_2023_06_078c8858-4f12-46a0-96ad-bed2d0e5adc5-main-square.webp",
                            },
                        ],

                        link: "#",
                    },
                ],
            };
        },
        methods: {
            showProductEditor() {
                if (this.loggedIn) {
                    this.$emit("showProductEditor", true);
                }
            },
        },
        mounted() {
            if (this.products.length > 0) {
                this.seededProducts = this.products;
            }
        },
        props: {
            products: Array,
			loggedIn: Boolean,
        },
        watch: {
            products: {
                handler(newProducts) {
                    if (newProducts.length > 0) {
                        this.seededProducts = [...newProducts]; // Make a copy of the new products
                    }
                },
                deep: true, // Enable deep watching to detect changes within the array
            },
        },
    };
</script>

<style scoped>
h2 {
    font-size: 2.53rem;
}
    .noMarginBottom {
        margin-bottom: 0 !important;
    }

    .row .col.featuredPrdtBackground {
        background-color: #f5f7f9;
        padding-left: 0 !important;
        padding-right: 0 !important;
        padding-top: 3vh;
        padding-bottom: 4vh;
    }

    .container {
        width: 88%;
        max-width: unset;
    }

    .container .row {
        margin-bottom: 5vh;
    }

    .centerAlign {
        text-align: center;
    }

    .product {
        display: flex;
        flex-direction: column;
        margin-bottom: 6vh;
    }

    .product h3 {
        font-size: 1.8rem;
        margin: 0.5rem 0;
        padding: 0;
        color: #000;
    }

    .category {
        font-size: 1.2rem;
        margin-bottom: 0.5rem;
        font-weight: 500;
    }

    .oldPrice {
        text-decoration: line-through;
    }

    .price {
        font-weight: 500;
        font-size: 1.1rem;
        margin-bottom: 0.5rem;
    }

    .rating i {
        font-size: 1.3rem;
    }
    img {
        width: 300px;
        height: 300px;
    }
    /* MOBILE */
    @media only screen and (max-width: 767px) {
        img {
            width: 100%;
            height: unset;
        }
    }
</style>
