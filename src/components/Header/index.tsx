import * as S from "./styles";
import { Button } from "components";

export const Header = () => {
  return (
    <S.Wrapper>
      <S.ProfileWrapper>
        <S.ImageProfile />
        {/* <S.Nome>Rodrigo Sobral</S.Nome> */}
      </S.ProfileWrapper>
      <S.NavWrapper>
        <Button secondary>home</Button>
        <Button secondary>portfólio</Button>
        <Button secondary>contact</Button>
      </S.NavWrapper>
    </S.Wrapper>
  );
};

export default Header;
