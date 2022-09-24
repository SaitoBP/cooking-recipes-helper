import { Text, TextInput, ActionIcon, Button, Card, Group } from '@mantine/core'
import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { Edit, Filter } from 'tabler-icons-react'

import { Recipe } from '../../../types'

import { useRecipesList } from './hooks/useRecipesList'

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
  const { navigateToForm } = useRecipesList()

  return (
    <>
      <Text size='xl'>Receitas</Text>

      <Group my='sm' noWrap>
        <TextInput
          placeholder='Pesquisar receita...'
          style={{ width: '100%' }}
        />

        <ActionIcon variant='subtle'>
          <Filter size={32} />
        </ActionIcon>
      </Group>

      <Button fullWidth onClick={() => navigateToForm('new')}>
        Adicionar Receita
      </Button>

      {recipes.map((recipe) => (
        <Card key={recipe.id} shadow='xs' p='lg' my='sm' withBorder>
          <Group position='apart' mb='sm'>
            <Text>{recipe.name}</Text>

            <ActionIcon onClick={() => navigateToForm('edit', recipe.id)}>
              <Edit />
            </ActionIcon>
          </Group>

          <Text size='sm' color='dimmed'>
            {recipe.description}
          </Text>

          <Button
            variant='light'
            fullWidth
            mt='md'
            onClick={() => navigateToForm('detail', recipe.id)}
          >
            Abrir Receita
          </Button>
        </Card>
      ))}

      <Outlet />
    </>
  )
}

export default RecipesList
