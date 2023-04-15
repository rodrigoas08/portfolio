import { openLinkInNewTab } from 'utils/functions';
import * as S from './styles';

type ProfileCardprops = {
  name: string;
  githubName: string;
  localization: string;
  icons: JSX.Element[];
  image: string;
  occupation: string;
  skills: string;
};

const ProfileCard = ({
  githubName,
  localization,
  name,
  icons,
  image,
  occupation,
  skills
}: ProfileCardprops) => {
  return (
    <S.AboutCard
      data-aos="zoom-in"
      data-aos-offset="2"
      data-aos-delay="50"
      data-aos-duration="1500"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
    >
      <S.TopInfo>
        <S.Image
          data-aos="flip-left"
          data-aos-offset="2"
          data-aos-delay="100"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          loading="lazy"
          src={image}
          alt="Eu segurando meu filho na praia"
        />
        <S.Title>{name}</S.Title>
        <S.Text>
          <a onClick={() => openLinkInNewTab('https://github.com/rodrigoas08')}>
            {githubName}
          </a>
        </S.Text>
        <S.Text>{localization}</S.Text>
        <S.Text>
          <b>{occupation}</b>
        </S.Text>
        <S.Text>
          <br />
          {skills}
        </S.Text>
        <S.DivIcons>{icons}</S.DivIcons>
      </S.TopInfo>
    </S.AboutCard>
  );
};
export default ProfileCard;
