export const addTasks = (newTask) => {
  return {
    type: "tasks/addTasks",
    payload: newTask,
  };
};

export const deleteTasks = (taskId) => {
  return {
    type: "tasks/deleteTasks",
    payload: taskId,
  };
};

export const checkTasks = (tasksId) => {
  return {
    type: "tasks/checkTasks",
    payload: tasksId,
  };
};

export const filterTasks = (statusFilter) => {
  return {
    type: "filters/chengedFilter",
    payload: statusFilter,
  };
};
