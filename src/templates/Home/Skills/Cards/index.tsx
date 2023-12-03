import * as S from './styles';
import { ListSkillIcons } from 'interfaces/skillIcon';

const SkillCard = () => {
  return (
    <S.Wrapper>
      {ListSkillIcons.sort(() => Math.random() - 0.5).map((item) => {
        return (
          <S.Card
            key={crypto.randomUUID()}
            data-aos="zoom-in"
            data-aos-delay="50"
            data-aos-duration="2000"
            data-aos-easing="ease-in-out"
          >
            {item.icon}
            <h3>
              <strong>{item.title}</strong>
            </h3>
            <p>{item.description}</p>
          </S.Card>
        );
      })}
    </S.Wrapper>
  );
};

export default SkillCard;
