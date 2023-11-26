import styled, { css } from 'styled-components';

const Div = styled.div`
  ${({ theme }) => css`
    top: 0;
    left: 0;
    height: 0%;
    opacity: 0.2;
    width: 0.1rem;
    position: absolute;
    background-image: linear-gradient(
      to bottom,
      ${theme.colors.black},
      ${theme.colors.primary},
      ${theme.colors.secondary},
      ${theme.colors.primary},
      ${theme.colors.black}
    );

    @media (max-width: ${theme.breakpoints.ipad}) {
      left: 0;
      width: 0%;
      top: 8rem;
      height: 0.1rem;
      padding-inline: 0;
    }
  `}
`;

const Progressivebar = () => {
  return <Div id="bar" />;
};

export default Progressivebar;
