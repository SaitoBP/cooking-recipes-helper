import { AppShell } from '@mantine/core'
import { FC, useState } from 'react'
import { Outlet } from 'react-router-dom'

import { Header } from '../Header'
import { Navbar } from '../Navbar'

import { PageLayoutProps } from './PageLayout.types'

const PageLayout: FC<PageLayoutProps> = (props) => {
  const { links } = props

  const [isOpen, setIsOpen] = useState(false)

  return (
    <AppShell
      navbarOffsetBreakpoint='sm'
      navbar={<Navbar isOpen={isOpen} setIsOpen={setIsOpen} links={links} />}
      header={<Header isOpen={isOpen} setIsOpen={setIsOpen} />}
    >
      <Outlet />
    </AppShell>
  )
}

export default PageLayout
