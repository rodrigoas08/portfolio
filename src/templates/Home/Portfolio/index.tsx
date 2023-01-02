import Card from './Card';
import * as S from './styles';
import { CardList } from './mock';
import { Title } from 'components';
import InputSearch from './InputSearch';
import { useMemo, useState } from 'react';

const Portfolio = () => {
  const [search, setSearch] = useState('');

  const filteredPortfolios = useMemo(() => {
    const lowerSearch = search.toLowerCase();
    return CardList.filter((portfolio) =>
      portfolio.projectName.toLowerCase().includes(lowerSearch)
    );
  }, [search]);

  return (
    <S.Wrapper>
      <S.Container>
        <Title text="Portfólio" />
        <S.SubTitle>
          Aqui você vai encontrar alguns trabalhos feitos por mim.
        </S.SubTitle>
        <InputSearch search={search} setSearch={setSearch} />
        <S.Section>
          {filteredPortfolios.length > 0 ? (
            filteredPortfolios.map((card, index) => {
              return (
                <Card
                  key={index}
                  link={card.link}
                  repository={card.repository}
                  background={card.background}
                  title={card.projectName.toUpperCase()}
                />
              );
            })
          ) : (
            <S.SubTitle>
              Nenhum resultado encontrado para "{search.valueOf()}".
            </S.SubTitle>
          )}
        </S.Section>
      </S.Container>
    </S.Wrapper>
  );
};

export default Portfolio;
