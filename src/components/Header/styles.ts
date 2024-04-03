import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    background-color: ${theme.colors.black};
  `}
`

export const Logo = styled.img`
  ${({ theme }) => css`
    width: ${theme.grid.container};
  `}
`
