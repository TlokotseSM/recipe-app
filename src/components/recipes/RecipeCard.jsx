import { Link } from 'react-router-dom';
import '../../index.css'

const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipe-card">
      {/* <img src={recipe.image} alt={recipe.name} /> */}
      <img src={recipe.image} alt={recipe.name} style={{ width: '200px', height: '200px', objectFit: 'cover', borderRadius: '8px' }} 
/>
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