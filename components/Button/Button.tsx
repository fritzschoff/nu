import { FC, CSSProperties, ReactChild } from 'react'

interface ButtonProps {
  children: ReactChild,
  onClick: () => void,
  disabled?: boolean
}

const Button: FC<ButtonProps> = ({ children, onClick, disabled }) => {
  return (
    <button className="main-button" onClick={onClick} disabled={disabled}>{children}</button>
  )
}

export default Button;