import { Recipe, RecipeForm } from '../types'
import { api } from './utils/api'

export class RecipesApi {
  private path = '/recipes'
  private queryKey = 'recipes'

  public async list() {
    return await api.get<Recipe[]>(`${this.path}`)
  }

  get listQueryKey() {
    return `${this.queryKey}-list`
  }

  public async getById(id?: string) {
    if (!id) {
      console.error('invalid id', id)

      return
    }

    return await api.get<Recipe>(`${this.path}/${id}`)
  }

  get getByIdQueryKey() {
    return `${this.queryKey}-getById`
  }

  public async create(data: RecipeForm) {
    return await api.post<RecipeForm>(`${this.path}`, data)
  }

  public async update(data: RecipeForm, id?: string) {
    if (!id) {
      console.error('invalid id', id)
      return
    }

    return await api.put<RecipeForm>(`${this.path}/${id}`, data)
  }

  public async delete(id?: string) {
    if (!id) {
      console.error('invalid id', id)

      return
    }

    return await api.delete(`${this.path}/${id}`)
  }
}
