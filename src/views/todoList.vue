<template>
  <div>
    <h1>Todo list</h1>
    <TodoForm @newTodo="addTodo">
      <h2 slot="title">Add a Todo</h2>
      <p slot="description">Your todos will be saved.</p>
      <h3>ooo</h3>
    </TodoForm>
    <toDo :todos="todoList" @removeTodo="appDeleteToDo"/>
  </div>
</template>

<script>
import toDo from "@/components/toDo.vue";
import TodoForm from "@/components/TodoForm.vue";
import axios from "axios";

export default {
  data() {
    return {
      todoList: []
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
      axios.put(
        "https://guo00090-vue-and-axios.firebaseio.com/data.json",
        this.todoList
      );
    },
    addTodo(todo) {
      this.todoList.push(todo);
      axios
        // put method: where to go, what to send
        .put(
          "https://guo00090-vue-and-axios.firebaseio.com/data.json",
          this.todoList
        )
        // then method: reseive reponse and show status.success:200
        .then(response => {
          console.log(response);
          console.log("Your data is saved status:" + response.status);
        })
        // catch method: catch the error
        .catch(error => {
          console.log(error);
        });
    }
  },
  // hook
  created() {
    axios
      .get("https://guo00090-vue-and-axios.firebaseio.com/data.json")
      // function(response) {}
      .then(response => {
        console.log(response.data);
        if (response.data) {
          this.todoList = response.data;
        }
      })
      .catch(error => {
        console.log("There was an error in getting data:" + error.response);
      });
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