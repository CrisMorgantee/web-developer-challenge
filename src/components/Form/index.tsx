import * as ButtonStyles from '../../components/Button/styles'
import * as TextFieldStyles from '../../components/TextField/styles'
import { darken } from 'polished'
import styled, { css } from 'styled-components'

export const FormWrapper = styled.main`
  ${({ theme }) => css`
    display: flex;
    width: inherit;
    padding: ${theme.spacings.small};
    border-radius: 0.3rem;
    border: solid 0.1rem ${theme.colors.grayishbrown};
    background-color: ${theme.colors.xblack};

    img {
      width: 8.8rem;
      height: 8.8rem;
      object-fit: cover;
      border-radius: 4.4rem;
    }

    ${TextFieldStyles.Wrapper} {
      margin: ${theme.spacings.xxsmall} 0;
    }

    // ${ButtonStyles.Wrapper} {
    //   margin: ${theme.spacings.medium} auto ${theme.spacings.xsmall};
    // }
  `}
`

export const FormLink = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    text-align: center;
    font-size: ${theme.font.sizes.small};

    a {
      color: ${theme.colors.secondary};
      text-decoration: none;
      border-bottom: 0.1rem solid ${theme.colors.secondary};
      transition: color, border, ${theme.transition.fast};
      margin-left: ${theme.spacings.xxsmall};

      &:hover {
        color: ${darken(0.1, theme.colors.secondary)};
        border-bottom: 0.1rem solid ${darken(0.1, theme.colors.secondary)};
      }
    }
  `}
`
