import styled, { css } from 'styled-components';

const Div = styled.div`
  ${({ theme }) => css`
    left: 0;
    width: 0%;
    height: 0.1rem;
    bottom: -0.1rem;
    position: absolute;
    background-image: linear-gradient(
      to right,
      ${theme.colors.primary},
      ${theme.colors.secondary}
    );
  `}
`;

const Progressivebar = () => {
  return <Div id="bar" />;
};

export default Progressivebar;
