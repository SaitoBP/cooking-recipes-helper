import { Response } from 'express'

export const notFoundError = (res: Response, msg: string) => {
  return res.status(404).json({ error: msg })
}
