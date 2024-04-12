import React, { TextareaHTMLAttributes, useState } from 'react'
import * as S from './styles'

export type TextFieldProps = {
  onInput?: (value: string) => void
  initialValue?: string
  disabled?: boolean
  error?: string
  message: string
} & TextareaHTMLAttributes<HTMLTextAreaElement>

const TextareaField = ({
  message,
  initialValue = '',
  disabled = false,
  error,
  onInput,
  ...props
}: TextFieldProps) => {
  const [value, setValue] = useState(initialValue)

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.currentTarget.value
    setValue(newValue)

    console.log('newValue Textarea :: ', newValue)
    !!onInput && onInput(newValue)
  }

  return (
    <S.Wrapper disabled={disabled} error={!!error}>
      <S.TextareaWrapper>
        <S.Textarea
          disabled={disabled}
          onChange={onChange}
          value={value}
          name={message}
          id={message}
          {...props}
        />
      </S.TextareaWrapper>
      {!!error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  )
}

export default TextareaField
