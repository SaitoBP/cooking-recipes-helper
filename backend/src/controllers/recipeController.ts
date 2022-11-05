import { Router } from 'express'

import { db } from '../database'
import { recipeNotFoundError } from '../errors/recipeNotFound'
import { Recipe } from '../models/Recipe'

export const recipeController = Router()

const recipeRepository = db.getRepository(Recipe)

/** Return recipe list */
recipeController.get('/', async (_req, res) => {
  const recipes = await recipeRepository.find()

  return res.status(200).json(recipes)
})

/** Create a new recipe */
recipeController.post('/', async (req, res) => {
  const { name, description } = req.body
  const recipe = new Recipe(name, description)

  await recipeRepository.save(recipe)

  return res.status(201).json(recipe)
})

/** Return a existing recipe by it's id */
recipeController.get('/:id', async (req, res) => {
  const { id } = req.params
  const recipe = await recipeRepository.findOne({ where: { id: id } })

  return res.status(200).json(recipe)
})

/** Update a existing recipe by it's id */
recipeController.put('/:id', async (req, res) => {
  const { id } = req.params
  const { name, description } = req.body

  const recipe = await recipeRepository.findOne({ where: { id: id } })

  if (!recipe) return recipeNotFoundError(res, id)

  recipe.update(name, description)

  await recipeRepository.save(recipe)

  return res.status(200).json(recipe)
})

/** Remove a existing recipe by it's id */
recipeController.delete('/:id', async (req, res) => {
  const { id } = req.params

  const recipe = await recipeRepository.findOne({ where: { id: id } })

  if (!recipe) return recipeNotFoundError(res, id)

  await recipeRepository.remove(recipe)

  return res.status(204).json({})
})
