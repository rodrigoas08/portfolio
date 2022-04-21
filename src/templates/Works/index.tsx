import * as S from './styles';
import { ServiceList } from './mock';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Works = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Title>Principais Serviços</S.Title>
        <S.Section>
          {ServiceList.map((item, index) => {
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
                {index + 1} - {item.description}
              </S.Card>
            );
          })}
        </S.Section>
      </S.Container>
    </S.Wrapper>
  );
};

export default Works;
AOS.init();
AOS.refresh();
