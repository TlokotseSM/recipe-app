import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useRecipeContext } from '../context/RecipeContext';

const RecipeDetailView = () => {
  const { id } = useParams();
  const { getRecipeById } = useRecipeContext();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        setLoading(true);
        const data = await getRecipeById(id);
        setRecipe(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [id, getRecipeById]);

  if (loading) return <div>Loading recipe...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!recipe) return <div>Recipe not found</div>;

  return (
    <div className="recipe-detail">
      <h1>{recipe.name}</h1>
      <img src={recipe.image} alt={recipe.name} />
      <div className="recipe-meta">
        <p>Cuisine: {recipe.cuisine}</p>
        <p>Difficulty: {recipe.difficulty}</p>
        <p>Prep Time: {recipe.prepTimeMinutes} mins</p>
        <p>Cook Time: {recipe.cookTimeMinutes} mins</p>
        <p>Servings: {recipe.servings}</p>
        <p>Calories per serving: {recipe.caloriesPerServing}</p>
        <p>Rating: {recipe.rating} ({recipe.reviewCount} reviews)</p>
      </div>
      
      <div className="ingredients">
        <h3>Ingredients</h3>
        <ul>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
      
      <div className="instructions">
        <h3>Instructions</h3>
        <ol>
          {recipe.instructions.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
        </ol>
      </div>
      
      <div className="tags">
        {recipe.tags.map((tag, index) => (
          <span key={index} className="tag">{tag}</span>
        ))}
      </div>
    </div>
  );
};

export default RecipeDetailView;