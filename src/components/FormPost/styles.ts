import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div``

export const UploadWrapper = styled.div`
  ${({ theme }) => css`
    margin: 0 auto ${theme.spacings.xsmall};
    position: relative;
    display: inline-block;
    align-items: center;
    justify-content: center;
    border: 1px solid ${theme.colors.grayishbrown};
    padding: ${theme.spacings.small};
    border-radius: 4.4rem;
    width: 8.8rem;
    height: 8.8rem;
    text-align: center;

    input[type='file'] {
      width: 0.1px;
      height: 0.1px;
      opacity: 0;
      overflow: hidden;
      position: absolute;
      z-index: -1;
    }

    label {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      color: ${theme.colors.grayishbrown};

      img {
        width: 2.2rem;
        height: 2.2rem;
        object-fit: cover;
      }
    }
  `}
`

export const ActionsWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: ${theme.spacings.medium};

    & > * + * {
      margin-left: ${theme.spacings.small};
    }
  `}
`

export const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  ${media.greaterThan('medium')`


    `}
`
