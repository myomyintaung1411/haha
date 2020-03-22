<template>
  <div>
    <div class="container">
      <AddTodo />
      <Todos />
    </div>
  </div>
</template>

<script>
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
export default {
  name: "app",
  components: {
    Todos,
    AddTodo
  }
};
</script>

<style>
body {
  background: #e8f7e8;
  line-height: 1.6;
}
.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}
</style>
