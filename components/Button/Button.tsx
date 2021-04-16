import { FC, CSSProperties, ReactChild } from 'react'

interface ButtonProps {
  children: ReactChild,
  onClick: () => void,
  disabled?: boolean,
  style?: CSSProperties
}

const Button: FC<ButtonProps> = ({ children, onClick, disabled, ...other }) => {
  return (
    <button className="main-button" onClick={onClick} disabled={disabled} {...other}>{children}</button>
  )
}

export default Button;