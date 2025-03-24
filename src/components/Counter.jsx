import { useDispatch } from "react-redux";
import { Button } from "./Button";
import styles from "./counter.module.css";
import { decrement, increment } from "../features/counters/counterSlice";

const Counter = ({ counter }) => {
  const dispatch = useDispatch();

  const handleIncrement = (id) => {
    dispatch(increment(id));
  };

  const handleDecrement = (id) => {
    dispatch(decrement(id));
  };

  return (
    <div className={styles.counter}>
      <p> {counter.value} </p>
      <div className="">
        <Button type="danger" onClick={() => handleIncrement(counter.id)}>
          Increment
        </Button>
        <Button type="ghost" onClick={() => handleDecrement(counter.id)}>
          Decrement
        </Button>
      </div>
    </div>
  );
};

export { Counter };
