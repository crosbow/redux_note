import { useSelector } from "react-redux";
import "./App.css";
import { Counter } from "./components/Counter";
import styles from "./components/counter.module.css";
import { Posts } from "./components/Posts";

function App() {
  const counters = useSelector((state) => {
    return state.counters;
  });

  const totalCount = counters.reduce((acc, curr) => acc + curr.value, 0);

  return (
    <div>
      {counters.map((counter) => (
        <Counter key={counter.id} counter={counter} />
      ))}
      <div className={styles.totalCount}>
        Total Count: <span> {totalCount} </span>{" "}
      </div>
      <Posts />
    </div>
  );
}

export default App;
