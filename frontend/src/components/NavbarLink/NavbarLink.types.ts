import { ReactNode } from 'react'

export interface NavbarLinkProps {
  link: NavbarLinkTemplate
}

export interface NavbarLinkTemplate {
  color: string
  icon: ReactNode
  label: string
}
