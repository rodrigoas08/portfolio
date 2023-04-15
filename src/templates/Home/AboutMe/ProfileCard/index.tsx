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
    <S.AboutCard>
      <S.TopInfo>
        <S.Image
          data-aos="flip-left"
          data-aos-offset="2"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          loading="lazy"
          src={image}
          alt="Eu segurando meu filho na praia"
        />
        <h1>{name}</h1>
        <p>{githubName}</p>
        <p>{localization}</p>
        <b>{occupation}</b>
        <p>
          <br />
          {skills}
        </p>
        <S.DivIcons>{icons}</S.DivIcons>
      </S.TopInfo>
    </S.AboutCard>
  );
};
export default ProfileCard;
