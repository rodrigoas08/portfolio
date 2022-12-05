import * as S from './styles';
import CardModal from './Modal';
// import { Button } from 'components';
import { useLayoutEffect, useState } from 'react';

type CardProps = {
  title: string;
};

const Card = ({ title }: CardProps) => {
  const [showCardModal] = useState(false);

  useLayoutEffect(() => {
    showCardModal
      ? (document.body.style.overflowY = 'hidden')
      : (document.body.style.overflowY = 'scroll');
  });

  return (
    <>
      {showCardModal && <CardModal />}
      <S.Card
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
      >
        <S.CardInfo>
          <S.Cardtext>
            <a href="/img/portfolios/ecbporto.png" target="_blank">
              {title}
            </a>
          </S.Cardtext>
          {/* <Button
          onClick={() => setShowCardModal(true)}
          onBlur={() => setShowCardModal(false)}
          >
          + Detalhes
        </Button> */}
        </S.CardInfo>
      </S.Card>
    </>
  );
};
export default Card;
