import { z } from "zod";
import { CategoriesAPIResponseSchema, DrinkAPIResponse, DrinksAPIResponse, SearchFilterScheme } from "../utils/recipe-schema";

export type Categories = z.infer<typeof CategoriesAPIResponseSchema>
export type SearchFilter = z.infer<typeof SearchFilterScheme>

export type Drinks = z.infer<typeof DrinksAPIResponse>
export type Drink = z.infer<typeof DrinkAPIResponse>