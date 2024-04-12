import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
import * as S from './styles'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  size?: 'small' | 'medium' | 'large'
  icon?: JSX.Element
  fullWidth?: boolean
  onlyIcon?: boolean
  as?: React.ElementType
  minimal?: boolean
} & ButtonTypes

const Button = ({
  icon,
  size = 'medium',
  children,
  fullWidth = false,
  onlyIcon = false,
  minimal = false,
  ...props
}: ButtonProps) => (
  <S.Wrapper
    size={size}
    fullWidth={fullWidth}
    onlyIcon={onlyIcon}
    hasIcon={!!icon}
    minimal={minimal}
    {...props}
  >
    {!!icon && icon}
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)

export default Button
