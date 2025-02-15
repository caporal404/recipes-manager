/* eslint-disable react/prop-types */
import { useState } from 'react';
import '../styles/RecipesInput.css';

const RecipesInputSection = ({ recipes, setRecipes }) => {
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

        // On affiche les recettes
        showRecipes();
    };

    // Afficher les recettes
    const showRecipes = () => {
        document.querySelector('#recipes-input').style.zIndex = 0;
        document.querySelector('#recipes-container').style.zIndex = 1;
    };

    return (
        <section id="recipes-input">
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
            </form>
            <a onClick={e => { e.preventDefault(); showRecipes() }}>Recettes<span>&gt;</span></a>
        </section>
    )
}

export default RecipesInputSection;