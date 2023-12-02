import * as S from './styles';
import { FaEye, FaGithub } from 'react-icons/fa';
import { openLinkInNewTab } from 'utils/functions';

export type CardProps = {
  link?: string;
  title?: string;
  background?: string;
  repository?: string;
  description?: string;
};

const Card = ({
  title,
  background,
  link,
  repository,
  description
}: CardProps) => {
  return (
    <S.Card
      background={background}
      data-aos="zoom-in"
      data-aos-offset="2"
      data-aos-delay="50"
      data-aos-duration="2000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
    >
      <S.CardInfo>
        <S.CardHeader>
          <S.CardTitle>{title ? title : 'Em Breve'}</S.CardTitle>
          <S.IconWrapper>
            {link && (
              <FaEye size={22} onClick={() => openLinkInNewTab(`${link}`)} />
            )}
            {repository && (
              <FaGithub
                size={22}
                onClick={() => openLinkInNewTab(`${repository}`)}
              />
            )}
          </S.IconWrapper>
        </S.CardHeader>
        <S.CardDescription>{description}</S.CardDescription>
      </S.CardInfo>
    </S.Card>
  );
};
export default Card;
