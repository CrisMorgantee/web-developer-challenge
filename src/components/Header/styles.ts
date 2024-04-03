import styled, { css } from 'styled-components'

export const Wrapper = styled.header`
  ${({ theme }) => css`
    background-color: ${theme.colors.black};
  `}
`

export const Logo = styled.img`
  ${({ theme }) => css`
    width: ${theme.grid.container};
  `}
`
