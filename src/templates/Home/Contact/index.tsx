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
          <h1>Vamos conversar?</h1>
          <p>
            Você pode entrar em contato
            <br /> preenchendo o <b>formulário</b>
          </p>
          <p>ou</p>
          <p>
            Iniciar uma conversa por
            <br />
            <b>whatsapp</b>
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
            conversar agora <S.ZapIcon />
          </Button>
        </S.CTAWrapper>
        <S.Form
          onSubmit={handleSubmit(onSubmit)}
          style={{ position: 'relative' }}
        >
          <Input
            fullWidth
            icon={<NameIcon />}
            error={formState.errors}
            name="name"
            autoComplete="off"
            placeholder="Digite seu nome"
            register={() =>
              register('name', {
                required: 'Este campo é obrigatório'
              })
            }
          />
          <Input
            fullWidth
            icon={<EmailIcon />}
            error={formState.errors}
            type="email"
            name="email"
            autoComplete="off"
            placeholder="Digite seu email"
            register={() =>
              register('email', {
                required: 'Este campo é obrigatório',
                pattern: {
                  value:
                    /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z]+\.[a-z]{2,3}\.?[a-z]{1,2}/,
                  message: 'Digite um e-mail válido'
                }
              })
            }
          />
          <Input
            fullWidth
            icon={<SubjectIcon />}
            error={formState.errors}
            name="subject"
            autoComplete="off"
            placeholder="Digite um assunto"
            register={() =>
              register('subject', {
                required: 'Este campo é obrigatório'
              })
            }
          />
          <S.Textarea
            {...register('message', { required: true })}
            placeholder="Escreva aqui sobre o assunto..."
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
      </S.Content>
    </S.Wrapper>
  );
};
export default Contact;
