import { Button, Group, Modal, Stack, Text } from '@mantine/core'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import { ControlledTextArea, ControlledTextInput } from '../../../components'

import { useRecipesForm } from './hooks/useRecipesForm'

import { RecipesFormProps } from './RecipesForm.types'

const RecipesForm: FC<RecipesFormProps> = (props) => {
  const { type } = props

  const { methods, onSubmit } = useRecipesForm()
  const navigate = useNavigate()

  return (
    <Modal
      opened
      centered
      overlayOpacity={0.5}
      onClose={() => navigate('/recipes')}
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
              required
            />

            <Group position='right' mt='sm'>
              <Button variant='filled' type='submit'>
                Confimar
              </Button>

              <Button variant='outline' type='button'>
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

            <Text>Lorem ipsum dolor sit amet consectetur</Text>

            <Text size='md' weight='bold'>
              Descrição
            </Text>

            <Text>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil
              veniam sit accusantium excepturi numquam quos at quis dolor et a?
            </Text>
          </>
        )}
      </Stack>
    </Modal>
  )
}

export default RecipesForm
