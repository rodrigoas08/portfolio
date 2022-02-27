import * as S from "./styles";
import { ButtonHTMLAttributes, memo } from "react";

export type ButtonProps = {
  secondary?: boolean;
  fullWidth?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  onClick,
  children,
  secondary,
  fullWidth,
  disabled = false,
  ...props
}: ButtonProps) => (
  <S.Wrapper
    onClick={onClick}
    disabled={disabled}
    secondary={secondary}
    fullWidth={fullWidth}
    {...props}
  >
    {children}
  </S.Wrapper>
);

export default memo(Button);
