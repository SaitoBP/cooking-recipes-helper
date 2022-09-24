import { TextInput } from '@mantine/core'
import { FC } from 'react'
import { Controller } from 'react-hook-form'

import { ControlledTextInputProps } from './ControlledTextInput.types'

const ControlledTextInput: FC<ControlledTextInputProps> = (props) => {
  const { control, name } = props

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <TextInput {...props} value={field.value} onChange={field.onChange} />
      )}
    />
  )
}

export default ControlledTextInput
