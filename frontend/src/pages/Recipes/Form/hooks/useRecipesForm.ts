import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useNavigate, useParams } from 'react-router-dom'

import { RecipesApi } from '../../../../api/RecipesApi'
import { RecipeForm } from '../../../../types'
import { FormType } from '../../../../types/commons.types'

import { useRecipesFormBootstrap } from './useRecipesFormBootstrap'

export const useRecipesForm = (type: FormType) => {
  const recipesApi = new RecipesApi()

  const { methods } = useRecipesFormBootstrap()
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const { id } = useParams()

  const onMutationSuccess = () => {
    queryClient.invalidateQueries({
      queryKey: [recipesApi.listQueryKey],
    })
    onClose()
  }

  useQuery({
    queryKey: [recipesApi.getByIdQueryKey],
    queryFn: () => recipesApi.getById(id),
    enabled: type !== 'new',
    onSuccess: (data) => methods.reset(data?.data),
  })

  const createRecipeMutation = useMutation({
    mutationFn: (data: RecipeForm) => recipesApi.create(data),
    onSuccess: onMutationSuccess,
  })

  const updateRecipeMutation = useMutation({
    mutationFn: (data: RecipeForm) => recipesApi.update(data, id),
    onSuccess: onMutationSuccess,
  })

  const onSubmit = (data: RecipeForm) => {
    if (type === 'new') createRecipeMutation.mutate(data)
    if (type === 'edit') updateRecipeMutation.mutate(data)
  }

  const onClose = () => {
    navigate('/recipes')
  }

  return { methods, onClose, onSubmit }
}
