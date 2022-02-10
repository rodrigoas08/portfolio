import * as S from "./styles";
import routes from "utils/routes";
import { Button } from "components";
import { navigate } from "@reach/router";

export const Header = () => {
  return (
    <S.Wrapper>
      <S.ProfileWrapper>
        <S.ImageProfile />
        {/* <S.Nome>Rodrigo Sobral</S.Nome> */}
      </S.ProfileWrapper>
      <S.NavWrapper>
        <Button secondary onClick={() => navigate(routes.home)}>
          home
        </Button>
        <Button secondary onClick={() => navigate(routes.portfolio)}>
          portfolio
        </Button>
        <Button secondary>contact</Button>
      </S.NavWrapper>
    </S.Wrapper>
  );
};

export default Header;
