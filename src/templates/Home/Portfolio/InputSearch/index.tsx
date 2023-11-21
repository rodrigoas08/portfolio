import styled, { css } from 'styled-components';
import { Input } from 'components/Input/styles';
import { SearchAlt } from '@styled-icons/boxicons-regular/SearchAlt';

interface IInputSearchProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const InputSearch = ({ search, setSearch }: IInputSearchProps) => {
  return (
    <Wrapper>
      <Icon id="icon">
        <IconSearch size={15} title="Ícone de busca" />
      </Icon>
      <SearchInput
        fullWidth
        type="text"
        value={search}
        placeholder="Buscar"
        onChange={(event) => setSearch(event.target.value)}
      />
    </Wrapper>
  );
};
export default InputSearch;

const Wrapper = styled.div`
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

const SearchInput = styled(Input)`
  ${({ theme }) => css`
    text-transform: none;
    border-radius: 0.1rem;
    text-overflow: ellipsis;
    font-size: ${theme.font.sizes.medium};
    padding-left: ${theme.spacings.large};
    padding-right: ${theme.spacings.medium};

    :focus {
      border: 0.1rem solid transparent;
      transition: all 1.5s ease-in-out;
      border-bottom: 0.1rem solid ${theme.colors.primary};
    }
  `}
`;

export const Icon = styled.div`
  ${({ theme }) => css`
    width: 3.5rem;
    height: 100%;
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    transition: 1s ease-in-out;
    background-color: ${theme.colors.grayIce};
  `}
`;

const IconSearch = styled(SearchAlt)`
  position: absolute;
  fill: url('#gradient');
  filter: drop-shadow(0 0.3rem 0.2rem ${({ theme }) => theme.colors.black});
`;
