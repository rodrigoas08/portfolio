import * as S from './styles';
import { Button } from 'components';
import { openLinkInNewTab } from 'utils/functions';
import ImageEmConstrucao from 'img/portfolios/em_construcao.jpg';
import { FaEye, FaGithub } from 'react-icons/fa';

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
    <S.Card
      data-aos="zoom-in"
      data-aos-offset="2"
      data-aos-delay="50"
      data-aos-duration="2000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
    >
      <S.CardImage background={background ? background : ImageEmConstrucao} />
      <S.CardInfo>
        <S.CardTitle>{title ? title : 'EM BREVE'}</S.CardTitle>
        <S.ButtonWrapper>
          {repository && (
            <Button secondary onClick={() => openLinkInNewTab(`${repository}`)}>
              <FaGithub /> Repositório
            </Button>
          )}
          {link && (
            <Button secondary onClick={() => openLinkInNewTab(`${link}`)}>
              Visitar <FaEye />
            </Button>
          )}
        </S.ButtonWrapper>
      </S.CardInfo>
    </S.Card>
  );
};
export default Card;
