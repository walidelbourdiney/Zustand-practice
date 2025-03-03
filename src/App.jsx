import "./App.css";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
function App() {
 const {count, increment, decrement, resetCount} = useCounterStore();
  return (
    <>
      <RecipeList />
      <AddRecipeForm />
    </>
  );
}

export default App;
