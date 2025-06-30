import { useState, useEffect } from 'react';
import * as recipeApi from '../api/recipeApi';

export const useRecipes = (initialLimit = 10) => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [limit, setLimit] = useState(initialLimit);
  const [skip, setSkip] = useState(0);
  const [total, setTotal] = useState(0);

  const fetchRecipes = async () => {
    try {
      setLoading(true);
      const data = await recipeApi.getAllRecipes(limit, skip);
      setRecipes(data.recipes);
      setTotal(data.total);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, [limit, skip]);

  return {
    recipes,
    loading,
    error,
    limit,
    setLimit,
    skip,
    setSkip,
    total,
    refresh: fetchRecipes
  };
};