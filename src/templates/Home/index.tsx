import * as S from './styles';
import routes from 'utils/routes';
import { Button } from 'components';
import { navigate } from '@reach/router';

export const Home = () => {
  return (
    <S.Content>
      <S.Title>
        Seu <span>computador estragou</span>? <br />
      </S.Title>
      <S.SubTitle>
        Então veio ao <span>lugar certo</span>
      </S.SubTitle>
      <S.Paragraph>
        Entre em contato agora mesmo por um de nossos canais
      </S.Paragraph>
      <Button rippling onClick={() => navigate(routes.works)}>
        Conheça meus serviços
      </Button>
    </S.Content>
  );
};

export default Home;
