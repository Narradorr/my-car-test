<template>
  <div class="calendar view">
    <div class="month-list">
      <div
        class="month-wrapper"
        v-for="(item, index) in cards"
        :key="item + index"
      >
        <div
          class="month-list__month month"
          :class="{ month_disabled: isPreviousMonth(item.monthNumber) }"
          @click="
            isPreviousMonth(item.monthNumber) ? null : routeToMonth(item.id)
          "
        >
          <div class="month__title">{{ item.name }}</div>
          <div class="month__todos">{{ item.todos.length }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    const cards = store.state.calendarCards;
    return { cards };
  },
  data() {
    return {
      currentMonthNumber: new Date().getMonth(),
    };
  },
  methods: {
    routeToMonth(id) {
      this.$router.push({ path: "/todo/" + id });
    },
    isPreviousMonth(monthNumber) {
      return monthNumber < this.currentMonthNumber;
    },
  },
};
</script>

<style scoped>
.calendar {
  width: 100%;
}

.month-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
}

.month-wrapper {
  padding: 10px;
}

.month {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: calc(25vw - 30px);
  background-color: rgb(36, 36, 36);
  height: 100px;
  border-radius: 5px;
  transition: background-color 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);
}

.month:hover {
  cursor: pointer;
  background-color: rgb(0, 0, 0);
}

.month_disabled {
  background-color: rgb(109 109 109);
}

.month_disabled:hover {
  background-color: rgb(109 109 109);
  cursor: default;
}

.month__title {
  text-transform: uppercase;
  color: rgb(155, 155, 155);
}

.month__todos {
  color: orange;
  margin-top: 5px;
}
</style>
