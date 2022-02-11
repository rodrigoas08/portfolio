import { Button } from "components";
import { useEffect } from "react";
import * as S from "./styles";

export type ModalProps = {
  showModal?: false;
  setShowModal: () => void;
};

export const Modal = ({ showModal, setShowModal }: ModalProps) => {
  useEffect(() => {
    const handleEsc = ({ key }: KeyboardEvent) => {
      key === 'Escape' && showModal && setShowModal();
    };
    document.addEventListener('keyup', handleEsc);

    return () => document.removeEventListener('keyup', handleEsc);
  }, []);

  return (
    <S.Wrapper>
      <h1>Testando</h1>
      <Button onClick={() => setShowModal()}>Teste</Button>
    </S.Wrapper>
  );
};
export default Modal;
