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
        <S.Title>Testando</S.Title>
        <S.Form>
        <label>Nome</label>
        <input></input>
        <label>Email</label>
        <input></input>
        <textarea />
        <button type="submit">Value</button>
        </S.Form>
        <Button onClick={handleClose}>Fechar</Button>
      </S.Wrapper>
    </S.Shadow>
  );
};
export default Modal;
