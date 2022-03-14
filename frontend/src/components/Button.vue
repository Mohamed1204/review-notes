<template>
  <button @click="onClick()" :style="{ background: color }" >
    {{text }} | <i class="fa fa-caret-down"></i>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    text : String,
    color: String,
  },
  methods: {
    onClick() {
      this.$emit('btn-click')
    },
  },
}
</script>



<style scoped>
button{
    padding: 2px 5px;
    color: white;
    border-radius: 5px;
    border: 2px solid #24a0ed;
    background-color: #24a0ed;
    cursor: pointer
}
</style>