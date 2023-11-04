<template>
    <div class="" id="serviceComponent">
    <div class="serviceContainer">
        <div class="serviceBox" @click="showServicesEditor">
            <div class=" serviceContent" v-for="(service, index) in serviceSeeder" :key="index"> 
                <div>
                    <img :src="service.image_or_icon" alt="services" loading="lazy">
                </div>
                <div class="textTitle">
                    <h5>{{ service.title }}</h5>
                    <span>{{ service.description }}</span>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>
<style scoped>
.serviceContainer {
    width: 100%;
    height: 50%;

}

.serviceBox {
    width: 80vw;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    padding-top: 2%;
    padding-bottom: 2%;
}
.serviceContent {
    background-color: rgb(55, 52, 52);
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 18vw;
    height: 15vh;
    border-radius: 1%;
}
@media only screen and (max-width: 767px) {
    .serviceContainer {
        
    }
    .serviceBox {
       width: 100%;
       flex-wrap: wrap;
       padding: 0 5%;
       padding-top: 5%;
    }
    .serviceContent {
        width: 100vw;
        margin-bottom: 2%;
        
    }
}
</style>
<script>
    export default {
        data() {
            return {
                serviceSeeder: [
					{
                        title: "Free Shipping",
                        image_or_icon:
                            "https://risingtheme.com/html/demo-suruchi-v1/suruchi/assets/img/other/shipping1.png",
                        description: "Above $5 Only",
                    },
                    {
                        title: "Original Arts",
                        image_or_icon:
                            "https://risingtheme.com/html/demo-suruchi-v1/suruchi/assets/img/other/shipping2.png",
                        description: "100% Guarantee",
                    },
                    {
                        title: "Huge Savings",
                        image_or_icon:
                            "https://risingtheme.com/html/demo-suruchi-v1/suruchi/assets/img/other/shipping3.png",
                        description: "At Lowest Price",
                    },
                    {
                        title: "60 days Return",
                        image_or_icon:
                            "https://risingtheme.com/html/demo-suruchi-v1/suruchi/assets/img/other/shipping3.png",
                        description: "No Questions Asked",
                    },
                    
                ]
            }
        },
        mounted() {
        },
        methods: {
            showServicesEditor() {
                if (this.loggedIn) {
                    this.$emit(`showServicesEditor`, true);
                }
            }
        },
        props: {
            loggedIn: Boolean,
            sellPoint: Array,
        },
    }
</script>