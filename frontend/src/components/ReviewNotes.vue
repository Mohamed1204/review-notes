<template>
<div>
    
   <div v-for="reviewNote in reviewNotes"  v-bind:key ="reviewNote.id" >
    <ReviewNote :reviewNote="reviewNote"/>
  </div>
  </div>
</template>

<script>
import ReviewNote from './ReviewNote.vue'


export default {
    name:'ReviewNotes',
    components:{
        ReviewNote,
    },
    props: {
        reviewNotes: Array,
    }
}
</script>