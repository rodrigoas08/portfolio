import { FC } from 'react';
import * as S from './styles';
import { Button } from 'components';

const Card: FC = ({ children }) => {
  return (
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
      <Button>+ Detalhes</Button>
    </S.Card>
  );
};
export default Card;
