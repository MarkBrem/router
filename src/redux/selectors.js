import { createSelector } from "@reduxjs/toolkit";

export const selectTasks = (state) => state.tasks.tasks;
export const selectFilter = (state) => state.filters.status;

export const filteredTasks = createSelector(
  [selectTasks, selectFilter],
  (tasks, filter) => {
    console.log("Selector recalculated with tasks:");
    return tasks.filter((task) => {
      console.log("виклик фільтрації");
      if (filter === "active") return !task.completed;
      if (filter === "completed") return task.completed;
      return true;
    });
  }
);

// tasks.filter((task) => {
// console.log("виклик фільтрації");
// if (filter === "active") return !task.completed;
// if (filter === "completed") return task.completed;
// return true;
// });

// const selectABC = createSelector([selectA, selectB, selectC], (a, b, c) => {
//   // do something with a, b, and c, and return a result
//   return a + b + c
// })
