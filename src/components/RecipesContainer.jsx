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
    const showRecipes = () => {
        document.querySelector('#recipes-container').style.opacity = 0;
        document.querySelector('#recipes-input').style.opacity = 1;
        console.log(
            document.querySelector('#recipes-container').style.opacity,
            document.querySelector('#recipes-input').style.opacity
        );
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
            <a onClick={(e) => { e.preventDefault(); showRecipes(); }}><span>&lt;</span>Acceuil</a>
        </section>
    )
}

export default RecipesContainerSection;