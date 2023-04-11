import { InputHTMLAttributes } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import * as S from './styles';

export type InputProps = {
  icon: JSX.Element;
  fullWidth?: boolean;
  register: () => UseFormRegisterReturn;
} & InputHTMLAttributes<HTMLInputElement>;

const Input = ({ fullWidth, icon, register, ...props }: InputProps) => {
  return (
    <S.Wrapper>
      <S.Icon id="icon">{icon}</S.Icon>
      <S.Input fullWidth={fullWidth} {...register()} {...props} />
    </S.Wrapper>
  );
};

export default Input;
