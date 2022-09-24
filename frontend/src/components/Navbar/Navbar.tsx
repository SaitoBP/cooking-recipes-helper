import { Navbar as MantineNavbar } from '@mantine/core'
import { FC } from 'react'

import { NavbarLink } from '../NavbarLink'

import { NavbarProps } from './Navbar.types'

const Navbar: FC<NavbarProps> = (props) => {
  const { isOpen, setIsOpen, links } = props

  return (
    <MantineNavbar
      p='md'
      hiddenBreakpoint='sm'
      hidden={!isOpen}
      width={{ sm: 200, lg: 300 }}
    >
      {links.map((link) => (
        <NavbarLink key={link.label} link={link} setIsOpen={setIsOpen} />
      ))}
    </MantineNavbar>
  )
}

export default Navbar
