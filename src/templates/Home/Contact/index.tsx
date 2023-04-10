import * as S from './styles';
import { Button, Input, Title } from 'components';
import { useForm } from 'react-hook-form';
import { FormState } from 'interfaces/form';
import emailjs from 'emailjs-com';

const Contact = () => {
  const { register, handleSubmit, formState } = useForm<FormState>({
    mode: 'onChange'
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function onSubmit(values: FormState, e: any) {
    e.preventDefault();
    try {
      emailjs
        .sendForm(
          import.meta.env.VITE_APP_SERVICE_ID,
          import.meta.env.VITE_APP_TEMPLATE_ID,
          e.target,
          import.meta.env.VITE_APP_USER_ID
        )
        .then(
          (result) => {
            if (result.status == 200) {
              alert('Email enviado com suecesso');
            } else {
              alert('Algo deu errado');
            }
          },
          (error) => {
            console.log(error.text);
          }
        )
        .finally(e.target.reset());
    } catch (error) {
      console.log(error);
      alert('Algo errado aconteceu');
    }
  }

  return (
    <S.Wrapper>
      <S.Container>
        <Title text="Contato" />
        <section>
          <S.Form onSubmit={handleSubmit(onSubmit)}>
            <Input
              fullWidth
              label="Nome *"
              autoComplete="off"
              placeholder="Digite seu nome"
              register={() =>
                register('name', {
                  required: true
                })
              }
            />
            <Input
              fullWidth
              label="Email *"
              type="email"
              autoComplete="off"
              placeholder="exemplo@email.com.br"
              register={() =>
                register('email', {
                  required: 'Required field',
                  pattern: {
                    value:
                      /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z]+\.[a-z]{2,3}\.?[a-z]{1,2}/,
                    message: 'Invalid E-mail'
                  }
                })
              }
            />
            <Input
              fullWidth
              label="Assunto *"
              autoComplete="off"
              placeholder="Digite sobre o que quer falar"
              register={() =>
                register('subject', {
                  required: true
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
              disabled={
                (!formState.isValid && !formState.isSubmitting) ||
                formState.isSubmitSuccessful
              }
            >
              {formState.isSubmitSuccessful
                ? 'Formulário enviado'
                : 'Enviar formulário'}
            </Button>
          </S.Form>
          <S.WhatsAppWrapper>Testando</S.WhatsAppWrapper>
        </section>
      </S.Container>
    </S.Wrapper>
  );
};
export default Contact;
