import * as S from "./styles";
import { Button } from "components";
import { useEffect } from "react";

type ModalProps = {
  handleClose: () => void;
};

export const Modal = ({ handleClose }: ModalProps) => {
  useEffect(() => {
    const handleEsc = ({ key }: KeyboardEvent) => {
      key === "Escape" && handleClose();
    };
    document.addEventListener("keyup", handleEsc);

    return () => document.removeEventListener("keyup", handleEsc);
  }, []);

  return (
    <S.Shadow>
      <S.Wrapper>
        <h1>Testando</h1>
        <Button onClick={handleClose}>Fechar</Button>
      </S.Wrapper>
    </S.Shadow>
  );
};
export default Modal;
