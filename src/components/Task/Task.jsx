import { MdClose } from "react-icons/md";
import css from "./Task.module.css";
import { checkTasks, deleteTasks } from "../../redux/actions";
import { useDispatch } from "react-redux";

export const Task = ({ task }) => {
  const dispatch = useDispatch();
  return (
    <div className={css.wrapper}>
      <input
        onChange={() => dispatch(checkTasks(task.id))}
        type="checkbox"
        className={css.checkbox}
        checked={task.completed}
      />
      <p className={css.text}>{task.text}</p>
      <button
        onClick={() => {
          dispatch(deleteTasks(task.id));
        }}
        className={css.btn}
      >
        <MdClose size={24} />
      </button>
    </div>
  );
};
