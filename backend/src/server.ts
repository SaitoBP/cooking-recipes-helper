import 'reflect-metadata'

import { config } from 'dotenv'
config()

import { app } from './app'
import { db } from './database'

const port = 5000
db.initialize()
  .then(async () => {
    console.log('Connected to db')

    try {
      app.listen(port, () => console.log(`Server running on port ${port}`))
    } catch (error: any) {
      console.error(`Error running server: ${error}`)
    }
  })
  .catch((error: any) => {
    console.error(`Error initializing database: ${error}`)
  })
