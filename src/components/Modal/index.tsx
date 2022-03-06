import * as S from "./styles";
import { Button } from "components";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

type ModalProps = {
  handleClose: () => void;
};

type FormState = {
  name: string;
  email: string;
  subject: string;
};

export const Modal = ({ handleClose }: ModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormState>();
  // const onSubmit: SubmitHandler<FormState> = (data) => console.log(data);
  const [modalSuccess, setModalSuccess] = useState(false);

  async function onSubmit(values: FormState) {
    console.log(values);
    setModalSuccess(true);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      if (modalSuccess) handleClose();
      return () => clearTimeout(timer);
    }, 3000);

    const handleEsc = ({ key }: KeyboardEvent) => {
      key === "Escape" && handleClose();
    };
    document.addEventListener("keyup", handleEsc);

    return () => document.removeEventListener("keyup", handleEsc);
  });

  return (
    <S.Shadow>
      <S.Wrapper>
        {modalSuccess ? (
          <h1>Formulário enviado com sucesso</h1>
        ) : (
          <>
            <S.Title>Formulário de contato</S.Title>
            <S.Hr />
            <S.Form onSubmit={handleSubmit(onSubmit)}>
              <S.Label htmlFor="name">
                Nome <span>*</span>
              </S.Label>
              <S.Input
                {...register("name", {
                  required: true,
                })}
                placeholder="Nome completo"
              />
              {errors.name && <S.Error>Este campo é obrigatório.</S.Error>}
              <S.Label htmlFor="email">
                Email <span>*</span>
              </S.Label>
              <S.Input
                placeholder="seuemail@exemplo.com"
                {...register("email", {
                  required: true,
                  pattern: {
                    message: "Insira um e-mail válido",
                    value:
                      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi,
                  },
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
          </>
        )}
      </S.Wrapper>
    </S.Shadow>
  );
};
export default Modal;
