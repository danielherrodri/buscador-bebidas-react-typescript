import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { createRecipeSlice, RecipeSliceType } from './recipeSlice'
import { createFavoritesSlice, FavoritesSliceType } from './favoritesSlice'
import { NotificationSliceType, createNotificationSlice } from './notificationSlice'

export const useAppStore = create<RecipeSliceType & FavoritesSliceType & NotificationSliceType>()(
    devtools(
        (...a) => (
            {
                ...createRecipeSlice(...a),
                ...createFavoritesSlice(...a),
                ...createNotificationSlice(...a)
            }
        )
    )
)