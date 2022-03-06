import styled, { css } from "styled-components";

export const Content = styled.div`
	display: flex;
	position: relative;
	align-items: center;
	justify-content: start;
	flex-direction: column;
	min-height: calc(100vh - 16rem);
`;

export const Title = styled.h1`
	${({ theme }) => css`
		font-size: 9rem;
		text-align: center;
		position: relative;
		text-transform: uppercase;
		font-weight: ${theme.font.bold};
		animation: titleAnimation 2.5s ease-out;
		font-family: ${theme.font.family.nunito};
		text-shadow: -4px 14px 1px ${theme.colors.primary};
		padding: ${theme.spacings.small} ${theme.spacings.small};

		@keyframes titleAnimation {
			0% {
				letter-spacing: -1rem;
			}
			100% {
				letter-spacing: 0rem;
			}
		}
		> span {
			background: -webkit-linear-gradient(
				109deg,
				rgba(${({ theme }) => theme.colors.primary}) 11.3%,
				rgba(${({ theme }) => theme.colors.blueRibbon}) 91.1%
			);
			-webkit-background-clip: text;
			-webkit-text-fill-color: rgba(0, 0, 0, 0.1);
			/* text-shadow: -4px 1px 1px ; */
		}
	`}
`;

export const Paragraph = styled.h2`
	${({ theme }) => css`
    font-size: 3rem;
    position: relative;
    text-align: center;
    font-weight: ${theme.font.light};
    font-family: ${theme.font.family.josefin};
    animation: paragraphAnimation 2.4s ease-out;
    padding: ${theme.spacings.small} ${theme.spacings.small};
    margin: ${theme.spacings.small} ${theme.spacings.small};

    @keyframes paragraphAnimation {
      0% {
        letter-spacing: 0.4rem;
      }
      100% {
      }
    }
    }
    &::first-letter {
      text-transform: uppercase;
    }
  `}
`;
