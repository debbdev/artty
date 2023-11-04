<template>
    <div id="herocomponent">
        <div
            class="parallax-container"
            :style="{ zIndex: !loggedIn ? -1 : `inherit` }" >
            <div class="parallax imgContainer" @click="showHeroEditor">
                <img class="imgSize" :src="imageUrlWithTimestamp" />
            </div>
            <div class="heroContainer" @click="showHeroEditor">
                <div class="heroBackgroundOverlay"></div>
                <div class="heroContent">
                    <h1 class="heroMainHeading">
                        {{ heroSeeder.description }}
                    </h1>
                    <h2 class="heroMinorHeading">{{ heroSeeder.subtitle }}</h2>
                    <div class="heroCtaContainer">
                        <router-link
                            :to="
                                loggedIn
                                    ? `#!`
                                    : {
                                          name: `product-search-category`,
                                          params: {
                                              category_name:
                                                  heroSeeder.type == `welcome`
                                                      ? `all`
                                                      : heroSeeder.title ??
                                                        `offer`,
                                          },
                                          query: {
                                              additionalOfferData:
                                                  heroSeeder.type == `welcome`
                                                      ? `all`
                                                      : heroSeeder.id ??
                                                        `offer_id`,
                                          },
                                      }
                            "
                            class="link"
                            >Shop Now</router-link
                        >
                        <router-link
                            :to="
                                loggedIn
                                    ? `#!`
                                    : {
                                          name: `product-search-category`,
                                          params: {
                                              category_name:
                                                  heroSeeder.type == `welcome`
                                                      ? `all`
                                                      : heroSeeder.title ??
                                                        `offer`,
                                          },
                                          query: {
                                              additionalData:
                                                  heroSeeder.type == `welcome`
                                                      ? `all`
                                                      : heroSeeder.id ??
                                                        `offer_id`,
                                          },
                                      }
                            "
                            class="link"
                            >Find More</router-link
                        >
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
    export default {
        computed: {
            imageUrlWithTimestamp() {
                // Append the timestamp as a query parameter to the image URL
                return `${this.heroSeeder.image}?t=${this.timestamp}`;
            },
        },
        data() {
            return {
                heroSeeder: {
                    description: "Get Art From Artsy Curators!",
                    image: "https://live.staticflickr.com/65535/53024956132_6388764dca.jpg",
                    subtitle: "25% Off On All Products",
                    title: "25% Off On All Products",
                    type: "welcome",
                },
                imgDimensionHeight: 880,
                imgDimensionWidth: 800, 
                
            };
        },
        methods: {
            showHeroEditor() {
                if (this.loggedIn) {
                    this.$emit("showHeroEditor", {evt: true, width: this.imgDimensionWidth, height: this.imgDimensionHeight});
                }
            },
            
        },
        mounted() {
            var elems = document.querySelectorAll(`.parallax`);
            var instances = M.Parallax.init(elems, {});

            if (this.hero.length > 0) {
                this.heroSeeder = this.hero[0];
            }
        },
        
        props: {
            loggedIn: Boolean,
            hero: Array,
            timestamp: Number,
        },
        watch: {
            hero(newVal, oldVal) {
                if (newVal.length > 0) {
                    let parallax = document.querySelectorAll(
                        "#herocomponent .parallax"
                    );
                    let carousel = document.querySelectorAll(
                        "#herocomponent .carousel"
                    );
                    if (parallax.length > 0 || carousel.length === 0) {
                        this.heroSeeder = newVal[0];
                    } else if (carousel.length > 0) {
                        this.heroSeeder = newVal[0];
                    }
                }
            },
        },
    };
</script>

<style scoped>
    .heroContainer {
        width: 100%;
        height: 100vh;
        padding: 35vh 23.4vw;
        position: relative;
    }
    .imgContainer {
        height: 75vh;
    }

    .heroBackgroundOverlay {
        width: 100%;
        height: 79vh;
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0.6;
        display: flex;
        justify-content: center;
        align-items: center;
        background: linear-gradient(180deg, #000000 0%, #000000 100%);
    }

    .heroContent {
        position: absolute;
        top: 20%;
        left: 10%;
        width: 60vw;
        height: 40vh;
        margin: 0 auto 100% auto;
        color: #fff;
        z-index: 1;
    }
    .heroMainHeading {
        width: 40vw;
        font-size: 4rem;
        font-weight: 800;
        margin-bottom: 4vh;
    }

    .heroMinorHeading {
        font-size: 1.3rem;
        margin: 2vh 0 4vh 0;
    }

    .heroCtaContainer .link {
        padding: 1vh 2vw;
        text-transform: uppercase;
        border: thin solid #fff;
        cursor: pointer;
    }

    .heroCtaContainer .link:first-child {
        background-color: #fff;
        color: #000;
        margin-right: 1vw;
    }

    .heroCtaContainer .link:first-child:hover {
        color: #fff;
        background-color: unset;
    }

    .heroCtaContainer .link:last-child {
        color: #fff;
    }

    .heroCtaContainer .link:last-child:hover {
        background-color: #fff;
        color: #000;
    }

    .parallax-container {
        height: 75vh;
    }
    

    /* MOBILE */
    @media only screen and (max-width: 767px) {
        .heroContainer {
            width: 100%;
            height: 60vh;
            padding: 12vh 0 10vh;
        }
        .parallax-container {
            height: 60vh;
        }
        .heroContent {
            /* position: relative; */
            width: 90vw;
        }
        .heroMainHeading {
            text-align: center;
            width: 100%;
            margin: 0;
            font-size: 2.4rem;
            font-weight: 600;
        }
        .heroMinorHeading {
            text-align: center;
        }
        .heroCtaContainer a {
            display: block;
            width: 100%;
            text-align: center;
            padding: 1vh 2vw;
            text-transform: uppercase;
            border: thin solid #fff;
        }
        .heroCtaContainer a:first-child {
            margin-bottom: 2vh;
        }
    }
</style>
