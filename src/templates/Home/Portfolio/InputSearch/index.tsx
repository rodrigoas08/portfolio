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
  width: 30rem;
  margin-top: 2rem;
`;

const SearchInput = styled(Input)`
  ${({ theme }) => css`
    width: 100%;
    border-radius: 0;
    text-overflow: ellipsis;
    transition: all 1.5s ease-in-out;
    background: rgba(255, 255, 255, 0.1);
    padding-right: ${theme.spacings.medium};

    :focus {
      background: transparent;
      border: 0.1rem solid transparent;
      transition: all 1.5s ease-in-out;
      border-bottom: 0.1rem solid ${theme.colors.primary};
    }
  `}
`;

const Icon = styled(SearchAlt)`
  position: absolute;
  transform: translate(-150%, 50%);
`;
