import { getFilter, getTasks } from "../../redux/selectors";
import { Task } from "../Task/Task";
import css from "./TaskList.module.css";
import { useSelector } from "react-redux";
export const TaskList = () => {
  const tasks = useSelector(getTasks);
  const filter = useSelector(getFilter);

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });
  return (
    <ul className={css.list}>
      {" "}
      {filteredTasks.map((task) => (
        <li className={css.listItem} key={task.id}>
          {" "}
          <Task task={task} />{" "}
        </li>
      ))}{" "}
    </ul>
  );
};
