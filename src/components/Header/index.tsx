import * as S from "./styles";
import Logo from "components/Logo";

export type HeaderProps = {
  logo: string;
};

export const Header = () => {
  return <S.Wrapper><Logo  width="200px"/></S.Wrapper>;
};

export default Header;
