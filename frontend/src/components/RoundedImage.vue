<template>
    <div>
    <img :src="src"/>
        </div>
</template>

<script>
export default {
    name:'RoundedImage',
    props:{
        src:String
    }
}
</script>

<style scoped>
img{
    height: 30px;
    width: 30px;
    border-radius: 50%;
    border:2px solid rgb(0, 171, 250)
}

</style>