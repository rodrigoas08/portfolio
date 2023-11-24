import * as S from './styles';
import { InputHTMLAttributes } from 'react';
import { ErrorMessage } from '@hookform/error-message';
import { FieldErrors, UseFormRegisterReturn } from 'react-hook-form';

export type InputProps = {
  icon?: JSX.Element;
  error: FieldErrors;
  name: string;
  label: string;
  textArea?: boolean;
  placeholder: string;
  fullWidth?: boolean;
  register: () => UseFormRegisterReturn;
} & InputHTMLAttributes<HTMLInputElement>;

const Input = ({
  fullWidth,
  icon,
  name,
  label,
  textArea = false,
  placeholder,
  error,
  register,
  ...props
}: InputProps) => {
  return textArea ? (
    <S.Wrapper fullWidth={fullWidth} textArea>
      <S.Label id="label">{label} *</S.Label>
      <S.Textarea placeholder={placeholder} {...register()}></S.Textarea>
      <ErrorMessage
        errors={error}
        name={name}
        render={({ message }) => (
          <S.ErrorMessage textArea>{message}</S.ErrorMessage>
        )}
      />
    </S.Wrapper>
  ) : (
    <S.Wrapper fullWidth={fullWidth}>
      <S.Icon id="icon">{icon}</S.Icon>
      <S.Label id="label">{label} *</S.Label>
      <S.Input placeholder={placeholder} {...register()} {...props} />
      <ErrorMessage
        errors={error}
        name={name}
        render={({ message }) => <S.ErrorMessage>{message}</S.ErrorMessage>}
      />
    </S.Wrapper>
  );
};

export default Input;
