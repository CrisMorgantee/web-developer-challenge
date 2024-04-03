import * as S from './styles'

type CardProps = {
  avatar?: string
  title: string
  postBy: string
}

const Card = ({ title, postBy }: CardProps) => {
  return (
    <S.Wrapper>
      <S.ImgWrapper>
        <img src="/assets/photo-base@3x.jpg" alt="placeholder" />
      </S.ImgWrapper>

      <S.Content>
        <S.Title>{title}</S.Title>
        <S.PostByWrapper>
          <span>Enviado por</span>
          <h5>{postBy}</h5>
        </S.PostByWrapper>
      </S.Content>
    </S.Wrapper>
  )
}

export default Card
