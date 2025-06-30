const API_BASE_URL = 'https://dummyjson.com/recipes';

export const getAllRecipes = async (limit = 30, skip = 0, select = '') => {
  const url = `${API_BASE_URL}?limit=${limit}&skip=${skip}${select ? `&select=${select}` : ''}`;
  const response = await fetch(url);
  return response.json();
};

export const getRecipeById = async (id) => {
  const response = await fetch(`${API_BASE_URL}/${id}`);
  return response.json();
};

export const searchRecipes = async (query) => {
  const response = await fetch(`${API_BASE_URL}/search?q=${query}`);
  return response.json();
};

export const getRecipesByTag = async (tag) => {
  const response = await fetch(`${API_BASE_URL}/tag/${tag}`);
  return response.json();
};

export const getRecipesByMealType = async (mealType) => {
  const response = await fetch(`${API_BASE_URL}/meal-type/${mealType}`);
  return response.json();
};

export const getAllTags = async () => {
  const response = await fetch(`${API_BASE_URL}/tags`);
  return response.json();
};

export const addRecipe = async (recipeData) => {
  const response = await fetch(`${API_BASE_URL}/add`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(recipeData)
  });
  return response.json();
};

export const updateRecipe = async (id, recipeData) => {
  const response = await fetch(`${API_BASE_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(recipeData)
  });
  return response.json();
};

export const deleteRecipe = async (id) => {
  const response = await fetch(`${API_BASE_URL}/${id}`, {
    method: 'DELETE'
  });
  return response.json();
};

export const sortRecipes = async (sortBy, order = 'asc') => {
  const response = await fetch(`${API_BASE_URL}?sortBy=${sortBy}&order=${order}`);
  return response.json();
};