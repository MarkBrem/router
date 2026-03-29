import { useDispatch } from "react-redux";
import { AppBar } from "./components/AppBar/AppBar";
import { TaskForm } from "./components/TaskForm/TaskForm";
import { TaskList } from "./components/TaskList/TaskList";
import { getAllTasks } from "./redux/operations";
import { useEffect } from "react";

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTasks());
  }, [dispatch]);

  return (
    <>
      <AppBar />
      <TaskForm />
      <TaskList />
    </>
  );
};
