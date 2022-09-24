import { Control } from 'react-hook-form'

export type FormType = 'new' | 'edit' | 'detail'

export interface ControlledInput {
  name: string
  control: Control<any, any>
}
