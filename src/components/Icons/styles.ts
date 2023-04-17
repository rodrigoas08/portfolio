import styled, { css } from 'styled-components';

type IconProps = {
  sideText?: boolean;
  ballonText?: string;
};

export const Wrapper = styled.div<IconProps>`
  ${({ theme, sideText, ballonText }) => css`
    width: 7rem;
    height: 7rem;
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-size: ${theme.font.sizes.small};
    column-gap: ${theme.spacings.xxsmall};
    border-radius: ${theme.border.radius};
    background-color: ${theme.colors.grayIce};

    ${ballonText &&
    css`
      :hover:before {
        content: '${ballonText}';
        height: auto;
        display: flex;
        bottom: -2rem;
        min-width: 5rem;
        position: absolute;
        align-items: center;
        justify-content: center;
        animation: growup 0.6s linear;
        font-size: ${theme.font.sizes.xxsmall};
        border-radius: ${theme.border.radius};
        padding: 0.3rem ${theme.spacings.xxsmall};
        background-color: ${theme.colors.primary};
      }

      :hover:after {
        content: '';
        width: 0;
        height: 0;
        display: block;
        bottom: -0.5rem;
        position: absolute;
        animation: growup 0.6s linear;
        border-left: 1rem solid transparent;
        border-right: 1rem solid transparent;
        border-bottom: 1rem solid ${theme.colors.primary};
      }

      @keyframes growup {
        from {
          transform: translateY(1rem);
        }
        to {
          transform: translateY(0rem);
        }
      }
    `}

    > p {
      color: ${theme.colors.text};
      padding: ${theme.spacings.xxsmall} 0;
      font-size: ${theme.font.sizes.xsmall};
    }

    ${sideText &&
    css`
      width: 15rem;
      height: 4rem;
      cursor: pointer;
      flex-direction: row;
      padding: 0 ${theme.spacings.small};
      font-size: ${theme.font.sizes.medium};
      border-radius: ${theme.border.radius};
      background-color: ${theme.colors.grayIce};
      border-top: 0.3rem solid ${theme.colors.primary};

      p {
        color: ${theme.colors.alabaster};
      }
    `}
  `}
`;
