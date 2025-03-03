import "./App.css";
import {useCounterStore} from './stores/useCounterStore'

function App() {
 const {count, increment, decrement, resetCount} = useCounterStore();
  return (
    <>
      <h1>{count}</h1>
      <button onClick={increment} className="bg-red-500">+</button>
      <button onClick={decrement}>-</button>
      <button onClick={resetCount}>Reset</button>
    </>
  );
}

export default App;
