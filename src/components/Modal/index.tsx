import * as S from "./styles";
import { Button } from "components";
import { useEffect } from "react";
import { useForm, SubmitHandler, UseFormRegisterReturn } from "react-hook-form";

type ModalProps = {
  handleClose: () => void;
};

type Inputs = {
  name: string;
  email: string;
  subject: string;
};

export const Modal = ({ handleClose }: ModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (event) => console.log(event);

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
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <S.Label>
            Nome <span>*</span>
          </S.Label>
          <S.Input
            {...register("name", { required: true })}
            placeholder="Nome completo"
          />
          {errors.name && <S.Error>Este campo é obrigatório.</S.Error>}
          <S.Label>
            Email <span>*</span>
          </S.Label>
          <S.Input
            placeholder="seuemail@exemplo.com"
            {...register("email", {
              required: true,
              pattern:
                /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi,
            })}
          />
          {errors.email && <S.Error>Este campo é obrigatório.</S.Error>}
          <S.Label>
            Assunto <span>*</span>
          </S.Label>
          <S.Textarea
            {...register("subject", { required: true })}
            placeholder="Escreva aqui sua mensagem..."
          />
          {errors.subject && <S.Error>Este campo é obrigatório.</S.Error>}
          <S.FormAction>
            <Button type="submit">Enviar</Button>
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
