/* eslint-disable react/prop-types */
import Recipe from './Recipe';
import '../styles/RecipesContainer.css';

const RecipesContainerSection = ({ recipes, setRecipes }) => {
    // Supprimer une recette
    const deleteRecipe = (index) => {
        const updatedRecipes = [...recipes];
        updatedRecipes.splice(index, 1);
        setRecipes(updatedRecipes);
    };

    // Afficher le formulaire
    const hideRecipes = () => {
        document.querySelector('#recipes-container').style.zIndex = 0;
        document.querySelector('#recipes-input').style.zIndex = 1;
    }

    return (
        <section id="recipes-container">
            <div className="recipes">
            {
                recipes.map((recipe, index) => (
                    <Recipe key={index} data={recipe} onDelete={() => deleteRecipe(index)} />
                ))
            }
            </div>
            <a onClick={(e) => { e.preventDefault(); hideRecipes(); }}><span>&lt;</span>Acceuil</a>
        </section>
    )
}

export default RecipesContainerSection;