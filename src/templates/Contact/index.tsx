import * as S from './styles';
import { useEffect } from 'react';
import { Button } from 'components';
import { useForm } from 'react-hook-form';
import { FormState } from 'interfaces/form';

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormState>();

  async function onSubmit(values: FormState) {
    console.log(values);
  }

  useEffect(() => {
    handleSubmit;
  }, []);

  return (
    <S.Wrapper>
      <S.Container>
        <S.Title>Contato</S.Title>
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <S.Label htmlFor="name">
            Nome <span>*</span>
          </S.Label>
          <S.Input
            {...register('name', {
              required: true
            })}
            placeholder="Nome completo"
          />
          {errors.name && <S.Error>Este campo é obrigatório.</S.Error>}
          <S.Label htmlFor="email">
            Email <span>*</span>
          </S.Label>
          <S.Input
            placeholder="seuemail@exemplo.com"
            {...register('email', {
              required: true,
              pattern: {
                message: 'Insira um e-mail válido',
                value:
                  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi
              }
            })}
          />
          {errors.email && <S.Error>Este campo é obrigatório.</S.Error>}
          <S.Label>
            Assunto <span>*</span>
          </S.Label>
          <S.Textarea
            {...register('message', { required: true })}
            placeholder="Escreva aqui sua mensagem..."
          />
          {errors.message && <S.Error>Este campo é obrigatório.</S.Error>}
          <S.FormAction>
            <Button type="submit">Enviar</Button>
            <Button secondary type="button">
              Cancelar
            </Button>
          </S.FormAction>
        </S.Form>
      </S.Container>
    </S.Wrapper>
  );
};
export default Contact;
