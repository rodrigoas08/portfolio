import * as S from "./styles";
import { Button } from "components";

export const Header = () => {
  return (
    <S.Wrapper>
      <S.ProfileWrapper />
      <S.NavWrapper>
        <Button secondary>home</Button>
        <Button secondary>portfólio</Button>
        <Button secondary>contato</Button>
      </S.NavWrapper>
    </S.Wrapper>
  );
};

export default Header;
