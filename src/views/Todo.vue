<template>
  <div class="todos view">
    <div class="todo-wrapper">
      <div class="todo-list" v-if="month.todos.length">
        <template v-for="todo in month.todos" :key="todo.id">
          <div class="todo-list__todo todo">
            <input class="todo__name input" type="text" v-model="todo.name" />
            <button class="todo__remove button" @click="removeTodo(todo.id)">
              -
            </button>
          </div>
        </template>
      </div>
      <div class="no-data" v-else>
          Нет данных
      </div>
      <button class="todo__create button" @click="addTodo()">
        Добавить событие
      </button>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { Todo } from "@/models/todo.js";

export default {
  setup() {
    const store = useStore();
    const route = useRoute();
    const month = store.getters.getMonthById(route.params.id);
    return { month };
  },
  methods: {
    addTodo() {
      if (this.month.todos.find((todo) => !todo.name || !todo.name.length)) {
        // название тудушки должно быть заполнено
        return;
      }
      this.month.todos.push(new Todo());
    },
    removeTodo(id) {
      this.month.todos = this.month.todos.filter((todo) => todo.id !== id);
    },
  },
};
</script>

<style scoped>
.todos {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.todo-wrapper {
  width: 50%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  padding: 1rem;
}

.todo-list {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.todo {
  display: flex;
}

.todo + .todo {
  margin-top: 10px;
}

.todo__name {
  border: 1px solid #c7c7c7;
  width: 100%;
  padding: 5px 15px;
}

.button:hover {
  cursor: pointer;
  transition: background-color 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);
}

.todo__remove {
  background-color: #ffd5d5;
  padding: 0 10px;
  border: none;
}

.todo__remove:hover {
  background-color: #ffc1c1;
}

.todo__create {
  margin-top: 14px;
  background-color: #2fca03;
  border: none;
  padding: 7px 15px;
  color: #fff;
}

.todo__create:hover {
  background-color: #29b800;
}
</style>