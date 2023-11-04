<template>
    <div class="row noMarginBottom">
        <div class="col l12 featuredPrdtBackground">
            <div class="container">
                <div class="textBox"><h5 class="leftAlign">Best Selling Artworks</h5><span>See All</span></div>
                <div class="row" @click="showProductEditor">
                    <!-- Loop through your products using v-for -->
                    <div
                        class="col l2 s12 m4 product"
                        v-for="(product, index) in seededProducts.slice(0,6)"
                        :key="index"
                    >
						<router-link
							:to="
								loggedIn
									? `#!`
									: {
											name: `product-details`,
											params: {
												product_name: product.title,
											},
										}
							"
						>
							<img
								class="responsive-img"
								:src="renderImage(product)"
								alt=""
								loading="lazy"
							/>
							<h3>{{ product.title }}</h3>
						</router-link>
                        <span class="category grey-text">{{
                            product.category.name
                        }}</span>
                        <span class="pexamplerice">
                            <span
                                class="oldPrice grey-text"
                                v-if="product.oldPrice"
                                >{{ product.oldPrice }}</span
                            >
                            <span class="curPrice">{{ formatPrice(product.amount) }}</span>
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
    import priceMixixn from "@/mixin/priceMixin";
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
        mixins: [priceMixixn],
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
                        title: "Abstract Painting",
                        category: {
                            name: "Paintings",
                        },
                        oldPrice: "$150.00",
                        curPrice: "$120.00",
                        rating: 3,
                        images: [
                            {
                                url: "https://d1ee3oaj5b5ueh.cloudfront.net/thumbs/700xAUTO_processed_art_2023_10_391356f4-7b72-4837-8839-4e2475a5605d-main-master.webp",
                            },
                        ],

                        link: "#",
                    },
                    {
                        title: "Levitate",
                        category: {
                            name: "Paintings",
                        },
                        curPrice: "$150.00",
                        rating: 2,
                        images: [
                            {
                                url: "https://d1ee3oaj5b5ueh.cloudfront.net/thumbs/700xAUTO_processed_art_2023_10_8de2fee4-47c7-439d-9fbd-07daacce90e8-main-master.webp",
                            },
                        ],

                        link: "#",
                    },
                    {
                        title: "Zodiac",
                        category: {
                            name: "Paintings",
                        },
                        curPrice: "$150.00",
                        rating: 3,
                        images: [
                            {
                                url: "https://d1ee3oaj5b5ueh.cloudfront.net/thumbs/700xAUTO_processed_art_2023_10_4a5216b4-ab98-4f50-bb51-962208c0c31b-main-master.webp",
                            },
                        ],

                        link: "#",
                    },
                    {
                        title: "OceanBlue",
                        category: {
                            name: "Paintings",
                        },
                        curPrice: "$130.00",
                        rating: 4,
                        images: [
                            {
                                url: "https://d1ee3oaj5b5ueh.cloudfront.net/thumbs/700xAUTO_processed_art_2023_10_1abd7c16-5498-401e-931a-c99271dc613c-main-master.webp",
                            },
                        ],

                        link: "#",
                    },
                    {
                        title: "Green Portrait",
                        category: {
                            name: "Paintings",
                        },
                        oldPrice: "$150.00",
                        curPrice: "$120.00",
                        rating: 3,
                        images: [
                            {
                                url: "https://d1ee3oaj5b5ueh.cloudfront.net/thumbs/700xAUTO_processed_art_2023_10_89c8a9fd-5e60-4b1a-b23d-28b998e0fd3f-main-master.webp",
                            },
                        ],

                        link: "#",
                    },
                    {
                        title: "Entwined",
                        category: {
                            name: "Sculpture",
                        },
                        curPrice: "$150.00",
                        rating: 2,
                        images: [
                            {
                                url: "https://d1ee3oaj5b5ueh.cloudfront.net/thumbs/700xAUTO_processed_art_2023_10_e342ab1a-2579-4809-8561-b73d41027993-main-master.webp",
                            },
                        ],

                        link: "#",
                    },
                    {
                        title: "Park",
                        category: {
                            name: "Paintings",
                        },
                        curPrice: "$150.00",
                        rating: 3,
                        images: [
                            {
                                url: "https://d1ee3oaj5b5ueh.cloudfront.net/thumbs/700xAUTO_processed_art_2023_10_3431c67f-8600-4893-9b66-f597e0596bc1-main-master.webp",
                            },
                        ],

                        link: "#",
                    },
                    {
                        title: "Albert",
                        category: {
                            name: "Paintings",
                        },
                        curPrice: "$130.00",
                        rating: 4,
                        images: [
                            {
                                url: "https://d1ee3oaj5b5ueh.cloudfront.net/thumbs/700xAUTO_processed_art_2023_10_0e2459ea-9dcf-458f-81f3-af5f74c7b276-main-master.webp",
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
        
        padding-left: 0 !important;
        padding-right: 0 !important;
        padding-top: 3vh;
        padding-bottom: 4vh;
    }

    .container {
        width: 80%;
        max-width: unset;
    }

    .container .row {
        margin-bottom: 5vh;
    }
    .textBox {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .leftAlign {
        text-align: left;
        size: 0.5rem;
    }

    .product {
        display: flex;
        flex-direction: column;
        margin-bottom: 6vh;
        width: 40vw;
        height: 40vh;
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
        width: 15vw;
        height: 15vh;
    }
    /* MOBILE */
    @media only screen and (max-width: 600px) {
        img {
            width: 50%;
            height: unset;
        }
    }
</style>
