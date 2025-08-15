import { useDispatch } from "react-redux";
import { addTasks } from "./redux/actions";

export const App = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addTasks({ id: 5, text: "jsdkfskdfla", completed: false }));
  };

  return (
    <>
      <h1>Redux</h1>
      <button onClick={handleClick}>Add task</button>
    </>
  );
};
