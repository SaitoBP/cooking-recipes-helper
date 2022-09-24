import { Textarea } from '@mantine/core'
import { FC } from 'react'
import { Controller } from 'react-hook-form'

import { ControlledTextAreaProps } from './ControlledTextArea.types'

const ControlledTextArea: FC<ControlledTextAreaProps> = (props) => {
  const { control, name } = props

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <Textarea {...props} value={field.value} onChange={field.onChange} />
      )}
    />
  )
}

export default ControlledTextArea
