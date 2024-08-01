import { StateCreator } from "zustand"
import { getCategories, getRecipies } from "../services/RecipeService"
import { Categories, Drinks, SearchFilter } from "../types"

export type RecipeSliceType = {
    categories: Categories,
    drinks: Drinks,
    fetchCategories: () => Promise<void>,
    searchRecipies: (searchFilter: SearchFilter) => Promise<void>,
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
    searchRecipies: async (filters) => {
        const drinks = await getRecipies(filters)
        set({
            drinks
        })
    }
})