import "./App.css";
import { useCounterStore } from "./stores/useCounterStore";

function App() {
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);
  const resetCount = useCounterStore((state) => state.resetCount);
  console.log(count)
  return (
    <>
      <h1>{count}</h1>
      <button onClick={increment} className="bg-blue-500">+</button>
      <button onClick={decrement}>-</button>
      <button onClick={resetCount}>Reset</button>
    </>
  );
}

export default App;
