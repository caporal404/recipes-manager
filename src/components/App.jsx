import { useState } from "react";
import '../styles/App.css';
import Recipe from './Recipe';

function App() {
  const [recipes, setRecipes] = useState([]); // Liste des recettes
  const [title, setTitle] = useState(""); // Titre de la recette en cours d'écriture
  const [description, setDescription] = useState(""); // Description de la recette en cours d'écriture
  const [steps, setSteps] = useState([]); // Étapes de la recette en cours d'écriture

  // Ajouter une nouvelle recette
  const addRecipe = () => {
    if (title.trim() == "" || description.trim() == "" || steps == []) return;
    setRecipes([...recipes, { title, description, steps }]);
    setTitle(""); // Réinitialiser le champ titre
    setDescription(""); // Réinitialiser le champ description
    setSteps([]);
  };

  // Supprimer une recette
  const deleteRecipe = (index) => {
    const updatedRecipes = [...recipes];
    updatedRecipes.splice(index, 1);
    setRecipes(updatedRecipes);
  };

  return (
    <div className="App">
      <h2>Gestionnaire de Recettes</h2>
      <form>
        <label>Titre: 
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Nom de la recette"
          />
        </label>
        <br />
        <label>Description: 
          <textarea
            className="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description de la recette"
            rows={3}
          />
        </label>
        <br />
        <label>Étapes: 
          <textarea
            className="steps"
            value={steps.join("\n")}
            onChange={(e) => setSteps(e.target.value.split("\n"))}
            placeholder="Étapes de la recette"
            rows={5}
          />
        </label>
        <br />
        <button onClick={e => { e.preventDefault(); addRecipe(); } }>Ajouter</button>
      </form>
      <div className="recipes-container">
        {
          recipes.map((recipe, index) => (
            <Recipe key={index} data={recipe} onDelete={() => deleteRecipe(index)} />
          ))
        }
      </div>
    </div>
  );
}

export default App;
