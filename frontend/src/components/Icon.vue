<template>
<div>
<span :style="{ 'background-color': color }">{{text}}</span> 
</div>
   
</template>

<script>
export default {
    name:'Icon',
    props:{
       text: String,
       color: String,
    }
}
</script>
<style scoped>
span{
   background-color: white;
   padding: 4px;
   border-radius: 5px;   
}
</style> 
