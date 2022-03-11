<template>
<div>
<span>{{text}}</span> 
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
   background-color: rgb(0, 200, 230);
   padding: 4px;
   border-radius: 5px;   
}
</style> 
