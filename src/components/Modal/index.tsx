// import * as S from './styles';
// import { Button } from 'components';
// import { useForm } from 'react-hook-form';
// import { useEffect, useState } from 'react';
// import { FormStateProps } from 'interfaces/form';

// type ModalProps = {
//   handleClose: () => void;
// };

// const Modal = ({ handleClose }: ModalProps) => {
//   const { handleSubmit } = useForm<FormStateProps>({
//     mode: 'onSubmit'
//   });
//   const [modalSuccess, setModalSuccess] = useState(false);

//   async function onSubmit(values: FormStateProps) {
//     console.log(values);
//     setModalSuccess(true);
//   }

//   useEffect(() => {
//     const maxTime = 3000;
//     const timer = setTimeout(() => {
//       if (modalSuccess) handleClose();
//       return () => clearTimeout(timer);
//     }, maxTime);

//     const handleEsc = ({ key }: KeyboardEvent) => {
//       key === 'Escape' && handleClose();
//     };
//     document.addEventListener('keyup', handleEsc);

//     return () => document.removeEventListener('keyup', handleEsc);
//   }, []);

//   return (
//     <S.Shadow>
//       <S.Wrapper>
//         {modalSuccess ? (
//           <h1>Formulário enviado com sucesso</h1>
//         ) : (
//           <>
//             <S.Title>Formulário de contato</S.Title>
//             <S.Hr />
//             <S.Form onSubmit={handleSubmit(onSubmit)}>
//               {/* <S.Label htmlFor="name">
//                 Nome <span>*</span>
//               </S.Label>
//               <S.Input
//                 {...register('name', {
//                   required: true
//                 })}
//                 placeholder="Nome completo"
//               />
//               {errors.name && <S.Error>Este campo é obrigatório.</S.Error>}
//               <S.Label htmlFor="email">
//                 Email <span>*</span>
//               </S.Label>
//               <S.Input
//                 placeholder="seuemail@exemplo.com"
//                 {...register('email', {
//                   required: true,
//                   pattern: {
//                     message: 'Insira um e-mail válido',
//                     value:
//                       /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi
//                   }
//                 })}
//               />
//               {errors.email && <S.Error>Este campo é obrigatório.</S.Error>}
//               <S.Label>
//                 Assunto <span>*</span>
//               </S.Label>
//               <S.Textarea
//                 {...register('message', { required: true })}
//                 placeholder="Escreva aqui sua mensagem..."
//               />
//               {errors.message && <S.Error>Este campo é obrigatório.</S.Error>} */}
//               <S.FormAction>
//                 <Button type="submit">Enviar</Button>
//                 <Button secondary type="button" onClick={handleClose}>
//                   Cancelar
//                 </Button>
//               </S.FormAction>
//             </S.Form>
//           </>
//         )}
//       </S.Wrapper>
//     </S.Shadow>
//   );
// };
// export default Modal;
