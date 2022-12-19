import { ButtonHTMLAttributes } from 'react'
import { ButtonStyled } from './styled'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

const Button = ({ children, ...props }: Props) => {
  return <ButtonStyled {...props}>{children}</ButtonStyled>
}

export default Button
