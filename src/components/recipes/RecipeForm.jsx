import { useState, useEffect } from 'react';

const RecipeForm = ({ initialData = {}, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    ingredients: [''],
    instructions: [''],
    prepTimeMinutes: 0,
    cookTimeMinutes: 0,
    servings: 1,
    difficulty: 'Easy',
    cuisine: '',
    caloriesPerServing: 0,
    tags: [],
    mealType: ['Dinner']
  });

  useEffect(() => {
    if (initialData && Object.keys(initialData).length > 0) {
      setFormData({
        name: initialData.name || '',
        ingredients: initialData.ingredients || [''],
        instructions: initialData.instructions || [''],
        prepTimeMinutes: initialData.prepTimeMinutes || 0,
        cookTimeMinutes: initialData.cookTimeMinutes || 0,
        servings: initialData.servings || 1,
        difficulty: initialData.difficulty || 'Easy',
        cuisine: initialData.cuisine || '',
        caloriesPerServing: initialData.caloriesPerServing || 0,
        tags: initialData.tags || [],
        mealType: initialData.mealType || ['Dinner']
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleArrayChange = (field, index, value) => {
    const newArray = [...formData[field]];
    newArray[index] = value;
    setFormData(prev => ({ ...prev, [field]: newArray }));
  };

  const addArrayItem = (field) => {
    setFormData(prev => ({ ...prev, [field]: [...prev[field], ''] }));
  };

  const removeArrayItem = (field, index) => {
    const newArray = formData[field].filter((_, i) => i !== index);
    setFormData(prev => ({ ...prev, [field]: newArray }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="recipe-form">
      <div className="form-group">
        <label>Recipe Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Ingredients</label>
        {formData.ingredients.map((ingredient, index) => (
          <div key={index} className="array-item">
            <input
              type="text"
              value={ingredient}
              onChange={(e) => handleArrayChange('ingredients', index, e.target.value)}
              required
            />
            <button type="button" onClick={() => removeArrayItem('ingredients', index)}>
              Remove
            </button>
          </div>
        ))}
        <button type="button" onClick={() => addArrayItem('ingredients')}>
          Add Ingredient
        </button>
      </div>

      <div className="form-group">
        <label>Instructions</label>
        {formData.instructions.map((instruction, index) => (
          <div key={index} className="array-item">
            <textarea
              value={instruction}
              onChange={(e) => handleArrayChange('instructions', index, e.target.value)}
              required
            />
            <button type="button" onClick={() => removeArrayItem('instructions', index)}>
              Remove
            </button>
          </div>
        ))}
        <button type="button" onClick={() => addArrayItem('instructions')}>
          Add Instruction Step
        </button>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Prep Time (minutes)</label>
          <input
            type="number"
            name="prepTimeMinutes"
            value={formData.prepTimeMinutes}
            onChange={handleChange}
            min="0"
          />
        </div>

        <div className="form-group">
          <label>Cook Time (minutes)</label>
          <input
            type="number"
            name="cookTimeMinutes"
            value={formData.cookTimeMinutes}
            onChange={handleChange}
            min="0"
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Servings</label>
          <input
            type="number"
            name="servings"
            value={formData.servings}
            onChange={handleChange}
            min="1"
          />
        </div>

        <div className="form-group">
          <label>Calories per Serving</label>
          <input
            type="number"
            name="caloriesPerServing"
            value={formData.caloriesPerServing}
            onChange={handleChange}
            min="0"
          />
        </div>
      </div>

      <div className="form-group">
        <label>Difficulty</label>
        <select
          name="difficulty"
          value={formData.difficulty}
          onChange={handleChange}
        >
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
      </div>

      <div className="form-group">
        <label>Cuisine</label>
        <input
          type="text"
          name="cuisine"
          value={formData.cuisine}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Tags (comma separated)</label>
        <input
          type="text"
          name="tags"
          value={formData.tags.join(', ')}
          onChange={(e) => {
            const tags = e.target.value.split(',').map(tag => tag.trim());
            setFormData(prev => ({ ...prev, tags }));
          }}
        />
      </div>

      <div className="form-group">
        <label>Meal Type</label>
        <select
          multiple
          name="mealType"
          value={formData.mealType}
          onChange={(e) => {
            const options = Array.from(e.target.selectedOptions, option => option.value);
            setFormData(prev => ({ ...prev, mealType: options }));
          }}
        >
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Dinner">Dinner</option>
          <option value="Snack">Snack</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>

      <button type="submit">Save Recipe</button>
    </form>
  );
};

export default RecipeForm;