import { FC, CSSProperties, ReactChild } from 'react'

interface ButtonProps {
  children: ReactChild,
  onClick: () => void
}

const Button: FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button className="main-button" onClick={onClick}>{children}</button>
  )
}

export default Button;