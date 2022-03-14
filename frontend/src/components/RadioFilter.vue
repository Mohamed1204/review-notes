<template>
  <div>
    <span>{{ text }}</span>
    <div class="flex">
      <span
        @click="onClick(-1, 'All')"
        :style="
          filterIndex === -1
            ? { 'background-color': 'white' }
            : { 'background-color': 'blue' }
        "
        id="span"
        >ALL</span
      >
      <span
        id="span"
        v-for="(item, index) in items"
        v-bind:key="item"
        :style="
          filterIndex === index
            ? { 'background-color': 'white' }
            : { 'background-color': 'blue' }
        "
        @click="onClick(index, item)"
      >
        {{ item }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "RadioFilter",
  data() {
    return {
      filterIndex: -1
    };
  },
  props: {
    items: Array,
    text: String,
    activeIndex: Number
  },
  watch: {
      activeIndex:{
          handler(newVal, oldVal){
          console.log('radioFilter:!')
          console.log(newVal)
          if(newVal!==undefined){
              this.filterIndex = newVal
          }
          
      }
      }
      
  },
  methods: {
    onClick(index, item) {
      //this.activeIndex = index;
      console.log(item);
      this.$emit("active-changed", item, index);
    }
  }
};
</script>
<style scoped>
#span {
  background-color: blue;
  text-decoration: underline;
  padding: 8px;
  cursor: pointer;
  border-radius: 5px;
  border: blue solid 1px
}

#spanActive {
  background-color: white;
  text-decoration: underline;
  padding: 8px;
  cursor: pointer;
  border-radius: 5px;
}

.flex {
  display: flex;
}
</style>
