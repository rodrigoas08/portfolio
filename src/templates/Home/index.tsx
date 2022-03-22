import * as S from './styles';
import routes from 'utils/routes';
import { Button } from 'components';
import { navigate } from '@reach/router';
import Works from '../Works';
import Localization from './Localization';

const Home = () => {
  return (
    <>
      <S.Container>
        <S.Section>
          <S.Title>
            Rodrigo
            <br /> A. Sobral
          </S.Title>
          <S.Subtitle>Técnico em informática e desenvolvedor web</S.Subtitle>
        </S.Section>

        <S.Article>
          <S.Paragraph>
            Seu <span>computador ficou lento</span> e não sabe{' '}
            <span> como resolver</span>?
          </S.Paragraph>
          <S.Seta src={`${process.env.PUBLIC_URL}/img/seta.svg`} />
          <Button rippling onClick={() => navigate(routes.works)}>
            Conheça meus serviços
          </Button>
        </S.Article>
      </S.Container>
      <Localization />
      <Works />
    </>
  );
};

export default Home;
