import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useRecipeContext } from '../context/RecipeContext';
import RecipeList from '../components/recipes/RecipeList';

const SearchResultsView = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get('q');
  const { searchRecipes } = useRecipeContext();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        setLoading(true);
        const data = await searchRecipes(query);
        setResults(data.recipes || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (query) {
      fetchResults();
    }
  }, [query, searchRecipes]);

  return (
    <div className="search-results">
      <h1>Search Results for "{query}"</h1>
      <RecipeList 
        recipes={results}
        loading={loading}
        error={error}
      />
    </div>
  );
};

export default SearchResultsView;