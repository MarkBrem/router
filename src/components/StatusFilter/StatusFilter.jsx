import { useDispatch } from "react-redux";
import { Button } from "../Button/Button";
import css from "./StatusFilter.module.css";
import { filterTasks } from "../../redux/actions";

export const StatusFilter = () => {
  const dispatch = useDispatch();
  const handleFilterChange = (filter) => {
    dispatch(filterTasks(filter));
  };
  return (
    <div className={css.wrapper}>
      <Button
        onClick={() => {
          handleFilterChange("all");
        }}
      >
        All
      </Button>
      <Button
        onClick={() => {
          handleFilterChange("active");
        }}
      >
        Active
      </Button>
      <Button
        onClick={() => {
          handleFilterChange("completed");
        }}
      >
        Completed
      </Button>
    </div>
  );
};
