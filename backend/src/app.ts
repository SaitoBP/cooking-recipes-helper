import express from 'express'
import cors from 'cors'

import { recipeController } from './controllers/recipeController'

export const app = express()

/** Middlewares */
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

/** Routes */
app.use('/api/recipes', recipeController)
