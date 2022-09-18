import { Text, TextInput, ActionIcon, Button, Card } from '@mantine/core'
import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { Filter } from 'tabler-icons-react'

import { Recipe } from '../../../types'

const recipes: Recipe[] = [
  {
    id: '1',
    name: 'Recipe 1',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem animi veniam delectus suscipit nobis voluptas fuga eveniet, voluptatem porro ullam.',
  },
  {
    id: '2',
    name: 'Recipe 2',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit hic recusandae eos fuga vitae aliquid saepe, veniam neque unde necessitatibus?',
  },
]

const RecipesList: FC = () => {
  return (
    <>
      <Text>Receitas</Text>

      <TextInput placeholder='Pesquisar receita...' />

      <ActionIcon variant='subtle'>
        <Filter size={32} />
      </ActionIcon>

      <Button fullWidth>Adicionar Receita</Button>

      {recipes.map((recipe) => (
        <Card key={recipe.id} shadow='xs' p='lg' my='sm' withBorder>
          <Text>{recipe.name}</Text>

          <Text size='sm' color='dimmed'>
            {recipe.description}
          </Text>

          <Button variant='light' fullWidth mt='md'>
            Abrir Receita
          </Button>
        </Card>
      ))}

      <Outlet />
    </>
  )
}

export default RecipesList
