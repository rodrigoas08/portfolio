import * as S from './styles';
import routes from 'utils/routes';
import { Button } from 'components';
import { navigate } from '@reach/router';

export const Home = () => {
  return (
    <S.Content>
      <S.Title>
        Seja muito bem vindo ao <br />
        <span>RSTECINFO</span>
      </S.Title>
      <S.Paragraph>
        I'm a web development student and microcomputer support technician
      </S.Paragraph>
      {/* <Button secondary onClick={() => navigate(routes.curriculum)}>
        Veja meu currículo
      </Button> */}
      <Button rippling onClick={() => navigate(routes.works)}>
        Conheça meus serviços
      </Button>
    </S.Content>
  );
};

export default Home;
