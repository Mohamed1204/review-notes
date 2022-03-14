<template>
<div>
    <span v-for="(item, index) in items" v-bind:key ="item">
        
        <router-link v-if="!((items.length-1)===index)"
         to="" > {{item}} 
        </router-link>
        <span v-if="(items.length-1)===index">{{item}}</span>
        <span v-if="!((items.length-1)===index)"> > </span>
    </span>
</div>
</template>

<script>
export default {
    name:'BreadCrumb',
    props:{
        URL1:String
    },
    data() {
    return {
      items: [],
    }
  },
    created() {
        
        const array = this.URL1.replace(/^\/|\/$/g, '').split('/');

        //to remove item in case its home URL(/), the split
        // method will return an array with 1 element(empty string) 
        if(array.length === 1 && array[0]){
            array = []
        }

        this.items = array;
        
  },
}
</script>
<style scoped>

</style>