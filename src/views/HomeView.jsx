import { useRecipes } from '../hooks/useRecipes';
import RecipeList from '../components/recipes/RecipeList';

const HomeView = () => {
  const {
    recipes,
    loading,
    error,
    limit,
    setLimit,
    skip,
    setSkip,
    total,
    refresh
  } = useRecipes();

  const handleSort = async (sortBy, order) => {
    // You would implement sorting logic here
    refresh();
  };

  return (
    <div className="home-view">
      <h1>All Recipes</h1>
      <RecipeList 
        recipes={recipes}
        loading={loading}
        error={error}
        onSort={handleSort}
      />
      <div className="pagination">
        <button 
          disabled={skip === 0}
          onClick={() => setSkip(Math.max(0, skip - limit))}
        >
          Previous
        </button>
        <button 
          disabled={skip + limit >= total}
          onClick={() => setSkip(skip + limit)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default HomeView;