import { useForm } from 'react-hook-form'

import { Recipe } from '../../../../types'

export const useRecipesFormBootstrap = () => {
  const methods = useForm<Recipe>({
    defaultValues: {
      description: '',
      id: '',
      name: '',
    },
  })

  return { methods }
}
