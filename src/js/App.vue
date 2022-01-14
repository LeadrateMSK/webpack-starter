<template>
    <div class="container">
        <text-one></text-one>
        <text-two></text-two>
    </div>
    <!-- /.container -->
</template>

<script>
    import TextOne from "./components/TextOne"
    import TextTwo from "./components/TextTwo"
    import Swiper from 'swiper'

    export default {
        name: "App",
        components: {
            TextOne,
            TextTwo,
            Swiper
        }
    }
</script>