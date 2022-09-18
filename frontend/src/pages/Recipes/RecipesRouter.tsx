import { FC, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

import { SuspenseLoading } from '../../components'

const RecipesList = lazy(() => import('./List/RecipesList'))

const RecipesRouter: FC = () => {
  return (
    <Routes>
      <Route
        path=''
        element={
          <SuspenseLoading>
            <RecipesList />
          </SuspenseLoading>
        }
      ></Route>
    </Routes>
  )
}

export default RecipesRouter
