/* eslint-disable react/prop-types */

const Recipe = ({ data, onDelete }) => {
  return (
    <div className="recipe">
        <h3>{data.title}</h3>
        <p>{data.description}</p>
        <ul>
            {
                data.steps.map((step, index) => (
                    <li key={index}>{step}</li>
                ))
            }
        </ul>
        <button onClick={onDelete}>Supprimer</button>
    </div>
  )
}

export default Recipe;