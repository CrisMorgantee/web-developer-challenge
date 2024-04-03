import styled, { css } from 'styled-components'

export const Wrapper = styled.article`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    height: 22.5rem;
    padding: ${theme.spacings.xxxlarge} ${theme.spacings.small}
      ${theme.spacings.medium};
    border-radius: 0.3rem;
    border: solid 0.1rem ${theme.colors.grayishbrown};
    background-color: ${theme.colors.xblack};

    & > * + * {
      margin-left: ${theme.spacings.medium};
    }

    img {
      width: 8.8rem;
      height: 8.8rem;
      object-fit: cover;
      border-radius: 4.4rem;
    }
  `}
`
export const ImgWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 8.8rem;
    height: 8.8rem;
    border-radius: 4.4rem;
    background-color: ${theme.colors.xblack};
  `}
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`

export const Title = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.xwarmgray};
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.normal};
  `}
`

export const PostByWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    color: ${theme.colors.warmgray};

    & h5 {
      font-weight: ${theme.font.normal};
      font-size: ${theme.font.sizes.small};
    }

    & span {
      font-size: ${theme.font.sizes.xsmall};
      color: ${theme.colors.brownishgray};
    }
  `}
`
