<template>
<div>
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
    background-color: rgb(0, 247, 255);
    border-radius: 5px
}
span{
  color: steelblue; 
   padding: 15px;
   text-decoration:underline;
   cursor: pointer;
     
}
span:hover {
     /*text-decoration:none;*/
     text-shadow: 1px 1px 1px #555;
}
</style> 
