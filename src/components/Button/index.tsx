import * as S from './styles';
import { ButtonHTMLAttributes } from 'react';

export type ButtonProps = {
  secondary?: boolean;
  fullWidth?: boolean;
  rippling?: boolean;
  navMenuHeader?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  onClick,
  children,
  secondary,
  fullWidth,
  rippling,
  navMenuHeader,
  disabled = false,
  ...props
}: ButtonProps) => (
  <S.Wrapper
    onClick={onClick}
    disabled={disabled}
    secondary={secondary}
    fullWidth={fullWidth}
    rippling={rippling}
    navMenuHeader={navMenuHeader}
    {...props}
  >
    {children}
  </S.Wrapper>
);

export default Button;
