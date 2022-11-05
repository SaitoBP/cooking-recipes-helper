import { Button, Group, Modal, Stack, Text } from '@mantine/core'
import { FC } from 'react'

import { ControlledTextArea, ControlledTextInput } from '../../../components'

import { useRecipesForm } from './hooks/useRecipesForm'

import { RecipesFormProps } from './RecipesForm.types'

const RecipesForm: FC<RecipesFormProps> = (props) => {
  const { type } = props

  const { methods, onClose, onSubmit } = useRecipesForm(type)

  return (
    <Modal
      opened
      centered
      overlayOpacity={0.5}
      onClose={onClose}
      title={`Form ${type}`}
    >
      <Stack>
        {type !== 'detail' && (
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <ControlledTextInput
              control={methods.control}
              label='Nome'
              name='name'
              required
            />

            <ControlledTextArea
              control={methods.control}
              label='Descrição'
              name='description'
              autosize
              required
            />

            <Group position='right' mt='sm'>
              <Button variant='filled' type='submit'>
                Confimar
              </Button>

              <Button variant='outline' type='button' onClick={onClose}>
                Fechar
              </Button>
            </Group>
          </form>
        )}

        {type === 'detail' && (
          <>
            <Text size='md' weight='bold'>
              Nome
            </Text>

            <Text>{methods.getValues('name')}</Text>

            <Text size='md' weight='bold'>
              Descrição
            </Text>

            <Text>{methods.getValues('description')}</Text>
          </>
        )}
      </Stack>
    </Modal>
  )
}

export default RecipesForm
