<template>
    <div>
        <div class="container" @click="showBlogEditor" id="blog">
            <div class="row" @click="showBlogEditor">
                <h2 class="centerAlign center">Blogs</h2>
                <div
                    class="col s12 l3 m4 mb-4"
                    v-for="blog in blogSeeder"
                    :key="blog"
                >
                    <img
                        :src="blog.images[0].url"
                        alt="girls"
                        class="responsive-img"
                    />
                    <p class="blog-description">
                        {{ blog.title.slice(0, 35) }}...
                    </p>
                    <h6
                        class="blog_description"
                        v-html="blog.body.slice(0, 31)"
                    ></h6>
                    <h6>
                        {{ blog.category.name }}
                    </h6>

                    <a href="#"
                       :class="classObject"
                    >
                        Read more
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
h2 {
    font-size: 2.53rem;
}
    .container {
        width: 88%;
        max-width: unset;
    }
    .customer-title {
        text-align: center;
        margin-top: 2vh;
        margin-bottom: 15vh;
        font-size: 200%;
        font-family: "Merriweather", serif;
    }
    .mb-4 {
        margin-bottom: 4vh;
    }
    .btn {
        background-color: var(--primary-color);
        box-shadow: none;
        color: #fff;
    }
    .btn:hover {
        background-color: #fff;
        border: 1px solid var(--primary-color);
        color: var(--primary-color);
    }
</style>
<script>
    //import M from 'materialize-css';
    export default {
        computed: {
            classObject() {
                return {
                    "waves waves-effect": !this.loggedIn && this.editFlag !== `1`,
                    "btn btn-blog" : this.showBlogButton,
                };
            },
        },
        data() {
            return {
                showBlogButton: true,
                blogSeeder: [
                    {
                        images: [
                            {
                                url: "https://d1ee3oaj5b5ueh.cloudfront.net/thumbs/280xAUTO_original_art_2021_03_60473ca24f7f4.webp",
                            },
                        ],
                        category_id: 1,
                        category: {
                            name: "Drawings",
                        },
                        created_at: "2023-09-28T04:41:10.000000Z",
                        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sollicitudin non purus finibus commodo. Etiam at dui quis nulla auctor commodo eu convallis orci",
                        body: "Editorial Picks for the week, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo",
                    },
                    {
                        images: [
                            {
                                url: "https://d1ee3oaj5b5ueh.cloudfront.net/thumbs/280xAUTO_original_art_2020_03_5e5e4856076e7.webp",
                            },
                        ],
                        category_id: 1,
                        category: {
                            name: "Sculpture",
                        },
                        created_at: "2023-09-28T04:41:10.000000Z",
                        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sollicitudin non purus finibus commodo. Etiam at dui quis nulla auctor commodo eu convallis orci",
                        body: "2023 Best Sculptures for you, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo",
                    },
                    {
                        images: [
                            {
                                url: "https://d1ee3oaj5b5ueh.cloudfront.net/thumbs/280xAUTO_processed_art_2023_03_db2cb9f9-12c8-4be5-96d0-3d7b467d6d16-main-square.webp",
                            },
                        ],
                        category_id: 1,
                        category: {
                            name: "Paintings",
                        },
                        created_at: "2023-09-28T04:41:10.000000Z",
                        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sollicitudin non purus finibus commodo. Etiam at dui quis nulla auctor commodo eu convallis orci",
                        body: "Top Abstract Paintings in 2023, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo",
                    },
                    {
                        images: [
                            {
                                url: "https://d1ee3oaj5b5ueh.cloudfront.net/thumbs/280xAUTO_original_art_2018_05_5b0326622e98f.webp",
                            },
                        ],
                        category_id: 1,
                        category: {
                            name: "Sculpture",
                        },
                        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sollicitudin non purus finibus commodo. Etiam at dui quis nulla auctor commodo eu convallis orci",
                        created_at: "2023-09-28T04:41:10.000000Z",
                        body: "2023 Artsy Exhibition, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo",
                    },
                ],
                editFlag: false,
            };
        },
        methods: {
            showBlogEditor() {
                if (this.loggedIn) {
                    this.$emit("showEditBlogMenu", true);
                }
            },
        },
        props: {
            blogs: Array,
            loggedIn: Boolean,
        },
        watch: {
            blogs: {
                handler(newBlog) {
                    if (newBlog.length > 0) {
                        this.blogSeeder = [...newBlog]; // Make a copy of the new products
                    }
                    M.AutoInit();
                },
                deep: true, // Enable deep watching to detect changes within the array
            },
        },
        mounted() {
            this.editFlag = localStorage.getItem("editFlag");
            if (this.blogs.length > 0) {
                this.blogSeeder = this.blogs;
            }
        },
    };
</script>