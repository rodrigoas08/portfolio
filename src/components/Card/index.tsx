import * as S from './styles';
import CardModal from './Modal';
import { Button } from 'components';
import { useLayoutEffect, useState } from 'react';

type CardProps = {
  children: React.ReactChild;
};

const Card = ({ children }: CardProps) => {
  const [showCardModal, setShowCardModal] = useState(false);

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
        <S.Cardtext>{children}</S.Cardtext>
        <Button
          onClick={() => setShowCardModal(true)}
          onBlur={() => setShowCardModal(false)}
        >
          + Detalhes
        </Button>
      </S.Card>
    </>
  );
};
export default Card;
