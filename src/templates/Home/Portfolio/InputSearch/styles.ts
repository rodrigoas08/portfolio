import styled, { css } from 'styled-components';
import { Input } from 'components/Input/styles';
import { FaSearch } from 'react-icons/fa';

export const Wrapper = styled.div`
  width: 30rem;
  position: relative;
  margin-top: ${({ theme }) => theme.spacings.small};

  :focus-within #icon {
    animation: bg 1s;
    filter: brightness(50%);
    transition: all 1s linear;

    @keyframes bg {
      from {
        transform: rotate(0deg);
        background-color: transparent;
      }
      to {
        transform: rotate(360deg);
        background-color: transparent;
      }
    }
  }
`;

export const SearchInput = styled(Input)`
  ${({ theme }) => css`
    text-transform: none;
    border-radius: 0.1rem;
    text-overflow: ellipsis;
    border: 0.1rem solid transparent;
    font-size: ${theme.font.sizes.medium};
    border-bottom: 0.1rem solid ${theme.colors.primary};
  `}
`;

export const Icon = styled.div`
  width: auto;
  height: 100%;
  left: 0.8rem;
  display: flex;
  position: absolute;
  align-items: center;
  transition: 1s linear;
  justify-content: center;
`;

export const IconSearch = styled(FaSearch)`
  width: 1rem;
  height: 1rem;
  position: absolute;
  fill: url('#gradient');
  filter: drop-shadow(0 0.3rem 0.2rem ${({ theme }) => theme.colors.black});
`;
