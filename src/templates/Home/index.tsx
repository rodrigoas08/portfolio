import * as S from "./styles";
import routes from "utils/routes";
import { Button } from "components";
import { navigate } from "@reach/router";

export const Home = () => {
  return (
    <S.Content>
      <S.Title>rodrigo sobral</S.Title>
      <S.Paragraph>
        I'm a web development student and microcomputer support technician
      </S.Paragraph>
      <Button onClick={() => navigate(routes.curriculum)}>
        Veja meu currículo
      </Button>
      <Button onClick={() => navigate(routes.portfolio)}>
        Veja meu portfólio
      </Button>
    </S.Content>
  );
};

export default Home;
