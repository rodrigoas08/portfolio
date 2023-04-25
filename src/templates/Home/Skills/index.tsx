import * as S from './styles';
import SkillCard from './Cards';
import { Title } from 'components';

const Skills = () => {
  return (
    <S.Wrapper>
      <Title text="Habilidades" />
      <S.SkillsContent>
        <S.Subtitle>
          Conheça algumas das tecnologias e ferramentas que uso nos projetos:
        </S.Subtitle>
        <SkillCard />
      </S.SkillsContent>
    </S.Wrapper>
  );
};
export default Skills;

