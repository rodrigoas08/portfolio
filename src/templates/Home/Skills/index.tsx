import { Title } from 'components';
import * as S from './styles';
import {
  HtmlIcon,
  CssIcon,
  JSIcon,
  ReactIcon,
  TSIcon,
  GitIcon,
  VueIcon,
  VSCodeIcon,
  NpmIcon,
  VuetifyIcon
} from 'components/Icons';

const Skills = () => {
  return (
    <S.Wrapper>
      <Title text="Habilidades" />
      <S.SkillsCard>
        <S.Div>
          <HtmlIcon />
          <CssIcon />
          <JSIcon />
          <ReactIcon />
          <TSIcon />
          <VueIcon />
          <VuetifyIcon />
          <VSCodeIcon />
          <GitIcon />
          <NpmIcon />
        </S.Div>
      </S.SkillsCard>
    </S.Wrapper>
  );
};
export default Skills;
