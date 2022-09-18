import {
  Burger,
  Header as MantineHeader,
  MediaQuery,
  Text,
  useMantineTheme,
} from '@mantine/core'

import { FC } from 'react'

import { useStyles } from './Header.styles'
import { HeaderProps } from './Header.types'

const Header: FC<HeaderProps> = (props) => {
  const { isOpen, setIsOpen } = props

  const { classes } = useStyles()
  const theme = useMantineTheme()

  return (
    <MantineHeader p='md' height={70}>
      <div className={classes.headerContainer}>
        <MediaQuery largerThan='sm' styles={{ display: 'none' }}>
          <Burger
            opened={isOpen}
            onClick={() => setIsOpen(!isOpen)}
            size='sm'
            color={theme.colors.gray[6]}
            mr='xl'
          />
        </MediaQuery>

        <Text>Application Header</Text>
      </div>
    </MantineHeader>
  )
}

export default Header
