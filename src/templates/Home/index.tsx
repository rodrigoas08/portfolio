import * as S from './styles';
import routes from 'utils/routes';
import { Button } from 'components';
import { navigate } from '@reach/router';

const Home = () => {
  return (
    <S.Container>
      <S.Section>
        <S.Title>Rodrigo Sobral</S.Title>
        <S.Subtitle>
          Técnico em informática e desenvolvedor front-end
        </S.Subtitle>
      </S.Section>

      <S.Article>
        <S.Paragraph>
          Seu <span>computador ficou lento</span> e não sabe{' '}
          <span> como resolver</span> ?
        </S.Paragraph>
        <S.Seta src={process.env.PUBLIC_URL + '/img/seta.svg'} />
        <Button rippling onClick={() => navigate(routes.works)}>
          Conheça meus serviços
        </Button>
      </S.Article>
    </S.Container>
  );
};

export default Home;
