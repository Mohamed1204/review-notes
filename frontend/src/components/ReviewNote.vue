<template>

   <div>
      <input type="checkbox" class="checkBox">
      <span class="title">{{reviewNote.title}}</span>
      <Icon class="type" :text="reviewNote.type" />
      <Icon class="status" :text="reviewNote.status" /> 
      <Icon class="priority" :text="reviewNote.priority.text" /> 
      <span class="date">{{reviewNote.dueDate}}</span>
      <RoundedImage class="img" :src="'Change this to URI!'"></RoundedImage>
      <RoundedImage class="img" :src="'Change this to URI'"></RoundedImage>
      <span class="sectionRef">{{reviewNote.sectionRef}}</span>
      <span class="date">{{reviewNote.createdAt.$date}}</span>
      <span class="date">{{reviewNote.updatedAt.$date}}</span>
      <i id="linkIcon" class="fa-solid fa-link" />
      
   </div>

</template>

<script>



import Icon from './Icon.vue'
import RoundedImage from './RoundedImage.vue'

export default {
    name:'ReviewNote',
    components:{
        Icon,
        RoundedImage,
    },
    props: {
        reviewNote: Object,
    }
}
</script>

<style scoped>
div{
    display: flex;
    justify-content: space-between;
    align-items: center;
    
}
.linkIcon{
    
    flex: 0 1 2%;
}
.checkBox{
    /*border:1px solid rgb(0, 171, 250);*/
    flex: 0 1 2%;
}
.title{
    /*border:1px solid rgb(0, 171, 250);*/
    flex: 0 1 15% ;
}
.type{
    /*border:1px solid rgb(0, 171, 250);*/
    flex: 0 1 6%;
}
.status{
    /*border:1px solid rgb(0, 171, 250);*/
    flex: 0 1 10%;
}
.priority{
    /*border:1px solid rgb(0, 171, 250);*/
    flex: 0 1 5%;
}
.date{
/*border:1px solid rgb(0, 171, 250);*/
   flex: 0 1 10%;
}

.img{
    /*border:1px solid rgb(0, 171, 250);*/
   flex: 0 1 3%;
}
.sectionRef{
    /*border:1px solid rgb(0, 171, 250);*/
    flex: 0 1 10%;
}
</style>