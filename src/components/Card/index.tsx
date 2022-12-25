import * as S from './styles';
import { openLinkInNewTab } from 'utils/functions';
import { Button } from 'components';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

export type CardProps = {
  link?: string;
  title?: string;
  background?: string;
  repository?: string;
};

const Card = ({ title, background, link, repository }: CardProps) => {
  // useLayoutEffect(() => {
  //   showCardModal
  //     ? (document.body.style.overflowY = 'hidden')
  //     : (document.body.style.overflowY = 'scroll');
  // });

  return (
    <>
      <S.Card>
        <S.CardImage
          background={
            background
              ? background
              : 'https://wp.ufpel.edu.br/ccz/files/2016/03/em_construcao1-424x190.jpg'
          }
        />
        <S.CardInfo>
          <S.CardTitle>{title ? title : 'EM BREVE'}</S.CardTitle>
          <div>
            {repository && (
              <Button
                rippling
                onClick={() => openLinkInNewTab(`${repository}`)}
              >
                GitHub
              </Button>
            )}
            {link && (
              <Button rippling onClick={() => openLinkInNewTab(`${link}`)}>
                Site
              </Button>
            )}
          </div>
        </S.CardInfo>
      </S.Card>
    </>
  );
};
export default Card;
