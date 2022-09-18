import { LoadingOverlay } from '@mantine/core'
import { FC, Suspense } from 'react'

import { SuspenseLoadingProps } from './SuspenseLoading.types'

const SuspenseLoading: FC<SuspenseLoadingProps> = (props) => {
  const { children } = props

  return (
    <Suspense fallback={<LoadingOverlay visible overlayBlur={2} />}>
      {children}
    </Suspense>
  )
}

export default SuspenseLoading
