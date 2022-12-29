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
      <SearchInput
        type="search"
        value={search}
        placeholder="Buscar"
        onChange={(event) => setSearch(event.target.value)}
      />
      <Icon size={15} title="Ícone de busca" />
    </Wrapper>
  );
};
export default InputSearch;

const Wrapper = styled.div`
  width: 35rem;
  margin-top: 2rem;
`;

const SearchInput = styled(Input)`
  ${({ theme }) => css`
    width: 100%;
    text-overflow: ellipsis;
    padding-right: ${theme.spacings.medium};
    transition: all 1s ease-in-out;
    border-top: 0.1rem solid ${theme.colors.primary};

    :focus {
      border-radius: 0;
      background: transparent;
      transition: all 1s ease-in-out;
      border: 0.1rem solid transparent;
      border-bottom: 0.1rem solid ${theme.colors.primary};
    }
  `}
`;

const Icon = styled(SearchAlt)`
  position: absolute;
  transform: translate(-150%, 50%);
`;
