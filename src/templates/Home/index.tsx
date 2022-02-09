import * as S from "./styles";
import { Wrapper } from "components";

export const Home = () => {
  return (
    <Wrapper>
      <S.Content>
      <S.Title>
        <span>hello,</span> i'm <br/>rodrigo sobral
      </S.Title>
      <S.Paragraph>I'm a 
web development student and microcomputer support technician</S.Paragraph>
      </S.Content>
    </Wrapper>
  );
};

export default Home;
