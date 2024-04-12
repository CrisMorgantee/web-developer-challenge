import Button from '../../components/Button'
import { FormWrapper } from '../../components/Form'
import TextField from '../../components/TextField'
import * as S from './styles'
import TextAreaField from '../../components/TextAreaField'

const FormPost = () => {
  return (
    <FormWrapper>
      <S.Form>
        <S.UploadWrapper>
          <input type="file" name="avatar" id="avatar" />
          <label htmlFor="avatar">
            <img src="/assets/upload.svg" alt="avatar placeholder" />
          </label>
        </S.UploadWrapper>

        <TextField name="name" placeholder="Digite seu Nome" />
        <TextAreaField message="message" placeholder="Mensagem" />

        <S.ActionsWrapper>
          <Button minimal>Descartar</Button>
          <Button>Publicar</Button>
        </S.ActionsWrapper>
      </S.Form>
    </FormWrapper>
  )
}

export default FormPost
