import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'

import { RecipesApi } from '../../../../api/RecipesApi'
import { Recipe } from '../../../../types'

export const useRecipesListRequests = () => {
  const recipesApi = new RecipesApi()

  const [recipes, setRecipes] = useState<Recipe[]>([])
  const queryClient = useQueryClient()

  useQuery(
    [recipesApi.listQueryKey],
    async () => {
      return await recipesApi.list()
    },
    {
      refetchOnWindowFocus: false,
      onSuccess: (response) => {
        setRecipes(response.data)
      },
    },
  )

  const deleteRecipeMutation = useMutation({
    mutationFn: (id: string) => recipesApi.delete(id),
    onSuccess: () => queryClient.invalidateQueries([recipesApi.listQueryKey]),
  })

  const handleDelete = (id: string) => {
    deleteRecipeMutation.mutate(id)
  }

  return { recipes, handleDelete }
}
