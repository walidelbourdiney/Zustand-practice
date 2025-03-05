import "./App.css";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import Form from "./components/Form";
import {lazy, Suspense} from 'react'

const LazyComponent = lazy(() => import('./components/Fetching'))
function App() {
  return (
    <>
    <Suspense fallback={<div>loading</div>}><LazyComponent/></Suspense>
    </>
  );
}

export default App;
