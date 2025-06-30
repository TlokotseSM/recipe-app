import { Link } from 'react-router-dom';

const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <img src={recipe.image} alt={recipe.name} />
      <div className="recipe-info">
        <h3>{recipe.name}</h3>
        <p>Cuisine: {recipe.cuisine}</p>
        <p>Difficulty: {recipe.difficulty}</p>
        <p>Rating: {recipe.rating} ({recipe.reviewCount} reviews)</p>
        <Link to={`/recipe/${recipe.id}`}>View Details</Link>
      </div>
    </div>
  );
};

export default RecipeCard;