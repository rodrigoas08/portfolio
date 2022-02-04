import * as S from "./styles";
import * as C from 'components'

export type HeaderProps = {
  logo: string;
};

export const Header = () => {
  return <S.Wrapper><C.Logo  width="200px"/></S.Wrapper>;
};

export default Header;
