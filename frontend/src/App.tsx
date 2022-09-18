import { ActionIcon, Button, Card, Text, TextInput } from '@mantine/core'
import { Filter, Outlet } from 'tabler-icons-react'

interface Recipe {
  id: string
  name: string
}

const recipes: Recipe[] = [
  {
    id: '1',
    name: 'Recipe 1',
  },
  {
    id: '2',
    name: 'Recipe 2',
  },
]

const App = () => {
  return (
    <>
      <Text>Receitas</Text>

      <TextInput placeholder='Pesquisar receita...' />

      <ActionIcon variant='subtle'>
        <Filter size={32} />
      </ActionIcon>

      <Button>Adicionar Receita</Button>

      {recipes.map((recipe) => (
        <Card key={recipe.id} shadow='xs' p='lg' withBorder>
          <Text>{recipe.name}</Text>
        </Card>
      ))}

      <Outlet />
    </>
  )
}

export default App
