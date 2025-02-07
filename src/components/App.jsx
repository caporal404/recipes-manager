import { useState } from "react";
import '../styles/App.css';
import Recipe from './Recipe';

function App() {
  const [recipes, setRecipes] = useState([]); // Liste des recettes
  // Données de la recette en cours d'écriture
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [steps, setSteps] = useState([]);

  // Ajouter une nouvelle recette
  const addRecipe = () => {
    if (title.trim() == "" || description.trim() == "" || steps == []) return;
    setRecipes([
      ...recipes, 
      { 
        title, 
        description, 
        ingredients : ingredients.filter(str => str.trim() != ""), 
        steps : steps.filter(str => str.trim() != "") 
      }
    ]);
    
    // Réinitialiser le champ description
    setTitle(""); 
    setDescription("");
    setSteps([]);
    setIngredients([]);
    toggleRecipes();
  };

  // Supprimer une recette
  const deleteRecipe = (index) => {
    const updatedRecipes = [...recipes];
    updatedRecipes.splice(index, 1);
    setRecipes(updatedRecipes);
  };

  // Afficher ou cacher les recettes 
  const toggleRecipes = () => {
    document.querySelector('form').classList.toggle('hidden');
    document.querySelector('.recipes-container').classList.toggle('hidden');
  }

  return (
    <div className="App">
      <h2>Gestionnaire de Recettes</h2>
      
      <form className="hidden">
        <label>Titre: 
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Nom de la recette"
          />
        </label>

        <label>Description: 
          <textarea
            className="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description de la recette"
            rows={3}
          />
        </label>

        <label>Ingrédients: 
          <textarea
            className="ingredients"
            value={ingredients.join("\n")}
            onChange={e => setIngredients(e.target.value.split("\n"))}
            placeholder="Ingrédients de la recette"
            rows={5}
          />
        </label>

        <label>Étapes: 
          <textarea
            className="steps"
            value={steps.join("\n")}
            onChange={e => setSteps(e.target.value.split("\n"))}
            placeholder="Étapes de la recette"
            rows={5}
          />
        </label>

        <button onClick={e => { e.preventDefault(); addRecipe(); }}>Ajouter</button>
        <a href="" onClick={e => { e.preventDefault(); toggleRecipes(); }}>Recettes<span>&gt;</span></a>
      </form>

      <div className="recipes-container hidden">
        <div className="recipes">
          {
            recipes.map((recipe, index) => (
              <Recipe key={index} data={recipe} onDelete={() => deleteRecipe(index)} />
            ))
          }
        </div>

        <a href="" onClick={e => { e.preventDefault(); toggleRecipes(); }}><span>&lt;</span>Acceuil</a>
      </div>
    </div>
  );
}

export default App;
