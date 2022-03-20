import * as S from './styles';
import routes from 'utils/routes';
import { Button } from 'components';
import { navigate } from '@reach/router';

export const Home = () => {
  return (
    <S.Content>
      <S.Article>
        <S.Title>
          Seu <span>computador ficou lento</span>
          <b>?</b> <br />
        </S.Title>
        <S.Title2>
          Não sabe mais <span>como resolver isso</span>?
        </S.Title2>
        <S.Title3>
          Então veio ao <span>lugar certo</span>.
        </S.Title3>
        <S.Paragraph>
          Conserto computador, notebook, faço montagens e muito mais.
        </S.Paragraph>
      </S.Article>
      <Button rippling onClick={() => navigate(routes.works)}>
        Conheça meus serviços
      </Button>
    </S.Content>
  );
};

export default Home;
