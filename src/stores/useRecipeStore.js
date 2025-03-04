import { create } from "zustand";

export const useRecipeStore = create((set) => ({
    recipes: [],
    addRecipe: (newRecipe) => set((state) => ({recipes: [...state.recipes, newRecipe]})),
    setRecipe: (recipes) => set({recipes}),
    deleteRecipe: (id) => set(state => ({recipes: state.recipes.filter(recipe.id !== id)})),
    updateRecipe: (updatedRecipe) => set((state) => ({
        recipes: state.recipes.map(recipe => 
            recipe.id === updatedRecipe.id ? updatedRecipe : recipe
        )
    })),

}))