import { createContext, useContext } from 'react';
import * as recipeApi from '../api/recipeApi';

const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
  const getRecipeById = async (id) => {
    return await recipeApi.getRecipeById(id);
  };

  const searchRecipes = async (query) => {
    return await recipeApi.searchRecipes(query);
  };

  const getRecipesByTag = async (tag) => {
    return await recipeApi.getRecipesByTag(tag);
  };

  const addRecipe = async (recipeData) => {
    return await recipeApi.addRecipe(recipeData);
  };

  const updateRecipe = async (id, recipeData) => {
    return await recipeApi.updateRecipe(id, recipeData);
  };

  const deleteRecipe = async (id) => {
    return await recipeApi.deleteRecipe(id);
  };

  const getAllTags = async () => {
    return await recipeApi.getAllTags();
  };

  return (
    <RecipeContext.Provider
      value={{
        getRecipeById,
        searchRecipes,
        getRecipesByTag,
        addRecipe,
        updateRecipe,
        deleteRecipe,
        getAllTags
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};

export const useRecipeContext = () => useContext(RecipeContext);