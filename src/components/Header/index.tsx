import * as S from "./styles";
import { Button } from "components";

export const Header = () => {
  return (
    <S.Wrapper>
      <Button>home</Button>
      <Button>portfólio</Button>
      <Button>contato</Button>
    </S.Wrapper>
  );
};

export default Header;
