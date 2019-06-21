<template>
  <div>
    <h1>Todo list</h1>
    <TodoForm @newTodo="addTodo">
      <h2 slot="title">Add a Todo</h2>
      <p slot="description">Your todos will be saved.</p>
    </TodoForm>
    <toDo :todos="todoList" @removeTodo="appDeleteToDo"/>
  </div>
</template>

<script>
import toDo from "@/components/toDo.vue";
import TodoForm from "@/components/TodoForm.vue";

export default {
  data() {
    return {
      todoList: ["Walk the dog", "Go for ride"]
    };
  },
  components: {
    toDo,
    TodoForm
  },
  methods: {
    appDeleteToDo(index) {
      // take out 1 item start from the index
      this.todoList.splice(index, 1);
    },
    addTodo(todo) {
      this.todoList.push(todo);
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  width: 50%;
  margin: 0 auto;
}
ul li {
  border-radius: 1px solid #acacac;
  padding: 10px 0;
  margin-bottom: 10px;
}
</style>