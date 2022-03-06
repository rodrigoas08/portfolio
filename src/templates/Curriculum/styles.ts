import styled, { css } from "styled-components";

export const Content = styled.div`
	height: 100%;
	display: grid;
	position: relative;
	min-height: calc(100vh - 16rem);
	grid-template-columns: 0.4fr 1fr;
`;

export const Profile = styled.div`
	${({ theme }) => css`
		display: flex;
		align-items: start;
		flex-direction: column;
		padding: ${theme.spacings.medium};
		background-color: rgba(0, 0, 0, 0.3);
		border-top-left-radius: ${theme.border.radius};
		border-bottom-left-radius: ${theme.border.radius};
		> ul > li {
			list-style: none;
			line-height: 2.2rem;
			margin: ${theme.spacings.xxsmall} 0;
			font-size: ${theme.font.sizes.small};
			font-family: ${theme.font.family.josefin};
			:last-child {
				margin-bottom: 2rem;
			}
		}
	`}
`;

export const Header = styled.div`
	display: flex;
	align-self: center;
	align-items: center;
	flex-direction: column;
`;

export const ImageProfile = styled.div`
	width: 13rem;
	height: 13rem;
	animation: inherit;
	border-radius: 50%;
	margin-bottom: ${({ theme }) => theme.spacings.small};
	background-size: cover;
	background-image: url(${process.env.PUBLIC_URL}/img/eu.jpg);
`;

export const Title = styled.h1`
	font-size: 1.8rem;
	align-self: center;
	margin-bottom: 1rem;
	letter-spacing: 0.5rem;
	text-transform: capitalize;
	:first-letter {
		color: ${({ theme }) => theme.colors.primary};
	}
`;

export const Paragraph = styled.p`
	line-height: 2.2rem;
	font-size: ${({ theme }) => theme.font.sizes.small};
	font-family: ${({ theme }) => theme.font.family.josefin};
`;

export const Experience = styled.div`
	${({ theme }) => css`
		padding: ${theme.spacings.large};
		background-color: rgba(0, 0, 0, 0.7);
		border-top-right-radius: ${theme.border.radius};
		border-bottom-right-radius: ${theme.border.radius};
		> ul > li {
			margin: 2.5rem 0;
			line-height: 1.8rem;
			list-style: inside square;
			font-size: ${theme.font.sizes.small};
			font-family: ${theme.font.family.josefin};
			> a {
				text-decoration: none;
				color: ${theme.colors.white};
			}
			> b {
				color: ${theme.colors.blueRibbon};
			}
			:last-child {
				padding-bottom: ${theme.spacings.small};
			}
		}
	`}
`;
