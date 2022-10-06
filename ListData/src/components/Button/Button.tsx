import React from 'react'

interface IButtonProps {
  children: JSX.Element | string
  handleOnClick?: () => void
}

const Button: React.FC<IButtonProps> = ({ children, handleOnClick }) => (
  <button className="button button--size button--primary" type="button" onClick={handleOnClick}>{children}</button>
)

export default Button
