export interface Recipe {
  id: string
  name: string
  description: string
}

export type RecipeForm = Omit<Recipe, 'id'>
