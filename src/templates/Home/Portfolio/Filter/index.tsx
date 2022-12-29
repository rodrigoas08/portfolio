import * as S from './styles';

type IOption = typeof Portfolios[0];

export interface IFilterProps {
  active: boolean;
  filter: number | null;
  setFilter: React.Dispatch<React.SetStateAction<number | null>>;
}

const Portfolios = [
  {
    label: 'teste',
    id: 0
  },
  {
    label: 'teste',
    id: 1
  }
];

const Filter = ({ filter, setFilter }: IFilterProps) => {
  function filterSelect(option: IOption) {
    if (filter === option.id) return setFilter(null);
    return setFilter(option.id);
  }

  return (
    <div>
      {Portfolios.map((option) => (
        <S.Button
          active={filter === option.id}
          key={option.id}
          onClick={() => filterSelect(option)}
        >
          {option.label}
        </S.Button>
      ))}
    </div>
  );
};

export default Filter;
