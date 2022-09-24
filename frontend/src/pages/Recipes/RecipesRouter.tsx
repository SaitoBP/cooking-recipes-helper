import { FC, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

import { SuspenseLoading } from '../../components'

const RecipesForm = lazy(() => import('./Form/RecipesForm'))
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
      >
        <Route
          path='new'
          element={
            <SuspenseLoading>
              <RecipesForm type='new' />
            </SuspenseLoading>
          }
        />

        <Route
          path='edit/:id'
          element={
            <SuspenseLoading>
              <RecipesForm type='edit' />
            </SuspenseLoading>
          }
        />

        <Route
          path='detail/:id'
          element={
            <SuspenseLoading>
              <RecipesForm type='detail' />
            </SuspenseLoading>
          }
        />
      </Route>
    </Routes>
  )
}

export default RecipesRouter
