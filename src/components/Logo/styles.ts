import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${theme.spacings.small} 0;

    & img {
      height: 4.5rem;
    }
  `}
`
