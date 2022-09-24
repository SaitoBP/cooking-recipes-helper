import { useNavigate } from 'react-router-dom'
import { NavbarLinkProps } from '../NavbarLink.types'

type HandleClick = () => void

export interface UseNavbarLinkReturn {
  handleClick: HandleClick
}

export const useNavbarLink = (props: NavbarLinkProps): UseNavbarLinkReturn => {
  const { link, setIsOpen } = props

  const navigate = useNavigate()

  const handleClick: HandleClick = () => {
    navigate(link.path)
    setIsOpen(false)
  }

  return { handleClick }
}
