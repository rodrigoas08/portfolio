import { openLinkInNewTab } from 'utils/functions';
import * as S from './styles';

type ProfileCardprops = {
  name: string;
  githubName: string;
  localization: string;
  image: string;
  occupation: string;
  skills: string;
};

const ProfileCard = ({
  githubName,
  localization,
  name,
  image,
  occupation,
  skills
}: ProfileCardprops) => {
  return (
    <S.AboutCard
      data-aos="fade-right"
      data-aos-offset="2"
      data-aos-delay="50"
      data-aos-duration="2000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
    >
      <S.TopInfo>
        <S.Image
          loading="lazy"
          src={image}
          alt="Eu segurando meu filho na praia"
        />
        <S.Title>{name}</S.Title>
        <S.Text>
          <a href='#' onClick={() => openLinkInNewTab('https://github.com/rodrigoas08')}>
            {githubName}
          </a>
        </S.Text>
        <S.Text>{localization}</S.Text>
        <S.Text>
          <b>{occupation}</b>
        </S.Text>
        <S.Text>{skills}</S.Text>
      </S.TopInfo>
    </S.AboutCard>
  );
};
export default ProfileCard;
