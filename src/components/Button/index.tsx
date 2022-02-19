import * as S from "./styles";
import { ButtonHTMLAttributes, memo } from "react";

export type ButtonProps = {
    btnMenu?: boolean
    fullWidth?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  onClick,
  children,
  btnMenu,
  fullWidth,
  disabled = false,
  ...props
}: ButtonProps) => (
  <S.Wrapper
    onClick={onClick}
    disabled={disabled}
    btnMenu={btnMenu}
    fullWidth={fullWidth}
    {...props}
  >
    {children}
  </S.Wrapper>
);

export default memo(Button);