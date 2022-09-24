import { Group, Text, ThemeIcon, UnstyledButton } from '@mantine/core'
import { FC } from 'react'
import { useNavbarLink } from './hooks/useNavbarLink'

import { useStyles } from './NavbarLink.styles'
import { NavbarLinkProps } from './NavbarLink.types'

const NavbarLink: FC<NavbarLinkProps> = (props) => {
  const { link } = props

  const { classes } = useStyles()
  const { handleClick } = useNavbarLink(props)

  return (
    <UnstyledButton className={classes.btnContainer} onClick={handleClick}>
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
