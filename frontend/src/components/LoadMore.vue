<template>
<div @click="$emit('load-more')" >
<span>Load More</span> 
</div>
   
</template>

<script>
export default {
    name:'LoadMore',
    
}
</script>
<style scoped>
div{
    display: flex;
    justify-content: center;    
    background-color: rgb(217, 246, 255);
    border-radius: 5px
}
span{
  color:  rgb(9, 119, 245); 
   padding: 15px;
   text-decoration:underline;
   cursor: pointer;
     
}
span:hover {
     /*text-decoration:none;*/
     text-shadow: 1px 1px 1px #555;
}
</style> 
