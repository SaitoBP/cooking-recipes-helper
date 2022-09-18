import { createStyles } from '@mantine/core'

export const useStyles = createStyles((theme) => ({
  btnContainer: {
    display: 'block',
    width: '100%',
    padding: theme.spacing.xs,
    borderRadius: theme.radius.sm,
    color: theme.colors.black,

    '&:hover': {
      backgroundColor: theme.colors.gray[0],
    },
  },
}))
