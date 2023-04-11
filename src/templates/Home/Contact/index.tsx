import * as S from './styles';
import { Button, Input, Title } from 'components';
import { useForm } from 'react-hook-form';
import { FormState } from 'interfaces/form';
import emailjs from 'emailjs-com';
import { NameIcon, EmailIcon, SubjectIcon } from 'components/Icons';
import { openLinkInNewTab } from 'utils/functions';

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
              alert('Email enviado com sucesso');
            } else {
              alert('Falha ao enviar email');
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
              icon={<NameIcon />}
              fullWidth
              autoComplete="off"
              placeholder="Digite seu nome"
              register={() =>
                register('name', {
                  required: true
                })
              }
            />
            <Input
              icon={<EmailIcon />}
              fullWidth
              type="email"
              autoComplete="off"
              placeholder="Digite seu email"
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
              icon={<SubjectIcon />}
              fullWidth
              autoComplete="off"
              placeholder="Indique qual assunto"
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
          <S.CTAWrapper>
            <h1>Vamos conversar?</h1>
            <p>
              Você pode entrar em contato
              <br /> preenchendo o <strong>formulário</strong>
            </p>
            <h2>ou</h2>
            <p>
              Iniciar uma conversa por
              <br />
              <strong>whatsapp</strong>
              <br />
              <sup>(21) 98514-1580</sup>
            </p>
            <Button
              onClick={() =>
                openLinkInNewTab(
                  'https://api.whatsapp.com/send?phone=5521985141580&text=Ol%C3%A1%20gostaria%20de%20tirar%20d%C3%BAvidas%20sobre%20seus%20servi%C3%A7os'
                )
              }
            >
              CONVERSAR AGORA <S.ZapIcon />
            </Button>
          </S.CTAWrapper>
        </section>
      </S.Container>
    </S.Wrapper>
  );
};
export default Contact;
