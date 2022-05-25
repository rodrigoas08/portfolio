import { InputHTMLAttributes } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import * as S from './styles';

export type InputProps = {
  label: string;
  fullWidth?: boolean;
  register: () => UseFormRegisterReturn;
} & InputHTMLAttributes<HTMLInputElement>;

const Input = ({ label, fullWidth, register, ...props }: InputProps) => {
  return (
    <S.Label>
      {label}
      <S.Input fullWidth={fullWidth} {...register()} {...props} />
    </S.Label>
  );
};

export default Input;
