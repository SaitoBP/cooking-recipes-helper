import { Response } from 'express'

import { notFoundError } from './notFound'

export const recipeNotFoundError = (res: Response, id: string) => {
  return notFoundError(res, `Recipe with id: ${id} was not found`)
}
