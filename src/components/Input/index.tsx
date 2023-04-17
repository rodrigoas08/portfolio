import * as S from './styles';
import { InputHTMLAttributes } from 'react';
import { ErrorMessage } from '@hookform/error-message';
import { FieldErrors, UseFormRegisterReturn } from 'react-hook-form';

export type InputProps = {
  icon: JSX.Element;
  error: FieldErrors;
  name: string;
  fullWidth?: boolean;
  register: () => UseFormRegisterReturn;
} & InputHTMLAttributes<HTMLInputElement>;

const Input = ({
  fullWidth,
  icon,
  name,
  error,
  register,
  ...props
}: InputProps) => {
  return (
    <S.Wrapper>
      <S.Icon id="icon">{icon}</S.Icon>
      <S.Input fullWidth={fullWidth} {...register()} {...props} />
      <ErrorMessage
        errors={error}
        name={name}
        render={({ message }) => <S.ErrorMessage>{message}</S.ErrorMessage>}
      />
    </S.Wrapper>
  );
};

export default Input;
