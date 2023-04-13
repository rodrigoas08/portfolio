import AOS from 'aos';
import * as S from './styles';
import { Button } from 'components';
import { openLinkInNewTab } from 'utils/functions';
import ImageEmConstrucao from 'img/portfolios/em_construcao.jpg';
import { GitHubIconFilled, EyeIcon } from 'components/Icons';

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
    data-aos="fade-up"
    data-aos-offset="2"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    >
      <S.CardImage background={background ? background : ImageEmConstrucao} />
      <S.CardInfo>
        <S.CardTitle>{title ? title : 'EM BREVE'}</S.CardTitle>
        {(repository || link) && <S.HR />}
        <S.ButtonWrapper>
          {repository && (
            <Button secondary onClick={() => openLinkInNewTab(`${repository}`)}>
              <GitHubIconFilled /> Repositório
            </Button>
          )}
          {link && (
            <Button secondary onClick={() => openLinkInNewTab(`${link}`)}>
              Visitar <EyeIcon />
            </Button>
          )}
        </S.ButtonWrapper>
      </S.CardInfo>
    </S.Card>
  );
};
export default Card;
AOS.init();
AOS.refresh();
