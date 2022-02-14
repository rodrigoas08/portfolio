import * as S from "./styles";

export const Portfolio = () => {
  return (
    <S.Content>
      <S.Polaroid>
        <img src="./img/post1.jpg" />
        <S.Container>
          <p>Texto da foto</p>
        </S.Container>
      </S.Polaroid>
      <h1>texto</h1>
    </S.Content>
  );
};

export default Portfolio;
