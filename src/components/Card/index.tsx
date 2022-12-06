import * as S from './styles';

export type CardProps = {
  link?: string;
  title?: string;
  background?: string;
};

const Card = ({ title, background, link }: CardProps) => {
  // useLayoutEffect(() => {
  //   showCardModal
  //     ? (document.body.style.overflowY = 'hidden')
  //     : (document.body.style.overflowY = 'scroll');
  // });

  return (
    <>
      <S.Card
        background={background}
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
      >
        <S.CardInfo>
          {link === '' ? (
            <S.CardTitle>{title}</S.CardTitle>
          ) : (
            <S.CardTitle>
              <a href={link} target="_blank" rel="noopener noreferrer">
                {title}
              </a>
            </S.CardTitle>
          )}
        </S.CardInfo>
      </S.Card>
    </>
  );
};
export default Card;
