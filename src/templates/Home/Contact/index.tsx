import * as S from './styles';
import emailjs from 'emailjs-com';
import { useForm } from 'react-hook-form';
import { FormStateProps } from 'interfaces/form';
import { Button, Input, Title } from 'components';
import { openLinkInNewTab } from 'utils/functions';
import { SubjectIcon, NameIcon, EmailIcon } from '../Contact/Icons';

const Contact = () => {
  const { register, handleSubmit, formState } = useForm<FormStateProps>({
    mode: 'onChange'
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function onSubmit(values: FormStateProps, e: any) {
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
      formState.errors;
    }
  }

  return (
    <S.Wrapper>
      <Title text="Contato" />
      <S.Content
        data-aos="fade-up"
        data-aos-offset="2"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
      >
        <S.CTAWrapper>
          <S.SubTitle>VAMOS CONVERSAR?</S.SubTitle>
          <p>
            Você pode entrar em contato preenchendo o formulário ao lado ou
            iniciar uma conversa por whatsapp
          </p>
          <Button
            onClick={() =>
              openLinkInNewTab(
                'https://api.whatsapp.com/send?phone=5521985141580'
              )
            }
          >
            Conversar agora <S.ZapIcon />
          </Button>
        </S.CTAWrapper>
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <S.SubTitle>PREENCHA O FORMULÁRIO</S.SubTitle>
          <Input
            icon={<NameIcon />}
            error={formState.errors}
            name="name"
            label="Nome"
            autoComplete="off"
            placeholder="Digite seu nome"
            register={() =>
              register('name', {
                required: 'É obrigatório digitar seu nome.'
              })
            }
          />
          <Input
            icon={<EmailIcon />}
            error={formState.errors}
            type="email"
            name="email"
            label="E-mail"
            autoComplete="off"
            placeholder="Digite seu e-mail"
            register={() =>
              register('email', {
                required: 'É obrigatório digitar seu e-mail.',
                pattern: {
                  value:
                    /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z]+\.[a-z]{2,3}\.?[a-z]{1,2}/,
                  message: 'Você precisa digitar um e-mail válido.'
                }
              })
            }
          />
          <Input
            icon={<SubjectIcon />}
            error={formState.errors}
            name="subject"
            label="Assunto"
            autoComplete="off"
            placeholder="Digite um assunto"
            register={() =>
              register('subject', {
                required: 'É obrigatório digitar um assunto.'
              })
            }
          />
          <Input
            textArea
            error={formState.errors}
            name="message"
            label="Mensagem"
            placeholder="Digite aqui a mensagem"
            register={() =>
              register('message', {
                required: 'É obrigatório digitar uma mensagem.'
              })
            }
          />
          <Button
            type="submit"
            disabled={
              (!formState.isValid && !formState.isSubmitting) ||
              formState.isSubmitSuccessful
            }
          >
            Enviar
            <S.SendIcon />
          </Button>
        </S.Form>
      </S.Content>
    </S.Wrapper>
  );
};
export default Contact;
