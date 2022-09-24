import { Dispatch, ReactNode, SetStateAction } from 'react'

export interface NavbarLinkProps {
  link: NavbarLinkTemplate
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export interface NavbarLinkTemplate {
  color: string
  icon: ReactNode
  label: string
  path: string
}
