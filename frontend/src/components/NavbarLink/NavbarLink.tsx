import { Group, Text, ThemeIcon, UnstyledButton } from '@mantine/core'
import { FC } from 'react'

import { useStyles } from './NavbarLink.styles'
import { NavbarLinkProps } from './NavbarLink.types'

const NavbarLink: FC<NavbarLinkProps> = (props) => {
  const { link } = props

  const { classes } = useStyles()

  return (
    <UnstyledButton className={classes.btnContainer}>
      <Group>
        <ThemeIcon color={link.color} variant='light'>
          {link.icon}
        </ThemeIcon>

        <Text>{link.label}</Text>
      </Group>
    </UnstyledButton>
  )
}

export default NavbarLink
