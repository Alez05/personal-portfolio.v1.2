import { ButtonType } from "./button.type"
import './button.css'

export const Button = ({
  href,
  variant = 'solid',
  target = '_self',
  rel,
  className = '',
  children
}: ButtonType) => {
  return (
    <div className="containerbtn">
      <a
        href={href}
        target={target}
        rel={rel}
        className={`button ${variant} ${className}`}
      >
        {children}
      </a>
    </div>
  )
}
