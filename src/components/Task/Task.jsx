import { MdClose } from "react-icons/md";
import css from "./Task.module.css";
import { switchTask, deleteTask } from "../../redux/operations";
import { useDispatch } from "react-redux";

export const Task = ({ task }) => {
  const dispatch = useDispatch();
  return (
    <div className={css.wrapper}>
      <input
        onChange={() => dispatch(switchTask(task))}
        type="checkbox"
        className={css.checkbox}
        checked={task.completed}
      />
      <p className={css.text}>{task.text}</p>
      <button
        onClick={() => {
          dispatch(deleteTask(task));
        }}
        className={css.btn}
      >
        <MdClose size={24} />
      </button>
    </div>
  );
};
