import * as S from "./styles";
import { Button } from "components";
import { useEffect } from "react";

export type ModalProps = {
  showModal?: boolean;
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
      <Button onClick={() => showModal}>Teste</Button>
    </S.Wrapper>
  );
};
export default Modal;
