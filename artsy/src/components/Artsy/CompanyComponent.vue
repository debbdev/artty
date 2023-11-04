<template>
    <div class="companyContainer" id="CompanyComponent">
        <div class= "card companyBox"  @click="showCompanyEditor">
                <div class="companyContent"  v-for="(company, index) in CompanySeeder" :key="index" >
                     <img      
                        :src="company.image_or_icon"
                        alt=""
                        loading="lazy"/>
                </div>
        </div>
   </div>
</template>

<script>
    export default {
        data() {
            return {
                CompanySeeder: [
					{
                        title: "Free Shipping",
                        image_or_icon:
                            "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/logo-4.svg",
                        description: "From handpicked sellers",
                    },
                    {
                        title: "Support",
                        image_or_icon:
                            "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/logo-5.svg",
                        description: "From handpicked sellers",
                    },
                    {
                        title: "60 days Return",
                        image_or_icon:
                            "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/logo-2.svg",
                        description: "From handpicked sellers",
                    },
                    {
                        title: "60 days Return",
                        image_or_icon:
                            "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/logo-3.svg",
                        description: "From handpicked sellers",
                    },
                    {
                        title: "60 days Return",
                        image_or_icon:
                            "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/logo-1.svg",
                        description: "From handpicked sellers",
                    },
                    {
                        title: "60 days Return",
                        image_or_icon:
                            "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/logo-1.svg",
                        description: "From handpicked sellers",
                    },
                    {
                        title: "Free Shipping",
                        image_or_icon:
                            "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/logo-4.svg",
                        description: "From handpicked sellers",
                    },
                    {
                        title: "Support",
                        image_or_icon:
                            "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/logo-5.svg",
                        description: "From handpicked sellers",
                    },
                    {
                        title: "60 days Return",
                        image_or_icon:
                            "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/logo-2.svg",
                        description: "From handpicked sellers",
                    },
                ],
            };
        },
        mounted() {
        },
        methods: {
            showCompanyEditor() {
                if (this.loggedIn) {
                    this.$emit(`showCompanyEditor`, true);
                }
            }
        },
        props: {
            loggedIn: Boolean,
            sellingPSeeder: Array,
        },
    };
</script>

<style scoped>
    .companyContainer {
        width: 100%;
        height: 10vh;
    }
    .card {
        width: 80% !important;
    }
    .companyBox {
        width: 80%;
        max-width: unset;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    img {
        width: 8vw;
        height: 8vh;  
    }
    /* MOBILE */
    @media only screen and (max-width: 767px) {
       
    }
</style>
