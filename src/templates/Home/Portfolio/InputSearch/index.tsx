import * as S from './styles';
interface IInputSearchProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const InputSearch = ({ search, setSearch }: IInputSearchProps) => {
  return (
    <S.Wrapper>
      <S.Icon id="icon">
        <S.IconSearch size={15} title="Ícone de busca" />
      </S.Icon>
      <S.SearchInput
        id="search"
        type="text"
        value={search}
        autoComplete="off"
        placeholder="Buscar"
        onChange={(event) => setSearch(event.target.value)}
      />
    </S.Wrapper>
  );
};
export default InputSearch;
