import * as S from './styles';
import { Button, Input } from 'components';
import { useForm } from 'react-hook-form';
import { FormState } from 'interfaces/form';

const Contact = () => {
  const { register, handleSubmit, formState } = useForm<FormState>({
    mode: 'onChange'
  });

  function onSubmit(values: FormState) {
    console.log(values);
  }

  return (
    <S.Wrapper>
      <S.Container>
        <S.Title>Contato</S.Title>
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <Input
            fullWidth
            label="Nome"
            placeholder="Seu nome"
            register={() =>
              register('name', {
                required: true
              })
            }
          />
          <Input
            fullWidth
            label="Email"
            type="email"
            placeholder="exemplo@email.com.br"
            register={() =>
              register('email', {
                required: 'Required field',
                pattern: {
                  message: 'Invalid E-mail',
                  value:
                    /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z]+\.[a-z]{2,3}\.?[a-z]{1,2}/
                }
              })
            }
          />
          <S.Textarea
            {...register('message', { required: true })}
            placeholder="Escreva aqui sua mensagem..."
          />
          <Button
            type="submit"
            fullWidth
            disabled={!formState.isValid && !formState.isSubmitting}
          >
            Enviar
          </Button>
        </S.Form>
      </S.Container>
    </S.Wrapper>
  );
};
export default Contact;
