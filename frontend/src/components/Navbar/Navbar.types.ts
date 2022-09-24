import { Dispatch, SetStateAction } from 'react'
import { NavbarLinkTemplate } from '../NavbarLink'

export interface NavbarProps {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
  links: NavbarLinkTemplate[]
}
