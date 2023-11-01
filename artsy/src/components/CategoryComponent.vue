<template>
    <div class="productCatSection" id="productCategorySection" @click="showCategoryEditEditor">
        <div
            v-if="categories && categories.length > 0"
            class="productCatSectionInner"
        >
            <div
                v-for="(category, index) in categories.slice(0, 3)"
                :key="index"
                class="productCat"
                :style="{
                    backgroundImage: `url(${
                        !category.image ? seeder[index].image : category.image
                    })`,
                }"
            >
                <div class="shadow">
                    <div class="catDetails">
                        <h3>{{ category.name }}</h3>
                        <p>
                            {{
                                !category.image
                                    ? seeder[index].description
                                    : category.description
                            }}
                        </p>
                        <div class="heroCtaContainer">
                            <a href="#"
                                >Shop Now</a
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="productCatSectionInner" v-else>
            <div
                v-for="(category, index) in seeder.slice(0, 3)"
                :key="index"
                class="productCat"
                :style="{ backgroundImage: `url(${category.image})` }"
            >
                <div class="shadow">
                    <div class="catDetails">
                        <h3>{{ category.name }}</h3>
                        <p>{{ category.description }}</p>
                        <div class="heroCtaContainer">
                            <a href="">Shop Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
  <script>
    export default {
        data() {
            return {
                seeder: [
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
                ],
                imgDimensionHeight: 880,
                imgDimensionWidth: 800,
            };
        },
        props: {
            categories: Array,
            loggedIn: Boolean,
        },
        watch: {
            categories(newVal) {
                if (newVal.length > 0) {
                    newVal.forEach((category, i) => {
                        if (i < this.seeder.length) {
                            // Update existing seeder items
                            this.seeder[i].name = category.name;
                            this.seeder[i].image =
                                category.image || this.seeder[i].image;
                            this.seeder[i].description =
                                category.description || this.seeder[i].description;
                        } else {
                            // Create new seeder items if there are more categories
                            this.seeder.push({
                                name: category.name,
                                image: category.image || null,
                                description: category.description || null,
                            });
                        }
                    });
                }
            },
        },
        methods: {
            showCategoryEditEditor() {
                if (this.loggedIn) {
                    this.$emit("showEditNavMenu", {
                        evt: true,
                        width: this.imgDimensionWidth,
                        height: this.imgDimensionHeight,
                    });
                }
            },
        }
    };
</script>
  
  <style scoped>
    .productCatSection {
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .productCatSectionInner {
        width: 80vw;
        display: flex;
        /* justify-content: space-between; */
        gap: 2vh;
    }

    .productCat {
        height: 65vh;
        width: 25vw;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    }

    .productCat .shadow {
        background-color: rgba(0, 0, 0, 0.5);
        color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        height: 100%;
    }

    .productCat .shadow .catDetails {
        padding: 6vh 2.7vw;
    }

    .catDetails h3 {
        margin: 0;
        color: #fff;
        font-family: Lato;
        font-size: 1.6rem;
        font-style: normal;
        font-weight: 700;
        line-height: 39px;
    }

    .catDetails p {
        color: #fff;
        font-family: Lato;
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.85713rem;
        margin: 1.5vh 0 5vh;
    }

    .heroCtaContainer a {
        padding: 1.5vh 2vw;
        text-transform: uppercase;
        border: thin solid #fff;
        background-color: #fff;
        color: #000;
        text-decoration: none;
    }

    /* MOBILE */
    @media only screen and (max-width: 767px) {
        .productCatSection {
            height: unset;
            display: block;
            padding: 3vh 0;
        }
        .productCatSectionInner {
            margin: 0 auto;
            width: 90vw;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
        .productCat {
            height: 45vh;
            width: 100%;
            margin-bottom: 3vh;
        }

        h1 {
            font-size: 2.7rem;
            line-height: 70%;
            margin: 2.8rem 0 1.68rem 0;
        }
    }
</style>