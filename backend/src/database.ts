import { DataSource } from 'typeorm'

import { entities } from './entities'

const db = new DataSource({
  type: 'postgres',
  name: 'cooking-recipe-helper-db',
  url: process.env.DATABASE_URL,
  synchronize: true,
  entities: entities,
})

export { db }
