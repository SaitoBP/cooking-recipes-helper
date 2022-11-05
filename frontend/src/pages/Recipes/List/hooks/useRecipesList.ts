import { useNavigate } from 'react-router-dom'

import { FormType } from '../../../../types/commons.types'
import { useRecipesListRequests } from './useRecipesListRequests'

export const useRecipesList = () => {
  const navigate = useNavigate()
  const { recipes, handleDelete } = useRecipesListRequests()

  const navigateToForm = (type: FormType, path?: string) => {
    if (type !== 'new' && !path) {
      throw new Error(
        'When using type "edit" or "detail" a path is required as second argument',
      )
    }

    navigate(`${type}/${path ? path : ''}`)
  }

  return { navigateToForm, recipes, handleDelete }
}
