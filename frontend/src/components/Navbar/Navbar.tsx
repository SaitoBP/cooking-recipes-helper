import { Navbar as MantineNavbar } from '@mantine/core'
import { FC } from 'react'

import { NavbarLink } from '../NavbarLink'

import { NavbarProps } from './Navbar.types'

const Navbar: FC<NavbarProps> = (props) => {
  const { isOpen, links } = props

  return (
    <MantineNavbar
      p='md'
      hiddenBreakpoint='sm'
      hidden={!isOpen}
      width={{ sm: 200, lg: 300 }}
    >
      {links.map((link) => (
        <NavbarLink link={link} />
      ))}
    </MantineNavbar>
  )
}

export default Navbar
