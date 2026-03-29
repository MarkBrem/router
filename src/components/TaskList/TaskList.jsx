import { Task } from "../Task/Task";
import css from "./TaskList.module.css";
import { filteredTasks } from "../../redux/selectors";
import { useSelector } from "react-redux";
export const TaskList = () => {
  const tasks = useSelector(filteredTasks);
  console.log(tasks);
  return (
    <ul className={css.list}>
      {" "}
      {tasks.map((task) => (
        <li className={css.listItem} key={task.id}>
          {" "}
          <Task task={task} />{" "}
        </li>
      ))}{" "}
    </ul>
  );
};
