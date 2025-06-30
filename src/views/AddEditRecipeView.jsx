import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useRecipeContext } from '../context/RecipeContext';
import RecipeForm from '../components/recipes/RecipeForm';

const AddEditRecipeView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getRecipeById, addRecipe, updateRecipe } = useRecipeContext();
  const [initialData, setInitialData] = useState({});
  const [loading, setLoading] = useState(!!id);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchRecipe = async () => {
        try {
          const data = await getRecipeById(id);
          setInitialData(data);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };
      fetchRecipe();
    }
  }, [id, getRecipeById]);

  const handleSubmit = async (formData) => {
    try {
      if (id) {
        await updateRecipe(id, formData);
      } else {
        await addRecipe(formData);
      }
      navigate(id ? `/recipe/${id}` : '/');
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) return <div>Loading recipe data...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="add-edit-recipe">
      <h1>{id ? 'Edit Recipe' : 'Add New Recipe'}</h1>
      <RecipeForm 
        initialData={initialData}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default AddEditRecipeView;