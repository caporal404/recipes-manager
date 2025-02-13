import { useState } from "react";
import '../styles/App.css';
import RecipesInput from "./RecipesInput";
import RecipesContainer from "./RecipesContainer";


function App() {
  // Liste des recettes
  const [recipes, setRecipes] = useState([]); 

  return (
    <div className="App">
      <RecipesInput recipes={recipes} setRecipes={setRecipes} />
      <RecipesContainer recipes={recipes} setRecipes={setRecipes} />
    </div>
  );
}

export default App;
