import * as S from './styles';

export const Works = () => {
  return (
    <S.Content>
      <div>
        <S.Title>Principais serviços</S.Title>
        <S.Icon width="30px" height="30px" src={`${process.env.PUBLIC_URL}/img/services.svg`} />
      </div>
      <S.Ul>
        <S.Li>
          Serviço de consultoria para montar seu computador incluindo orçamento
          e escolha de peças.
        </S.Li>

        <S.Li>
          Montagem e Manutenção preventiva aumentando a vida útil do seu
          computador (Limpeza completa e troca de pasta térmica).
        </S.Li>

        <S.Li>Cable Management (Organização de cabos no gabinete)</S.Li>

        <S.Li>Atendimento em domicílio ou remoto.</S.Li>

        <S.Li>Atendimento em domicílio ou remoto.</S.Li>
      </S.Ul>
    </S.Content>
  );
};

export default Works;
