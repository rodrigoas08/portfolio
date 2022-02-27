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
  });

  return (
    <S.Shadow>
      <S.Wrapper>
        <S.Title>Formulário de contato</S.Title>
        <S.Hr />
        <S.Form>
          <S.Label>
            Nome <span>*</span>
          </S.Label>
          <S.Input placeholder="Nome completo" />
          <S.Label>
            Email <span>*</span>
          </S.Label>
          <S.Input placeholder="seuemail@exemplo.com" />
          <S.Label>
            Assunto <span>*</span>
          </S.Label>
          <S.Textarea placeholder="Escreva aqui sua mensagem..." />
          <S.FormAction>
            <Button type="submit">
              Enviar
            </Button>
            <Button secondary type="button" onClick={handleClose}>
              Cancelar
            </Button>
          </S.FormAction>
        </S.Form>
      </S.Wrapper>
    </S.Shadow>
  );
};
export default Modal;
