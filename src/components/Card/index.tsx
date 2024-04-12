import * as S from './styles'
import Button from '../../components/Button'

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

      <S.CloseIcon>
        <Button minimal onlyIcon>
          <img src="/assets/close-icon.svg" alt="close icon" />
        </Button>
      </S.CloseIcon>

      <S.Content>
        <S.Title>{title}</S.Title>
        <S.PostByWrapper>
          <span>Enviado por</span>
          <h5>{postBy}</h5>
        </S.PostByWrapper>

        <Button minimal>Descartar</Button>
        <Button>Publicar</Button>
      </S.Content>
    </S.Wrapper>
  )
}

export default Card
