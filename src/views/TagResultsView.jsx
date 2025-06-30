import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useRecipeContext } from '../context/RecipeContext';
import RecipeList from '../components/recipes/RecipeList';

const TagResultsView = () => {
  const { tag } = useParams();
  const { getRecipesByTag } = useRecipeContext();
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        setLoading(true);
        const data = await getRecipesByTag(tag);
        setRecipes(data.recipes || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, [tag, getRecipesByTag]);

  return (
    <div className="tag-results">
      <h1>Recipes tagged with "{tag}"</h1>
      <RecipeList 
        recipes={recipes}
        loading={loading}
        error={error}
      />
    </div>
  );
};

export default TagResultsView;