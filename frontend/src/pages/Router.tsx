import { FC } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Article } from 'tabler-icons-react'

import { NavbarLinkTemplate, PageLayout } from '../components'

import { RecipesRouter } from './Recipes'

const links: NavbarLinkTemplate[] = [
  {
    color: 'blue',
    icon: <Article />,
    label: 'Receitas',
  },
]

const Router: FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='recipes' />} />

      <Route element={<PageLayout links={links} />}>
        <Route path='recipes/*' element={<RecipesRouter />} />
      </Route>
    </Routes>
  )
}

export default Router
