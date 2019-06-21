<template>
  <div>
    <slot name="title"></slot>
    <!-- event modifier .prevent-->
    <form @submit.prevent="addTodo">
      <input type="text" v-model="newTodo">
    </form>
    <slot name="description"></slot>
    <br>
    <slot>Default slot, placeholder content</slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodo: ""
    };
  },
  methods: {
    addTodo() {
      if (this.newTodo.length) {
        // when the form submit, call this method. check newtodo exist, run{...} send info to parent
        this.$emit("newTodo", this.newTodo);
        this.newTodo = "";
      }
    }
  }
};
</script>

<style>
input {
  min-width: 200px;
  padding: 10px 20px;
  font-size: 1.5rem;
}
</style>