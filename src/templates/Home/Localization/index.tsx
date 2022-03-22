import * as S from './styles';

export const Localization = () => {
  return (
    <S.Wrapper>
      <div>
        <S.Loc /> Localização: <br />
        Rio de Janeiro, RJ
      </div>
      <div>
        <S.Zap /> Tire dúvidas pelo WhatsApp: <br />
        (21) 98514-1580
      </div>
    </S.Wrapper>
  );
};
export default Localization;
