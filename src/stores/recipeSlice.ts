import { StateCreator } from "zustand"
import { getCategories, getRecipeById, getRecipies } from "../services/RecipeService"
import { Categories, Drink, Drinks, SearchFilter } from "../types"

export type RecipeSliceType = {
    categories: Categories,
    drinks: Drinks,
    fetchCategories: () => Promise<void>,
    searchRecipes: (searchFilter: SearchFilter) => Promise<void>,
    selectRecipe: (id: Drink['idDrink']) => Promise<void>
}

export const createRecipeSlice: StateCreator<RecipeSliceType> = (set) => ({
    categories: {
        drinks: []
    },
    drinks: {
        drinks: []
    },
    fetchCategories: async () => {
        const categories = await getCategories()
        set({
            categories
        })
    },
    searchRecipes: async (filters) => {
        const drinks = await getRecipies(filters)
        set({
            drinks
        })
    },
    selectRecipe: async (id) => {
        const drink = await getRecipeById(id)
        console.log(drink)
    }
})