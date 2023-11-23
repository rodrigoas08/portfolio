import * as S from './styles';
import { FaEye, FaGithub } from 'react-icons/fa';
import { openLinkInNewTab } from 'utils/functions';
import ImageEmConstrucao from 'assets/portfolios/em_construcao.webp';

export type CardProps = {
  link?: string;
  title?: string;
  stack?: string | string[];
  background?: string;
  repository?: string;
  description?: string;
};

const Card = ({
  title,
  background,
  link,
  stack,
  repository,
  description
}: CardProps) => {
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
        <S.CardTitle>{title ? title : 'Em Breve'}</S.CardTitle>
        <S.IconWrapper>
          {link && (
            <FaEye size={18} onClick={() => openLinkInNewTab(`${link}`)} />
          )}
          {repository && (
            <FaGithub
              size={18}
              onClick={() => openLinkInNewTab(`${repository}`)}
            />
          )}
        </S.IconWrapper>
        <S.CardDescription>{description}</S.CardDescription>

        <S.WrapperStacks>
          <S.WrapperStack>
            <S.CardStack>{stack}</S.CardStack>
          </S.WrapperStack>
        </S.WrapperStacks>
      </S.CardInfo>
    </S.Card>
  );
};
export default Card;
