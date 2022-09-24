import { Recipe } from '../../../../types'
import { useRecipesFormBootstrap } from './useRecipesFormBootstrap'

export const useRecipesForm = () => {
  const { methods } = useRecipesFormBootstrap()

  const onSubmit = (data: Recipe) => console.log(data)

  return { methods, onSubmit }
}
