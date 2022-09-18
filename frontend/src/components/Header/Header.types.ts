import { Dispatch, SetStateAction } from 'react'

export interface HeaderProps {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}
