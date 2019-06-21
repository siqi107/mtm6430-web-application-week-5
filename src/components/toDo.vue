<template>
  <ul>
    <li v-for="(todo, index) in todos" :key="index" @click="todoDone(index)">{{ index }}-{{ todo }}</li>
  </ul>
</template>

<script>
export default {
  props: {
    todos: {
      type: Array,
      required: true
    }
  },
  methods: {
    todoDone(index) {
      console.log(index);
      // $emit sends an event from the child component to the parent component
      this.$emit("removeTodo", index);
    }
  }
};
</script>