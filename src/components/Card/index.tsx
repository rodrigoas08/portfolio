import * as S from './styles';
import CardModal from './Modal';
import { Button } from 'components';
import { FC, useState } from 'react';

const Card: FC = ({ children }) => {
  const [showCardModal, setShowCardModal] = useState(false);

  showCardModal
    ? (document.body.style.overflowY = 'hidden')
    : (document.body.style.overflowY = 'scroll');

  return (
    <>
      {showCardModal && (
        <CardModal handleClose={() => setShowCardModal(false)} />
      )}
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
        <Button onClick={() => setShowCardModal(true)}>+ Detalhes</Button>
      </S.Card>
    </>
  );
};
export default Card;
