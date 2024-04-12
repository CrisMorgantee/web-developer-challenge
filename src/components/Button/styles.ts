import { darken } from 'polished'
import styled, { css, DefaultTheme } from 'styled-components'
import { ButtonProps } from '.'

export type WrapperProps = Pick<
  ButtonProps,
  'size' | 'fullWidth' | 'onlyIcon' | 'minimal'
>

const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    height: 3rem;
    font-size: ${theme.font.sizes.xsmall};
  `,

  medium: (theme: DefaultTheme) => css`
    height: 4rem;
    width: 9.8rem;
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
  `,

  large: (theme: DefaultTheme) => css`
    height: 5rem;
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xlarge};
  `,

  fullWidth: () => css`
    width: 100%;
    padding: 0;
  `,

  onlyIcon: (theme: DefaultTheme) => css`
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
    width: 2rem;
    height: 2rem;

    img {
      width: 2rem;
      height: 2rem;

      & + span {
        margin: 0;
      }
    }
  `,

  minimal: (theme: DefaultTheme) => css`
    background: none;
    color: ${theme.colors.brownishgray};
    padding: 0;
    width: fit-content;
    text-decoration: underline;
    transition: color 200ms ease-in-out;

    &:hover {
      color: ${darken(0.05, theme.colors.brownishgray)};
    }
  `
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size, fullWidth, onlyIcon, minimal }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: ${theme.border.radius};
    color: ${theme.colors.white};
    text-decoration: none;
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
    border: none;
    cursor: pointer;
    background: ${theme.colors.primary};
    transition: background 200ms ease-in-out;

    &:hover {
      background: ${minimal ? 'none' : `${darken(0.05, theme.colors.primary)}`};
    }

    ${!!size && wrapperModifiers[size](theme)}
    ${!!fullWidth && wrapperModifiers.fullWidth()}
    ${!!onlyIcon && wrapperModifiers.onlyIcon(theme)}
    ${!!minimal && wrapperModifiers.minimal(theme)}
  `}
`
