import * as S from "./styles";
import { FaEnvelope, FaMapPin, FaMobileAlt } from "react-icons/fa";

export const Curriculum = () => {
  return (
    <S.Content>
      <S.Profile>
        <S.Header>
          <S.ImageProfile />
          <S.Title>rodrigo sobral</S.Title>
        </S.Header>
        <ul>
          <li>
            <FaMapPin /> Rio de Janeiro, Brasil
          </li>
          <li>
            <FaEnvelope /> sobral_rodrigo@yahoo.com.br
          </li>
          <li>
            <FaMobileAlt /> (21) 98514-1580
          </li>
        </ul>
        <S.Title>perfil</S.Title>
        <S.Paragraph>
          Analista de TI há mais de 8 anos com experiência na área de
          microinformática, prestando suporte presencial e remotamente em
          diferentes níveis incluindo diretoria e CEOs, solucionando problemas
          de softwares e hardwares.
          <br />
          Atualmente sou estagiário
          <b>
            <em> Desenvolvedor Front-end </em>
          </b>
          na área de desenvolvimento de software e não é por acaso, em meados
          dos anos 2000, eu criei um blog e queria muito ter um estilo próprio e
          estudei HTML e CSS mas acabei abandonando tudo e hoje tenho esta
          oportunidade onde estou buscando aprender novas tecnologias.
        </S.Paragraph>
      </S.Profile>
      <S.Experience>
        <S.Title>experiência profissional</S.Title>
        <ul>
          <li>
            <b>Estagiário</b> Desenvolvedor front-end |{" "}
            <b>Usabit (Nov 2021 - Atualmente)</b>
          </li>
          <li>
            Analista de TI Jr 2 | <b>Sonda Procwork (Ago 2012 - Abr 2020)</b>
          </li>
          <li>
            Auxiliar Industrial |{" "}
            <b>Rio de Janeiro Refrescos (Ago 2010 - Jul 2011)</b>
          </li>
        </ul>
        <S.Title>formação</S.Title>
        <ul>
          <li>
            Graduação Análise e Desenvolvimento de Sistemas | <b>Unicarioca (2008)</b>
          </li>
        </ul>
        <S.Title>extra curriculares</S.Title>
        <ul>
          <li>
            Lab. Java com testes, JSF, Design Patterns / Java para
            Desenvolvimento Web / Java Orientação a Objetos |{" "}
            <b>Caelum (2015)</b>
          </li>
          <li>
            Rede de Computadores / Montagem e Configuração de Computadores |{" "}
            <b>Senai (2012)</b>
          </li>
          <li>Inglês Básico | <b>CNA (2005)</b></li>
        </ul>
      </S.Experience>
    </S.Content>
  );
};

export default Curriculum;
