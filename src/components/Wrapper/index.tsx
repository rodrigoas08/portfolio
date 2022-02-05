import * as S from "./styles";
import { Header, Footer } from "components";

type WrapperProps = {
    children: React.ReactChild
}

export const Wrapper = ({children}:WrapperProps) => {
  return (
    <S.Wrapper>
      <Header />
      {children}
      <Footer/>
    </S.Wrapper>
  );
};

export default Wrapper;
