import { FC, CSSProperties, ReactChild } from 'react'

interface ButtonProps {
  children: ReactChild
}

const Button: FC<ButtonProps> = ({ children }) => {
  return (
    <button className="main-button">{children}</button>
  )
}

export default Button;