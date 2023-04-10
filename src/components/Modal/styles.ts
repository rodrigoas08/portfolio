import styled, { css } from "styled-components";
import * as ButtonStyles from "components/Button/styles";

export const Shadow = styled.div`
	top: 0;
	left: 0;
	z-index: 2;
	width: 100%;
	height: 100vh;
	display: flex;
	position: fixed;
	align-items: center;
	justify-content: center;
	background: rgb(0, 0, 0, 0.4);
	animation: openShadow 1s linear;
	@keyframes openShadow {
		0% {
			background: rgba(0, 0, 0, 0);
		}
		100% {
			background: rgba(0, 0, 0, 0.4);
		}
	}
`;

export const Wrapper = styled.div`
	${({ theme }) => css`
		z-index: 2;
		right: -40rem;
		width: 40rem;
		height: 100vh;
		display: flex;
		position: absolute;
		flex-direction: column;
		animation: openModal 2s linear forwards;
		background-color: ${theme.colors.alabaster};
		padding: ${theme.spacings.medium} ${theme.spacings.medium};

		@keyframes openModal {
			to {
				right: 0rem;
			}
		}
		> h1 {
			${({ theme }) => css`
				:last-child {
					position: relative;
					top: 45%;
					color: ${theme.colors.text};
					::first-letter {
						color: ${theme.colors.primary};
					}
				}
			`}
		}
	`}
`;

export const Title = styled.h1`
	${({ theme }) => css`
		align-self: start;
		color: ${theme.colors.text};
		font-size: ${theme.font.sizes.xxxlarge};
		:first-letter {
			color: ${theme.colors.primary};
		}
	`}
`;

export const Hr = styled.hr`
	width: 50%;
`;

export const Form = styled.form`
	${({ theme }) => css`
		height: 100%;
		display: flex;
		justify-content: start;
		flex-direction: column;
		padding: ${theme.spacings.small} 0;
		font-size: ${theme.font.sizes.large};
	`}
`;

export const Label = styled.label`
	${({ theme }) => css`
		align-self: start;
		color: ${theme.colors.text};
		font-weight: ${theme.font.extraBold};
		font-size: ${theme.font.sizes.small};
		> span {
			color: ${theme.colors.error};
		}
		:not(:first-child) {
			margin-top: ${theme.spacings.xxsmall};
		}
	`}
`;

export const Input = styled.input`
	${({ theme }) => css`
		width: 100%;
		outline: none;
		height: 3.5rem;
		border-style: none;
		text-transform: lowercase;
		border-radius: ${theme.border.radius};
		border: 1px solid ${theme.colors.lightGray};
		border-left: 10px solid ${theme.colors.primary};
		padding: ${theme.spacings.xxxsmall} ${theme.spacings.xxxsmall};

		&:focus {
			border: 1px solid ${theme.colors.primary};
			border-left: 10px solid ${theme.colors.primary};
		}
		:nth-child(0n + 2) {
			text-transform: capitalize;
		}
	`}
`;

export const Textarea = styled.textarea`
	${({ theme }) => css`
		width: 100%;
		resize: none;
		height: 15rem;
		outline: none;
		border-radius: ${theme.border.radius};
		border: 1px solid ${theme.colors.lightGray};
		border-left: 10px solid ${theme.colors.primary};
		padding: ${theme.spacings.xxxsmall} ${theme.spacings.xxxsmall};

		&:focus {
			border: 1px solid ${theme.colors.primary};
			border-left: 10px solid ${theme.colors.primary};
		}
	`}
`;

export const Error = styled.span`
	${({ theme }) => css`
		color: ${theme.colors.error};
		font-size: ${theme.font.sizes.xxsmall};
	`}
`;

export const FormAction = styled.div`
	width: 100%;
	display: flex;
	justify-content: flex-start;
	${ButtonStyles.Wrapper} {
		margin-top: 1rem;
		:not(:first-child) {
			margin-left: ${({ theme }) => theme.spacings.xxsmall};
		}
	}
`;
