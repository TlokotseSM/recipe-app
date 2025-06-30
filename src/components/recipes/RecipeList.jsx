import { useState } from 'react';
import RecipeCard from './RecipeCard';
import SortControls from '../common/SortControls';

const RecipeList = ({ recipes, loading, error, onSort }) => {
  const [sortBy, setSortBy] = useState('name');
  const [sortOrder, setSortOrder] = useState('asc');

  const handleSort = (field, order) => {
    setSortBy(field);
    setSortOrder(order);
    onSort(field, order);
  };

  if (loading) return <div>Loading recipes...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="recipe-list">
      <SortControls 
        sortBy={sortBy}
        sortOrder={sortOrder}
        onSort={handleSort}
      />
      <div className="recipes-grid">
        {recipes.map(recipe => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default RecipeList;