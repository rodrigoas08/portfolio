import * as S from "./styles";
import { ButtonHTMLAttributes, memo } from "react";

export type ButtonProps = {
	secondary?: boolean;
	fullWidth?: boolean;
	rippling?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
	onClick,
	children,
	secondary,
	fullWidth,
	rippling,
	disabled = false,
	...props
}: ButtonProps) => (
	<S.Wrapper
		onClick={onClick}
		disabled={disabled}
		secondary={secondary}
		fullWidth={fullWidth}
		rippling={rippling}
		{...props}
	>
		{children}
	</S.Wrapper>
);

export default memo(Button);
