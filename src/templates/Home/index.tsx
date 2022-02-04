import * as S from "./styles";
import { Header } from "components";

export const Home = () => {
  return (
    <S.Wrapper>
      <Header />
      <S.Title>
        rodrigo
        <br />
        sobral
      </S.Title>
      <S.Paragraph>designing the future!</S.Paragraph>
    </S.Wrapper>
  );
};

export default Home;
