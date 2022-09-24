import { useNavigate } from 'react-router-dom'

import { FormType } from '../../../../types/commons.types'

type NavigateToForm = (type: FormType, path?: string) => void

export interface UseRecipesListReturn {
  navigateToForm: NavigateToForm
}

export const useRecipesList = (): UseRecipesListReturn => {
  const navigate = useNavigate()

  const navigateToForm: NavigateToForm = (type, path) => {
    if (type !== 'new' && !path) {
      throw new Error(
        'When using type "edit" or "detail" a path is required as second argument',
      )
    }

    navigate(`${type}/${path ? path : ''}`)
  }

  return { navigateToForm }
}
