import { Text, TextInput, ActionIcon, Button, Card, Group } from '@mantine/core'
import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { Edit, Filter, Trash } from 'tabler-icons-react'

import { useRecipesList } from './hooks/useRecipesList'

const RecipesList: FC = () => {
  const { navigateToForm, recipes, handleDelete } = useRecipesList()

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

            <Group>
              <ActionIcon onClick={() => navigateToForm('edit', recipe.id)}>
                <Edit />
              </ActionIcon>

              <ActionIcon onClick={() => handleDelete(recipe.id)}>
                <Trash />
              </ActionIcon>
            </Group>
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
