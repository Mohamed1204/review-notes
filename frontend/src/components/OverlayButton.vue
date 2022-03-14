<template>
  <div>
    <Button @click="toggle" :text="buttonText"></Button>
    <div @click="toggle"  v-if="show" id="overlay">
      <div id="text">{{overLayText}}</div>
    </div>
  </div>
</template>

<script>   
import Button from './Button.vue'

export default {
    //<i class="fa fa-caret-down"></i>
  name: "OverlayButton",
  props: {
      buttonText: String,
      overLayText: String,
  },
  components:{
      Button,
      },
  data() {
    return {
      show: false,
      text: 'New',
      
    }
  },
  methods: {
      toggle(){
          this.show = !this.show
      }
  }
};
</script>

<style>
#overlay {
  position: fixed;
  display: block;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
}
#text {
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 50px;
  color: white;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}
button{
    padding: 2px;
    color: white;
    border-radius: 5px;
    border: 2px solid #24a0ed;
    background-color: #24a0ed
}
</style>
