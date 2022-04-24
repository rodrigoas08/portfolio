import * as S from './styles';

type CardModalProp = {
  handleClose?: () => void;
};

const CardModal = ({ handleClose }: CardModalProp) => {
  return (
    <S.BoxShadow>
      <S.BoxModal>
        <header>
          <button onClick={handleClose}>fechar</button>
        </header>
        <h1></h1>
        <div></div>
      </S.BoxModal>
    </S.BoxShadow>
  );
};
export default CardModal;
